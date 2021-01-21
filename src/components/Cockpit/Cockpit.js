import React, {useEffect,useRef,useContext} from  'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props)=> {
    
  const togglebtnref= useRef(null);

  const authContext= useContext(AuthContext);
    useEffect(()=>{
      
      // setTimeout(()=>{
      //   alert('Data Saved');
      // },1000);

      togglebtnref.current.click();
      return ()=>{
        console.log('[Cockpit.js] cleanup rendering');
      };
    },[]);
  
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
            <button
             ref={togglebtnref}
             className= {btnClass} 
            onClick= {props.ShowPersonHandler}>
            Show All persons
            </button>
            <button onClick= {authContext.login}>Login
              </button>
            <p className={assignedclasses.join(' ')}>
            This is working
            </p>
      </div>

    );
}

export default React.memo(Cockpit);