import React from "react";
import "./styleToggle.css";

export default function Toggle({toggled, onClick }) {
    return <div onClick={onClick} className={`toggle${toggled ? " spanish" : " english" }`}>
        <div className="notch">
        <div className="en"><p>{`${toggled ? "ES" : "EN" }`}</p></div>
        </div>
        <div className="es"><p>{`${toggled ? "EN" : "ES" }`}</p></div>
    </div>
}