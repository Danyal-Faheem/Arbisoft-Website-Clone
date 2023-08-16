import Carousel from "react-material-ui-carousel";
import ImageBanner from "../../components/imageBanner/ImageBanner";
import carouselLarge1 from "../../assets/Web_Header.jpeg";
import carouselLarge2 from "../../assets/Group_2140.jpeg";
import carouselLarge3 from "../../assets/Group_2138.jpeg";
import carouselSmall1 from "../../assets/Group_2336.jpg";
import carouselSmall2 from "../../assets/Homepage_Slider_1.jpg";
import carouselSmall3 from "../../assets/Homepage_Slider_3.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import IImageBannerItems from "../../interfaces/imageBanner";
import { blueButton, whiteButton } from "../../styles/buttons";

export const HomePageCarousel = () => {
  let items: IImageBannerItems[] = [
    {
      title: "Building powerful digital solutions for a better world",
      subtext:
        "Harnass the power of technology to set yourself apart and reshape the way your business finds new success",
      largeImg: carouselLarge1,
      smallImg: carouselSmall1,
      buttons: [
        {
          color: "info",
          text: "Tell us about your project",
          link: "https://arbisoft.com/contact",
          EndIcon: ArrowRightAltIcon,
          styles: whiteButton,
        },
      ],
    },
    {
      title: "Helping educate over 20 million learners around the world",
      subtext:
        "As the official tech partner for edX since 2012, we have helped learners access education on-the-go with thousands of courses at their disposal, anywhere anytime.",
      largeImg: carouselLarge2,
      smallImg: carouselSmall2,
      buttons: [
        {
          color: "primary",
          text: "View our success story",
          link: "https://arbisoft.com/about/edx",
          EndIcon: ArrowRightAltIcon,
          styles: blueButton,
        },
        {
          color: "info",
          text: "Tell us about your project",
          link: "https://arbisoft.com/contact",
          EndIcon: ArrowRightAltIcon,
          styles: whiteButton,
        },
      ],
    },
    {
      title: "Helping build one of the world's largest travel search engines",
      subtext:
        "We have partnered with KAYAK to revolutionize the traveling experience for over 50 million happy users around the globe and continue to build an industry-leading legacy.",
      largeImg: carouselLarge3,
      smallImg: carouselSmall3,
      buttons: [
        {
          color: "primary",
          text: "View our success story",
          link: "https://arbisoft.com/about/kayak",
          EndIcon: ArrowRightAltIcon,
          styles: blueButton,
        },
        {
          color: "info",
          text: "Tell us about your project",
          link: "https://arbisoft.com/contact",
          EndIcon: ArrowRightAltIcon,
          styles: whiteButton,
        },
      ],
    },
  ];

  return (
    <Carousel swipe navButtonsAlwaysVisible stopAutoPlayOnHover>
      {items.map((item, i) => (
        <ImageBanner key={i} {...item} />
      ))}
    </Carousel>
  );
};
