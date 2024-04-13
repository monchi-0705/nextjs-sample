"use client";

import Image from "next/image";
import { MENU_ITEMS, MenuItem } from "@/consts/menu";
import { notFound, usePathname } from "next/navigation";
import { CustomFullScreen } from "../dialog/CustomFullScreen";
import { useState } from "react";

export const ImageDetail = ({ item }: { item: string }) => {
  const [isDetailOpened, setIsDetailOpened] = useState<boolean>(false);

  const menuItem = MENU_ITEMS.find((x) => x.menu.path == `/${item}`);
  if (!menuItem) {
    notFound();
  }
  const detail = menuItem.detail;

  return (
    <>
      <div className="w-4/5">
        <div className="w-full h-1/2 relative inline-block">
          <Image
            src={detail.image}
            alt={detail.title}
            fill
            style={{ cursor: "pointer" }}
            className="object-contain"
            onClick={(e) => setIsDetailOpened(true)}
          />
        </div>
        <div className="text-left text-lg py-4 w-full font-semibold px-8 md:text-2xl">
          {detail.title}
        </div>
        <div
          className="text-left text-base py-4 w-full text-left px-8 md:text-xl"
          dangerouslySetInnerHTML={{ __html: detail.description ?? "" }}
        ></div>
      </div>

      <CustomFullScreen
        isOpened={isDetailOpened}
        childClassName="h-full w-full flex items-center justify-center"
        closeAction={() => setIsDetailOpened(false)}
      >
        <div className="w-full h-4/5 relative inline-block">
          <Image
            src={detail.image}
            alt={detail.title}
            fill
            className="object-contain"
          />
        </div>
        <></>
      </CustomFullScreen>
    </>
  );
};
