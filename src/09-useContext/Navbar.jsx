import { Link } from 'react-router-dom';

export const Navbar = () => {
    return(
        <>
            {/* Usualmente cuando nosotros queramos hacer una navegación a otras pantallas vamos a usar el link, si nos vamos al inspector y seleccionamos el link podremos ver que este es un anchor "a" por lo tanto para agregarle estilos a los links sera tomandolos de referencia como si fueran un anchor ya que realmente eso son. */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </>
    );
}