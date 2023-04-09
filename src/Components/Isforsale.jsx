import React, { useState } from 'react'
import { ConnectWallet, useAddress , useContract,useContractWrite } from "@thirdweb-dev/react";

const Isforsale = () => {

    const { contract } = useContract("0x90973bbF75947b145491C9aBD9cEc973f6723E36");
  const { mutateAsync: isforSale, isLoading } = useContractWrite(contract, "isforSale")

  const call = async () => {
    try {
      const data = await isforSale({ args: [Input.id, Input.amount] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  const [Input, setInput] = useState({
    id: "",
    amount : ""
  })

  const handleChange = (e) => {
    setInput({
      ...Input,
      [e.target.name]: e.target.value
    })
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
          <label  htmlFor="Name">
            id
            <label>
              <input
                type="text"
                placeholder="id" name="id" value={Input.name} onChange={handleChange}
                
              />
            </label>
          </label>
        </div>
        <div >
          <label  htmlFor="amount">
            amount
            <label>
              <input
                
                name="amount" value={Input.name} onChange={handleChange}
                
              />
            </label>
          </label>
        </div>
        <div >
          <button >
            Create Account
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default Isforsale