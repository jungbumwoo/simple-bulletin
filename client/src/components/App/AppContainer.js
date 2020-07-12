import React, { Component } from "react";
import App from "./App";
import { connect } from "react-redux";

class AppContainer extends Component {
  render() {
    const { isLoggIn } = this.props;
    return <App />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);