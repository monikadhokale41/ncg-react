import React, {Component} from "react";

class LifeCycleApp extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor Method");
        this.state = { count: 0};
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps Method");
        // return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapShotBeforeUpdate", prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ComponentDidUpdate", prevProps, prevState, snapshot);
    }

    componentDidMount() {
        console.log("componentDidMount Method");
        // this.intervalId = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        // }, 1000)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount method");
        // clearInterval = (this.intervalId);
    }

    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError method", error);
        return null;
    }

    static componentDidCatch(error, info) {
        console.log("componentDidCatch method", error, info);
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        console.log("Render Method");
        
        return (
            <div>
                <h1>Licecycle App</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default LifeCycleApp;