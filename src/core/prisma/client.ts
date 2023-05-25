import { PrismaClient } from '@prisma/client'

export class Client {
  static prismaClient: PrismaClient = new PrismaClient()

  static getPrismaClient(): PrismaClient {
    return this.prismaClient
  }
}
