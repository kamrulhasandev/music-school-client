import React from "react";
import piano from '../../../assets/piano.png'
import giutar from '../../../assets/giutar.png'
import cello from '../../../assets/cello.png'
import drum from '../../../assets/drum-set.png'
import violin from '../../../assets/violin.png'
import voice from '../../../assets/voice-search.png'

const MusicalInstrument = () => {
  return (
    <div className="max-w-screen-xl px-10 mx-auto py-10">
      <div>
      <div className="flex flex-col items-center py-10">
        <h3 className="text-4xl font-bold">Musical Instruments</h3>
        
      </div>
        <div>
            <div className="md:grid grid-cols-3 gap-32">
                <div className="flex flex-col gap-3 items-center border-2 border-[#F65209] p-2 rounded hover:bg-[#F65209] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mb-5 md:mb-0 shadow-md shadow-[#f65209]">
                    <img src={piano} className="w-20" alt="" />
                    <h1 className="text-xl font-bold">Piano</h1>
                    <p>It is a musical instrument played using a keyboard.</p>
                </div>
                <div className="flex flex-col gap-3 items-center border-2 border-[#F65209] p-2 rounded hover:bg-[#F65209] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mb-5 md:mb-0 shadow-md shadow-[#f65209]">
                    <img src={giutar} className="w-20" alt="" />
                    <h1 className="text-xl font-bold">Guitar</h1>
                    <p>The guitar is classified as a string instrument.</p>
                </div>
                <div className="flex flex-col gap-3 items-center border-2 border-[#F65209] p-2 rounded hover:bg-[#F65209] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mb-5 md:mb-0 shadow-md shadow-[#f65209]">
                    <img src={cello} className="w-20" alt="" />
                    <h1 className="text-xl font-bold">Cello</h1>
                    <p>The cello is used as a solo musical instrument.</p>
                </div>
                <div className="flex flex-col gap-3 items-center border-2 border-[#F65209] p-2 rounded hover:bg-[#F65209] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mb-5 md:mb-0 shadow-md shadow-[#f65209]">
                    <img src={violin} className="w-20" alt="" />
                    <h1 className="text-xl font-bold">Violin</h1>
                    <p>The violin has four strings tuned in perfect fifths.</p>
                </div>
                <div className="flex flex-col gap-3 items-center border-2 border-[#F65209] p-2 rounded hover:bg-[#F65209] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mb-5 md:mb-0 shadow-md shadow-[#f65209]">
                    <img src={drum} className="w-20" alt="" />
                    <h1 className="text-xl font-bold">Drums</h1>
                    <p>Can play by striking with the hand or two sticks.</p>
                </div>
                <div className="flex flex-col gap-3 items-center border-2 border-[#F65209] p-2 rounded hover:bg-[#F65209] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mb-5 md:mb-0 shadow-md shadow-[#f65209]">
                    <img src={voice} className="w-20" alt="" />
                    <h1 className="text-xl font-bold">Voice</h1>
                    <p>It is a type of music performed by one or more singers.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MusicalInstrument;
