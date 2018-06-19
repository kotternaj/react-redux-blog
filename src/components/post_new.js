import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends  Component {
    renderField(field) {
        return (
            <div className='form-group'>
                <label>{ field.label }</label>
                <input className = 'form-control' type='text' {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                label='Title for Post'
                name='title'
                component={this.renderField}
                />
                <Field
                label='Categories'
                name='categories'
                component={this.renderField}
                />
                <Field
                label='Post Content'
                name='content'
                component={this.renderField}
                />
            </form>
        );
    }

}

function validate(){    
    const errors = {};

    if (!values.title) { // if no title is not entered or invalid
      errors.title = 'Enter a title!';
    }
    if (values.title.length < 3) {  // another example 
        errors.title = 'Title must be more than 3 characters';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories!';
    }
    if (!values.content){
        errors.content = 'Enter some content please!';
    }
    
// if errors remains empty, the form is submitted
// if errors ends up with ANY properties, redux form assumes form is invalid
    return errors;
}

// export default PostsNew (then later added stuff below)

export default reduxForm({
    validate, 
    form: 'PostNewForm'
})(PostsNew);
