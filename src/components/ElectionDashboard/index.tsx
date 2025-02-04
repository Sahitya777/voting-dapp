import { getElections } from '@/blockchain/scripts/voting'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Electiondashboard = () => {
    const [elections, setelections] = useState([
        {
            candidates:[],
            name:'asas',
            verdict:'asas',
            time:'asas',
            id:'23'
        },{
            candidates:[],
            name:'asas',
            verdict:'asas',
            time:'asas',
            id:'23'
        },{
            candidates:[],
            name:'asas',
            verdict:'asas',
            time:'asas',
            id:'23'
        },
        
    ])
    const router=useRouter()

    useEffect(()=>{
        const fetchVal=async()=>{
            const res=await getElections()
        }
        fetchVal()
    },[])

  return (
    <div style={{marginTop:'1rem',padding:'4rem',display:'flex',width:'100%'}}>
        {elections.map((election,index:number)=>(
            <div key={index} style={{padding:'8px',width:'100%', background:'grey',cursor:'pointer', display:'flex',marginLeft:'2rem',flexWrap:'wrap',borderRadius:'6px',alignItems:'center',justifyContent:'center'}} onClick={()=>{
                router.push(`/election/${election.id}`)
            }}>
                <div>
                    <div>
                        {election.name}
                    </div>
                    <div>
                        {election.time}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Electiondashboard