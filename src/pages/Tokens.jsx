import React, {useState} from 'react';
import Axios from 'axios';
import '../styles/Tokens.css';

const Tokens = () => {
  const url = 'http://localapps.servegame.com/registerandlogin/register.controller.php';
  const [data, setData] = useState({
    mail: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      mail: data.mail
    })
    .then(response => {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Credentials", "true");
      response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      console.log(response.data);
    })
  }

  const handleValue = (e) => {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  }

  return (
    <div className='container-tokens'>
      <h2 className='title-tokens'>Ingrese su correo para obtener token</h2>
      <form onSubmit={(e) => handleSubmit(e)} id='formTokens' className='form-tokens'>
        <input onChange={(e) => handleValue(e)} value={data.mail} id='mail' type='email' placeholder='Email' autoComplete='off' required/>
        <input type="submit" value='Registrar'/>
      </form>
    </div>
  )
}

export default Tokens