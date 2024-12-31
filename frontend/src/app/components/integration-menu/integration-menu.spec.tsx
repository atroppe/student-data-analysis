import { render } from "@testing-library/react";

import IntegrationMenu from "./integration-menu";

const integrationOptions = [
  {
    text: "Asana ticket",
    img: "src/assets/icons/Asana-32.png",
    icon: undefined,
    errorStyle: false,
  },
  {
    text: "Figma file",
    img: "src/assets/icons/Figma-24.png",
  },
  {
    text: "Linear ticket",
    img: "src/assets/icons/Linear-32.png",
  },
  {
    text: "Miro board",
    img: "src/assets/icons/Miro-32.png",
  },
  {
    text: "Notion page",
    img: "src/assets/icons/Notion-32.png",
  },
];

describe("IntegrationMenu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <IntegrationMenu
        options={integrationOptions}
        onOptionClick={(option) => {
          return option;
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
