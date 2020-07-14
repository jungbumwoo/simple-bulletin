import React, { Component } from "react";
import Login from "./Login";
import { connect } from "react-redux";

class LoginContainer extends Component {
    render() {
        return <Login />;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);