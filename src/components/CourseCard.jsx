import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  const badgeClass = course.category === "Beginner" ? "badge-beginner" : "badge-intermediate";

  return (
    <Link to={`/courses/${course.slug}`} className="course-card">
      <span className={`badge ${badgeClass}`}>{course.category}</span>
      
      <h3 className="card-title">{course.title}</h3>
      
      <div className="card-duration">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        {course.duration}
      </div>
      
      <div className="card-link">
        View course <span>&rarr;</span>
      </div>
    </Link>
  );
}

export default CourseCard;