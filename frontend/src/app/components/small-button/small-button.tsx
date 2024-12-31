import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const CustomSmallButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: "4px 8px 4px 6px",
  backgroundColor: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.dark,
  },
  color: theme.palette.primary.contrastText,
  borderRadius: "4px",
  fontSize: "12px",
}));

export interface SmallButtonProps {
  id?: string;
  text: string;
  href?: string;
  onClickOutput?: () => void;
  icon?: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  isDisabled?: boolean;
}

export function SmallButton(props: SmallButtonProps) {
  return (
    <CustomSmallButton
      data-testid={props.id}
      disabled={props.isDisabled}
      id={props.id}
      aria-label={props.id}
      variant={props.variant}
      startIcon={props.icon}
      disableElevation
      href={props.href}
      onClick={props.onClickOutput}
    >
      {props.text}
    </CustomSmallButton>
  );
}

export default SmallButton;
