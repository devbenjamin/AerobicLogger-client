import React, { Component } from 'react';
import TimeReporting from '../../TimeReporting';
// let date = new Date().toString()
export default class SessionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
 
        };
    }
    // setTime = () => this.setState({ curTime: 3 })

    render() {
        return (
        <div>
            <TimeReporting />
        </div>
        )
    }
}