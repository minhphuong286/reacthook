import React, { useEffect, useState } from "react";

class CountDownTimer extends React.Component {
    state = {
        count: 10
    }
    componentWillUnmount() {
        if (this.Timer) {
            clearInterval(this.Timer);
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer);
            // alert('Stop countdown');
        }
    }

    render() {
        return (
            <div>Class: {this.state.count}</div>
        )
    }
}



const CountDownTimerHooks = () => {
    let [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) {
            // alert('Stop countdown Hooks')
            return;
        }
        let Timer = setInterval(() => {
            // console.log('Count: ', count)
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(Timer)
        }

    }, [count])
    return (
        <div>Hooks: {count}</div>
    )
}


export { CountDownTimer, CountDownTimerHooks };