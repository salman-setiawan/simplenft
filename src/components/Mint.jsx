import React, { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import SimpleNFT from '../SimpleNFT.json';

const SimpleNFTAddress = "0x2f3f80071960024B66Fc86F6837dF8eDF01786D0";

const Mint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        SimpleNFTAddress,
        SimpleNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
        document.getElementById('#debugDiv').append('<p>' + err + '</p>');
      }

    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl'>Simple NFT</h1>
        <p className='text-center w-5/12 pt-12 pb-8'>website percobaan minting non-fungible token yang dibuat untuk keperluan eksperimen, adapun token yang digunakan adalah GoerliETH dari goerli test network, selamat mencoba.</p>
        {isConnected ? (
          <div>
            <div className='flex gap-x-1'>
              <button className='px-5 pt-1.5 pb-2.5 text-2xl bg-[#444444] hover:bg-blue-600' onClick={handleDecrement}>-</button>
              <input className='bg-[#444444] font-bold text-center' value={mintAmount} />
              <button className='px-5 pt-1.5 pb-2.5 text-2xl bg-[#444444] hover:bg-blue-600' onClick={handleIncrement}>+</button>
            </div>
            <div className="flex justify-center pt-8">
              <button className='px-8 py-4 bg-[#444444] hover:bg-blue-600' onClick={handleMint}>Mint Now</button>
            </div>
          </div>
        ) : (
          <div className="">
            <p className='px-8 py-2 bg-[#ac3d3d]'>harap hubungkan metamask terlebih dahulu</p>
          </div>
        )}
    </div>
  );
};

export default Mint;