import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="not-found" style={{ padding: '50px 0', textAlign: 'center' }}>
        <h2>Course not found</h2>
        <p>We couldn't find a course with that URL.</p>
        <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="course-detail" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} className="back-btn" style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}>
        &larr; Back to courses
      </button>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{course.title}</h1>
      
      <div className="detail-meta" style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'center' }}>
        <span className={`badge ${course.category === 'Beginner' ? 'badge-beginner' : 'badge-intermediate'}`}>
          {course.category}
        </span>
        <span style={{ color: '#64748b' }}>{course.duration}</span>
      </div>
      
      <p className="description" style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '40px', color: '#334155' }}>
        {course.description}
      </p>
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>What you'll learn:</h3>
      <ul className="topics-list" style={{ paddingLeft: '20px', lineHeight: '2' }}>
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetail;