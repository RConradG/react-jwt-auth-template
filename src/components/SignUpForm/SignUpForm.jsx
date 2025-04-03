import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [message, setMeasage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  // destructure our formstate into individual vars
  const {username, password, passwordConf} = formData;

  const handleChange = (evt) => {
    setMessage("");
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };

  // new; checks if the form is valid
  const isFormInvalid = () => {
    return !(username && password && (password === passwordConf) );
  }

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            name='username'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='passwordConf'>Confirm Password:</label>
          <input
            type='password'
            id='passwordConf'
            value={passwordConf}
            name='passwordConf'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};


export default SignUpForm;