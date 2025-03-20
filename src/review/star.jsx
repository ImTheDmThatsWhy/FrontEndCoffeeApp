import React from "react";
import { FaStar } from "react-icons/fa";
import "./review.css";

const colors = {
    yellow: "#Ffff00",
    grey: "#8b8680",
};
const stars = Array(5).fill(0);

function Stars() {}
const Rating = () => {
    return (
        <div className="reviewContainer">
            <h1 className="reviewHeading">
                Write a Review <GiCoffeeCup />
            </h1>
            <div className="star">
                {stars.map((_, index) => {
                    return <FaStar key={index} />;
                })}
            </div>
        </div>
    );
};
export default Rating;
