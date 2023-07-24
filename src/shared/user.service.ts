import {
  HttpException,
  HttpStatus,
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

import { LoginDTO, RegisterDTO } from '../auth/auth.dto';
import { Repository } from 'typeorm';
import UserEntity from '../entities/User';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  // user register
  async create(userDTO: RegisterDTO): Promise<UserEntity> {
    try {
      const { username, password } = userDTO;
      const user = await this.userRepo.findOne({ username });
      if (user) {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
      }
      const newUser = new UserEntity();
      newUser.username = username;
      newUser.password = password;
      newUser.hashPassword();
      /*const errors = await validate(newUser);
    if(errors && errors.length > 0){
      throw new BadRequestException(errors);
    } */
      return await this.userRepo.save(newUser);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async findByUserName(username: string): Promise<UserEntity> {
    try {
      const user = await this.userRepo.findOne({ username });
      if (user) {
        throw new HttpException(
          'User does not exist in system',
          HttpStatus.UNAUTHORIZED,
        );
      }
      return user;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }

  async findByLogin(userDTO: LoginDTO) {
    const { username, password } = userDTO;
    const user = await this.userRepo.findOne({ username });
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  sanitizeUser(user: UserEntity) {
    const obj = { ...user };
    delete obj['password'];
    return obj;
  }
}
