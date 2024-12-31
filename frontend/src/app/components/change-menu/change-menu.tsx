import styles from "./change-menu.module.css";
import React, { useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { CustomIconButton } from "../icon-button/icon-button";

/* eslint-disable-next-line */
export interface ChangeMenuProps {}

export function ChangeMenu(props: ChangeMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionClick = () => {
    handleClose();
  };
  const changeOptions = [
    { text: "Change URL", icon: <SyncIcon fontSize="small" /> },
    {
      text: "Delete integration",
      icon: <DeleteOutlineIcon fontSize="small" />,
      errorStyle: true,
    },
  ];

  return (
    <div data-testid="change-menu">
      <CustomIconButton
        id="change-menu-btn"
        aria-label="more"
        aria-controls={open ? "change-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon fontSize="small" />
      </CustomIconButton>
      <Menu
        id="change-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "change-menu-btn",
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
        <div className={styles["change-menu__menu"]}>
          <p className={styles["change-menu__heading"]}>Linear</p>
          {changeOptions.map((option) => (
            <MenuItem
              key={option.text}
              onClick={handleOptionClick}
              sx={(theme) => ({
                p: "10px",
                fontSize: "14px",
                borderRadius: "6px",
                color: option.errorStyle
                  ? theme.palette.error.contrastText
                  : theme.palette.secondary.contrastText,
                "&:hover": {
                  color: option.errorStyle
                    ? theme.palette.error.contrastText
                    : "#2E5FE8",
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
                {option.icon}
              </ListItemIcon>
              <ListItemText>{option.text}</ListItemText>
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
}

export default ChangeMenu;
