import React from 'react';
import Navbar from "../Components/Navbar";
import globalbg from "../Assets/HomePageVideo/chipdesign.png"
const Home = () => {
    return (
        <>
            <div>
                <div className='font-mono text-ieeewhite bg-ieeegrey'>
                    <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
                        <div className='bg-pracula'>
                            <Navbar />
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${globalbg})`}} className='h-[90vh] lg:bg-fixed bg-cover bg-no-repeat'>
                    </div>
                    <div className='mx-[5vw] lg:mx-[10vw]'>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;