import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // frontend runs on a different port/origin

  const port = 3001; // hardcoded, ignoring process.env.PORT for now
  await app.listen(port);

  console.log(`🚀 Wabot running on http://localhost:${port}`);
}

void bootstrap();