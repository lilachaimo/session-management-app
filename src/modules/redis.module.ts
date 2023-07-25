// src/modules/redis.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { RedisConfigService } from '../config/redis-config.service';
import { ActivityProcessor } from '../processors/activity.processor';
import { ActivityMiddleware } from '../middlewares/activity.middleware'; // Import the ActivityMiddleware

@Module({
  imports: [
    BullModule.forRootAsync({
      useClass: RedisConfigService,
    }),
    BullModule.registerQueue({ name: 'user-activity' }),
  ],
  providers: [ActivityProcessor, RedisConfigService, ActivityMiddleware], // Include the ActivityMiddleware as a provider
})
export class RedisModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply the activity tracking middleware to all routes
    consumer.apply(ActivityMiddleware).forRoutes('*');
  }
}
