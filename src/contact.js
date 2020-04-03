import React, { Component } from 'react';

export default class Contact extends Component{
    render(){
    return (
            
            <ul><b>
                <li>{this.props.firstName}</li>
                <li>{this.props.lastName}</li></b>
                <li>{this.props.phone}</li>
                <li> 
                    {
                        !this.props.gender? (<i class="fas fa-question-circle"></i>) : (this.props.gender==='male'?
                        <i class="fas fa-male"></i> : <i class="fas fa-female"></i>)   
                    }
                    {this.props.gender}
                </li>    
            </ul> 
            
        );
    }
}
