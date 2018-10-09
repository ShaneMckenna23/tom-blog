import React from 'react'
import {connect} from 'react-redux'

class Users extends React.Component {
    render(){
        return (
            <div>Users</div>
        )
    }
}

const mapStateToProps = state => {
    return {
      users: state.users,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)