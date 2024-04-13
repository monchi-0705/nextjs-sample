import { BsFillFileImageFill } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosImage } from "react-icons/io";

export type MenuItem = {
  menu: {
    label: string;
    icon: JSX.Element;
    path: string;
    isSelected: (pathname: string) => boolean;
  };
  detail: {
    title: string;
    description: string;
    image: string;
  };
};

export const MENU_ITEMS: MenuItem[] = [
  {
    menu: {
      label: "画像１",
      icon: <HiOutlineHome className={`h-8 w-8`} aria-hidden="true" />,
      path: "/",
      isSelected: (pathname: string) => pathname === "/",
    },
    detail: {
      title: "画像１のタイトル",
      description:
        "画像１の説明がここに入ります。<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />",
      image: "https://pro.foto.ne.jp/free/img/images_thumb/wtr0053-024.jpg",
    },
  },
  {
    menu: {
      label: "画像２",
      icon: <CiImageOn className={`h-8 w-8`} aria-hidden="true" />,
      path: "/image1",
      isSelected: (pathname: string) => pathname === "/image1",
    },
    detail: {
      title: "画像２のタイトル",
      description:
        "画像２の説明がここに入ります。<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />",
      image: "https://pro.foto.ne.jp/free/img/images_thumb/umi0178-022.jpg",
    },
  },
  {
    menu: {
      label: "画像３",
      icon: <IoIosImage className={`h-8 w-8`} aria-hidden="true" />,
      path: "/image2",
      isSelected: (pathname: string) => pathname === "/image2",
    },
    detail: {
      title: "画像３のタイトル",
      description:
        "画像３の説明がここに入ります。<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />",
      image: "https://pro.foto.ne.jp/free/img/images_thumb/umi0181-073.jpg",
    },
  },
  {
    menu: {
      label: "画像４",
      icon: <BsFillFileImageFill className={`h-8 w-8`} aria-hidden="true" />,
      path: "/image3",
      isSelected: (pathname: string) => pathname === "/image3",
    },
    detail: {
      title: "画像４のタイトル",
      description:
        "画像４の説明がここに入ります。<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />あああああ<br />",
      image: "https://pro.foto.ne.jp/free/img/images_thumb/yuu0040-013.jpg",
    },
  },
];
