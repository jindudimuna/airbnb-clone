import React from "react";



function Card ({coverImg, star, stats, location, title, price, openSpots}) 
{

    let badgeText
    if ( openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if ( location === "Online") {
        badgeText = "ONLINE"
    }
    

    return (
        <div className="card">
          { badgeText && <div className="card--badge">{badgeText}</div> }
            <img src={`./images/${coverImg}`} className="cardphoto" alt="cover" />
            <div className="stats">
            <img src={`./images/${star}`} className="star-icon" alt="star" />
            <span>{stats.rating}</span>
            <span className="grey">({stats.reviewCount}) •</span>
            <span className="grey">{location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p><span className="price">${price}</span> / person</p>
        </div>
   
    )
}

export default Card;