import React from "react";
import star from "../star.png"


export default function Card(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.country === "Online"){
        badgeText = "ONLINE";
    }
    return (
        <div className="Card">
            {badgeText && <div className="card--badge bold">{badgeText}</div>}
            <img src = {`/${props.img}`} className="Card--photo"/>
            <div className="Card--stats">
                <img src= {star} className = 'Card--star'/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}).{props.country}</span>
            </div>
            <div>
            <p>{props.title}</p>
            <span className="bold">From ${props.price} </span>
            <span>/ person</span>
            </div>
        </div>
    );
}