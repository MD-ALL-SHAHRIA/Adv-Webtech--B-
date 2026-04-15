import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService)) 
    private enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) { 
    return { message: `Notification sent to ${studentName}`, details: message }; 
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) { 
    const result = this.enrollmentService.getEnrollments(); 
    return {
      message: `Checked enrollment for ${studentName} in course ${courseId}`,
      status: result,
    };
  }
}