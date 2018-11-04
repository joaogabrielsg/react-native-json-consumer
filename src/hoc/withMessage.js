import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clearMessage } from '../store/actions/general';

import Message from './../components/Message/Message';

const withMessage = WrappedComponent => {
  return connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        return (
          <React.Fragment>
            <WrappedComponent {...this.props} />
            <Message
              open={this.props.message ? true : false}
              title="OPS!"
              message={this.props.message ? this.props.message : ''}
              buttonText="OK"
              onClose={this.props.onClearMessage}
            />
          </React.Fragment>
        );
      }
    }
  );
};

const mapStateToProps = state => {
  return {
    message: state.general.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearMessage: () => dispatch(clearMessage())
  };
};

export default withMessage;
