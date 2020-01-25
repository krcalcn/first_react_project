import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        
        this.onClickEvent = this.onClickEvent.bind(this);
      }
    
      onClickEvent() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    
    /*constructor(props){
        super(props);
        this.state = {
            isVisible : false,

        }
    }*/
    
    render() {
        const {name, department, semester} = this.props;
        const {isToggleOn} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between" >
                        <h4 className="d-inline" onClick={this.onClickEvent} style={{cursor:"pointer"}}>Name: {name}</h4>
                        <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>                        
                    </div>
                    {
                        isToggleOn ? 
                    <div className="card-body">
                        <p className="card-text">Department: {department}</p>
                        <p className="card-text">Semester: {semester}</p>
                    </div> : null
                    }
                </div>            
            </div>
        )
    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    semester: PropTypes.string.isRequired,

}
User.defaultProps = {
    name: "No information",
    department: "No information",
    semester: "No information",

}
export default User;