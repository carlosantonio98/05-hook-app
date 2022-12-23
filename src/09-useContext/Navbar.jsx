import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Usecontext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {/** Navlink en general nos permite obtener en el className si este enlace tiene el path y nos encontramos en ese path */}
                        {/** Navlink es utilizado en la barras de navegación o cuando necesitamos reaccionar o que el link reaccione basado en la ruta en la que se encuentra */}
                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/">
                            Home
                        </NavLink>

                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/about">
                            About
                        </NavLink>

                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/login">
                            Login
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
{/* Usualmente cuando nosotros queramos hacer una navegación a otras pantallas vamos a usar el link, si nos vamos al inspector y seleccionamos el link podremos ver que este es un anchor "a" por lo tanto para agregarle estilos a los links sera tomandolos de referencia como si fueran un anchor ya que realmente eso son. */}