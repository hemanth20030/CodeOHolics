import React from 'react'
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <>
            <div className='text-[#2192FF] text-center lg:text-4xl text-2xl my-3 font-bold'>
                Contact Us
            </div>
            <div className="container row">
                <div className="col-12 col-md-8 mx-4">
                    <div>
                        <p className='text-[#34393b] lg:text-xl text-base font-bold'>
                            <font>Email : <a className="text-[#677078]" href="/" target = "_blank">CodeOHolics@cmrtc.ac.in</a></font>
                        </p>
                        <p className=' text-[#34393b] text-base font-extrabold'>
                            <a href="https://www.google.com/search?q=cmrtc%20campus%20location&rlz=1C1AVFC_enIN930IN930&oq=cmrtc+campus+location&aqs=chrome..69i57j33i10i160l3.6825j0j15&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZp4_yKy6EE_EYjixOo12UzC3xD-g:1668241785929&rflfq=1&num=10&rldimm=11972575654930742252&lqi=ChVjbXJ0YyBjYW1wdXMgbG9jYXRpb25I2JmPoI24gIAIWhwQARgAGAEiDGNtcnRjIGNhbXB1cyoCCAMqAggCkgEHY29sbGVnZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSMU9WcGxNVmRSRUFFqgEOEAEqCiIGY2FtcHVzKAA&ved=2ahUKEwiv0rL4nKj7AhVF4DgGHd6OAC0QvS56BAgOEAE&sa=X&rlst=f#rlfi=hd:;si:;mv:[[17.668288889213542,78.62687499924156],[17.576833386511282,78.43530090256188],null,[17.622566934270537,78.53108795090172],13]" target = "_blank"> <i className="fa-sharp fa-solid fa-location-dot mr-2  fa-xl text-slate-600 hover:text-[#ff0000]"></i>
                            </a>
                            Address
                        </p>
                        <div className='mx-1' >
                            <font>Cmr Technical Campus</font>
                            <br />
                            <font>Near ORR junction, Kandlakoya,</font>
                            <br />
                            <font>Medchal Road,</font>
                            <br />
                            <font>Hyderabad 501401,</font>
                            <br />
                            <font>Telangana</font>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-2 mx-4 my-2">
                    <p className='text-[#34393b] lg:text-xl text-lg font-bold'><strong>Follow us on</strong></p>
                    <a href="https://www.youtube.com/channel/UCJfu4MvWEq0e4z-cz1VcLDw" target = "_blank"> <i className="fa-brands fa-youtube mx-2  fa-xl text-slate-600 hover:text-[#c4302b]"></i></a>
                    <a href="https://www.instagram.com/codeoholics/" target = "_blank"><i className="fa-brands fa-instagram mx-2 fa-xl text-slate-600 hover:text-[#E4405F]"></i></a>
                    <a href="https://www.linkedin.com/in/codeoholics-club-67968222b/" target ="_blank"><i className="fa-brands fa-linkedin mx-2 fa-xl text-slate-600 hover:text-[#0077b5]"></i></a>
                    <a href="https://discord.gg/x8X5PwyG" target = "_blank"><i className="fa-brands fa-discord mx-2 fa-xl text-slate-600 hover:text-[#738ADB]"></i></a>
                </div>
            </div>
        </>
    )
}

export default Contacts;