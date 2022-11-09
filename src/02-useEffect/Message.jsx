import { useEffect, useState } from 'react'

export const Message = () => {

    //NOTA NUNCA SE DEBE DE ACTUALIZAR EL ESTADO DE UN COMPONENTE QUE YA NO ESTA MONTADO, RENDERIZANDO EN PANTALLA
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log( coords );
            setCoords( coords );  // SI NO HUBIERA UN RETURN ESTO SERIA UN ERROR EN VERSIONES MENORES EN REACT 18 YA QUE NO SE PUEDE CAMBIAR EL STATE DE UN COMPONENTE QUE NO ESTA MONTADO
        }

        // Cuando el componente se monta voy a crear el listener mosemove y lo voy a apuntar a la funcion onMouseMove
        window.addEventListener( 'mousemove', onMouseMove );

        /* window.addEventListener( 'mousemove', ({ x, y }) => {  // Si no se coloca el return nunca se detendra este evento y cada que se muestre este componente se le colocara otra evento onMouse
            console.log(x, y);
        }); */

      return () => {

        // Quiero remover el evento mousemove y la referencia a la función que quiero eliminar
        window.removeEventListener( 'mousemove', onMouseMove );

        // Para remover un evento tenemos que apuntar a un elemento referenciado en memoria, no funcionaria si apuntamos a la funcion () => {} directamente ya que estariamos creando una nueva espacio en memoria y nunca seria el mismo espacio en memoria, si arriba referenciaramos a la funcion con un () => {} y abajo con la constante onMouseMove estos nos son iguales ya que los dos espacios en memoria son muy diferentes, para poder removerse la funcion tenemos que hacer referencia a la misma función y su espacio en memoria debe de coinsidir por eso se debe de hacer referencia.

      }
    }, [])
    

    return (
        <>
            <h3>Usuario ya existe</h3>

            { JSON.stringify( coords ) }
        </>
    );
};
