import React from "react";
import styles from "./integration-menu.module.css";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CustomSmallButton } from "../small-button/small-button";

export interface Option {
  text: string;
  img?: string;
  icon?: string;
  errorStyle?: boolean;
}

export interface IntegrationMenuProps {
  options: Option[];
  onOptionClick: (option: Option) => Option;
}

export function IntegrationMenu(props: IntegrationMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionClick = (option: Option) => {
    handleClose();
    props.onOptionClick(option);
  };

  return (
    <div className={styles["container"]}>
      <CustomSmallButton
        id="integration-menu-btn"
        aria-label="Integration Menu"
        aria-controls={open ? "integration-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        size="small"
        startIcon={<AddIcon fontSize="small" />}
        disableElevation
      >
        Add
      </CustomSmallButton>

      <Menu
        id="integration-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "integration-menu-btn",
        }}
        slotProps={{
          paper: {
            style: {
              width: "262px",
            },
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "0px 1px 10px 0px #25282B1F",
            borderRadius: "8px",
          },
          "& .MuiTypography-root": {
            fontSize: "14px",
          },
        }}
      >
        <div className={styles["integration-menu"]}>
          <p className={styles["integration-menu__heading"]}>Integration</p>
          {props.options.map((option) => (
            <MenuItem
              key={option.text}
              onClick={() => handleOptionClick(option)}
              sx={(theme) => ({
                p: "10px",
                fontSize: "14px",
                borderRadius: "6px",
                color: option.errorStyle
                  ? theme.palette.error.contrastText
                  : theme.palette.primary.contrastText,
                "&:hover": {
                  color: option.errorStyle
                    ? theme.palette.error.contrastText
                    : theme.palette.secondary.contrastText,
                  backgroundColor: option.errorStyle
                    ? theme.palette.error.light
                    : theme.palette.secondary.main,
                },
              })}
            >
              <ListItemIcon
                sx={(theme) => ({
                  color: option.errorStyle
                    ? theme.palette.error.contrastText
                    : theme.palette.secondary.contrastText,
                })}
              >
                <img src={option.img} alt={option.text} />
              </ListItemIcon>
              <ListItemText>{option.text}</ListItemText>
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
}

export default IntegrationMenu;
