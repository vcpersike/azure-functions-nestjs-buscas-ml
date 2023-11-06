import { Module } from '@nestjs/common';
import { AzureFunctionController } from './azure-function/azure-function.controller';

@Module({
  controllers: [AzureFunctionController],
})
export class AppModule {}
