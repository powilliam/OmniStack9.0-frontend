import React, {
  useState
} from 'react';
import api from '../../services/axios';

const Login = ({ history }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.post('/sessions', { email });
    
    const { _id } = response.data.user;
    localStorage.setItem("user", _id);

    history.push('/dashboards');
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;
