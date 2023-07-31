
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class ActivityMiddleware implements NestMiddleware {
  private activityTimestamps: { [sessionId: string]: number } = {}; // Keep track of user activity timestamps

  constructor(@InjectQueue('user-activity') private readonly userActivityQueue: Queue) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const sessionId = 123; // Now req.session should be accessible
    const currentTime = Date.now();

    // If this is the first request for this session, initialize the activity timestamp
    if (!this.activityTimestamps[sessionId]) {
      this.activityTimestamps[sessionId] = currentTime;
    }

    const lastActivityTime = this.activityTimestamps[sessionId];
    const timeSinceLastActivity = currentTime - lastActivityTime;

    // If the user has been active for one hour (3600000 milliseconds), block the user for 5 minutes
    if (timeSinceLastActivity >= 3600000) {
      // Put the job in the queue to unblock the user after 5 minutes (300000 milliseconds)
      await this.userActivityQueue.add('unblockUser', { sessionId }, { delay: 300000 });
      return res.status(429).json({ message: 'User is blocked for 5 minutes.' });
    }

    // Update the activity timestamp for this session
    this.activityTimestamps[sessionId] = currentTime;

    next();
  }
}
