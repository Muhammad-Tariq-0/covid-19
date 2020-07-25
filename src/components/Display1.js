import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  title: {
   color: 'blue',
   textTransform: "uppercase"
  },
}));

export default function Display1() {
  const [globaldata,setGlobaldata] = useState([{}]);
  useEffect(()=>{
    async function caller(){
     const response =await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
     let data =await response.json();
     setGlobaldata(Object.values(Object.values(data.countryitems)[0]));
     console.log(Object.values(Object.values(data.countryitems)[0]));
    }
    caller();
  },[])
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <table border="1" className="view">
          <th className="row1">Country </th>
          <th className="row1">Cases </th>
          <th className="row1">Deaths </th>          
  {globaldata.map((keys,val)=>{
    return(
        <tr className="rows">
            <td >{globaldata[val].title}</td> 
            <td>{globaldata[val].total_cases}</td> 
            <td>{globaldata[val].total_deaths}</td> 
        </tr>
    )})}

    </table>
    </div>
  );
}
