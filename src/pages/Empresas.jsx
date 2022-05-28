import React from 'react';
import '../styles/Empresas.css';

const Empresas = () => {
  return (
    <div className='container-empresas'>
      <h2>Ingrese los datos de su empresa para registrar</h2>
      <form className='form-empresas'>
        <input type='name' id='nameEmpresa' placeholder='Nombre' required/>
        <input type='mail' id='mailEmpresa' placeholder='Email' required/>
        <input type='password' id='passEmpresa' placeholder='Contraseña' required/>
        <input type="submit" value='Registrar'/>
      </form>
    </div>
  )
}

export default Empresas