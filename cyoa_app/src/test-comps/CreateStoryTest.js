import React, { Component } from 'react';

class CreateStoryTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
        title: '',
        author: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleTitleChange(e) {
      this.setState({
          title: e.target.value
      })
  }

  handleAuthorChange(e) {
      this.setState({
          author: e.target.value
      });
  }

  onSubmit() {
      fetch('/stories', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
      })
  }

  render() {
    return(
      <div className="CreateStoryTest">
        <h1>Create a New Story</h1>
        <hr/>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label for="storyTitleInput">Story Title</label>
                <input type="text" className="form-control" id="storyTitleInput" value={this.state.title} onChange={this.handleTitleChange} />
            </div>
            <div className="form-group">
                <label for="storyAuthorInput">Author</label>
                <input type="text" className="form-control" id="storyAuthorInput" value={this.state.author} onChange={this.handleAuthorChange} />
            </div>
            <div className="form-group">
                <label for="sectionTitleInput">First Section Title</label>
                <input type="text" className="form-control" id="sectionTitleInput"/>
            </div>
            <div className="form-group">
                <label for="sectionContentInput">Section Content</label>
                <textarea className="form-control" id="sectionContentInput" rows="10"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateStoryTest;
