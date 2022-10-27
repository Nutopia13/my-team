import React from 'react'
import kady from '../../assets/avatar-kady.jpg'
import aiysha from '../../assets/avatar-aiysha.jpg'
import arthur from '../../assets/avatar-arthur.jpg'
import bg_4 from '../../assets/bg-pattern-home-4-about-3.svg'
import bg_5 from '../../assets/bg-pattern-home-5.svg'

const Reviews = () => {
  return (
    <div className='relative overflow-hidden'>
        <img src={bg_4} alt="" />
        <div className='flex mt-10 flex-col text-white text-center max-w-[320px] md:max-w-lg lg:max-w-6xl mx-auto'>
            <h3 className='title  mx-auto max-w-[950px]'>Delivering real results for top companies. Some of our <span className='text-light_blue'>success stories.</span></h3>
            <div>
                <div className='flex mt-12 lg:mt-16 space-y-12 lg:space-y-0 lg:space-x-12  lg:flex-row flex-col'>
                    <div className='cart'>
                        <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <p className='text-lg font-bold pt-4 md:pt-6 text-light_blue'>Kady Baker</p>
                        <p className='font-medium italic text-[13px]'>Product Manager at Bookmark</p>
                        <img src={kady} alt="" className='rounded-full mx-auto border-2 border-[#C4FFFE] mt-6 max-w-[62px]' />
                    </div>
                    <div className='cart'>
                        <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <p className='text-lg font-bold pt-4 md:pt-6 text-light_blue'>Aiysha Reese</p>
                        <p className='font-medium italic text-[13px]'>Founder of Manage</p>
                        <img src={aiysha} alt="" className='rounded-full mx-auto border-2 border-[#C4FFFE] mt-6 max-w-[62px]' />
                    </div>
                    <div className='cart'>
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <p className='text-lg font-bold pt-4 md:pt-6 text-light_blue'>Arthur Clarke</p>
                        <p className='font-medium italic text-[13px]'>Co-founder of MyPhysio</p>
                        <img src={arthur} alt="" className='rounded-full mx-auto border-2 border-[#C4FFFE] mt-6 max-w-[62px]' />
                    </div>
                </div>
            </div>

        </div>
        <img src={bg_5} alt="" className='relative mt-16 lg:left-[90%] md:left-[75%] left-52' />
    </div>
  )
}

export default Reviews