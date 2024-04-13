"use client";

import Image from "next/image";
import { MENU_ITEMS, MenuItem } from "@/consts/menu";
import { notFound, usePathname } from "next/navigation";

export const ImageDetail = ({ item }: { item: string }) => {
  const menuItem = MENU_ITEMS.find((x) => x.menu.path == `/${item}`);
  if (!menuItem) {
    notFound();
  }
  const detail = menuItem.detail;

  return (
    <div className="w-4/5">
      <div className="w-full h-1/2 relative inline-block">
        <Image
          src={detail.image}
          alt={detail.title}
          fill
          className="object-contain"
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
  );
};
