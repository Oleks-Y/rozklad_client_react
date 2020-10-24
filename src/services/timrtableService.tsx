import { restApiUrl } from "../shared/urls";
import { LessonWithSubject } from "../models/LessonWithSubject";

class TimetableService {
  static async getTimeTable(studentId: string): Promise<LessonWithSubject[]> {
    const response = await fetch(
      `${restApiUrl}/student/${studentId}/timetable`
    );
    return (await response.json()) as LessonWithSubject[];
  }
  // static getTimeTable(studentId: string): LessonWithSubject[] {}
}

export default TimetableService;
