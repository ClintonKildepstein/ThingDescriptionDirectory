
import { Get, Controller, Request, Render, Post, UseGuards, Header } from '@nestjs/common';
import * as dt from './views/directorything.json';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  root() {
    return dt;
  }

  @Get('app')
  @Render('index')
  getTD() { return { mess: "" }; }

  @Get('auth')
  @Render('login')
  getAuth() { return { mess:""};}


  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}



