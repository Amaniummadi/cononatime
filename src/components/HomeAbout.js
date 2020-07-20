import React from 'react'
// import About from './About'
import {Link} from "react-router-dom"


function HomeAbout() {
    return (
        <div className="HomeAbout">
            <div className="container">
            <div class="grid grid-rows-1 grid-flow-col gap-2">
                <div class="row-span-3 ">
                    <h1>About COVID-19</h1>
                </div>
                <div class="row-span-1 col-span-2 ">
                    {/* <h2>What you should know about COVID-19 to protect yourself and others</h2> */}
                </div>
                <div class="row-span-2 col-span-2 ">
                    <p>A novel coronavirus is a type of coronavirus that has not been previously identified. The novel coronavirus that caused the 2019 outbreak is different than the coronavirus that is commonly circulated among humans that cause mild illness, such as the common cold. A diagnosis with coronavirus NL63, OC43, 229E, or HKU1 is not the same as the COVID-19.Two other coronaviruses have previously emerged that cause severe illness in people (MERS-CoV and SARS-CoV). The virus that causes COVID-19 is more genetically related to SARS-CoV than MERS-Co, but both are betacoronaviruses with their origins in bats.
                    <span><Link to="about">Read more</Link></span>
                    </p>
  
                </div>
            </div>
          
            </div>
         
           
           
        </div>
    )
}

export default HomeAbout
