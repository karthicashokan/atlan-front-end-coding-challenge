import React from 'react'
import Dashboard from './Dashboard';

/**
 * Renders a SQLClient dashboard where SQL queries can be run
 */

class SQLClient extends React.Component {

    runQuery = () => {
        console.log('run Query');
    }

    clearQuery = () => {
        console.log('clearQuery');
    }

    render() {
        const sidebarContent = <span>sidebar</span>;
        const topContent = (
            <div>
                <div className="controls">
                    <div onClick={this.runQuery} className="button">Run ►</div>
                    <div onClick={this.clearQuery} className="button">Clear</div>
                </div>
                <div className="code-style">
                    top
                </div>
            </div>
        );
        const bottomContent = (
            <div className="code-style">
                bottom
            </div>
        );
        return (
            <div className="sql-client">
                <Dashboard
                    sidebarContent={sidebarContent}
                    topLabel="Query"
                    topContent={topContent}
                    bottomLabel="Output"
                    bottomContent={bottomContent}
                />
            </div>
        );
    }
}

export default SQLClient;