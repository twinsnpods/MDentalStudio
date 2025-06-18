import React from "react";

const Rct = () => {
    return (
        <div id="treatments" className="flex flex-col items-center justify-center">
            <h1 className='text-5xl text-black font-bold bg-white'>Restorative Care Treatments</h1>
            <div className='flex flex-col gap-4 items-center justify-center bg-white pt-30'>
                
                {/* First row */}
                <div className='w-full flex flex-row gap-16 items-center justify-start bg-white ml-4 mr-4 pb-20 overflow-x-auto lg:justify-center lg:overflow-visible'>
                    <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                        <img src="TeethW.png"
                            alt="Dental Studio Logo"
                            className="w-150 h-70 border-gray-300 rounded-4xl shadow-2xl py-2 px-2" />
                        <h1 className='text-3xl mt-2 font-bold !text-black'>Teeth Whitening</h1>
                        <p className="mt-4 mb-2 text-0.5xl mr-2 ml-2 text-2xl !text-black">Get a brighter, whiter smile with our safe and effective teeth whitening. Remove stains and enjoy lasting results with just one quick treatment.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                        <img src="TeethC.png"
                            alt="Dental Studio Logo"
                            className="w-150 h-70 border-gray-300 rounded-4xl shadow-2xl py-2 px-2" />
                        <h1 className='text-3xl mt-2 font-bold !text-black'>Teeth cleaning</h1>
                        <p className="mt-4 mb-2 text-0.5xl mr-2 ml-2 text-2xl !text-black">Keep your smile healthy and bright with our professional teeth cleaning. Remove plaque, prevent cavities, fresh breath with a quick, natural, gentle treatment.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                        <img src="TeethF.png"
                            alt="Dental Studio Logo"
                            className="w-150 h-70 border-gray-300 rounded-4xl shadow-2xl py-2 px-2" />
                        <h1 className='text-3xl mt-2 font-bold !text-black'>Teeth filing</h1>
                        <p className="mt-4 mb-2 text-0.5xl mr-2 ml-2 text-2xl !text-black">Smooth and reshape your teeth with professional filing. Enhance your smile, fix minor imperfections, and achieve a natural, gentle treatment.</p>
                    </div>
                </div>

                {/* Second row */}
                <div className='w-full flex flex-row gap-16 items-center justify-start bg-white ml-4 mr-4 pb-20 overflow-x-auto lg:justify-center lg:overflow-visible'>
                    <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                        <img src="bkimage.png"
                            alt="Dental Studio Logo"
                            className="w-150 h-70 border-gray-300 rounded-4xl shadow-2xl py-2 px-2" />
                        <h1 className='text-3xl mt-2 font-bold !text-black'>Flourosis</h1>
                        <p className="mt-4 mb-2 text-0.5xl mr-2 ml-2 text-2xl !text-black">Restore your smile’s natural beauty. Our professional solutions reduce stains and discoloration, giving you a healthier, more confident look.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                        <img src="boy.png"
                            alt="Dental Studio Logo"
                            className="w-150 h-70 border-gray-300 rounded-4xl shadow-2xl py-2 px-2" />
                        <h1 className='text-3xl mt-2 font-bold !text-black'>Abrasion</h1>
                        <p className="mt-4 mb-2 text-0.5xl mr-2 ml-2 text-2xl !text-black">Abrasion is the gradual wearing down of enamel due to mechanical forces like aggressive brushing or abrasive toothpaste, leading to sensitivity and potential tooth damage.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                        <img src="AboutUsPic.png"
                            alt="Dental Studio Logo"
                            className="w-150 h-70 border-gray-300 rounded-4xl shadow-2xl py-2 px-2" />
                        <h1 className='text-3xl mt-2 font-bold !text-black'>Teeth removal</h1>
                        <p className="mt-4 mb-2 text-0.5xl mr-2 ml-2 text-2xl !text-black">We offer tooth extraction for severe decay, damage, or overcrowding, performed safely and comfortably by our experienced dental team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rct;
