import React from 'react';
import image from "../group.png";

export default function Hero(){
    return (
        <section className = "hero">
            <img src = {image} className = "hero--img"  />
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    );
}