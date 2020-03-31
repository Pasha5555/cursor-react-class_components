import React, { Component } from 'react';

class ShowButton extends Component {
    state = {
        goodMood: false
    }

    changeMood = () => {
        this.setState({
            goodMood: !this.state.goodMood
        })
    }

    render(){
        console.log(this);
        return(
            <div>
                <button onClick={this.changeMood}>
                    click
                </button>
                <p>
                    {
                     this.state.goodMood ? this.props.goodMood : this.props.badMood
                    }  
                </p>
             </div>
        );

    }
}
export default ShowButton;