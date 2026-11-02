import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="not-found-wrapper">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Course not found</h2>
        <p className="not-found-desc">
          There's no course at this URL. The link might be wrong or the course may no longer exist.
        </p>
        <button onClick={() => navigate('/')} className="not-found-btn">
          &larr; Back to all courses
        </button>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        &larr; Back
      </button>

      <div className="detail-header">
        <span className={`badge ${course.category === 'Beginner' ? 'badge-beginner' : 'badge-intermediate'}`}>
          {course.category}
        </span>
        <h1 className="detail-title">{course.title}</h1>
        <p className="detail-duration">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {course.duration}
        </p>
      </div>

      <div className="detail-section">
        <h3>About this course</h3>
        <p className="detail-description">{course.description}</p>
      </div>

      <div className="detail-section">
        <h3>What you'll learn</h3>
        <ul className="topics-list">
          {course.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetail;