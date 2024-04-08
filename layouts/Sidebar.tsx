import { useIsSidebarOpenState } from "@/features/store/sidebar/isSidebarOpen";
import NavigationItem from "./NavigationItem";
import { AiFillDashboard } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function Sidebar() {
  const isSidebarOpen = useIsSidebarOpenState();

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
