import { useParams } from 'react-router-dom';
// Notice the curly braces here too!
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

function Category() {
  const { category } = useParams();
  
  const filteredCourses = courses.filter(
    c => c.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <div className="courses-header" style={{ marginTop: '20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{category} Courses</h1>
        <p style={{ color: '#64748b' }}>Browse our {category.toLowerCase()} level courses.</p>
      </div>
      
      <div className="course-grid" style={{ marginTop: '30px' }}>
        {filteredCourses.map(course => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Category;