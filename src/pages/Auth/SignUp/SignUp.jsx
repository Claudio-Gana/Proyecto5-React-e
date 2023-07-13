import { useContext, useState } from 'react';
import UserContext from "../../../contexts/user/UserContext.jsx";
import './signup.css';



export const SignUp = () => {
  const userCtx = useContext( UserContext )
  const { registerUser } = userCtx
  const [ formValues, setFormValues ] = useState( {
    name: "",
    surname: "",
    email: "",
    password: ""
  } )

  async function handleSubmit( event ) {
    event.preventDefault()
    await registerUser( formValues )
    console.log( formValues );
  }

  async function handleFormChange( event ) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [ name ]: value }
    setFormValues( newValues )
  }

  return (
    <div >
      
      <div className='contenedor'>

      <div className='imagen'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MUkivVRiIFnz-i9HpEzTKgiq6Ksu9SEJrw&usqp=CAU" alt="" width={"100%"}/>
        
        </div>
      
      
      <form className='formulario' onSubmit={ handleSubmit }>
        <h1>Registro</h1>
        <label  htmlFor='name'>Nombre</label>
        <input id="name" name='name' type='text' value={ formValues.name } onChange={ handleFormChange }></input>

        <label htmlFor='surname'>Apellido</label>
        <input id="surname" name='surname' type='text' value={ formValues.surname } onChange={ handleFormChange }></input>

        <label htmlFor='email'>Correo</label>
        <input id="email" name='email' type='email' value={ formValues.email } onChange={ handleFormChange }></input>

        <label htmlFor='password'>Contraseña</label>
        <input id="password" name='password' type='password' value={ formValues.password } onChange={ handleFormChange }></input>

        <button type='submit'>Registrarse</button>
      </form>
      </div>
    </div>
  )

}