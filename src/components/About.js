import React from 'react'
import '../css/AboutUs.css'

function About() {
    return (
        <div className="aboutus" >
            <div className="container">
            <h1>About COVID-19</h1>
            <p>COVID-19 is a new disease, or novel coronavirus, that has not previously been seen in humans.
            SARS-CoV-2 is the virus that causes COVID-19, the disease.
            The name of the new disease is coronavirus disease 2019, abbreviated as COVID-19.</p>
           <div className="aboutus-img">
           <img src="/images/covid2.jpg" alt="covidimg"/>
           </div>
            <p>This illustration, created at the Centers for Disease Control and Prevention (CDC), reveals ultrastructural morphology exhibited by coronaviruses. Note the spikes that adorn the outer surface of the virus, which impart the look of a corona surrounding the virion, when viewed electron microscopically. A novel coronavirus, named Severe Acute Respiratory Syndrome coronavirus 2 (SARS-CoV-2), was identified as the cause of an outbreak of respiratory illness first detected in Wuhan, China in 2019. The illness caused by this virus has been named coronavirus disease 2019 (COVID-19)</p>
            <h2>What are the symptoms?</h2>
            <div className="aboutus-div">
            <ul>
                <li>Dry cough</li>
                <li>Chills</li>
                <li>Sore throat</li>
                <li>Fever</li>
                <li>Diarrhea</li>
                
            </ul>
            <ul>
            <li>Fatigue</li>
                <li>Muscle pain</li>
                <li>Headache</li>
                <li>Loss of taste or smell</li>
            </ul>
            </div>
           
            <p>Symptoms typically appear within 2 to 14 days after infection. According to CDC, please seek medical attention immediately if you develop any of the following symptoms:</p>
            <div className="aboutus-div">
            <ul>
                <li>Trouble breathing</li>
                <li>Persistent pain or pressure in the chest</li>
                <li>New confusion or inability to arouse</li>
                <li>Bluish lips or face</li>
            </ul>
            </div>
           
            <h2>What is the source of COVID-19?</h2>
            <p>Coronaviruses are a large family of viruses. Some cause illness in people and others only infect animals. On occasion, coronaviruses found in animal hosts can spread to other animals or humans. Subsequently, there can be human-to-human transmission. This is likely the mechanism of the virus responsible for COVID-19. Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS) are other examples of coronaviruses that originated from animals and spread to humans.</p>
            <h2>How does COVID-19 spread?</h2>
                <p>The first infections were linked to a live animal market in China, but the virus is now spreading from human-to-human by respiratory droplets from sneezing and coughing. Someone who is actively sick with COVID-19 can spread the illness to others. The CDC recommends that these patients be isolated in either a hospital or home environment (depending on illness severity) until they are better and are no longer at risk of infecting others.</p>
                <p>The virus can be found on surfaces contaminated with respiratory droplets. This can cause the disease in humans if someone touches a contaminated surface and then proceeds to touch their mouth, nose, or eyes. However, this is not thought to be the main way the virus spreads.</p>
            </div>
           
        </div>
    )
}

export default About
