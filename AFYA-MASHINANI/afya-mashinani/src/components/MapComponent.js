import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function MapComponent(props) {
    return (
        <div className="row mx-0">
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="pull-left">Household map</h5>
                </div>
            </section>
            <ErrorBoundary>
                <div className="col-md-12 box mt-0 mb-0" style={{ border: "1px skyblue solid", borderRadius: "3px", padding: "1%", width: "100%"}}>
                    <p>Put the map in this area</p>
                </div>
            </ErrorBoundary>
        </div> 
    );
}

export default MapComponent;