import { useState } from 'react'
import Header from './components/Header'
import AddStudentForm from './components/AddStudentForm'
import StudentTable from './components/StudentTable'
import './App.css'

const initialStudents = [
  { id: 1, name: 'Aarav Sharma',  score: 78 },
  { id: 2, name: 'Priya Mehta',   score: 34 },
  { id: 3, name: 'Rohan Gupta',   score: 55 },
  { id: 4, name: 'Sneha Iyer',    score: 92 },
  { id: 5, name: 'Karan Verma',   score: 27 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  /* Add a new student */
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    }
    setStudents(prev => [...prev, newStudent])
  }

  /* Update a student's score */
  const updateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: Number(newScore) } : s)
    )
  }

  /* Delete a student */
  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  const passCount = students.filter(s => s.score >= 40).length
  const failCount = students.length - passCount

  return (
    <div className="app-wrapper">
      <Header total={students.length} passCount={passCount} failCount={failCount} />

      <main className="main-content">
        <AddStudentForm onAdd={addStudent} />
        <StudentTable
          students={students}
          onUpdateScore={updateScore}
          onDelete={deleteStudent}
        />
      </main>

      <footer className="footer">
        <span>Web Dev II — Lab Assignment 3</span>
        <span>React Student Scoreboard</span>
      </footer>
    </div>
  )
}

export default App
