import Summary from "../summary/summary";
import Menu from "../menu/menu";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex w-[20%] h-full bg-background-500 flex-col items-center relative overflow-auto">
      <Summary />
      <Menu />
      <div className="m-auto bg-background-600 w-full p-8 absolute bottom-0">
        <Link className="text-white/40 flex items-center space-x-4" href={"/"}>
          <span className="material-icons">email</span>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}
