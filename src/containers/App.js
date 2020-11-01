import React, { Component } from 'react';
import CourseList from '../components/CourseList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { courselist } from '../courselist';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      courselist: courselist,
      searchfield: ''
    }
  }

  //save it for the api fetch later
  /*
  componentDidMount() {
    //should change to our courses api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ courses: users})});
  }
  */

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { course, searchfield } = this.state;
    const filteredCourses = courselist.filter(course => {
      return course.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !courselist.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>  
          
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CourseList courses={filteredCourses} />
          </Scroll>

          <div className="hero-image">
            <div className="hero-text">
              <h2 className='f1'>Course List</h2>
            </div>
          </div>
        </div>
      );
  }
}

export default App;