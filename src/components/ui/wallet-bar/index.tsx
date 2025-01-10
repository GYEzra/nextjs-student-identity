import { useAccount } from "@/hooks/web3";
import Button from "../button/default-button";

const Walletbar = () => {
  const { account } = useAccount();

  if (!account.isInstalled) return <Button className="btn border-0 special-button" type="button" value="Install Wallet" onClick={() => window.open("https://metamask.io", "_blank")} />;

  if (!account.data) return <Button className="btn border-0 special-button" type="button" value="Connect Wallet" onClick={() => account.connect()} />;

  return null;
};

export default Walletbar;
