import React, {useState} from 'react'

export const GiftExpertApp = ( ) => {
    const [categories, setCategories] = useState(['categoria1','categoria2','categoria3']);
    // const categories = ['categoria1','categoria2','categoria3']
    const handleAdd = () => {
        setCategories([...categories,'NewCategory'])
    }
    return (
    <>
        <h2>GiftExpertApp</h2>
        <hr />
        <button onClick={ handleAdd }> Agregar </button>

        <ol>
            {
            categories.map( category => {
                return <li key={ category }> { category } </li>
            })
            }
            </ol>
    </>
  );
}

