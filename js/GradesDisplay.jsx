import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';

class GradesDisplay extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <Tabs selected={0}>
                    <Pane label="Tab 1">
                        <div>This is my tab 1 contents!</div>
                    </Pane>
                    <Pane label="Tab 2">
                        <div>This is my tab 2 contents!</div>
                    </Pane>
                    <Pane label="Tab 3">
                        <div>This is my tab 3 contents!</div>
                    </Pane>
                </Tabs>
            </div>
        );
    }
}

ReactDOM.render(
    <GradesDisplay />,
    document.getElementById("content")
);