import React from 'react'
import ShowMore from 'react-show-more-button';
const EventItems = (props) => {
    return (

        <div className="card w-60 ml-10 lg:ml-16">
            <img className="card-img-top w-10 h-52" src = {props.events.img} alt={`${props.no}`}></img>
            <div className="card-body">
                <h5 className="card-title text-center">{props.events.title}</h5>
                <ShowMore styleButton={{width : "150px", height:"50px"}} maxHeight={175}> 
                    <p className="card-text">{props.events.description}</p>
                </ShowMore>
            </div>
        </div>
    )
}

export default EventItems;
