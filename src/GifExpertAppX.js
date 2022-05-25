import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['']);
    
    // const addCategory = () => {
    //     const cont = categorias.length +1;
    //     setCategorias([...categorias, `Opcion ${ cont }` ]);
    // }
    

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias = { setCategorias } />
        <hr/>
    
        <ol>
            {
                categorias.map( categoria => {
                return <GifGrid 
                  key={ categoria }
                  categoria = {categoria} />
                })
            }
        </ol>
      </>
  )
}
