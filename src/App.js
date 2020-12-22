import logo from './logo.svg';
// import Radium ,{StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';
import styled from 'styled-components';



const StyledButton= styled.button`

      background-color:${props=> props.alt ? 'red' : 'green'};
      color:white;
      cursor:pointer;
      padding:16px;
      border: 1px solid blue;
       font:inherit;
      &:hover{
        background-color:${props=> props.alt ? 'yellow' : 'salmon'};
        color:black;
      }


`;

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

    const style= {
      backgroundColor:'green',
       color:'white',
      cursor:'pointer',
      padding:'8px',
      border: '1px solid blue',
      font:'inherit',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    
    };

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

      // style.backgroundColor='red'
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

    let classes=[];

    if(this.state.persons.length<=2)
    {
      classes.push('red');
    }

    if(this.state.persons.length<=1)
    {
      classes.push('bold');
    }
  return (

    
    <div className="App">
      <StyledButton alt={this.state.showPerson} onClick= {this.ShowPersonHandler}>
        Show All persons
          </StyledButton>
      <p className={classes.join(' ')}>
      This is working</p>
    {morePersons}
    </div>
    
  )
}
}

export default App;
