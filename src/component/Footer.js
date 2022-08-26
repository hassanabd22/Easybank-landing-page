import React from 'react'

function Footer() {
    return (
        <footer>
            <div className='container'>   
            <div className='logo-icon'>
                <div className='logo'>
                    <img src='./images/logo.svg' alt='img' />
                </div> 
                <div className='icon'>
                    <img src='./images/icon-facebook.svg' alt='img' />
                    <img src='./images/icon-youtube.svg' alt='img' />
                    <img src='./images/icon-twitter.svg' alt='img' />
                    <img src='./images/icon-pinterest.svg' alt='img' />
                    <img src='./images/icon-instagram.svg' alt='img' />
                </div>
            </div>
            <div className='link'>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='btn-text'>
                <a href='#home' className='btn'>Request Invite</a>
                <p>© Easybank. All Rights Reserved</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer
