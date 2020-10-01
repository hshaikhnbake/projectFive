import React from 'react';

class Button extends React.Component {

    constructor () {
        super ();
        this.state = {
            userSelection :'',
        }
    }
    clickHandler = (event) => {
        let userSelection = event.target.value;
        this.setState({
            userSelection
        }, () => {
            this.props.handleFilter(this.state.userSelection);
        })
    }
    
    render() {
        return (
        <>
            <div className="buttonsContainer">
                <button value="Condo" onClick={this.clickHandler}>View Condos</button>
                <button value="House" onClick={this.clickHandler}>View Homes</button>
                <button value="All" onClick={this.clickHandler}>View All</button>
            </div>
        </>
        )
    }
}

export default Button;