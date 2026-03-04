import { useState } from 'react'
import '../styles/Login.css'

function Login({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple mock authentication - replace with real backend
    const userData = {
      id: Date.now(),
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      progress: {}
    }
    onLogin(userData)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Sales Training Platform</h1>
        <p className="subtitle">Master AWS Sales with Proven Methodologies</p>
        
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
        </form>
        
        <p className="toggle-auth">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login
