import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal.jsx';
import GoalList from './GoalList.jsx';
import CompleteGoalList from './CompleteGoalList.jsx';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render(){
    return (
      <div className="container-fluid main">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 appStyle" >
            <div className="row">
              <h2>Task Manager</h2>
            </div>
            <AddGoal />
            <hr />
            <h3>Current Tasks</h3>
            <GoalList />
            <hr />
            <h3>Complete Tasks</h3>
            <CompleteGoalList />
            <hr />
            <button
              className="btn btn-danger"
              style={{float: 'right'}}
              type="button"
              onClick={()=> this.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

      )
    }
  }

  function mapStateToProps(state) {
    return {}
  }

  export default connect(mapStateToProps, null)(App);
