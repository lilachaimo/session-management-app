// src/app.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityMiddleware } from './middlewares/activity.middleware';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { RedisModule } from './modules/redis.module';
import { RedisConfigService } from './config/redis-config.service'; // Import the RedisConfigService

@Module({
  imports: [RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply the activity tracking middleware to all routes
    //consumer.apply(ActivityMiddleware).forRoutes('*');
  }
}
