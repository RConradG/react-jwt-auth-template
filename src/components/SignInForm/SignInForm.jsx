import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

// TODO define import { signIn } from '../../services/authService';

import { UserContext } from '../../contexts/UserContext';

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = userContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (evt) => {
    setMessage('');
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // TODO const signInUser = await signIn(formData)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <main>
    <h1>Sign In</h1>
    <p>{message}</p>
    <form autoComplete='off' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Username:</label>
        <input
          type='text'
          autoComplete='off'
          id='username'
          value={formData.username}
          name='username'
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          autoComplete='off'
          id='password'
          value={formData.password}
          name='password'
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button>Sign In</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </div>
    </form>
  </main>
  );
};

export default SignInForm;