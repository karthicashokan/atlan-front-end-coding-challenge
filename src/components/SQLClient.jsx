import React from 'react'
import Dashboard from './Dashboard';
import classNames from 'classnames';
import TABLES from '../data';
import { getTableNameFromSQLQuery as getTableName, capitalize } from '../utils';

const DEFAULT_OUTPUT = 'Run query to see output...';

/**
 * Renders a SQLClient dashboard where SQL queries can be run
 */

class SQLClient extends React.Component {
    constructor(props) {
        super(props)

        this.history = [];

        // State
        this.state = {
            opCount: 0,
            loading: false,
            activeQuery: -1,
        };

        // Refs
        this.queryInput = React.createRef()
        this.queryOutput = React.createRef()
    }

    runQuery = () => {
        const query = this.queryInput?.current.value;
        if (!query) {
            return;
        }
        const tableName = getTableName(query);
        const isValidTableName = Object.keys(TABLES).includes(tableName);
        if (!isValidTableName) {
            this.updateOutput('Incorrect table name');
            return;
        }
        const result = tableName;//TABLES[tableName];
        // pushHistory
        this.pushHistory(query, result, tableName);
        this.updateOutput(result);
    }

    clear = () => {
        this.queryInput.current.value = null;
        this.queryOutput.current.innerHTML = DEFAULT_OUTPUT;
    }

    onClickExistingQuery = (index) => {
        this.setState({ activeQuery: index });
    }

    pushHistory = (query, result, tableName) => {
        const label = `${capitalize(tableName)} select`;
        this.history.unshift(
            { query, result, label }
        )
        this.setState({ opCount: this.state.opCount + 1 });
    }

    updateOutput = (text) => {
        this.queryOutput.current.innerHTML = text;
    }

    renderSidebarContent = () => {
        const { activeQuery } = this.state;
        return (
            <ul className="list">
                <li
                    className={classNames({ active: activeQuery === -1 })}
                    onClick={() => { this.onClickExistingQuery(-1) }}
                >New Query</li>
                {this.history.map((element, index) => (
                    <li
                        key={`list-item-${index}`}
                        className={classNames({ active: activeQuery === index })}
                        onClick={() => { this.onClickExistingQuery(index) }}
                    >{element.label}</li>
                ))}
            </ul>
        );
    }

    render() {
        const sidebarContent = this.renderSidebarContent();
        const topContent = (
            <div className="query-with-controls">
                <div className="controls">
                    <div onClick={this.runQuery} className="button">Run ►</div>
                    <div onClick={this.clear} className="button">Clear</div>
                </div>
                <textarea
                    ref={this.queryInput}
                    className="code-style"
                    placeholder="Enter SQL query..."
                />
            </div>
        );
        const bottomContent = (
            <div className="code-style" ref={this.queryOutput}>
                {DEFAULT_OUTPUT}
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