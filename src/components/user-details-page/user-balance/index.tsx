import { AnimatedCounter } from "@/components/ui";
import { useHasMounted } from "@/hooks/custom";
import { useAccount } from "@/hooks/web3";
import { formatEthNumber } from "@/utils";
import { useEffect, useState } from "react";

const UserBalance = () => {
  const hasMounted = useHasMounted();
  const { account } = useAccount();
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const value = await account.getBalance();
      setBalance(value);
    };

    fetchBalance();
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="flex flex-col gap-2 border border-zinc-400 rounded-lg p-4">
      <div className="flex justify-center p-4">
        <img src="https://harnishdesign.net/demo/html/metovo/images/chain/ethereum.png" alt="" className="rounded-full w-16 h-16 lg:w-20 lg:h-20" />
      </div>
      <p className="text-center text-white font-extrabold text-2xl">
        <AnimatedCounter value={formatEthNumber(balance, 4)} />
      </p>
      <p className="text-center text-base text-gray-300">Available Balance</p>
      <div className="flex justify-between py-2 ">
        <button className="text-green-500 font-semibold text-sm hover:underline">Deposit</button>
        <button className="text-green-500 font-semibold text-sm hover:underline">Send</button>
      </div>
    </div>
  );
};

export default UserBalance;
