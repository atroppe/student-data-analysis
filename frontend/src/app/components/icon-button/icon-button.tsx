import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const CustomIconButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: "4px",
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

/* eslint-disable-next-line */
export interface IconButtonProps {}

export function IconButton(props: IconButtonProps) {
  return (
    <CustomIconButton variant="text">
      <MoreHorizIcon sx={{ fontSize: "14px" }} />
    </CustomIconButton>
  );
}

export default IconButton;
