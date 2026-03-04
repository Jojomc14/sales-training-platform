import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { modules } from '../data/modules'
import '../styles/Module.css'

function Module({ user }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const module = modules.find(m => m.id === id)
  const [currentSection, setCurrentSection] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizComplete, setQuizComplete] = useState(false)

  if (!module) return <div>Module not found</div>

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex })
  }

  const submitQuiz = () => {
    const correct = module.content.quiz.filter((q, i) => quizAnswers[i] === q.correct).length
    const score = Math.round((correct / module.content.quiz.length) * 100)
    
    const progress = JSON.parse(localStorage.getItem('progress') || '{}')
    progress[module.id] = { completed: true, score }
    localStorage.setItem('progress', JSON.stringify(progress))
    
    setQuizComplete(true)
  }

  const nextSection = () => {
    if (currentSection < module.content.sections.length - 1) {
      setCurrentSection(currentSection + 1)
    } else {
      setShowQuiz(true)
    }
  }

  if (quizComplete) {
    const correct = module.content.quiz.filter((q, i) => quizAnswers[i] === q.correct).length
    const score = Math.round((correct / module.content.quiz.length) * 100)
    
    return (
      <div className="module-container">
        <div className="quiz-complete">
          <h2>🎉 Module Complete!</h2>
          <p className="score">Your Score: {score}%</p>
          <p>You got {correct} out of {module.content.quiz.length} questions correct.</p>
          <div className="action-buttons">
            <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
            <button onClick={() => navigate(`/practice/${module.id}`)}>Practice Scenarios</button>
          </div>
        </div>
      </div>
    )
  }

  if (showQuiz) {
    return (
      <div className="module-container">
        <div className="quiz-section">
          <h2>Knowledge Check</h2>
          {module.content.quiz.map((q, i) => (
            <div key={i} className="quiz-question">
              <p className="question">{q.question}</p>
              <div className="options">
                {q.options.map((option, j) => (
                  <label key={j} className="option">
                    <input
                      type="radio"
                      name={`question-${i}`}
                      checked={quizAnswers[i] === j}
                      onChange={() => handleQuizAnswer(i, j)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button 
            onClick={submitQuiz}
            disabled={Object.keys(quizAnswers).length !== module.content.quiz.length}
            className="submit-btn"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    )
  }

  const section = module.content.sections[currentSection]

  return (
    <div className="module-container">
      <div className="module-header">
        <button onClick={() => navigate('/dashboard')} className="back-btn">← Back</button>
        <h1>{module.title}</h1>
        <span className="progress-indicator">
          {currentSection + 1} / {module.content.sections.length}
        </span>
      </div>

      <div className="content-section">
        <h2>{section.title}</h2>
        <p>{section.text}</p>
      </div>

      <div className="navigation">
        {currentSection > 0 && (
          <button onClick={() => setCurrentSection(currentSection - 1)}>Previous</button>
        )}
        <button onClick={nextSection} className="next-btn">
          {currentSection === module.content.sections.length - 1 ? 'Take Quiz' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default Module
