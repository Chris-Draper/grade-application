import React from 'react';

class CourseName extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseNameInput: props.courseName
        }
        this.handleEditCourseName = this.handleEditCourseName.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            courseNameInput: nextProps.courseName
        });
    }

    handleEditCourseName(event) {
        var oldCourseName = this.state.courseNameInput;
        var newCourseName = event.target.value;
        this.setState({courseNameInput: newCourseName});
        this.props.editCourseName(oldCourseName, newCourseName);

    }

    render() {
        return(
            <div>
            Course Name :
                <form className="course-name-form">
                    <input type="text" value={this.state.courseNameInput} onChange={this.handleEditCourseName}></input>
                </form>
            </div>
        );
    }
}

export default CourseName;