import { useAccount, useNetwork } from "@/components/hooks/web3";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Walletbar = () => {
  const { data: session } = useSession();
  const { account } = useAccount();
  const { network } = useNetwork();

  if (!session) {
    return (
      <button onClick={() => signIn()} className="btn border-0 special-button">
        Login
      </button>
    )
  }

  return (
    <>
      <div className="text-gray-300 self-center mr-2 hidde">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
          <svg
            className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx={4} cy={4} r={3} />
          </svg>
          {network.isLoading
            ? "Loading..."
            : account.isInstalled
              ? network.data
              : "Not connected"}
        </span>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-120 p-2 shadow"
        >
          <li>
            <div className="flex">
              <div className="avatar relative">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                {account.data ? (
                  <>
                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-success animate-ping"></span>
                  </>
                ) : (
                  <span className="absolute inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                )}
              </div>
              <div className="ml-1">
                <p className="text-sm font-medium text-neutral-800">
                  {session.user.name}
                </p>
                <p className="text-sm text-neutral-600">{session.user.email}</p>
              </div>
            </div>

            <hr />
          </li>
          <li>
            <Link href={`/profile/${session.user._id}`} className="justify-between">
              Information
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <a>Setting</a>
          </li>
          <li>
            <a onClick={() => signOut()}>Logout</a>
          </li>
          {account.isInstalled ? (
            !account.data ? (
              <li className="mt-2">
                <button
                  onClick={() => account.connect()}
                  className="btn border-0 special-button"
                >
                  Connect Wallet
                </button>
              </li>
            ) : null
          ) : (
            <li className="mt-2">
              <button
                onClick={() => window.open("https://metamask.io", "_ blank")}
                className="btn border-0 special-button"
              >
                Install wallet
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  )
};

export default Walletbar;