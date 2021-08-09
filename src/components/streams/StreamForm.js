import React from "react";
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderInput} label="Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "A title is required"
  }

  if (!formValues.description) {
    errors.description = "A description is required"
  }

  return errors;
}

export default reduxForm({ form: 'streamForm', validate })(StreamForm);