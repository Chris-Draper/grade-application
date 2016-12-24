import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';

class GradesDisplay extends React.Component {
    
    constructor() {
        super();
        this.state = {
            courseNames : [
                "CS 1331",
                "MATH 1554",
                "CS 2340"
            ]
        }
    }
    
    render() {
        var paneArray = [];
        for (var i = 0; i < this.state.courseNames.length; i++) {
            paneArray.push(
                <Pane
                    key={i}
                    label={this.state.courseNames[i]}>
                    Displaying Pane {i}
                </Pane>
             )
        }
        return (
            <div>
                <Tabs selected={0}>
                    {paneArray}
                </Tabs>
            </div>
        );
    }
}

ReactDOM.render(
    <GradesDisplay />,
    document.getElementById("content")
);