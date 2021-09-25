import React, { useState } from "react"
"inChargeComplex": {
    "complexName": "שם הבסיס"
},
"lastUpdateTime": "",
"weatherStatus": {
    "cloudCover": {
        "hebrewValue": "0/8"
    },
    "cloudBase": null,
    "cloudCeiling": null,
    "visibility": 10000,
    "windDirection": 220,
    "windStrength": 15,
    "temperature": 14,
    "humidity": 47,
    "weatherStatus": {
        "hebrewValue": "ראיה"
    }
},
"barometricPressureData": {
    "inchPressure": 2988,
    "milibarPressure": 101185
}
export default function WeatherStatusEntity(jsonEntity) {
    const [cloudCover, setCloudCover] = useState({
        hebrewValue: null
    })
    const [cloudBase, setCloudBase] = useState(null)
    const [cloudCeiling, setCloudCeiling] = useState(null)
    const [visibility, setVisibility] = useState(null)
    const [inChargeComplexName, setInChargeComplexName] = useState("")
    const [inChargeComplexName, setInChargeComplexName] = useState("")
    const [inChargeComplexName, setInChargeComplexName] = useState("")
    const [inChargeComplexName, setInChargeComplexName] = useState("")
    const [inChargeComplexName, setInChargeComplexName] = useState("")


}