import React, { useState } from "react"

export default function BaseStatusEntity(jsonEntity) {
    // const [inChargeComplex, setInChargeComplex] = useState({
    //     complexName: null
    // })
    const [lastUpdateTime, setLastUpdateTime] = useState("")
    const [weatherStatus, setWeatherStatus] = useState({
        cloudCover: {
            hebrewValue: null
        },
        cloudBase: null,
        cloudCeiling: null,
        visibility: 10000,
        windDirection: 220,
        windStrength: 15,
        temperature: 14,
        humidity: 47,
        weatherStatus: {
            hebrewValue: "ראיה"
        }
    })
    const [barometricPressureData, setBarometricPressureData] = useState({
        inchPressure: null,
        milibarPressure: null
    })
    

}

