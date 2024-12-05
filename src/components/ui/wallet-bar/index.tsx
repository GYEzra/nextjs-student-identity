import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";

type WalletbarProps = {
  session: Session | null;
  address: string | undefined;
  isInstalled: boolean;
  connect: () => void;
};

const Walletbar: FC<WalletbarProps> = ({
  session,
  isInstalled,
  address,
  connect,
}) => {
  return session && session.user ? (
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
              {address ? (
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
        {isInstalled ? (
          !address ? (
            <li className="mt-2">
              <button
                onClick={() => connect()}
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
  ) : (
    <button onClick={() => signIn()} className="btn border-0 special-button">
      Login
    </button>
  );
};

export default Walletbar;