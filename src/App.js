import classes from './App.module.css';
import Person from './Person/Person';
import { Component } from 'react';



class App extends Component {

  state = {

    persons: [
      {ID:'1A',name:'Akash',age:22},
      {ID:'2B',name:'Sky', age:40},
      {ID:'3C',name:'Tokyo',age:10}

    ],

    otherstateVariable:"somevalue",
    showPerson:false
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


  render(){

    let morePersons=null;
    let btnClasses=[classes.Button];
   

    if(this.state.showPerson)
    {
      morePersons= (
  
        <div>

          {this.state.persons.map((Ele,Index) =>{

            return <Person

              click={this.deletePersonHandler.bind(this,Index)}
              name={Ele.name}
              age={Ele.age}
              key={Ele.ID}
              //NameChange= {(event)=>this.NameChangeHandler(event,Index)}
              NameChange= {this.NameChangeHandler.bind(this,Index)}
              
            />
          })
          }
  
        </div>
      );
          btnClasses.push(classes.Red);

      
    }

    let assignedclasses=[];

    if(this.state.persons.length<=2)
    {
      assignedclasses.push(classes.red);
    }

    if(this.state.persons.length<=1)
    {
      assignedclasses.push(classes.bold);
    }
  return (

    
    <div className={classes.App}>
      <button className= {btnClasses.join(' ')} onClick= {this.ShowPersonHandler}>
        Show All persons
          </button>
      <p className={assignedclasses.join(' ')}>
      This is working</p>
    {morePersons}
    </div>
    
  )
}
}

export default App;
