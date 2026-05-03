import { useState } from 'react'
import './AddStudentForm.css'

function AddStudentForm({ onAdd }) {
  const [name, setName]   = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const trimmedName = name.trim()
    const parsedScore = Number(score)

    if (!trimmedName) {
      setError('Student name is required.')
      return
    }
    if (score === '' || isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      setError('Score must be a number between 0 and 100.')
      return
    }

    onAdd(trimmedName, parsedScore)
    setName('')
    setScore('')
  }

  return (
    <section className="form-card">
      <h2 className="form-heading">
        <span className="form-heading-icon">＋</span>
        Add New Student
      </h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="student-name">Student Name</label>
          <input
            id="student-name"
            type="text"
            placeholder="e.g. Ananya Patel"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="student-score">Score (0–100)</label>
          <input
            id="student-score"
            type="number"
            min="0"
            max="100"
            placeholder="e.g. 75"
            value={score}
            onChange={e => setScore(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-add">Add Student</button>
      </form>

      {error && <p className="form-error">⚠ {error}</p>}
    </section>
  )
}

export default AddStudentForm
