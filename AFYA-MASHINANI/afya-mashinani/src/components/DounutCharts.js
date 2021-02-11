import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ErrorBoundary from './ErrorBoundary';

function DounutCharts(props) {
    const data = {
        labels: ['Households', 'Total members', 'Under 5 yrs', 'Pregnant women', 'Family planning'],
        datasets: [
            {
                label: "Data for 2020(M)",
                data: [300, 200, 200, 100, 500],
                backgroundColor: [
                    'rgba(255,99, 132, 1)',
                    'rgba(255,205, 86,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 162, 235, 1)',
                    'rgba(255, 102, 25, 1)'
                ],
                
            }
        ]
    };
    const options = {
        title: {
            display: true,
            text: 'Trans-Nzoia County'
        },
        maintainAspectRatio: true
    };
    return (
        <div className="row mx-0 Doughnut-info">
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="pull-left">Progress Dials</h5>
                </div>
            </section>
            <ErrorBoundary>
                <div className="col-md-12 box mt-0 mb-0" style={{ border: "1px skyblue solid", borderRadius: "3px", padding: "1%", width: "100%"}}>
                    <Doughnut data={data} options={options} />
                </div>
            </ErrorBoundary>
        </div>  
    );
}

export default DounutCharts;