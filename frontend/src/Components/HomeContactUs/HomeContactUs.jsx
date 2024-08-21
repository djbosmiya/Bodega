import React from 'react'
import './HomeContactUs.css'
import { useState } from 'react';

const HomeContactUs = () => {

    const [isDone, setDone] = useState();

    const doneClass = () => {
        setDone("done");
    }

    setTimeout(() => {
        setDone('');
    }, 5000);

    return (
        <section class="home-contact-section">
            <div class="home-contact-wrap py-4 container">
                <h2>Contact Us</h2>
                <div class="home-contact-inner-wrap py-5 row">
                    <div class="home-contact-text col-md-6">
                        <div class="home-contact-text-wrap">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, soluta magnam illum, tempore placeat eos adipisci voluptatem architecto vitae quo fugit ut itaque. Totam, hic animi. Repellendus distinctio dolore doloremque.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, soluta magnam illum, tempore placeat eos adipisci voluptatem architecto vitae quo fugit ut itaque. Totam, hic animi. Repellendus distinctio dolore doloremque.</p>
                        </div>
                        
                    </div>
                    <div class="home-contact-newsletter col-md-6">
                        <div class="content">
                            <form className={"subscription " + isDone}>
                                <input class="add-email" type="email" placeholder="subscribe@me.now"/>
                                <button onClick={doneClass} class="submit-email" type="button">
                                    <span class="before-submit">Subscribe</span>
                                    <span class="after-submit">Thank you for subscribing!</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContactUs