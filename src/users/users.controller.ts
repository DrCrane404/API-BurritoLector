import { Controller, Get, Query, UseGuards, Request, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('affinity')
    @UseGuards(AuthGuard)
    getAffinity(@Request() req: any, @Param('id', ParseIntPipe) otherUserId: number) {
        const currentUserId = req.user.id;
        return this.usersService.getAffinity(currentUserId, otherUserId);
    }
}
