import { CustomButton } from "./CustomButton";

export default CustomButton;

export interface ICustomButtonProps {
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  text?: string;
  link?: string;
  EndIcon?: any;
  styles?: any;
}
