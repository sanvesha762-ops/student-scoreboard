import './Header.css'

function Header({ total, passCount, failCount }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <span className="header-icon">📋</span>
          <div>
            <h1 className="header-title">Student Scoreboard</h1>
            <p className="header-subtitle">Track, update & manage student performance</p>
          </div>
        </div>

        <div className="header-stats">
          <div className="stat-chip stat-total">
            <span className="stat-num">{total}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-chip stat-pass">
            <span className="stat-num">{passCount}</span>
            <span className="stat-label">Pass</span>
          </div>
          <div className="stat-chip stat-fail">
            <span className="stat-num">{failCount}</span>
            <span className="stat-label">Fail</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
