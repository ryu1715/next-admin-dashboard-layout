import { RxHamburgerMenu } from "react-icons/rx";
import { FaReact } from "react-icons/fa";

import { useIsSidebarOpenStateMutator } from "@/features/store/sidebar/isSidebarOpen";

export default function Header() {
  const { toggleIsSidebarOpen } = useIsSidebarOpenStateMutator();

  return (
    <header className="h-88 flex justify-between items-center p-2">
      <button className="cursor-pointer" onClick={() => toggleIsSidebarOpen()}>
        <RxHamburgerMenu />
      </button>

      <div className="flex items-center">
        <FaReact />
        <p className="ml-10 text-18">React App</p>
      </div>
      <p>example@higa.dev</p>
    </header>
  );
}
