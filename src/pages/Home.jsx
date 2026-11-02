// Notice the curly braces here!
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

function Home() {
  return (
    <div>
      <header className="hero-section">
        <p className="hero-subtitle">TECHYJAUNT COHORT 8</p>
        <h1 className="hero-title">Learn at your<br/>own pace.</h1>
        <p className="hero-desc">
          Everything from HTML basics to advanced React patterns — structured,<br/>
          practical, and beginner-friendly.
        </p>
      </header>

      <div className="courses-header">
        <h2>All Courses <span className="course-count">({courses.length})</span></h2>
      </div>

      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Home;