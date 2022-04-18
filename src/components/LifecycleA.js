import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Amit",
        };
        console.log("LifecycleA constructor");
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }


    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleA render');
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate');
    }

    changeState = () =>{
        this.setState({
            name:'Codevoulution'
        })
    }

    render() {
        console.log('LifecycleA render');
        return (

            <div>

                <div>Lifecycle A</div> {/*parent Component*/}
                <button onClick = {this.changeState}>Change state</button>
                 <LifecycleB /> {/*child component  */}

            </div>
        )
    }
}

export default LifecycleA;
