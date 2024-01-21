import Image from "next/image";
import { fira_code } from "@/app/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header
      className={`${fira_code.className} h-[65px] bg-background-500 flex justify-between items-center px-8 py-2`}
    >
      <div className="w-[160px] h-[40px] relative ">
        <Image fill src={"/logo.svg"} alt="Staking AI Logo" />
      </div>
      <div className="flex  space-x-[4em] items-center">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-white p-[4px] w-[32px] h-[32px] flex items-center justify-center">
            <Image
              width={32}
              height={32}
              src={"/profile.png"}
              alt="Staking Ai Logo"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[0.6em]">Jordan</span>
            <span className="text-secondary text-[0.6em]">verified</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-[32px] h-[32px] rounded-full relative">
            <Image src={"/flag.svg"} alt="Germany flag" fill />
          </div>
          <div className="w-4 h-4">
            <FontAwesomeIcon color="white" icon={faChevronDown} />
          </div>
        </div>
      </div>
    </header>
  );
}
