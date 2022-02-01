const data ={

    12: {
      id: 12,
      titles: {
        description: 'Angular Testing Course',
        longDescription: 'In-depth guide to Unit Testing and E2E Testing of Angular Applications'
      },
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
      category: 'BEGINNER',
      seqNo: 0,
      url: 'angular-testing-course',
      lessonsCount: 10,
    },
  
    2: {
      id: 2,
      titles: {
        description: 'Angular Core Deep Dive',
        longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules'
      },
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      lessonsCount: 10,
      category: 'BEGINNER',
      seqNo: 1,
      url: 'angular-core-course'
    },
  
    3: {
      id: 3,
      titles: {
        description: 'RxJs In Practice Course',
        longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples'
      },
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
      courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
      category: 'BEGINNER',
      lessonsCount: 10,
      seqNo: 2,
      url: 'rxjs-course'
    },
};

function getCourses(req, res) {
   res.status(200).json(data);
}

/*
 * GET /course/:id route to retrieve a course given its id.
 */

function getCourse(req, res) {
    let course = data[req.params.id];
    if(!course) {return res.status(404).send('Course Not Found');}
    
    res.json(course);
}


//export all the functions
module.exports = { getCourses, getCourse};