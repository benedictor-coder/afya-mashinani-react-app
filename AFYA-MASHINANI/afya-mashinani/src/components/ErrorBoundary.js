import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error) {
        console.error(error)
    }

    render() {
        if(this.state.hasError) {
            return <h5> Something went wrong </h5>
        }
        return this.props.children
    }
}

export default ErrorBoundary;