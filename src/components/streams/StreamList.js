import React from 'react';
import { connect } from 'react-redux';

const StreamList = ({ user }) => {
  return user ? (
    <div>
      <h1>Hi {user.name}</h1>
      <h3>{user.email}</h3>
    </div>
  ) : null
}

const mapStateToProps = (state) => {
  return { user: state.auth.user }
}
export default connect(mapStateToProps, {})(StreamList);