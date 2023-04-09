import React from 'react'
import '../Styles/Homes.css'
import {Link} from 'react-router-dom'
import {ConnectWallet} from '@thirdweb-dev/react'

const Home = () => {
  return (
   <>
   <>
  <nav>
    <div className="logo">EstateDEX</div>
    {/* toggle menu button */}
    <span className="menubtn" onclick="openNav()">
      ☰
    </span>
    <div className="navLinks">
      <ul>
        <li>
          <Link to='/'>
          <a href="#">Home</a></Link>
        </li>
        <li>
        <Link to='/form'>
          <a href="#">form</a></Link>
        </li>
        <li>
        <Link to='/properties'>
          <a href="#">properties</a></Link>
        </li>
        <li>
        <Link to='/temp'>
          <a href="#">temp</a></Link>
        </li>
        <li>
        <Link to='/sale'>
          <a href="#">sale</a></Link>
        </li>
        <li>
        <Link to='/deposite'>
          <a href="#">deposite</a></Link>
        </li>
        <li>
        <Link to='/transact'>
          <a href="#">transact</a></Link>
        </li>
        <ConnectWallet/>
      </ul>
    </div>
  </nav>
  {/* responsive side navbar */}
  <div className="sideNav" id="sidenav">
    <a href="#" className="closeBtn" onclick="closeNav()">
      {" "}
      ✖
    </a>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
    <a href="#">
      <button type="button">Login</button>{" "}
    </a>
  </div>
  {/* Header content with banner image */}
  <div className="row">
    <div className="column1">
      <h1>Safe Transaction!</h1>
      <p>Secure Your Land With Our D-App</p>
      <div className='margin-right'>
      <ConnectWallet/>
      </div>
    </div>
    <span className="container" />
  </div>
</>
</>

  )
}

export default Home