import React from 'react'
import { ConnectWallet, useAddress , useContract,useContractRead } from "@thirdweb-dev/react";

const Temp = () => {
    
    const { contract } = useContract("0x90973bbF75947b145491C9aBD9cEc973f6723E36");
    const { data, isLoading } = useContractRead(contract, "getestateById", [1]);
    !isLoading?console.log(data[4]):console.log(isLoading)
  return (
    <>
      <div class="container">
      <div class="row">
        <div class="col-sm-4 p-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{!isLoading?data[0]:console.log(isLoading)}</h5>
              <p class="card-text">{!isLoading?data[1]:console.log(isLoading)}</p>
              <div class="d-flex flex-row">
              <p class="card-text">{!isLoading?data[4]:console.log(isLoading)}</p>
              <div className='btn bg-secondary pt-8'>View</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Temp