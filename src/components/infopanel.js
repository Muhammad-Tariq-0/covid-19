import React from 'react';
import Display0 from './Display0';
import Display1 from './Display1';

function Infopanel({currentDisplay}){

    if (currentDisplay===0)
    return <Display0/>
    else if(currentDisplay===1)
    return <Display1/>
    else
    return <Display0/>

}
export default Infopanel;