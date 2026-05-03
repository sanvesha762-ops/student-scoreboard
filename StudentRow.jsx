import { useState } from 'react'
import './StudentRow.css'

function StudentRow({ student, index, onUpdateScore, onDelete }) {
  const { id, name, score } = student
  const [inputVal, setInputVal] = useState(score)

  const isPassing = score >= 40

  const handleUpdate = () => {
    const parsed = Number(inputVal)
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 100) {
      onUpdateScore(id, parsed)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUpdate()
  }

  return (
    <tr className="student-row">
      {/* Index */}
      <td className="td-index">{index}</td>

      {/* Name */}
      <td className="td-name">{name}</td>

      {/* Score */}
      <td className="td-score">
        <span className="score-badge">{score}</span>
      </td>

      {/* Status */}
      <td className="td-status">
        <span className={`status-pill ${isPassing ? 'pass' : 'fail'}`}>
          {isPassing ? '✓ Pass' : '✗ Fail'}
        </span>
      </td>

      {/* Update score input */}
      <td className="td-update">
        <div className="update-group">
          <input
            type="number"
            min="0"
            max="100"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="score-input"
          />
          <button className="btn-update" onClick={handleUpdate}>Save</button>
        </div>
      </td>

      {/* Delete */}
      <td className="td-action">
        <button className="btn-delete" onClick={() => onDelete(id)} title="Remove student">
          🗑
        </button>
      </td>
    </tr>
  )
}

export default StudentRow
