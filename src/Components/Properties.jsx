import React,{useState} from 'react'
import { ConnectWallet, useAddress , useContract,useContractRead, useContractWrite } from "@thirdweb-dev/react";
import Temp from './Temp';

const Properties = () => {
    const [id,useid]=useState()
    const { contract } = useContract("0x90973bbF75947b145491C9aBD9cEc973f6723E36");
    const { data, isLoading } = useContractRead(contract, "getestateById", [id])
    // const { data, isLoading } = useContractRead(contract, "totalestates", [])
    
    !isLoading?console.log('hii'):console.log('err')

    const connect = useAddress()

    const { mutateAsync: approveestate } = useContractWrite(contract, "approveestate")

  const call = async () => {
    try {
      const data = await approveestate({ args: [id] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
    const handleChange=(e)=>{
        useid(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(id)
    }
  return (
    <>
    {/* <div>Address : {!isLoading?data[0]:console.log(isLoading)}</div>
    <div>Location : {!isLoading?data[1]:console.log(isLoading)}</div> */}
    <form onSubmit={handleSubmit}>
    <input onChange={handleChange} type='number'/>
    <div class="card">
  <div class="card-body">
    <h5 class="card-title"><div>Address : {!isLoading?data[0]:console.log(isLoading)}</div></h5>
    <h6 class="card-subtitle mb-2 text-muted"><div>Location : {!isLoading?data[1]:console.log(isLoading)}</div></h6>
    <p class="card-text">Buyer : {!isLoading?data[5]:console.log(isLoading)} </p>
    <p class="card-text">Area : {!isLoading?data[2]?.toNumber():console.log(isLoading)} </p>
    <p class="card-text">req : {!isLoading?data[3]?.toNumber():console.log(isLoading)} </p>
  </div>
  <button className='container' onClick={call}>Approve</button>
</div>
</form>
    </>
  )
}

export default Properties