import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import a from "../corona/a.png"
import h from "../corona/h.png"
import g from "../corona/g.png"
import a4 from "../corona/4a.png"
import washhand from "../corona/washhand.png"
import waermask from "../corona/waermask.png"
import a3 from "../corona/3a.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 20,   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "lightblue",
  },
  title: {
   color: 'blue',
   textTransform: "uppercase"
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Display0() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  const [globaldata,setGlobaldata] = useState({});
  useEffect(()=>{
    async function caller(){
     const response =await fetch('https://api.covid19api.com/summary');
     let data =await response.json();
     delete data.Global.NewConfirmed;
     delete data.Global.NewDeaths;
     delete data.Global.NewRecovered;
     setGlobaldata(data.Global);
     console.log(data.Global);
    }
    caller();
  },[])
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} >
            <Paper className={classes.paper1}>
            <h2 className="title">CORONA VIRUS</h2> 
            <img src={a} width={80} height={80} alt={a} />
            </Paper>
            </Grid>
    
  {Object.keys(globaldata).map((keys,val)=>{
    return(
      <Grid item xs={12} sm={4} key={val}>
      <Paper className={classes.paper} data-aos="zoom-in">
        <h3 className={classes.title}>{keys.replace(/_/g," ")}</h3>
       <h4><font color="green"> <CountUp end={globaldata[keys]}/> </font></h4>
        
      </Paper>
    </Grid>
    )})}
      <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}><img src={h} alt={h} width="200" height="200"/></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}><img src={g} alt={g} width="200" height="200"/></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}><img src={a4} alt={a4} width="200" height="200"/></Paper>
        </Grid>


        <div className="stay">
         <center><h2 data-aos="zoom-in">Try to Stay at Home and Follow Precautions</h2>
         </center>
        </div>
       
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} data-aos="fade-left"><img src={washhand} alt={washhand} width={200} height={200}/>
         <h2> Wash hands daily</h2></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} data-aos="fade-left"><img src={waermask} alt={waermask} width={200} height={200}/>
          <h2> Wear Mask </h2></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} data-aos="fade-left"><img src={a3} alt={a3} width={200} height={200}/>
          <h2> Visit Doctor</h2></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
