import styles from "./report-for-teacher.module.css";

/* eslint-disable-next-line */
export interface ReportForTeacherProps {}

export function ReportForTeacher(props: ReportForTeacherProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to ReportForTeacher!</h1>
    </div>
  );
}

export default ReportForTeacher;
