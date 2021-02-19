import React from 'react';
import './App.css';
import BodyContentComponent from './components/BodyContentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
 
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={apiResponse: ""}
    }
    callAPI() {
        fetch('http://localhost:4000/testApi')
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }) )
    }
    componentWillMount() {
        this.callAPI()
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.apiResponse}</p>
                <React.Fragment>
                    <HeaderComponent />
                    <BodyContentComponent />
                    <FooterComponent />
                </React.Fragment>
            </div>
        );
    }
}

export default App;
