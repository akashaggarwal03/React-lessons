import React from 'react';
import './Person.css';
import styled from 'styled-components';


const StyleDiv= styled.div`

    width:60%;
    margin:16px auto;
    border:1px solid #eee;
    box-shadow:0 2px 3px #ccc;
    padding:16px;
    text-align:center;

    @media (min-width:500px):{
        width:'50px';
        border:1px solid #ff5050;
    }
`;
const Person = (props)=>{
        return (
            <StyleDiv>
                <p onClick={props.click}>This is a {props.name}!! And he is {props.age} years old</p>
                <p>{props.children}</p>
                <input type="text"  onChange= {props.NameChange} value={props.name} />
            </StyleDiv>   
        )

   
};

export default Person;