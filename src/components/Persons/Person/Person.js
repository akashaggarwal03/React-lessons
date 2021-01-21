import React , {Component} from 'react';
import classes from './Person.module.css';
import Auxillary from '../../../HOC/Auxillary';
import withClass from '../../../HOC/withClass';

class Person extends Component {

    render()
    {
        console.log('[Person.js] rendering . .. ')
        return (

                <Auxillary>
                    <p  onClick={this.props.click}>This is a {this.props.name}!! And he is {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input  type="text"  onChange= {this.props.NameChange} value={this.props.name} />
                </Auxillary>
           
  
        )
    }
        

   
};

export default withClass(Person,classes.Person);