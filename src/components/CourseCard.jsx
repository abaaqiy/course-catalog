import { Link } from 'react-router-dom'

function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.slug}`} className="course-card">
      <h3>{course.title}</h3>
      <div className="card-meta">
        <span className="badge">{course.category}</span>
        <span>{course.duration}</span>
      </div>
    </Link>
  )
}

export default CourseCard