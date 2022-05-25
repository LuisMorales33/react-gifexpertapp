import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

  const { data:images, loading } = useFetchGifs( categoria );

  return (
    <>
      <h3 className='animate__animated animate__zoomIn'>{ categoria }</h3>
      { loading && 'cargando' } 
      <div className='card-grid animate__animated animate__slideInDown'>
        {
          images.map( img => {
            return <GifGridItem 
            key ={ img.id }
            { ...img }
            />
          })
        }
      </div> 
    </>
  )
}
