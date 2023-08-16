import { ICustomButtonProps } from "../components/customButton";

export default interface IImageBannerItems {
  title: string;
  subtext: string;
  largeImg: string;
  smallImg: string;
  buttons: ICustomButtonProps[];
}
