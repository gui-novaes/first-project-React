import { useState } from "react";
import useLogTemperature from "./hooks/useLogTemperaure";


function TemperatureConverter() {
    const [celsius, setCelsius] = useState(0);
    const [resultFahrenheit, setResultFahrenheit] = useState(0);
    const [resultKelvin, setResultKelvin] = useState(0);

    return (
        <>
            <h1>Temperature Converter for Farenheit and Kelvin</h1>

            <div className="card">
                <label>
                    Celsius
                    <input value={celsius} onChange={e => setCelsius(Number(e.target.value))}/>
                    °C
                </label>
            </div>

            <button onClick={() => setResultFahrenheit((celsius * 9/5) + 32)}>in Farenheit?</button>
            
            <button onClick={() => setResultKelvin(celsius + 273.15)}>in Kelvin?</button>

            <br></br>
            <br></br>
            <div>
            <span>Farenheit: {resultFahrenheit} °F </span>
            <br></br>
            <br></br>
            <span onClick={useLogTemperature(celsius)}>Kelvin:  {resultKelvin} K </span>
            </div>
        </>

    );
}

export default TemperatureConverter;