import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class JwtGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = request.headers.authorization
    return true
  }
}
