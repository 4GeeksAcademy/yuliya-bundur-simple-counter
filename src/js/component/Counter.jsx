import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


export const Counter = (props) => {

    return (
        <div className="card" style={{ backgroundColor: "black" }}>
            <div className="card-body" style={{ display: "flex", alignItems: "center" }}>

                <h1 style={{ color: "white" }}>
                    {props.four}
                </h1>
                <h1 style={{ color: "white" }}>
                    {props.three}
                </h1>
                <h1 style={{ color: "white" }}>
                    {props.two}
                </h1>
                <h1 style={{ color: "white" }}>
                    {props.one}
                </h1>
            </div>
        </div>
    );
}


let seconds = 0;
setInterval(() => {
    seconds++;
    const four = Math.floor(seconds % 10000 / 1000)
    const three = Math.floor(seconds % 1000 / 100)
    const two = Math.floor(seconds % 100 / 10)
    const one = Math.floor(seconds % 10)
    ReactDOM.render(<Counter two={two} one={one} four={four} three={three} />, document.querySelector("#app"));
}, 1000);

export default Counter;