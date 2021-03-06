import React,{Component} from 'react';
import Person from './Person/Person';




class Persons extends Component {


    // static getDerivedStateFromProps(props,state)
    // {
    //   console.log('[Persons.js] getDerivedStateFromProps rendering...');
    //   return state;
    // }

    shouldComponentUpdate(nextProps,nextState)
    {
      console.log('[Persons.js] shouldComponentUpdate rendering...');
      return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('[Persons.js] getSnapshotBeforeUpdate' );
      return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      console.log('[Persons.js] componentDidUpdate');
      console.log(snapshot);
    }
    componentWillUnmount(){
      console.log('[Persons.js] Cleanup work in Appjs');
    }
  


      render()
      {
        console.log('[Persons.js] rendering ..' )
        return   this.props.persons.map((Ele,Index) =>{

            return (
              <Person
                click={()=> this.props.clicked(Index)}
                name={Ele.name}
                age={Ele.age}
                key={Ele.ID}
                //NameChange= {(event)=>this.NameChangeHandler(event,Index)}
                NameChange= {this.props.changed.bind(this,Index)}
                auth={this.props.auth}
              
              />
            ); 
          });
        
      }
}

  export default Persons;