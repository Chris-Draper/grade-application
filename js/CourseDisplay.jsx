import React from 'react';
import CourseName from './CourseName.jsx';

class CourseDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <CourseName courseName={this.props.courseName} editCourseName={this.props.editCourseName}/>
        );
    }
}

export default CourseDisplay;