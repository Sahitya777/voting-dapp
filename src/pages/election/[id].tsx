import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "../../blockchain/abis/testabi";
const Index = () => {
  const account = useAccount();
  const { writeContract,writeContractAsync } = useWriteContract()
  const [candidates,setCandidates] =useState ([
    {
      name: "asas",
      address: "asas",
    },
    {
      name: "asas",
      address: "asas",
    },
    {
      name: "asas",
      address: "asas",
    },
  ]);
  const [allowedUsers, setallowedUsers] = useState()
  const [votedCandidate, setvotedCandidate] = useState(1)

  useEffect(()=>{
    handleTransaction()
  },[votedCandidate])

  const handleTransaction=async()=>{
    try {
        const res=await writeContractAsync({ 
            abi:abi,
            address: '0x6b175474e89094c44da98b954eedeac495271d0f',
            functionName: 'transferFrom',
            args: [
              '0xd2135CfB216b74109775236E36d4b433F1DF507B',
              '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
              BigInt(123),
            ],
         })        
    } catch (error) {
        console.log(error,'err')
    }
  }
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "1rem",
          padding: "4rem",
          display: "flex",
          width: "100%",
        }}
      >
        {candidates.map((candidate, index: number) => (
          <div
            key={index}
            style={{
              padding: "16px",
              width: "100%",
              background: "grey",
              cursor: "pointer",
              display: "flex",
              marginLeft: "2rem",
              flexWrap: "wrap",
              borderRadius: "6px",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {}}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <div>Candidate {index + 1}</div>
              <div>{candidate?.name}</div>
              <div>{candidate.address}</div>
              <div>Votes: 34</div>
              <button
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                disabled={!account?.address}
              >
                Cast Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
