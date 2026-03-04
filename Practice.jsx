import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { modules } from '../data/modules'
import { practiceScenarios } from '../data/scenarios'
import '../styles/Practice.css'

function Practice({ user }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const module = modules.find(m => m.id === id)
  const scenarios = practiceScenarios[id] || []
  const [currentScenario, setCurrentScenario] = useState(0)
  const [userResponse, setUserResponse] = useState('')
  const [feedback, setFeedback] = useState(null)

  if (!module || scenarios.length === 0) {
    return (
      <div className="practice-container">
        <h2>Practice scenarios coming soon!</h2>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    )
  }

  const scenario = scenarios[currentScenario]

  const handleSubmit = () => {
    setFeedback({
      submitted: true,
      tips: scenario.tips
    })
  }

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setUserResponse('')
      setFeedback(null)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="practice-container">
      <div className="practice-header">
        <button onClick={() => navigate('/dashboard')} className="back-btn">← Back</button>
        <h1>Practice: {module.title}</h1>
        <span className="scenario-count">{currentScenario + 1} / {scenarios.length}</span>
      </div>

      <div className="scenario-card">
        <h2>{scenario.title}</h2>
        <div className="scenario-context">
          <p><strong>Context:</strong> {scenario.context}</p>
          <p><strong>Customer Says:</strong> "{scenario.customerStatement}"</p>
        </div>

        <div className="response-area">
          <label>Your Response:</label>
          <textarea
            value={userResponse}
            onChange={(e) => setUserResponse(e.target.value)}
            placeholder="Type your response here..."
            rows="6"
            disabled={feedback !== null}
          />
        </div>

        {!feedback ? (
          <button onClick={handleSubmit} disabled={!userResponse.trim()}>
            Submit Response
          </button>
        ) : (
          <div className="feedback">
            <h3>💡 Tips for this scenario:</h3>
            <ul>
              {scenario.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
            <button onClick={nextScenario} className="next-btn">
              {currentScenario === scenarios.length - 1 ? 'Finish' : 'Next Scenario'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Practice
