import React, { Component } from 'react';

class CreateStoryTest extends Component {

  render() {
    return(
      <div className="CreateStoryTest">
        <h1>Create a New Story</h1>

        <form>
          <div>
            <label>Story Title</label>
            <input type="text" />
          </div>
          <div>
            <label>First Section Title</label>
            <input type="text" />
          </div>
          <div>
            <label>Section Content</label>
            <textarea />
          </div>
          <input type="submit" value="Submit" />
        </form>
        
      </div>
    );
  }
}

export default CreateStoryTest;
