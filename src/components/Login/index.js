import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
    render(){
        return (
            <div>Login</div>
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
  )(Login)