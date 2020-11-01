import React from 'react';
import Course from './Course';

const CourseList = ({ courses }) => {
  return (
    <div>
      {
        courses.map((user, i) => {
          return (
            <Course
              key={i}
              id={courses[i].id}
              name={courses[i].name}
              tag={courses[i].tag}
              enroll = {courses[i].enroll}
              />
          );
        })
      }
    </div>
  );
}

export default CourseList;