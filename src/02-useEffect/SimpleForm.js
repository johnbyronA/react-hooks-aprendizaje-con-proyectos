import React,{useState,useEffect} from 'react'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "strider",
        email:"johnbyron@google.com"
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })  
    };


    useEffect(() => {
      return () => {
        console.log("useEffect called!");
      };
    }, []);

    useEffect(() => {
      return () => {
        console.log("formState changed!");
      };
    }, [formState]);

    useEffect(() => {
      return () => {
        console.log("email changed!");
      };
    }, [email]);



  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

    <input 
    type="text" 
    className='form-control'
    placeholder='Username'
    name='username'
    value={username}
    onChange={onInputChange}


    />

    <input 
    type="email" 
    className='form-control mt-2'
    placeholder='johnbyron@google.com'
    name='email'
    value={email}
    onChange={onInputChange}
    />


    </>
  )
}

export default SimpleForm
