import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';
import CourseDisplay from './CourseDisplay';

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
        this.editCourseName = this.editCourseName.bind(this);
    }

    editCourseName(oldCourseName, newCourseName) {
        const {
            courseNames
        } = this.state;
        var courseIndex = _.indexOf(courseNames, oldCourseName);
        courseNames[courseIndex] = newCourseName;
        this.setState({courseNames: courseNames});
    }
    
    render() {
        const {
            courseNames
        } = this.state;
        var paneArray = [];
        for (var i = 0; i < courseNames.length; i++) {
            paneArray.push(
                <Pane
                    key={i}
                    label={courseNames[i]}>
                    Displaying Pane {i}
                    <CourseDisplay courseName={courseNames[i]} editCourseName={this.editCourseName}/>
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