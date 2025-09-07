import React from "react";
import Card from "./card.jsx";

const CardJoined = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-3">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>)
};

export default CardJoined;
