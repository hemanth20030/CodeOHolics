import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import EventItems from './EventItems';
import helloCareer from '../Images/hellocareer.png'
import sixDaysCompany from '../Images/sixdayscompany.jpg';
import Hackforet from '../Images/HACKFORET.jpg';
// import hackforet from '../Images/hackforet.png';
import kickstarters from '../Images/kickstarters.jpeg';

SwiperCore.use([Navigation, Pagination]);
const Events = () => {
    const events = [
        {
            img: `${helloCareer}`,
            title : "Hello Career",
            description : `The event was on topics “How to crack interviews
            (Technical)” and “What takes it to be a great Software
            Engineer” We invited Arsh Goyal (NIT Jalandhar – Gold
            Medallist), who works for Samsung as Senior Software
            Engineer (He is one of top Influencers in LinkedIn &
            YouTube with 100k followers and 88k Subscribers). We
            Invited Manasa Inampudi working as product manager at
            GOOGLE.`
        },
        {
            img: `${sixDaysCompany}`,
            title : "Six Companies 30 Days",
            description : `It was a workshop, where we collabrated with ARSH GOYAL
            (Samsung | Ex-CodeChef | Ex- ISRO | Gold Medalist - NIT
            Jalandhar) through which we brought awareness of cracking
            product based company and asked participants to solve the
            frequently asked questions by top companies like FAANG. The
            event was for 30 days where every 5 days questions will be
            changed according to the company to crack the technical
            round of that company.`
        },
        {
            img: `${Hackforet}`,
            title : "HACKFORET",
            description : `HACKFORET a hackathon based on ed-tech theme that was the
            one of the biggest event ever conducted in the college The
            event was national wide and it was virtual and around 1200
            students participated from all the branches and years.`
        },
        {
            img: `${kickstarters}`,
            title : "Kickstarters",
            description : `To introduce the CodeChef platform and how the contest goes on and to improve their problem-solving skills & critical thinking.

            This was our first coding contest hosted on the CodeChef platform.
            
            Winners were rewarded with the CodeChef laddus.`
        },

    ];
    const event = []
    for (let i = 0; i < events.length; i++) {
        event.push(
            <SwiperSlide key={`slide-${i}`} tag='li' className=''>
                <EventItems no={`${i}`} events = {events[i]}/>
            </SwiperSlide>

        );
    }
    return (
        <>
            <div className='container my-2 text-center'>
                <h1 className='text-[#2192FF] lg:text-4xl text-2xl mt-3'>
                    Our Events
                </h1>
            </div>
            <div className='my-20 lg:my-28'>
                <Swiper id='events' tag='div' wrapperTag='ul' navigation spaceBetween={0} slidesPerView={window.screen.availWidth > 425 ? 3 : 1} >
                    {event}
                </Swiper>
            </div>
        </>
    )
}
export default Events;