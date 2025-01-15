import { useAccount } from "@/hooks/web3";
import Button from "./default-button";
import { signIn } from "next-auth/react";
import { INft } from "@/types/nft";

type NftPurchaseButtonProps = {
  item: INft;
  buyNft?: (tokenId: number, value: number) => Promise<void>;
};

const NftPurchaseButton = ({ item, buyNft }: NftPurchaseButtonProps) => {
  if (!buyNft) return null;

  const { account } = useAccount();

  const onSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn();
  };

  const onOpenMetamaskPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://metamask.io", "_blank");
  };

  const onConnectWallet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    account.connect();
  };

  const onBuyNft = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await buyNft(item.tokenId, item.price);
  };

  if (!account.isLoggedIn) return <Button type="button" value="SignIn" onClick={onSignIn} />;

  if (!account.isInstalled) return <Button type="button" value="Install Wallet" onClick={onOpenMetamaskPage} />;

  if (!account.isConnectedWallet) return <Button type="button" value="Connect Wallet" onClick={onConnectWallet} />;

  return <Button type="button" value="Buy" onClick={onBuyNft} />;
};

export default NftPurchaseButton;
