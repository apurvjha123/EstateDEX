import React from 'react'
import { ConnectWallet, useAddress , useContract,useContractRead } from "@thirdweb-dev/react";
import Temp from './Temp';

const Properties = () => {
    const { contract } = useContract("0x90973bbF75947b145491C9aBD9cEc973f6723E36");
    // const { data, isLoading } = useContractRead(contract, "getestateById", [1])
    const { data, isLoading } = useContractRead(contract, "totalestates", [])
    const no= data.toNumber()
    console.log(no)
  return (
    <>
    {/* <div>Address : {!isLoading?data[0]:console.log(isLoading)}</div>
    <div>Location : {!isLoading?data[1]:console.log(isLoading)}</div> */}
    {/* <div class="card">
  <div class="card-body">
    <h5 class="card-title"><div>Address : {!isLoading?data[0]:console.log(isLoading)}</div></h5>
    <h6 class="card-subtitle mb-2 text-muted"><div>Location : {!isLoading?data[1]:console.log(isLoading)}</div></h6>
    <p class="card-text">Buyer : {!isLoading?data[5]:console.log(isLoading)} </p>
  </div>
</div> */}

    
    
    </>
  )
}

export default Properties