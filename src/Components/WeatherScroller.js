import React from "react";

function WeatherScroller({allWeathers, regions}) {


    
    let tickerItems = regions.map(region => {
        const weather = allWeathers.find((weather) => {
            return weather.region.id === region.id
        })
       
        console.log(weather)

        return (
            <div className="ticker-item" key={region.id}><b>{region.name}</b>: {weather ? weather.description : null}</div>
        );
    })

    return(
        <div>
            <div className="tcontainer"><div className="ticker-wrap"><div className="ticker-move">
                {tickerItems}
            </div></div></div>
        </div>
    );
}

export default WeatherScroller;