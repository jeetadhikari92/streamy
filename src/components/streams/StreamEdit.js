import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import { editStream, fetchStream } from '../../actions'
import StreamForm from "./StreamForm";


class StreamEdit extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    return (
      <div>
        <h3>Edit this Stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, 'title', 'description')}></StreamForm>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit)