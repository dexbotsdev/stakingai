import { fira_code } from "@/app/font";

export default function Summary() {
  return (
    <div
      className={`${fira_code.className} flex flex-col w-full bg-background-600 px-8 py-4`}
    >
      <div className="py-4 border-b border-white/30">
        <h2 className="text-white/40 tracking-[0.2em] text-[0.5em]">
          MAIN ACCOUNT BALANCE
        </h2>
        <h3 className="text-primary text-[1.5em]">
          41,231,441.33 <span className="text-white text-[0.6em]">EUR</span>
        </h3>
        <h4 className="text-white/80">41,231,441.33 EUR</h4>
      </div>
      <div className="flex justify-between py-4">
        <div className="flex flex-col space-y-2">
          <h4 className="text-white/40 text-[0.8em]">
            Profits (7d) <span className="text-secondary">+164%</span>
          </h4>
          <h4 className="text-white/40 text-[0.8em]">Deposit in orders</h4>
          <h4 className="text-white/40 text-[0.8em]">Withdraw in progress</h4>
        </div>
        <div className="flex flex-col space-y-2 items-end">
          <h4 className="text-primary text-[0.8em]">
            8,541.67 <span className="text-white">EUR</span>
          </h4>
          <h4 className="text-primary text-[0.8em]">
            24,810.11 <span className="text-white">EUR</span>
          </h4>
          <h4 className="text-primary text-[0.8em]">
            1.00 <span className="text-white">EUR</span>
          </h4>
        </div>
      </div>
      <div className="flex space-x-2 mt-2">
        <button className="flex-1 border text-secondary border-secondary py-1 rounded">
          DEPOSIT
        </button>
        <button className="flex-1 border text-accent border-accent py-1 rounded">
          WITHDRAW
        </button>
      </div>
    </div>
  );
}
