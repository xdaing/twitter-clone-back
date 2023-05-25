import { DynamicModule } from '@nestjs/common'
import { JwtModule as Jwt } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

export const JwtModule: DynamicModule = Jwt.registerAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    secret: configService.get<string>('TOKEN_SECRET')
  })
})
