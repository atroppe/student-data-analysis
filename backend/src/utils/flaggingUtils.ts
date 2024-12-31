import { log } from "node:console";
import {
  ExtendedStudentData,
  Flags,
  StudentData,
  Threshold,
} from "../interfaces/interfaces";

const thresholds: Record<string, Record<string, Threshold>> = {
  academic: {
    Basic_Arithmetic: { min: 74.16, max: 100 },
    Geometry_Understanding: { min: 71.07, max: 100 },
    Word_Problems: { min: 70.15, max: 100 },
    Advanced_Math_Concepts: { min: 66.65, max: 100 },
    Vocabulary_Knowledge: { min: 68.19, max: 98.27 },
    Passage_Understanding: { min: 68.48, max: 100 },
    Inferential_Thinking: { min: 70.98, max: 100 },
  },
  socialEmotional: {
    Teamwork_Ability: { min: 72.29, max: 100 },
    Communication_Skills: { min: 72.37, max: 100 },
    Emotional_Recognition: { min: 71.23, max: 100 },
  },
  behavioral: {
    Focus_Levels: { min: 59.5, max: 97.73 },
    Frequent_Interruptions: { min: 1.6, max: 72.09 }, // Lower is better
    Consistent_Assignment_Completion: { min: 74.74, max: 100 },
  },
  attendanceParticipation: {
    Attendance_Rate: { min: 89.2, max: 99.92 },
    Participation_Score: { min: 69.66, max: 100 },
  },
  environmental: {
    Sleep_Hours_Per_Night: { min: 6.93, max: 10 },
    Stress_Level: { min: 1, max: 4.93 }, // Lower is better
    Tutoring_Sessions_Per_Week: { min: 0.9, max: 5 },
    Parental_Involvement: { min: 5.54, max: 10 },
  },
};

export const formatKeyToDisplayName = (key: string): string => {
  // Replace underscores with spaces and capitalize each word
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};

export const generateFlags = (studentData: ExtendedStudentData): Flags => {
  const flags: Flags = {};

  for (const category in thresholds) {
    flags[category] = [];

    // Iterate over all the metrics in the current category
    for (const metric in thresholds[category]) {
      const { min, max } = thresholds[category][metric];
      const value = studentData[metric as keyof ExtendedStudentData]; // Access the student's data field
      console.log(value);

      if (!isNaN(parseFloat(value))) {
        if (metric === "Frequent_Interruptions" || metric === "Stress_Level") {
          if (value > max) {
            flags[category].push(
              `${formatKeyToDisplayName(metric)} is higher than average.`
            );
          }
        } else if (value < min || value > max) {
          flags[category].push(
            `${formatKeyToDisplayName(metric)} is below average.`
          );
        }
      }
    }

    // Remove empty categories from the flags
    if (flags[category].length === 0) {
      delete flags[category];
    }
  }

  return flags;
};
