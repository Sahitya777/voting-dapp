import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount } from 'wagmi';

const Navbar = () => {
  const {address}=useAccount()
  return (
    <div style={{display:'flex',width:'100%',justifyContent:'space-between',padding:'1rem 2rem',background:'grey',alignItems:'center'}}>
        <div style={{fontSize:'20px',fontWeight:'700'}}>
            Voting Dapp
        </div>
        {address?<div style={{padding:'8px',borderRadius:'6px'}}>
          {address}
        </div>:<ConnectButton/>}
    </div>
  )
}

export default Navbar