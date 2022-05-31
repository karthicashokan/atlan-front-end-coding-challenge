import React from 'react';
import SQLClient from './components/SQLClient';

const App = () => {
    return (
        <div className="App">
            <div className="header">
                <div className="title">SQL Client</div>
                <div>
                    <small>Currently supports only <em className="highlight">select *</em> queries from <em></em> tables</small>
                </div>
            </div>
            <SQLClient />
            <div className="footer">
                Karthic Ashokan
            </div>
        </div>
    );
}

export default App;
