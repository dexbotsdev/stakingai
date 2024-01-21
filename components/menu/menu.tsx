import Link from "next/link";
import { fira_code } from "@/app/font";

const menuOptions = [
  { option: "Dashboard", iconName: "dashboard" },
  { option: "Staking", iconName: "compare_arrows" },
  { option: "Investment", iconName: "account_balance" },
  { option: "Our Plans", iconName: "recent_actors" },
  { option: "My Profile", iconName: "account_circle" },
];

export default function Menu() {
  return (
    <div className={`${fira_code.className} w-full py-4 px-8`}>
      <h4 className="text-white/40 text-[0.8em] font-light">MENU</h4>
      <ul className="mt-2 mb-6 flex flex-col space-y-2">
        {menuOptions.map((menuItem, index) => (
          <li
            key={index}
            className="px-4 py-2  text-white/40 hover:text-white rounded-md"
          >
            <Link className="flex items-center space-x-2" href={"/"}>
              <span className="material-icons">{menuItem.iconName}</span>
              <span>{menuItem.option}</span>
            </Link>
          </li>
        ))}
      </ul>
      <h4 className="text-white/40 text-[0.8em] font-light my-2">Additional</h4>
      <Link className="text-white/40 font-normal" href={"/"}>
        Go To Home
      </Link>
    </div>
  );
}
