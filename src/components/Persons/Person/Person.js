import React , {Component} from 'react';
import './Person.css';



class Person extends Component {

    render()
    {
        console.log('[Person.js] rendering . .. ')
        return (
            
                [<p key="1A" onClick={this.props.click}>This is a {this.props.name}!! And he is {this.props.age} years old</p>,
                <p key="1B">{this.props.children}</p>,
                <input key="1C" type="text"  onChange= {this.props.NameChange} value={this.props.name} />]


            
                
  
        )
    }
        

   
};

export default Person;