import Image from "next/image";
import { fira_code } from "@/app/font";
import SideBar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <main className="flex items-center bg-background-700 h-full w-full overflow-auto">
      <SideBar />
      <div
        className={`${fira_code.className} flex-1 h-full flex flex-col px-8 py-4 gap-8`}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <h4 className="text-white/40 text-[1em]">Welcome!</h4>
            <h1 className="text-[2em] text-white">Jordan</h1>
            <p className="text-[1em] text-white/40">
              Here a summary of your account. Have fun!
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-background-400 px-4 py-2 text-white rounded">
              Send funds
            </button>
            <button className="bg-primary rounded px-4 py-2 text-background-500">
              Invest and Earn
            </button>
            <button className="bg-secondary rounded px-4 py-2 text-background-500">
              Deposit
            </button>
          </div>
        </div>
        <div className="h-[65px] bg-background-500 text-white w-full rounded flex items-center justify-between px-4">
          <p className="text-[0.8em] ml-12">
            To be compliant and to protect your account, please verify your
            identity by submitting document.
          </p>
          <button className="px-4 py-1 text-primary border border-white/20 rounded ">
            Start verification
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 flex flex-col justify-between p-4 bg-background-500 border-b-4 border-primary rounded h-[11em]">
            <div>
              <h4 className="text-white/70 text-[0.8em] mb-4">
                Available Balance
              </h4>
              <h1 className="text-primary text-[1.1em]">
                112,840.38 <span className="text-white">EUR</span>
              </h1>
            </div>
            <div>
              <h4 className="text-white/40 text-[0.5em]">INVESTMENT ACCOUNT</h4>
              <h2 className="text-primary text-[0.8em]">
                85,000 <span className="text-white">EUR</span>
              </h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between p-4 bg-background-500 border-b-4 border-white rounded h-[11em]">
            <div>
              <h4 className="text-white/70 text-[0.8em] mb-4">Total Deposit</h4>
              <h1 className="text-primary text-[1.1em]">
                416,442.33 <span className="text-white">EUR</span>
              </h1>
            </div>
            <div>
              <h4 className="text-white/40 text-[0.5em]">THIS MONTH</h4>
              <h2 className="text-primary text-[0.8em]">
                41,416,442.33 <span className="text-white">EUR</span>{" "}
                <span className="text-secondary text-[0.4em]">
                  +100<span>↑</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between p-4 bg-background-500 border-b-4 border-accent rounded h-[11em]">
            <div>
              <h4 className="text-white/70 text-[0.8em] mb-4">
                Total Withdraw
              </h4>
              <h1 className="text-primary text-[1.1em]">
                100,000 <span className="text-white">EUR</span>
              </h1>
            </div>
            <div>
              <h4 className="text-white/40 text-[0.5em]">THIS MONTH</h4>
              <h2 className="text-primary text-[0.8em]">
                100,000 <span className="text-white">EUR</span>{" "}
                <span className="text-secondary text-[0.4em]">
                  +100<span>↑</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="text-white">Recent Activity</h1>
            <h3 className="text-primary text-[0.8em]">See History</h3>
          </div>
          {/* list of recent activities */}
          <div className="flex flex-col mt-4">
            <div className="px-6 py-4 rounded-t bg-background-500 border border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative rounded-full w-[3em] h-[3em]">
                  <Image src={"/withdrawIcon.svg"} fill alt="Withdraw icon" />
                </div>
                <div>
                  <h2 className="text-white/60 text-[0.7em]">
                    Withdraw via Bitcoin Wallet
                  </h2>
                  <h4 className="text-[0.6em] text-white/30">
                    17 Feb, 2023{" "}
                    <span className="text-secondary">Completed</span>
                  </h4>
                </div>
              </div>
              <div>
                <h3 className="text-accent text-[0.7em]">
                  - 1.00 <span className="text-white">EUR</span>
                </h3>
                <h4 className="text-primary text-[0.5em]">
                  0.000044 <span className="text-white">BTC</span>
                </h4>
              </div>
            </div>
            <div className="px-6 py-4 border-white/5 bg-background-500 border flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative rounded-full w-[3em] h-[3em]">
                  <Image src={"/withdrawIcon.svg"} fill alt="Withdraw icon" />
                </div>
                <div>
                  <h2 className="text-white/60 text-[0.7em]">
                    Withdraw via Tether Wallet
                  </h2>
                  <h4 className="text-[0.6em] text-white/30">
                    15 Feb, 2023 <span className="text-accent">Completed</span>
                  </h4>
                </div>
              </div>
              <div>
                <h3 className="text-accent text-[0.7em]">
                  - 100,000.00 <span className="text-white">EUR</span>
                </h3>
                <h4 className="text-primary text-[0.5em]">
                  107,400.00 <span className="text-white">BTC</span>
                </h4>
              </div>
            </div>
            <div className="px-6 py-4 border-white/5 bg-background-500 border flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative rounded-full w-[3em] h-[3em]">
                  <Image src={"/investIcon.svg"} fill alt="Withdraw icon" />
                </div>
                <div>
                  <h2 className="text-white/60 text-[0.7em]">
                    Invest on Progressiy
                  </h2>
                  <h4 className="text-[0.6em] text-white/30">
                    15 Feb, 2023 <span className="text-accent">Completed</span>
                  </h4>
                </div>
              </div>
              <div>
                <h3 className="text-accent text-[0.7em]">
                  - 5,000.00 <span className="text-white">EUR</span>
                </h3>
                <h4 className="text-primary text-[0.5em]">
                  5,000.00 <span className="text-white">BTC</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
