import { useParams, useNavigate } from 'react-router-dom'
import courses from '../data/courses'

function CourseDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const course = courses.find(c => c.slug === slug)

  if (!course) {
    return (
      <div className="not-found">
        <h2>Course not found</h2>
        <p>We couldn't find a course with that URL.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }

  return (
    <div className="course-detail">
      <button onClick={() => navigate(-1)} className="back-btn">
        &larr; Back
      </button>
      
      <h1>{course.title}</h1>
      
      <div className="detail-meta">
        <span className="badge">{course.category}</span>
        <span>Duration: {course.duration}</span>
      </div>
      
      <p className="description">{course.description}</p>
      
      <h3>Topics Covered:</h3>
      <ul className="topics-list">
        {course.topics && course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseDetail