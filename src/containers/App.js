import classes from './App.module.css';
import Person from '../components/Persons/Persons';
import { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../HOC/withClass';
import Auxillary from '../HOC/Auxillary';
import AuthContext from '../context/auth-context';
class App extends Component {


  constructor(props)
  {
    super(props);
    console.log('[App.js] cosnstructor is fired up!');

    /* this.state=
    */
  }

  state = {

    persons: [
      {ID:'1A',name:'Akash',age:22},
      {ID:'2B',name:'Sky', age:40},
      {ID:'3C',name:'Tokyo',age:10}

    ],

    otherstateVariable:"somevalue",
    showPerson:false,
    Authenticated:false
  }

  deletePersonHandler = (personIndex)=>{
    const newPersons=[...this.state.persons];
    newPersons.splice(personIndex,1);
    this.setState({
      persons:newPersons
    })
  }
NameChangeHandler = (Index,event)=> {

  
  const person= {
    ...this.state.persons[Index]
  };
  person.name=event.target.value;

  const newPersons= [...this.state.persons];
  newPersons[Index]=person;

  this.setState ({
    persons: newPersons
  }
  )
}

ShowPersonHandler = ()=>{

  const doesShow=this.state.showPerson;
  this.setState({
    showPerson:!doesShow
  });
}
LoginBtnHandler = ()=> {
  this.setState({
    Authenticated:true
  });
}

  render(){

    let morePersons=null;
    
    if(this.state.showPerson)
    {
      morePersons= (
  
        <div>
          <Person
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.NameChangeHandler}
          auth={this.state.Authenticated}
          />
  
        </div>
      );
    }

    
  return (

    
      <Auxillary>
        <AuthContext.Provider value ={{authenticated:this.state.Authenticated ,login:this.LoginBtnHandler}}>
        <Cockpit
      title={this.props.appTitle}
        showPersons={this.state.showPerson}
        personslength={this.state.persons.length}
        ShowPersonHandler={this.ShowPersonHandler}
        login={this.LoginBtnHandler}
      />
    {morePersons}

        </AuthContext.Provider>
      
    </Auxillary>


    
    
  )
}
}

export default withClass(App,classes.App);
