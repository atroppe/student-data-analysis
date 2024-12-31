import styles from "./integration-input.module.css";
import React, { useState } from "react";
import { Chip } from "@mui/material";
import LinkInput from "../link-input/link-input";
import IntegrationLink from "../integration-link/integration-link";
import ChangeMenu from "../change-menu/change-menu";
import IntegrationMenu, { Option } from "../integration-menu/integration-menu";

/* eslint-disable-next-line */
export interface IntegrationInputProps {}

export function IntegrationInput(props: IntegrationInputProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
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

  const [linkInputOption, setLinkInputOption] = useState<null | Option>(null);
  const [children, setChildren] = useState<Option[]>([]);
  const addChild = () => {
    if (!linkInputOption) return;
    setChildren([...children, { ...linkInputOption }]);
  };
  const handleOptionClick = (newValue: Option): Option => {
    handleClose();
    setLinkInputOption(newValue);
    return newValue;
  };
  const handleClickLink = () => {
    setLinkInputOption(null);
    addChild();
  };

  const [showChangeMenu, setShowChangeMenu] = useState(false);
  const handleMouseOver = (isSet: boolean) => {
    setShowChangeMenu(isSet);
  };

  return (
    <div className={styles["integration-input"]}>
      <div className={styles["integration-input__heading"]}>Integrations</div>
      <div>
        {/* show after linking  */}
        {children.map((child, index) => (
          <div
            className={styles["integration-input__integration-link"]}
            key={index}
            onMouseEnter={() => handleMouseOver(true)}
            onMouseLeave={() => handleMouseOver(false)}
          >
            <IntegrationLink option={child} />
            <Chip
              label="In Progress"
              color="success"
              size="medium"
              sx={{
                ml: 1,
                mr: 1,
                borderRadius: "4px",
                height: "28px",
              }}
            />
            {showChangeMenu && <ChangeMenu></ChangeMenu>}
          </div>
        ))}
        {/* show only before selection */}
        {!linkInputOption && (
          <div className={styles["integration-input__menu-btn"]}>
            <IntegrationMenu
              options={integrationOptions}
              onOptionClick={handleOptionClick}
            ></IntegrationMenu>
          </div>
        )}
        {/* show after selection  */}
        {!!linkInputOption && (
          <div className={styles["integration-input__tooltip-btn"]}>
            <LinkInput
              text={linkInputOption.text}
              img={linkInputOption.img}
              onClickLink={handleClickLink}
            ></LinkInput>
          </div>
        )}
      </div>
    </div>
  );
}

export default IntegrationInput;
