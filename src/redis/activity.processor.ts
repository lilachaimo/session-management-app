// src/processors/activity.processor.ts
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('user-activity')
export class ActivityProcessor {
  @Process('blockUser')
  async blockUser(job: Job<{ sessionId: string }>) {
    const { sessionId } = job.data;
    // Here, you would implement the logic to block the user with the given sessionId for 5 minutes.
    // For demonstration purposes, we will simply log the blocking event.
    console.log(`Blocking user with sessionId: ${sessionId}`);
  }
}
