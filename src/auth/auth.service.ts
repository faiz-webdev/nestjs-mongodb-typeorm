import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

import { UserService } from '../shared/user.service';
import { Payload } from '../types/payload';
import User from 'src/entities/User';
import UserEntity from 'src/entities/User';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' });
  }

  async validateUser(payload: Payload): Promise<UserEntity> {
    return await this.userService.findByUserName(payload.username);
  }
}
