import images from "@/assets/images";
import CakeSvgrepoCom from "../icons/CakeSvgrepoCom.vue";
import BabySvgrepoCom from "../icons/BabySvgrepoCom.vue";
import HeartSvgrepoCom from "../icons/HeartSvgrepoCom.vue";
import StarSvgrepoCom from "../icons/StarSvgrepoCom.vue";
import PartyHornSvgrepoCom from "../icons/PartyHornSvgrepoCom.vue";
import SparklesSvgrepoCom from "../icons/SparklesSvgrepoCom.vue";

export const cardData = [
  {
    id: 1,
    title: "Birthday Balloons",
    subTitle:
      "Make birthdays extra special with our vibrant balloon collections",
    price: "$49.99",
    img: images.birthday,
    icon: CakeSvgrepoCom,
  },
  {
    id: 2,
    title: "Kids' Balloons",
    subTitle: "Playful designs featuring favorite characters and themes",
    price: "$39.99",
    img: images.kids,
    icon: BabySvgrepoCom,
  },
  {
    id: 3,
    title: "Wedding Decorations",
    subTitle: "Elegant balloon arrangements for your special day",
    price: "$149.99",
    img: images.wedding,
    icon: HeartSvgrepoCom,
  },
  {
    id: 4,
    title: "Helium Balloons",
    subTitle: "Premium helium-filled balloons that float beautifully",
    price: "$29.99",
    img: images.helium,
    icon: SparklesSvgrepoCom,
  },

  {
    id: 5,
    title: "Corporate Events",
    subTitle: "Professional balloon displays for business occasions",
    price: "$199.99",
    img: images.delivery,
    icon: PartyHornSvgrepoCom,
  },
  {
    id: 6,
    title: "Character Balloons",
    subTitle: "Popular characters that kids absolutely love",
    price: "$49.99",
    img: images.corporate,
    icon: StarSvgrepoCom,
  },
];
