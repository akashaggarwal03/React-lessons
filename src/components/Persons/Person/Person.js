import React , {Component} from 'react';
import './Person.css';



class Person extends Component {

    render()
    {
        console.log('[Person.js] rendering . .. ')
        return (
            <div>
                <p onClick={this.props.click}>This is a {this.props.name}!! And he is {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text"  onChange= {this.props.NameChange} value={this.props.name} />


            </div>
                
  
        )
    }
        

   
};

export default Person;