// import later

import fs from "fs";
import path from "path";

export const fileExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};

export const getCsvFilePath = (fileName: string): string => {
  return path.join(__dirname, "..", "data", fileName);
};
