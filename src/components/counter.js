import React from 'react'
import { Button, FormLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class Counter extends React.Component {
    render() {
        const props = this.props
        console.log("Counter")

        return (
            <React.Fragment>
                <div>
                    <FormLabel>count : {props.value}</FormLabel>
                </div>
                <Button onClick={props.increment}> + </Button>
                <Button onClick={props.decrement}> - </Button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ value: state.counter.value })
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
