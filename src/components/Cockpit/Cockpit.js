import React, {useEffect} from  'react';
import classes from './Cockpit.module.css';

const Cockpit = (props)=> {
    
    useEffect(()=>{
      
      setTimeout(()=>{
        alert('Data Saved');
      },1000);

      return ()=>{
        console.log('[Cockpit.js] cleanup rendering');
      };
    },[props.personslength]);
  
    useEffect(()=>{
      return ()=>{
        console.log('[Cockpit.js] cleanup 2nd Use Effect rendering');
      };
    });
  
  
    let btnClass='';

    if(props.showPersons)
    {
        btnClass=classes.red;
    }



    let assignedclasses=[];

    if(props.personslength<=2)
    {
      assignedclasses.push(classes.red);
    }

    if(props.personslength<=1)
    {
      assignedclasses.push(classes.bold);
    }
    
    return (
        
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <button className= {btnClass} 
            onClick= {props.ShowPersonHandler}>
            Show All persons
            </button>
            
            <p className={assignedclasses.join(' ')}>
            This is working
            </p>
      </div>

    );
}

export default React.memo(Cockpit);