import { useParams } from 'react-router-dom'
import courses from '../data/courses'
import CourseCard from '../components/CourseCard'

function Category() {
  // 1. Grab the category name from the URL (e.g., "Beginner" or "Intermediate")
  const { category } = useParams()

  // 2. Filter the courses array based on the URL parameter
  // We use .toLowerCase() on both sides to make sure the URL matching isn't case-sensitive
  const filteredCourses = courses.filter(
    (course) => course.category.toLowerCase() === category.toLowerCase()
  )

  return (
    <div>
      {/* 3. Dynamic Heading */}
      <h1>{category} Courses</h1>
      
      {/* 4. Handle empty states or display the grid */}
      {filteredCourses.length === 0 ? (
        <p>No courses found in this category.</p>
      ) : (
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Category