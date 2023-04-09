import React, { useState } from 'react'
import { ConnectWallet, useAddress , useContract,useContractWrite } from "@thirdweb-dev/react";

const DepositeFunds = () => {

    const { contract } = useContract("0x90973bbF75947b145491C9aBD9cEc973f6723E36");
    const { mutateAsync: depositFunds, isLoading } = useContractWrite(contract, "depositFunds")
    const call = async () => {
        try {
          const data = await depositFunds({ args: [Input] });
          console.log("contract call successs", data);
        } catch (err) {
          console.log("contract call failure", err);
        }
      }

  const [Input, setInput] = useState()

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  
  const handleSubmit = (e)=>{
    e.preventDefault();
    call();
  }

  return (
    <>
  
      <div className="">
  <div >
    <h3 >Welcome</h3>
    <form onSubmit={handleSubmit}>
      <div >
        <div>
          <label  htmlFor="Name" className='amount'>
            Id
            <label>
              <input
                type="Id"
                placeholder="Id" name="Id" onChange={handleChange}
                
              />
            </label>
          </label>
        </div>
        <div >
          <button className='create'>
            Deposit
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default DepositeFunds