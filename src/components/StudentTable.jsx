import StudentRow from './StudentRow'
import './StudentTable.css'

function StudentTable({ students, onUpdateScore, onDelete }) {
  if (students.length === 0) {
    return (
      <section className="table-card">
        <div className="empty-state">
          <span className="empty-icon">🎓</span>
          <p>No students yet. Add one using the form above!</p>
        </div>
      </section>
    )
  }

  return (
    <section className="table-card">
      <h2 className="table-heading">
        <span>Student Records</span>
        <span className="table-count">{students.length} student{students.length !== 1 ? 's' : ''}</span>
      </h2>

      <div className="table-wrapper">
        <table className="scoreboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Update Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                index={index + 1}
                onUpdateScore={onUpdateScore}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default StudentTable
