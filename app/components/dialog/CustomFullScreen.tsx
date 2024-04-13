import { IoMdClose } from "react-icons/io";

export const CustomFullScreen = ({
  children,
  isOpened,
  parentClassName = "",
  childClassName = "overflow-none",
  closeAction = undefined,
}: {
  children: Array<React.ReactElement>;
  isOpened: boolean;
  parentClassName?: string;
  childClassName?: string;
  closeAction?: () => void | undefined;
}) => {
  return (
    <div hidden={!isOpened} className={parentClassName}>
      <div
        className="fixed left-0 right-0 top-0 bottom-0 z-[9999] justify-center flex bg-[0008]"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeAction && closeAction();
          }
        }}
      >
        {/** ×ボタン */}
        <div style={{ position: "fixed", top: "10pt", right: "10pt" }}>
          <div
            className="hand_cursor absolute right-[0px] top-[0px]"
            style={{ zIndex: 2001 }}
          >
            <IoMdClose
              className="h-7 w-7 text-white"
              onClick={(e) => closeAction && closeAction()}
            />
          </div>
        </div>
        {/** コンテンツ */}
        <div className={childClassName}>{children}</div>
      </div>
    </div>
  );
};
