import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>
                <h2>Posts Show!</h2>
            </div>
        );
    }
}

function mapStateToProps({ posts }, OwnProps) {
    return { post: posts[OwnProps.match.params.id]};
}

// export default PostsShow; **original line**

export default connect(mapStateToProps, fetchPost ) (PostsShow);