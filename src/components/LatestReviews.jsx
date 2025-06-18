import React from "react";

const Rct = () => {
    return (
        <div id="treatments" className="flex flex-col items-center justify-center">
            <h1 className='text-5xl text-black font-bold bg-white text-center px-4'>Restorative Care Treatments</h1>
            <div className='flex flex-col gap-10 items-center justify-center bg-white py-10'>

                {/* First row */}
                <div className="w-full overflow-x-auto lg:overflow-visible">
                    <div className='flex flex-nowrap gap-6 px-4 lg:justify-center'>
                        <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                            <img src="TeethW.png"
                                alt="Teeth Whitening"
                                className="w-60 h-40 object-contain border-gray-300 rounded-2xl shadow-2xl py-2 px-2" />
                            <h1 className='text-2xl mt-2 font-bold text-black'>Teeth Whitening</h1>
                            <p className="mt-4 mb-4 px-4 text-lg text-black text-center">Get a brighter, whiter smile with our safe and effective teeth whitening. Remove stains and enjoy lasting results with just one quick treatment.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                            <img src="TeethC.png"
                                alt="Teeth Cleaning"
                                className="w-60 h-40 object-contain border-gray-300 rounded-2xl shadow-2xl py-2 px-2" />
                            <h1 className='text-2xl mt-2 font-bold text-black'>Teeth Cleaning</h1>
                            <p className="mt-4 mb-4 px-4 text-lg text-black text-center">Keep your smile healthy and bright with our professional teeth cleaning. Remove plaque, prevent cavities, fresh breath with a gentle treatment.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                            <img src="TeethF.png"
                                alt="Teeth Filing"
                                className="w-60 h-40 object-contain border-gray-300 rounded-2xl shadow-2xl py-2 px-2" />
                            <h1 className='text-2xl mt-2 font-bold text-black'>Teeth Filing</h1>
                            <p className="mt-4 mb-4 px-4 text-lg text-black text-center">Smooth and reshape your teeth with professional filing. Enhance your smile and fix imperfections naturally.</p>
                        </div>
                    </div>
                </div>

                {/* Second row */}
                <div className="w-full overflow-x-auto lg:overflow-visible">
                    <div className='flex flex-nowrap gap-6 px-4 lg:justify-center'>
                        <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                            <img src="bkimage.png"
                                alt="Fluorosis"
                                className="w-60 h-40 object-contain border-gray-300 rounded-2xl shadow-2xl py-2 px-2" />
                            <h1 className='text-2xl mt-2 font-bold text-black'>Fluorosis</h1>
                            <p className="mt-4 mb-4 px-4 text-lg text-black text-center">Restore your smile’s natural beauty. Our treatments reduce stains and discoloration for a confident look.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                            <img src="boy.png"
                                alt="Abrasion"
                                className="w-60 h-40 object-contain border-gray-300 rounded-2xl shadow-2xl py-2 px-2" />
                            <h1 className='text-2xl mt-2 font-bold text-black'>Abrasion</h1>
                            <p className="mt-4 mb-4 px-4 text-lg text-black text-center">Abrasion is enamel wear from aggressive brushing or abrasive toothpaste. We help protect and restore your teeth.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl bg-white min-w-[300px]'>
                            <img src="AboutUsPic.png"
                                alt="Tooth Removal"
                                className="w-60 h-40 object-contain border-gray-300 rounded-2xl shadow-2xl py-2 px-2" />
                            <h1 className='text-2xl mt-2 font-bold text-black'>Tooth Removal</h1>
                            <p className="mt-4 mb-4 px-4 text-lg text-black text-center">Safe and comfortable extraction for damaged or overcrowded teeth, handled by our experienced team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rct;
