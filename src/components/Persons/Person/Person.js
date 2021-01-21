import React , {Component} from 'react';
import classes from './Person.module.css';
import Auxillary from '../../../HOC/Auxillary';
import withClass from '../../../HOC/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {


    static contextType= AuthContext;

    constructor(props)
    {
        super(props);
        this.inputElementRef=React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }

    render()
    {
        console.log('[Person.js] rendering . .. ')
        return (

                <Auxillary>
                    
                    {this.context.authenticated ? <p>User is Authenticated</p> :<p>Please Login</p>}
            
                    <p  onClick={this.props.click}>This is a {this.props.name}!! And he is {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input
                     ref={this.inputElementRef} 
                     type="text"  
                     onChange= {this.props.NameChange} 
                     value={this.props.name} 
                     />
                </Auxillary>
           
  
        )
    }
        

   
};

export default withClass(Person,classes.Person);