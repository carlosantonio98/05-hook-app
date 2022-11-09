import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log('Message Mounted');
    
      return () => { // la parte del retorno del useEffect sirve para limpiar, eliminar o desmontar este componete de la vista inicial, siempre y cuando este no se estre renderizando en pantalla, es decir por ejemplo si se hace esto en la vista donde los vallamos a usar: ( username === 'strider2' ) && <Message />, en el momento en el que no se cumple la condición el return del useEffect de Message se ejecutara y lo eliminara del dom
        console.log('Message Unmounted');  // con este return desmontamos el componente, es decir los destruimos, no quedaria invisible sino que se eliminaria del dom
      }
    }, [])  // Para que solo se ejecute una sola vez
    

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    );
};
