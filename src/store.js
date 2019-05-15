import React from 'react';

import {EventEmitter} from "events";


export default class Store extends React.Component {

    constructor(props) {
        super(props);
        
    this.EventEmitter = new EventEmitter(); 

    //Main App State
    this.state = {
        appName: "React Weather App"
    }
}
    
    //Way not to mutilate state
    render() {
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { ...this.state, EventEmitter: this.EventEmitter });
        });
    }
}