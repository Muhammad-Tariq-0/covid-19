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
       const response =await fetch('https://api.covid19api.com/summary');
       let data =await response.json();
       setGlobaldata(data.Global);
     console.log(data.Global);
      }
      caller();
    },[])
    return (
        <div>
             <br/>
  
                 <br/>
                
                <Bar
                data={{
                  labels: ['Total Cases','Recovered Peoples','Total Deaths','New Cases Today','New Deaths Today','New Recovered Cases'],
                  datasets: [
                    {
                      label: 'People',
                      backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                      data: [globaldata.TotalConfirmed,globaldata.TotalRecovered,globaldata.TotalDeaths,
                    globaldata.NewConfirmed,globaldata.NewDeaths,globaldata.NewRecovered]
                    },
                  ],
                }}
               
              />
    
      </div>
    );
}
export default BarChart;