import React, { useState } from 'react'
import Footer from '../components/Footer'
import Mint from '../components/Mint'
import Navbar from '../components/Navbar'

const Home = () => {
  const [accounts, setAccounts] = useState([]);
  

  return (
    <div className="w-full h-screen bg-[url('/bg.png')]">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <div className="pt-52 flex justify-center items-center">
        <Mint accounts={accounts} setAccount={setAccounts} />
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  )
}

export default Home