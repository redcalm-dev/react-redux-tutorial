import React from 'react';
import { Button, FormLabel } from 'react-bootstrap'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    handlePlusButton = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleMinusButton = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        console.log("Counter");
        return (
            <React.Fragment>
                <div>
                    <FormLabel>count : {this.state.count}</FormLabel>
                </div>
                <Button onClick={this.handlePlusButton}> + </Button>
                <Button onClick={this.handleMinusButton}> - </Button>
            </React.Fragment>
        );
    }
}

export default Counter;