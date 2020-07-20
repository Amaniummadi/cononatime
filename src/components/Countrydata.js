import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Countrydata.css'
function Countrydata({countryname}) {
    // console.log("countryname",countryname);
    return (
        <div className="mainCountrydata w-1/4 p-2 inline-flex">
        <Link to={`/${countryname.country}`} >
           
            <div className="countrydata p-4 pt-5 pb-5" >
                <h2>{countryname.country}</h2>
                    <div className="mt-4">
                        <p>Total Cases : <span>{countryname.cases}</span></p>
                        <p>Total Deaths : <span>{countryname.deaths}</span></p>
                        <p>Total Recovered :<span>{countryname.recovered}</span></p>
                        <p>TodayCases :<span>{countryname.todayCases}</span></p>
                        <p>TodayDeaths :<span>{countryname.todayDeaths}</span></p>
                        <p>TotalTests :<span>{countryname.totalTests}</span></p>
                    </div>
                <button className="read-btn">Read more</button>
            </div>
         

        </Link>
        </div>
       
    )
}

export default Countrydata
