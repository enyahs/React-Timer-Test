import React, { Component } from 'react';

/**
 * Timer Class
 * 
 * An example of using React to create a component.
 */
class Timer extends Component {

    /**
     * Timer Instance
     * 
     * @param {*} props 
     */
    constructor(props){

        super(props);

        // Component State
        this.state = {
            active: false,
            count: this.props.count
        };

        // Component Toggle
        this.toggle = this.toggle.bind(this);

        // Component Reset
        this.reset = this.reset.bind(this);

    }

    /**
     * Counts down from the current count state
     * 
     * @return void
     */
    tick() {

        // Set Count State (prevState - 1)
        this.setState((prevState) => {
            
            let newState = {
                count: Number(prevState.count - 1)
            };

            return newState;
        });

    }

    /**
     * Toggles Timer State (Start / Stop)
     * 
     * @return void
     */
    toggle(){

        // Check Timer Interval
        if(this.timerID)
        {

            // Request Stop Timer
            this.stop()

        }
        else
        {

            // Request Start Timer
            this.start()

        }

    }

    /**
     * Starts Timer Component State
     * 
     * @return void
     */
    start() {

        // Set Active State (true)
        this.setState((prevState) => {
            
            let newState = {
                active: true
            };

            return newState;

        });

        // Begin Timer
        this.timerID = setInterval(

            () => {

                // Check Count (Greater than 0)
                if(this.state.count > 0)
                {

                    // Countdown
                    this.tick()

                }

                else
                {

                    // Stop Timer
                    this.stop()

                }

            },
            1000
        );

    }

    /**
     * Resets Timer Component State
     * 
     * @return void
     */
    reset() {

        // Stop Component State
        this.stop();

        // Reset Component State
        this.setState((prevState) => {
            
            let newState = {
                count: this.props.count
            };

            return newState;
        });

    }

    /**
     * Stops Timer Component State
     * 
     * @return void
     */
    stop() {

        // Set Active State (false)
        this.setState((prevState) => {
    
            let newState = {
                active: false
            };

            return newState;
        });

        // Stop Timer
        clearInterval(this.timerID);
        this.timerID = false;

    }

    /**
     * Timer Component Template
     * 
     * @return ReactComponent
     */
    render() {
        return (
            <div>
                <h1 class='m-4'>{this.state.count}</h1>
                <div>
                    <button class='btn btn-primary m-2' onClick={this.toggle}>{this.state.active ? 'Stop' : 'Start'}</button>
                    <button class='btn btn-danger m-2' onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Timer;
