import { NestFactory, HttpAdapterHost } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { TransformInterceptor } from '@/interceptors/transform.interceptor'
import { AllExceptionsFilter } from '@/filters/all.exception.filter'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const httpAdapterHost = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost))
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(3000)
}

bootstrap()
