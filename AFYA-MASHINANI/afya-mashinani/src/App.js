import React from 'react';
import './App.css';
import BodyContentComponent from './components/BodyContentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App () {
    return (
        <div className="App">
            <React.Fragment>
                <HeaderComponent />
                <BodyContentComponent />
                <FooterComponent />
            </React.Fragment>
        </div>
    );   
}

export default App;
