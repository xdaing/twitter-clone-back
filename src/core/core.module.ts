import { Module, Global } from '@nestjs/common'
import { ConfigModule } from './config/config.module'
import { PrismaModule } from './prisma/prisma.module'
import { RedisModule } from './redis/redis.module'
import { JwtModule } from './jwt/jwt.module'

@Global()
@Module({
  imports: [ConfigModule, PrismaModule, RedisModule, JwtModule],
  exports: [ConfigModule, PrismaModule, RedisModule, JwtModule]
})
export class CoreModule {}
