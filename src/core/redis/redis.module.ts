import { DynamicModule } from '@nestjs/common'
import { RedisModule as IoRedis } from '@nestjs-modules/ioredis'
import { ConfigService } from '@nestjs/config'

export const RedisModule: DynamicModule = IoRedis.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    config: { url: configService.get<string>('REDIS_URL') }
  })
})
