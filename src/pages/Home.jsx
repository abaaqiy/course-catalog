import { Link } from 'react-router-dom'
import courses from '../data/courses'
import CourseCard from '../components/CourseCard'

function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to the Course Catalog</h1>
        <p>Browse our selection of courses to level up your skills.</p>
      </div>
      
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  )
}

export default Home