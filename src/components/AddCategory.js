import React,{ useState }  from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');
        // console.log( { inputValue } );
        if (inputValue.trim().length > 2) {
            setCategorias(categorias => [inputValue, ...categorias, ]);
            setInputValue('');
        }
    }
 
  return (
      <form onSubmit={ handleSubmit }>
        <input 
            type="text" 
            value= { inputValue }
            onChange= { handleInputChange }
            placeholder= 'Escribe algo'
        />
      </form> 
  )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

