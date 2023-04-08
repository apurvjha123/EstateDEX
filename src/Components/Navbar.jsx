import React from "react";
import { ConnectWallet, useAddress , useContract,useContractWrite } from "@thirdweb-dev/react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const address = useAddress();
  const { contract } = useContract("0x90973bbF75947b145491C9aBD9cEc973f6723E36");
  // const {data}=useContractRead(contract,"escrowAgent");
  const { mutateAsync: registerestate, isLoading } = useContractWrite(contract, "registerestate");
  const call = async () => {
    try {
      const data = await registerestate({ args: ["land", "benipur", 51] });
      console.log("contract call successs", data);
    } catch (err) {
      console.log("contract call failure", err);
    }
  }
  return (
    <>
      <div className="header">
        <div className="start">Estate Dex</div>
        <p className="home">Home</p>
        <button className="proceed"><ConnectWallet theme="dark"/></button>
      </div>
      
    </>
  );
};

export default Navbar;
