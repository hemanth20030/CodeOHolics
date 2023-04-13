import React from 'react'
const TeamItems = (props) => {
    return (
        <div className=" w-60 ml-10 lg:ml-16">
            <div className='container mt-3'>
                <img className="w-52 h-52 rounded-full" src={props.teams.pic} alt={`${props.no}`}></img>
            </div>
            <div className="card-body space-y-5">
                <h5 className="card-title text-center mt-4">{props.teams.name === '' ? "Name": props.teams.name}</h5>
     <h5 className="card-title text-center">{props.teams.name === '' ? "Position": props.teams.position}</h5>
            </div>
        </div>
    )
}

export default TeamItems;
