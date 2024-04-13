"use client";

import { MENU_ITEMS } from "@/consts/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = ({}: {}) => {
  const pathname = usePathname();
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex z-50 items-center justify-center">
      <div
        style={{ boxShadow: "0px -8px 34px rgba(213, 213, 213, 0.5)" }}
        className="h-20 rounded-t-3xl bg-white w-4/5 flex items-center justify-center"
      >
        <div className="flex w-full">
          <div className="w-screen flex-1">
            <div className="flex justify-around">
              {MENU_ITEMS &&
                0 < MENU_ITEMS.length &&
                MENU_ITEMS.map((item, index) => {
                  return (
                    <Link
                      href={item.menu.path}
                      key={index}
                      className={`inline-block text-center ${
                        item.menu.isSelected(pathname)
                          ? "text-[#f10c1a]"
                          : "text-gray-400"
                      }`}
                    >
                      {item.menu.icon}
                      <p className="text-[8px]">{item.menu.label}</p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
