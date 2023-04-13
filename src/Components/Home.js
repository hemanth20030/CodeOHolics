import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../Images/home.png'

const Home = () => {

    return (
        <>
            <div className='container my-6'>
                <h1 className='text-[#2192FF] lg:text-4xl text-xl mx-3'>
                    We are Coding and Development Club of CMR Technical Campus
                </h1>
            </div>
            <div className='my-5'>
                <div>
                    <div className="col-lg-6 col-10">
                        <div className="hm2">
                            <div className='mx-4 lg:mx-5'>
                                <p className='text-[#657783] lg:text-2xl text-base'>
                                    CodeOHolics is a Coding club run and maintained by the Students
                                    of CMR Technical Campus. Our main goal is to inculcate coding
                                    skills for the student in our campus.
                                </p>
                                <Link to="/about">
                                    <button type="button" className="btn btn-outline-danger">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end lg:mr-20 mr-5">
                <img className='w-[350px] md:w-[450px] lg:w-[600px] lg:h-[350px]' src={HomeImg} alt='' />
            </div>
        </>
    )
}

export default Home