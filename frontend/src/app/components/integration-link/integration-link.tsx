import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Option } from "../integration-menu/integration-menu";

const CustomButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: "2px",
  backgroundColor: "inherit",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.dark,
  },
  color: theme.palette.text.primary,
  borderRadius: "4px",
  fontSize: "14px",
}));

export interface IntegrationLinkProps {
  option: Option | null;
}

export function IntegrationLink(props: IntegrationLinkProps) {
  return (
    <div data-testid="integration-link">
      <CustomButton variant="text">
        <div className="d-flex-center">
          <img
            src={props.option?.img}
            alt={props.option?.text}
            width={20}
            height={20}
          />
          <span className="ml">DSN-556 Design Spec</span>
        </div>
      </CustomButton>
    </div>
  );
}

export default IntegrationLink;
