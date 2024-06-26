import { useState } from "react";
import "./ToggleSwitch.css";
import {IoIosSwitch} from 'react-icons/io';

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }

    const checkIsOn = isOn ? "on" : "off"
    const bgColor = {
        backgroundColor: isOn? "green" : "red"
    }

    return (
        <>
        <h1 className="flex justify-center items-center gap-3 text-green-600">Toggle Switch <IoIosSwitch/></h1>
        <div className="toggle-switch" style={bgColor} onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`}>
                <span className={`switch-state`}>{checkIsOn}</span>
            </div>
        </div>
        </>
    )
} 