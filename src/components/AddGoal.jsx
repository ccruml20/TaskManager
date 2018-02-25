import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this);
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({email , title});
  }

  render() {
    return (
      <div className="row">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a goal"
            className="form-control col-md-4"
            // style={{marginRight: '5px', width: '50%'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            type="button"
            className="btn btn-success col-md-4"
            onClick={() => this.addGoal()}
            >
            Submit
          </button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(AddGoal);
