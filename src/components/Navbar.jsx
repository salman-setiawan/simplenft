import React from 'react'
import Button from './Button';



const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(accounts);
      }

    }

  }

  return (
    <div className="">
      <div className='py-8 px-32 flex justify-between'>
        <div className='py-1.5'>
          Simple NFT
        </div>
        {isConnected ? (
          <p> connected </p>
        ) : (
          <div className="px-4 py-1.5 hover:bg-blue-600">
            <button onClick={connectAccount}>Hubungkan Disini</button>
          </div>
        )}
    </div>
    </div>
  )
}

export default Navbar