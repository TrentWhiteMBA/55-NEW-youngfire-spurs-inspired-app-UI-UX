export interface Lesson {
  id: string;
  title: string;
  teachingDate?: string;
  facilitator?: string;
  description?: string;
  [key: string]: any;
}

export interface LessonAttachment {
  id?: string;
  title?: string;
  name?: string;
  url: string;
  size?: string;
  type?: string;
  [key: string]: any;
}

export interface DiscipleshipLesson {
  id: string;
  seriesTitle?: string;
  lessonTitle: string;
  title?: string;
  dateOrSeason?: string;
  status?: string;
  primaryPassage?: string;
  bookId?: string;
  chapter?: number;
  teachers?: string;
  theme?: string;
  summary?: string;
  keyPoints?: string[];
  selfReflectionAudit?: string[];
  discussionQuestions?: string[];
  questions?: string[];
  challenge?: string;
  attachments?: LessonAttachment[];
  [key: string]: any;
}

export type MinistryLesson = DiscipleshipLesson;

export interface IntercessionRequest {
  id: string;
  name?: string;
  cause?: string;
  date?: string;
  status?: string;
  [key: string]: any;
}
