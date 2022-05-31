import React from 'react';
import '../styles/Tokens.css';

class Tokens extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    const data = new FormData();
        data.append('username', this.state.username);
        data.append('password', this.state.password);

    const xhr = new XMLHttpRequest();

    xhr.open('POST','http://localapps.servegame.com/registerandlogin/register.controller.php', true);

    xhr.onload = (response) => {
        console.log(JSON.parse(response.currentTarget.response))
    }
    xhr.send(data);
  }

  render() {
    const {username, password} = this.state;
    return (
      <div className='container-tokens'>
        <h2 className='title-tokens'>Ingrese su correo para obtener token</h2>
          <form onSubmit={this.handleSubmit} className='form-tokens'>
            <input 
            name='username'
            type='text' 
            placeholder='Name' 
            autoComplete='off'
            value={username} 
            onChange={this.handleChange}
            required/>

            <input 
            name='password'
            type='password' 
            placeholder='Password' 
            autoComplete='off'
            value={password} 
            onChange={this.handleChange}
            required/>
            
            <input 
            type="submit" 
            value='Registrar'/>
      </form>
    </div>
    )
  }
}

export default Tokens