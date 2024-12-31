import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Button, TextField } from "@mui/material";
import SmallButton from "../small-button/small-button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} open={true} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    maxWidth: 253,
    fontSize: theme.typography.pxToRem(12),
    boxShadow: "0px 1px 10px 0px #25282B1F",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}));

const CustomTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiInputBase-input": {
    color: error
      ? theme.palette.error.contrastText
      : theme.palette.text.primary,
    fontSize: "12px",
    padding: "6px",
    backgroundColor: error
      ? theme.palette.error.light
      : theme.palette.background.default,
    borderRadius: "4px",
    border: "none",
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: `1px solid ${theme.palette.secondary.contrastText}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.secondary.contrastText}`,
    },
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: "3px",
  backgroundColor: "inherit",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.dark,
  },
  color: theme.palette.text.primary,
  borderRadius: "4px",
}));

export interface LinkInputProps {
  text: string;
  img?: string;
  onClickLink?: () => void;
}

export function LinkInput(props: LinkInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const validate = () => {
    if (value.length < 5) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="d-flex">
      <img src={props.img} alt={props.text} width={20} height={20} />
      <span className="ml">
        <HtmlTooltip
          title={
            <React.Fragment>
              <p style={{ color: "#242C39" }}>{props.text}</p>
              <CustomTextField
                hiddenLabel
                placeholder="Paste link https://..."
                size="small"
                value={value}
                onChange={handleChange}
                onBlur={validate}
                error={error}
              ></CustomTextField>

              <span className="ml">
                <SmallButton
                  id="Link Input"
                  isDisabled={error}
                  text="Link"
                  onClickOutput={props.onClickLink}
                  variant="contained"
                ></SmallButton>
              </span>
            </React.Fragment>
          }
        >
          <CustomButton variant="text">
            <MoreHorizIcon sx={{ fontSize: "14px" }} />
          </CustomButton>
        </HtmlTooltip>
      </span>
    </div>
  );
}

export default LinkInput;
