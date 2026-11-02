import { useParams } from 'react-router-dom'
import courses from '../data/courses'
import CourseCard from '../components/CourseCard'

function Category() {
  const { category } = useParams()

 
  const filteredCourses = courses.filter(
    (course) => course.category.toLowerCase() === category.toLowerCase()
  )

  return (
    <div>
      <h1>{category} Courses</h1>
      
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