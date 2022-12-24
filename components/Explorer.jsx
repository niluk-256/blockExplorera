import React, { useEffect, useState } from "react";
import { Network ,Alchemy } from 'alchemy-sdk';
import { Grid, TextField } from "@mui/material";
import Search from "./Search"
import OneBlock from "./Block";
import { Card3 } from "./Card"
// Optional config object, but defaults to demo api-key and eth-mainnet.


const settings = {
    apiKey: process.env.NEXT_PUBLIC_API, // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);

export default function Explorer() {

  const [blockNumber, setBlockNumber] = useState("");

  const [blockInfo, setBlockInfo] = useState("Loading");
  const [blockValue, setValue] = useState("loading");
  const [blockfrom, setfrom] = useState("loading");
  const [blockto, setTo] = useState("loading");
  const [type, setType] = useState("loading");

  useEffect(() => {
      async function getBlockNumber() {
          setBlockNumber(await alchemy.core.getBlockNumber());
      }
      getBlockNumber();
  }, []);


async function getAssetTransferss(){
const array = []
 const tnx =    await  alchemy.core
    .getBlockWithTransactions(
     blockNumber-1
    )
    const transactions =  await tnx.transactions[0]
      const hex =transactions.value._hex
      const from =transactions.from
      const to =transactions.to
      const type =transactions.type
      const todecimal =parseInt(hex,16) / 10 **18 
    array.push(transactions.confirmations)
    setBlockInfo(array)
    setValue( todecimal )
    setTo(to)
    setfrom(from)
    setType(type)
console.log(array)
}

getAssetTransferss()

  return (
      <>
          <h1 className="font-bold font-sans text-lg">Block Explorer</h1>
          <hr />
        <Search/>
        <h3 className="font-mono animate-pulse mb-12">Current  Goreli ETH block number: {blockNumber} </h3>

        {/* <OneBlock  blockNumber={blockNumber} alchemy={alchemy} block={block}
        setBlock={setBlock}/> */}
        <div className="flex m-10 ">
          <div className="flex flex-wrap mr-20 ">
          
          <Card3 className="" 
          //  info={JSON.stringify(blockInfo)} 
           projectname={"Latest transaction on Current block"} info ={`Block confirmations:${JSON.stringify(blockInfo)}`} 
           from = {blockfrom}
           to={blockto}
           Amount={blockValue}
           type = {type}
           />
          </div>
        
        
        
        </div>
         
      </>
  );



}
