class DB {

  constructor() {

    this.stories = [];
    this.sections = [];
  }

  addNewStory(story) {

    this.stories.push(story);
  }

  getStories() {

    return this.stories;
  }

  seedData() {
    const data1 = {
      title: "Adventure in the Misty Woods",
      author: "Koichi Hirose"
    }

    const data2 = {
      title: "Ticket to Heaven",
      author: "Kishibe Rohan"
    }

    this.addNewStory(data1);
    this.addNewStory(data2);
  }

}

module.exports = DB;
