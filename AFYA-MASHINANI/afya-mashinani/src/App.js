import React from 'react';
import './App.css';
import BodyContentComponent from './components/BodyContentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <div className="Main-body-content">
                <React.Fragment>
                    <BodyContentComponent />
                </React.Fragment>
            </div>
            <FooterComponent />
    </div>
    );
}

export default App;
