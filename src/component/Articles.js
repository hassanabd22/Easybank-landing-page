import React from 'react'

function Articles() {
    return (
        <section className='articles'>
            
            <h2>Latest Articles</h2>
            <div className='flex'>
            <div className='article-card' >
                <img src='./images/image-currency.jpg' alt='' />
                <div className='text'>
                <span>By Claire Robinson</span>
                <h4>Receive money in any currency with no fees</h4>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …
                </p>
                </div>
            </div>
            <div className='article-card' >
                <img src='./images/image-restaurant.jpg' alt='image' />
                <div className='text'>
                <span>By Wilson Hutton</span>
                <h4>Treat yourself without worrying about money</h4>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …
                </p>
                </div>
            </div>
            <div className='article-card' >
                <img src='./images/image-plane.jpg' alt='image' />
                <div className='text'>
                <span>By Wilson Hutton</span>
                <h4>Take your Easybank card wherever you go</h4>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …
                </p>
                </div>
            </div>
            <div className='article-card' >
                <img src='./images/image-confetti.jpg' alt='image' />
                <div className='text'>
                <span>By Claire Robinson</span>
                <h4>Our invite-only Beta accounts are now live!</h4>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …
                </p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default  Articles;
