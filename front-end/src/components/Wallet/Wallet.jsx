
import { useState } from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import "./Wallet.css";
import { AiFillFileAdd } from "react-icons/ai";
import { Alert } from "reactstrap";

const Wallet = ({saveState}) => {
     const [connected, setConnected] = useState(true);
     const init = async() =>{
      try {
         const web3 = new Web3(window.ethereum);
         await window.ethereum.request({method: 'eth_requestAccounts'});
         const contract  = new web3.eth.Contract(
            ABI,
            "0x4E675cA8903c43e67eEA700e250097eAd1D40171"
         );
         setConnected(false);
         saveState({web3:web3,contract:contract});
        //  console.log(contract);
      } catch (error) {
        alert("Please install metamask");
      }
     }
      
  return (
    <>
      <div className="header">
        {false && (
          <button className="connectBTN">
            <a href="https://metamask.app.link/dapp/sriche.netlify.app/">
              Click For Mobile
            </a>
          </button>
        )}
        <button className="connectBTN" onClick = {init} disabled = {!connected}>{connected? "Connect Metamask" :"Connected" }</button>
      </div>
    </>
  );
};
export default Wallet;
