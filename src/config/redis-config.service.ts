// src/config/redis-config.service.ts
import { Injectable } from '@nestjs/common';
import { BullModuleOptions, SharedBullConfigurationFactory } from '@nestjs/bull';

@Injectable()
export class RedisConfigService implements SharedBullConfigurationFactory {
  createSharedConfiguration(): BullModuleOptions {
    return {
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT, 10) || 6379,
        // Add any additional Redis options if needed
        // For example, password: process.env.REDIS_PASSWORD || undefined,
      },
    };
  }
}
