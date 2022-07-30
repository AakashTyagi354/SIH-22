import React, { useEffect } from 'react'
import './home.css'
import imgVolume from '../home../../../img/Screenshot (801).png'
import imgChart from '../home../../../img/Screenshot (796).png'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
    
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, [])
    return (
        <div className='home'>
            <div className="homeTop">

                <div className="homeLeft">
                    <div className="homeTitle">
                        <h4 data-aos="fade-left">Own your future <br /> with Upstox</h4>
                        <p className='homeP' data-aos="zoom-out">Investing and trading made simple, affordable <br /> and accessible for you.</p>
                    </div>
                    <div className="homeBtn" data-aos="fade-right">Get Started</div>
                </div>
                <div className="homeRight">
                    {/* <img className='chartImg' src={imgChart} alt="" /> */}
                </div>
            </div>
            <div className="homeBottom">
                <img className='homeImg' src={imgVolume} data-aos="fade-up" alt="" />
            </div>
        </div>
    )
}

export default Home