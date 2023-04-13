import React from 'react';
import AboutImg from '../Images/about.png';
import Contacts from './Contact';
const About = () => {
    return (
        <>
            <div className='container my-2 text-center'>
                <h1 className='text-[#2192FF] lg:text-4xl text-2xl my-3'>
                    What do we do?
                </h1>
            </div>
            <div className='lg:my-10'>
                <div className='my-2'>
                    <div className="col-lg-10 col-12">
                        <div className="hm2">
                            <div className='mx-4 lg:mx-5'>
                                <p className='text-[#657783] lg:text-2xl text-base'>
                                Our primary intention is to promote all – round development of
                                students through interactive sessions, events, workshops and
                                projects that help them percieve real-world problems. We strive
                                hard to educate and guide our members by equpping them with
                                technical and management skills, thereby enabling them to make
                                significant contributions towards the community.
                                Bring a competitive programming culture to the campus Building
                                Network Organizing regular events, contests, Hackathons,
                                Interactive Workshops, Seminars, etc Make an impact where we help
                                our peers in improving their coding skills by serving them the
                                best content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end lg:mr-20 mr-5">
                <img className='w-[230px] md:w-[450px] lg:w-[500px] lg:h-[350px]' src={AboutImg} alt='' />
            </div>
            <Contacts/>
        </>
    )
}

export default About;

// <div>
//       <div className="ab1 pl-5">
//         <div className="ab2">
//           <h1 style={{ color: "#2192FF" }}>What do we do?</h1>
//         </div>

//         <div className="row">
//         <div className="col-lg-5" style={{ paddingLeft: "100px" }}>
//             <img src={props.aboutimg} alt="" />
//           </div>
//           <div className="col-lg-5 ">
//             <p style={{ color: "#657783", fontSize: "20px" }}>
//               Our primary intention is to promote all – round development of
//               students through interactive sessions, events, workshops and
//               projects that help them percieve real-world problems. We strive
//               hard to educate and guide our members by equpping them with
//               technical and management skills, thereby enabling them to make
//               significant contributions towards the community.
//             </p>
//             <p style={{ color: "#657783", fontSize: "20px" }}>
//               Bring a competitive programming culture to the campus Building
//               Network Organizing regular events, contests, Hackathons,
//               Interactive Workshops, Seminars, etc Make an impact where we help
//               our peers in improving their coding skills by serving them the
//               best content.
//             </p>
//           </div>
        
//         </div>
//         <div
//           className="ab3 p-5"
//           style={{ width: "50%", marginTop: "150px" }}
//         ></div>
//       </div>
//     </div>

    
