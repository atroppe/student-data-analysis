import styles from "./report-for-parent.module.css";

/* eslint-disable-next-line */
export interface ReportForParentProps {}

export function ReportForParent(props: ReportForParentProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to ReportForParent!</h1>
    </div>
  );
}

export default ReportForParent;
