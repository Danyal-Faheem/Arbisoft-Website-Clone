import Carousel from "react-material-ui-carousel"
import { CarouselItem } from "./CarouselItem"
import carouselLarge1 from "../../assets/Web_Header.jpeg"
import carouselLarge2 from "../../assets/Group_2140.jpeg"
import carouselLarge3 from "../../assets/Group_2138.jpeg"
import carouselSmall1 from "../../assets/Group_2336.jpg"
import carouselSmall2 from "../../assets/Homepage_Slider_1.jpg"
import carouselSmall3 from "../../assets/Homepage_Slider_3.jpg"




export interface IHomePageCarouselItems {
  heading: string,
  subheading: string,
  largeImg: string,
  smallImg: string,
  buttons: IHomePageCarouselItemButton[]
}

export interface IHomePageCarouselItemButton {
  color: string,
  description: string
}

export const HomePageCarousel = () => {
  let items : IHomePageCarouselItems[] = [
    {
      heading: "Building powerful digital solutions for a better world",
      subheading: "Harnass the power of technology to set yourself apart and reshape the way your business finds new success",
      largeImg: carouselLarge1,
      smallImg: carouselSmall1,
      buttons: [
        {
          color: "primary",
          description: "Tell us about your project"
        }
      ]
    },
    {
      heading: "Helping educate over 20 million learners around the world",
      subheading: "As the official tech partner for edX since 2012, we have helped learners access education on-the-go with thousands of courses at their disposal, anywhere anytime.",
      largeImg: carouselLarge2,
      smallImg: carouselSmall2,
      buttons: [
        {
          color: "primary",
          description: "View our success story"
        },
        {
          color: "primary",
          description: "Tell us about your project"
        }
      ]
    },
    {
      heading: "Helping build one of the world's largest travel search engines",
      subheading: "We have partnered with KAYAK to revolutionize the traveling experience for over 50 million happy users around the globe and continue to build an industry-leading legacy.",
      largeImg: carouselLarge3,
      smallImg: carouselSmall3,
      buttons: [
        {
          color: "primary",
          description: "View our success story"
        },
        {
          color: "primary",
          description: "Tell us about your project"
        }
      ]
    }
]

return (
    <Carousel navButtonsAlwaysVisible stopAutoPlayOnHover>
        {
            items.map( (item, i) => <CarouselItem key={item.heading} {...item}/> )
        }
    </Carousel>
)
}
