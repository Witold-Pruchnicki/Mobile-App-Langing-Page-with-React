import React,{useState} from "react";
import logo from '../images/CHANGE LOGO.png';

function Navbar() {

    const [nav,setnav] = useState(false)
    const changeBackgorund = ()=>{
        if(window.scrollY >= 50){
            setnav(true);
        } else{
            setnav(false)
        }
    }
    window.addEventListener('scroll', changeBackgorund)

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#" className='logo'>
                <img src={logo} alt=""/>
            </a>
            <ul className="menu">
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar