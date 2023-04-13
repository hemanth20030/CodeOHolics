import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import TeamItems from './TeamItems';
import President from '../Images/coreTeam/manav.png';
import VicePresident1 from '../Images/coreTeam/ibrahim.jpg';
import VicePresident2 from '../Images/coreTeam/aastha.png';
import CPLead from '../Images/coreTeam/hemanth.jpg';
import OutReachLead from '../Images/coreTeam/vamshi.jpeg';
import MediaLead from '../Images/coreTeam/sulakshana.jpeg';
import EventsLead from '../Images/coreTeam/Sameera.jpeg';
import DevelopmentLead from '../Images/coreTeam/nikhil.jpg';
import ExecutiveLead from '../Images/coreTeam/ExecutiveLead.jpeg';

SwiperCore.use([Navigation, Pagination]);
const Team = () => {
    const teams = [
        {
            pic: `${President}`,
            name: "Manav Patel",
            position: "President"
        },
        {
            pic: `${VicePresident1}`,
            name: "Ibrahim",
            position: "Vice-President"
        },
        {
            pic: `${VicePresident2}`,
            name: "Astha Sharma",
            position: "Vice-President"
        },
        {
            pic: `${CPLead}`,
            name: "Madala Hemanth",
            position: "Cp Lead"
        },
        {
            pic: `${OutReachLead}`,
            name: "K.Vamshi Krishna",
            position: "Media Lead"
        },
        {
            pic: `${MediaLead}`,
            name: "K.Raja Sulakshana",
            position: "Outreach Lead"
        },
        {
            pic: `${EventsLead}`,
            name: "Mani Krishna Sameera",
            position: "Events Lead"
        },
        {
            pic: `${DevelopmentLead}`,
            name: "Leo Nikhil Mothukuri",
            position: "Development Lead"
        },
        {
            pic: `${ExecutiveLead}`,
            name: "Sujith",
            position: "Executive Lead"
        },

    ];
    const team = []
    for (let i = 0; i < teams.length; i++) {
        team.push(
            <SwiperSlide key={`slide-${i}`} tag='li' className=''>
                <TeamItems no={`${i}`} teams={teams[i]} />
            </SwiperSlide>

        );
    }
    return (
        <>
            <div className='container my-2 text-center'>
                <h1 className='text-[#2192FF] lg:text-4xl text-2xl mt-3'>
                    Our Core Team
                </h1>
            </div>
            <div className='mt-12 lg:my-20 md:d-none'>
                <Swiper id='teams' tag='div' wrapperTag='ul' navigation spaceBetween={0} slidesPerView={window.screen.availWidth > 425 ? 3 : 1} >
                    {team}
                </Swiper>
            </div>
            <div className='container mt-5'>
                <div className='container text-center'>
                    <h1 className='text-[#2192FF] lg:text-4xl text-2xl'>
                        Our Executive Team
                    </h1>
                </div>
                <div className='container mt-4'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aavuka Keerthan</td>
                                <td>CSG</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Jermiya Kakani</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>A. Mamatha</td>
                                <td>CSM</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>P.Samsritha</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Abhiram</td>
                                <td>CSG</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Juveria Khanam</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>K.RAHUL</td>
                                <td>CSD</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Sri Ram Reddy </td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Sadguru</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Yadu Nandan </td>
                                <td>ECE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Sachit Kumbhat</td>
                                <td>AIML</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Yashwanth Kumaar Kakani</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Daram sreya</td>
                                <td>ECE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Farhan Ahmed</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>GARLAPATI KARTHIKEYA REDDY</td>
                                <td>ECE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>H.ABHIJITH</td>
                                <td>ECE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Ashika</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Md Shaibaz</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>MOIDUDDIN AHMED</td>
                                <td>AIML</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>N.Preetham</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>P Nitin Kumar</td>
                                <td>CSD</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Vaishnavi kadham</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Subhashish Saha</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Surna srikanth</td>
                                <td>CSE</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>M.vishnuvardhan</td>
                                <td>CSE</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Karthik Kandi</td>
                                <td>CSM</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>M.Paul Abhishek Emmanuel</td>
                                <td>CSE</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>BONDUGULAPATI SRINIVAS RAO</td>
                                <td>CSE</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>M.Paul Abhishek Emmanuel</td>
                                <td>CSE</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Ch.shreya</td>
                                <td>CSM</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Afsha Khan</td>
                                <td>CSM</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Bhavana Reddy</td>
                                <td>CSM</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>HariharanUmmadisetti</td>
                                <td>CSE</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>TSS BHARAT</td>
                                <td>CSE</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Venkata Sai Jupalli</td>
                                <td>CSE</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Prarthna Agarwal</td>
                                <td>CSE</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Sai Ganesh</td>
                                <td>DS</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Team;