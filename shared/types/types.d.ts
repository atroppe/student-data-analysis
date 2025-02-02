export interface GradedCategories {
  key?: string;
  highestScore?: number;
  lowestScore?: number;
  averageScore?: number;
}

export interface StudentData {
  Basic_Arithmetic: number;
  Geometry_Understanding: number;
  Word_Problems: number;
  Advanced_Math_Concepts: number;
  Vocabulary_Knowledge: number;
  Passage_Understanding: number;
  Inferential_Thinking: number;
  Teamwork_Ability: number;
  Communication_Skills: number;
  Emotional_Recognition: number;
  Focus_Levels: number;
  Frequent_Interruptions: number;
  Consistent_Assignment_Completion: number;
  Attendance_Rate: number;
  Participation_Score: number;
  Sleep_Hours_Per_Night: number;
  Stress_Level: number;
  Tutoring_Sessions_Per_Week: number;
  Parental_Involvement: number;
}

export interface Threshold {
  min: number;
  max: number;
}

export interface StudentDataThresholds {
  academic: {
    Basic_Arithmetic: Threshold;
    Geometry_Understanding: Threshold;
    Word_Problems: Threshold;
    Advanced_Math_Concepts: Threshold;
    Vocabulary_Knowledge: Threshold;
    Passage_Understanding: Threshold;
    Inferential_Thinking: Threshold;
  };
  socialEmotional: {
    Teamwork_Ability: Threshold;
    Communication_Skills: Threshold;
    Emotional_Recognition: Threshold;
  };
  behavioral: {
    Focus_Levels: Threshold;
    Frequent_Interruptions: Threshold;
    Consistent_Assignment_Completion: Threshold;
  };
  attendanceParticipation: {
    Attendance_Rate: Threshold;
    Participation_Score: Threshold; // add study hours
  };
  environmental: {
    Sleep_Hours_Per_Night: Threshold;
    Stress_Level: Threshold;
    Tutoring_Sessions_Per_Week: Threshold;
    Parental_Involvement: Threshold;
  };
}

export interface Flags {
  [category: string]: string[];
}

export interface ExtendedStudentData extends StudentData {
  Student_ID: string;
  [key: string]: any; // Allow any additional fields
}

export interface AreasOfConcern {
  metrics: string[];
  score: number;
  averageScore: number;
}

export enum Category {
  Academic = "Academic",
  SocialEmotional = "SocialEmotional",
  Behavioral = "Behavioral",
  AttendanceParticipation = "AttendanceParticipation",
  Environmental = "Environmental",
}

export enum CategoryDisplayNames {
  Academic = "Academic",
  socialEmotional = "Social and Emotional",
  Behavioral = "Behavioral",
  AttendanceParticipation = "Attendance and Participation",
  Environmental = "Environmental",
}

export enum Messages {
  Academic = "These test scores indicate a lower than average grasp of the academic content.",
  socialEmotional = "These metrics could indicate a risk of Autism Spectrum Disorder.",
  Behavioral = "These metrics could indicate a risk of ADHD.",
  AttendanceParticipation = "The student's engagement is not as high as it should be.'",
  Environmental = "There are some risk factors in the student's environment that could be impacting their success.",
}

export interface FlagsWithInsights {
  category: Category;
  message: string;
  areasOfConcern: string[];
}
