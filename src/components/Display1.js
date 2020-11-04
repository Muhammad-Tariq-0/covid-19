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
     const response =await fetch('https://api.covid19api.com/summary');
     let data =await response.json();
      setGlobaldata(data.Countries);
    console.log(data.Countries);
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
            <td >{globaldata[val].Country}</td> 
            <td>{globaldata[val].TotalConfirmed}</td> 
            <td>{globaldata[val].TotalDeaths}</td> 
        </tr>
    )})}

    </table>
    </div>
  );
}
