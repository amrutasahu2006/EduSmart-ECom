import { useNavigate } from 'react-router-dom'

export default function CourseCard({ course, onEnroll, showToast }) {
  const navigate = useNavigate()
  const gradients = [
    'linear-gradient(135deg, #fde8df, #fcc9b3)',
    'linear-gradient(135deg, #d4f0ef, #a5d8d7)',
    'linear-gradient(135deg, #e8eaf4, #c5cae9)',
    'linear-gradient(135deg, #f0eaff, #ddd0ff)',
    'linear-gradient(135deg, #fef9c3, #fde68a)',
    'linear-gradient(135deg, #dcfce7, #a7f3d0)',
  ]
  const bg = gradients[course.id % gradients.length]

  const handleEnroll = () => {
    if (showToast) {
      showToast(`🎉 Enrolled in "${course.title}"!`)
    } else {
      alert(`Enrolled in: ${course.title}`)
    }
    if (onEnroll) onEnroll(course)
  }

  return (
    <div className="course-card">
      <div className="course-thumb" style={{ background: bg }}>
        {course.image ? (
          <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span>{course.emoji}</span>
        )}
        {course.badge && <span className="course-badge">{course.badge}</span>}
      </div>
      <div className="course-body">
        <div className="course-meta">
          <span>📚 {course.lessons} lessons</span>
          <span>⏱ {course.duration}</span>
          <span>👤 {course.level}</span>
        </div>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.description}</p>
        <div className="course-footer">
          <div>
            <div className="course-rating">
              <span className="stars">★★★★★</span> {course.rating} ({course.students})
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="course-price">
              ${course.price}
              {course.originalPrice && <span className="original">${course.originalPrice}</span>}
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary"
          style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}
          onClick={() => navigate(`/course/${encodeURIComponent(course.title.toLowerCase().replace(/\s+/g, '-'))}`)}
        >
          View Details →
        </button>
      </div>
    </div>
  )
}
