import React from 'react';
import Location from "assets/location-dot-solid.svg"

export default function Search() {
  return (
    <section className='py-[80px] bg-landing-search bg-no-repeat bg-bottom bg-[100%_auto] min-h-[450px]' >
      <div>
        <div>
          <div className='text-center'>
            <h1 className='text-[40px] mb-2 font-[600] '>Search Doctor, Make an Appointment</h1>
            <p>
              Discover the best doctors, clinic &amp; hospital the city nearest
              to you.
            </p>
          </div>

          <div>
            <form className='flex items-center justify-center gap-12'>
              <div className='flex flex-col relative'>
                <label htmlFor="">
                <Location className="w-[20px] h-[20px] absolute left-0 top-1/2 -translate-y-1/2"/>
                </label>
                <input
                  type='text'
                  className='border-[1px] border-[#ccc] rounded py-[6px] font-[15px] pr-[15px] pl-[35px] focus:outline-none'
                  style={{
                    boxShadow: "inset 0 0px 0px rgb(0 0 0 / 8%)"
                  }}
                  placeholder='Search Location'
                  />
                
                <span >Based on your Location</span>
              </div>
              <div className='flex flex-col'>
                <input
                  type='text'
                  className='border-[1px] border-[#ccc] rounded py-[6px] font-[15px] pr-[15px] pl-[35px]'
                  style={{
                    boxShadow: "inset 0 0px 0px rgb(0 0 0 / 8%)"
                  }}
                  placeholder='Search Doctors, Clinics, Hospitals, Diseases Etc'
                />
                <span >Ex : Dental or Sugar Check up etc</span>
              </div>
              <button type='submit' >
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
