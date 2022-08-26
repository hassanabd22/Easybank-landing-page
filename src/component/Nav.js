import React, { useState} from 'react';

function Nav() {
    const [show , setShow] = useState(false);
    return (
        <nav>
            <div className='contianer'  >
                <div className='head' >
                    <img src='./images/logo.svg' alt='logo' className='logo'/>
                    <div className='togle' onClick={() => setShow(!show)} >
                        <img src='./images/icon-hamburger.svg' alt='hamb'  onClick={() => console.log("Goal!")} />
                    </div>
                </div>
                <div className= {`${show  ? 'show links':'links'} `} >
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                    <a className='btn' href='#home'>Request Invite</a>
                </div>

                
            </div>
        </nav>
    )
}

export default  Nav;
