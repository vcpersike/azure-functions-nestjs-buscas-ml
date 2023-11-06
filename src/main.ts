import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import fastify from 'fastify';

const fastifyApp = fastify({});
const adapter = new FastifyAdapter(fastifyApp);

async function createNestApp(context: any, req: any): Promise<any> {
  const app = await NestFactory.create(AppModule, adapter);
  await app.init();

  // Ajustes específicos para o Fastify
  await adapter.getInstance().ready();
  await adapter.getInstance().inject(req);
}

export default async function (context: any, req: any): Promise<void> {
  await createNestApp(context, req);
}
