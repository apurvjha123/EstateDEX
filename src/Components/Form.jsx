import React, { useState } from 'react'
import { ConnectWallet, useAddress , useContract,useContractWrite } from "@thirdweb-dev/react";

const Form = () => {

    const { contract } = useContract("0x90973bbF75947b145491C9aBD9cEc973f6723E36");
    const { mutateAsync: registerestate, isLoading } = useContractWrite(contract, "registerestate");
    const call = async () => {
        try {
          const data = await registerestate({ args: [Input.title, Input.location, Input.area] });
          console.log("contract call successs", data);
        } catch (err) {
          console.log("contract call failure", err);
        }
      }

  const [Input, setInput] = useState({
    title: "",
    location : "",
    area : ""
  })

  const handleChange = (e) => {
    setInput({
      ...Input,
      [e.target.name]: e.target.value
    })
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
            title
            <label>
              <input
                type="text"
                placeholder="title" name="title" value={Input.name} onChange={handleChange}
                
              />
            </label>
          </label>
        </div>
        <div >
          <label  htmlFor="location">
            location
            <label>
              <input
                
                name="location" value={Input.name} onChange={handleChange}
                
              />
            </label>
          </label>
        </div>
        <div >
          <label>
            area
            <label>
              <input
                 name="area" value={Input.name} onChange={handleChange} autoComplete='on'
                
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

export default Form