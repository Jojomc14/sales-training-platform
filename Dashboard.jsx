import { useNavigate } from 'react-router-dom'
import { modules } from '../data/modules'
import '../styles/Dashboard.css'

function Dashboard({ user, onLogout }) {
  const navigate = useNavigate()
  
  const getProgress = (moduleId) => {
    const progress = JSON.parse(localStorage.getItem('progress') || '{}')
    return progress[moduleId] || { completed: false, score: 0 }
  }

  const totalModules = modules.length
  const completedModules = modules.filter(m => getProgress(m.id).completed).length
  const overallProgress = Math.round((completedModules / totalModules) * 100)

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome back, {user.name}!</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </header>

      <div className="progress-overview">
        <div className="stat-card">
          <h3>{completedModules}/{totalModules}</h3>
          <p>Modules Completed</p>
        </div>
        <div className="stat-card">
          <h3>{overallProgress}%</h3>
          <p>Overall Progress</p>
        </div>
      </div>

      <div className="modules-grid">
        {modules.map(module => {
          const progress = getProgress(module.id)
          return (
            <div key={module.id} className="module-card">
              <div className="module-icon">{module.icon}</div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <div className="module-meta">
                <span className="difficulty">{module.difficulty}</span>
                {progress.completed && <span className="completed">✓ Completed</span>}
              </div>
              <button onClick={() => navigate(`/module/${module.id}`)}>
                {progress.completed ? 'Review' : 'Start Learning'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
