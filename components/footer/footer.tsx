import { fira_code } from "@/app/font";

export default function Footer() {
  return (
    <footer
      className={`${fira_code.className} h-[50px] bg-background-500 text-white flex items-center`}
    >
      <div className="w-[20%] h-full"></div>
      <div className="h-full px-8 flex flex-1 items-center justify-between">
        <div>
          <p className="text-white/40 text-[0.7em] ">
            StakingAI 2023. All Rights Reserved.
          </p>
        </div>
        <div className="flex space-x-4 text-primary text-[0.7em]">
          <span>FAQs</span>
          <span>Nutzungsbedingungen</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
