import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@modules/user/user.service';
import { FindOneOptions } from 'typeorm';
import { User } from '@modules/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtTokenService: JwtService,
  ) {}

  async validateUserCredentials(
    username: FindOneOptions<User>,
    password: string,
  ): Promise<any> {
    const user = await this.usersService.getByUsername(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
      user,
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
