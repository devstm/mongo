import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { verifyToken } from '../utils/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    if (!token) return false;
    const { userId }: any = await verifyToken(token);
    if (userId) {
      request.userId = userId;
      return true;
    }
    return false;
  }
}