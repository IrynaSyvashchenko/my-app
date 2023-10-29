import React, {useState} from "react";
import Card from "../Card";
import "./index.css";


function Cards({ allData }) {

    return (
        <>
            <div className="cards">
                {allData.map((data, index) => (
                    <Card cardData={data} key={index} />
                ))}
            </div>
        </>
    );
}

export default Cards;
