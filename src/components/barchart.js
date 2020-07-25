import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import AOS from 'aos';
import 'aos/dist/aos.css';


function BarChart(){
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
    const [globaldata,setGlobaldata] = useState({});
    useEffect(()=>{
      async function caller(){
       const response =await fetch('https://api.thevirustracker.com/free-api?global=stats');
       let data =await response.json();
       delete data.results[0].source;
       setGlobaldata(data.results[0]);
       console.log(data.results[0]);
      }
      caller();
    },[])
    return (
        <div>
             <br/>
  
                 <br/>
                
                <Bar
                data={{
                  labels: ['Total Cases','Recovered Peoples','Unresolved Cases','Total Deaths','New Cases Today','New Deaths Today','Active Cases',
                'Serious Cases','Total Affected Contries'],
                  datasets: [
                    {
                      label: 'People',
                      backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                      data: [globaldata.total_cases,globaldata.total_recovered,globaldata.total_unresolved,globaldata.total_deaths,
                    globaldata.total_new_cases_today,globaldata.total_new_deaths_today,globaldata.total_active_cases,
                globaldata.total_serious_cases,globaldata.total_affected_countries]
                    },
                  ],
                }}
               
              />
    
      </div>
    );
}
export default BarChart;