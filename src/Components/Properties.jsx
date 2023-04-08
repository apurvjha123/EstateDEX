import React from 'react'
import { ConnectWallet, useAddress , useContract,useContractRead } from "@thirdweb-dev/react";

const Properties = () => {
    const { contract } = useContract("0x90973bbF75947b145491C9aBD9cEc973f6723E36");
    const { data, isLoading } = useContractRead(contract, "getestateById", [1])
    console.log(data)
  return (
    <div>{!isLoading?data[0]:console.log(isLoading)}</div>
  )
}

export default Properties