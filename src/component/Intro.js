import React from 'react'

function Intro() {
    return (
        <section className='intro'>
            <div className='img'>
                <img className='des' src='./images/bg-intro-desktop.svg' alt='intro' />
                <img src='./images/image-mockups.png' alt='im'className= "abs-img" />
            </div>
            <div className='contianer'>
                <div className='text'>
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <a className='btn'href='#home' onClick={() => console.log("Goal!")}>Request Invite</a>
                </div>
            </div>
            
        </section>
    )
}


export default Intro;
