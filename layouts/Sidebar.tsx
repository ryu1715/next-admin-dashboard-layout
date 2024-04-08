import { useEffect } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

import {
  useIsSidebarOpenState,
  useIsSidebarOpenStateMutator,
} from "@/features/store/sidebar/isSidebarOpen";
import NavigationItem from "./NavigationItem";

export default function Sidebar() {
  const isSidebarOpen = useIsSidebarOpenState();
  const { setIsSidebarOpen } = useIsSidebarOpenStateMutator();

  useEffect(() => {
    const handleResize = () => {
      // ウィンドウ幅が768ピクセル以下になったらサイドバーを閉じる
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // ウィンドウサイズが変更された時のイベントリスナーを登録
    window.addEventListener("resize", handleResize);

    // コンポーネントのクリーンアップ時にイベントリスナーを削除
    return () => window.removeEventListener("resize", handleResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav
        className={`${
          isSidebarOpen ? "" : "ml-minus-256"
        } w-256 bg-gray-900 p-20 duration-300 flex flex-col gap-2`}
      >
        <NavigationItem Icon={AiFillDashboard} href="/" name="home" />
        <NavigationItem Icon={HiOutlineUserGroup} href="/users" name="users" />
        <NavigationItem Icon={BsGraphUpArrow} href="/sales" name="Sales" />
      </nav>
    </>
  );
}
