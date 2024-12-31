import { render } from "@testing-library/react";

import ReportForParent from "./report-for-parent";

describe("ReportForParent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ReportForParent />);
    expect(baseElement).toBeTruthy();
  });
});
