import React,{useEffect, useState} from 'react'
import CountUp from 'react-countup';

function HomeTodayCases() {
const [newcases, setnewcases] = useState("")
const [Deathscases, settodayDeaths] = useState("")
const [totalTests, settotalTests] = useState("")
useEffect(() => {
    getcases()
 
}, [])
const getcases= async () =>{
    const res =await fetch(` https://coronavirus-19-api.herokuapp.com/countries/world`);
    const data =await res.json();
    console.log("data",data);
   console.log("world wide today cases",data.todayCases);
   setnewcases(data.todayCases)
   settodayDeaths(data.todayDeaths)
   settotalTests(data.totalTests)
}

    return (
        <div className="HomeTodayCases">
            <div className="container TodayCases">
                <h1>today worldwide corona cases</h1>
            <div class="grid grid-rows-2 grid-flow-col gap-4">
                <div class="row-span-3 col-span-2 newcases">
                    <h2><CountUp start={99999973453567456}  end={newcases} delay={0.2} /></h2>
                    <span className="span-text">today cases</span>
                </div>
                <div class="row-span-3 col-span-2 newcases">
                <h2><CountUp start={99999973453567456}  end={Deathscases} delay={0.2} /></h2>
                <span className="span-text">today Death</span>
                </div>
                <div class="row-span-3 col-span-2 newcases">
                <h2><CountUp start={9999973453567456}  end={totalTests} delay={0.2} /></h2>
                <span className="span-text">total tests</span>
                </div>
            </div>
            </div>
             
        </div>
    )
}

export default HomeTodayCases
