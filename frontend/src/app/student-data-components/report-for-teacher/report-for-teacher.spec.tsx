import { render } from "@testing-library/react";

import ReportForTeacher from "./report-for-teacher";

describe("ReportForTeacher", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ReportForTeacher />);
    expect(baseElement).toBeTruthy();
  });
});
