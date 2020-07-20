import React from 'react'

function CountryInfo({countryname}) {
    return (
        <div className="CountryInfo">
            <div className="Info1 ">
            <img src="/images/pic2.jpg" alt="countryinfo"/>
            </div>
            <div className="Info2  ">
                
                <h1>{countryname.country}</h1>
                <p> {countryname.todayCases} Covid-19 cases and {countryname.todayDeaths} deaths reported in {countryname.country} today. Total number of cases in the country is now at {countryname.cases}, including {countryname.active} active cases, & {countryname.deaths} deaths .</p>
                <p>Currently, testing can be performed through the CDC, state and/or local health departments, and other commercial labs such as LabCorp or Quest. Multiple academic medical centers and commercial labs have developed their own test kits for COVID-19.</p>
               
             </div>
           

         
        </div>
    )
}

export default CountryInfo
