import { ethers } from "ethers";
import votingAbi from '../abis/voting.abi.json'
export const getElections=async()=>{
    try {
        const provider=new ethers.providers.JsonRpcProvider('https://rpc-holesky.rockx.com')
        const contract=new ethers.Contract('0x74c90A36FDB84faff462eA7A2A5A64c2FB97D575',votingAbi,provider)
        console.log(contract,'contract')
        const elections=await contract.getAllPolls()
        console.log(elections,'elec')
    } catch (error) {
        console.log(error,'err in get call for elections')
    }
}

// export async function assetBalance(account:string,asset:string){
//     try {
//       const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_TESTNET_BASE);
//       const contract = new ethers.Contract(tokenAddressMap[asset], erc20abi, provider);
//       const balance=await contract.balanceOf(account)
//       return parseAmount(String( Number(balance)),tokenDecimalsMap[asset])
//     } catch (error) {
//       console.log(error,'err in balance')
//     }
// }