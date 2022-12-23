import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage, Navbar } from '.';

export const MainApp = () => {
    return (
        <>
            {/* <h1>Main app</h1> */}
            <Navbar />
            <hr />

            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='about' element={ <AboutPage /> } />
                <Route path='login' element={ <LoginPage /> } />

                {/* a /* se le conoce como while car, la ruta que se muestra a continuación es una tecnica que se utiliza para redirigir al login en caso de que se busque una ruta que no existe
                <Route path='/*' element={ <LoginPage /> } />
                */}
                
                {/* esto hace lo mismo que lo anterior la diferencia es que este es mas común de encontrar y mayormente lo vamos a trabajar de esta manera, para hacerlo de esta manera vamos a necesitar implemetar el componente Navigate, a este componente  le vamos a especificar en su propiedad "to" hacia que ruta lo queremos redirigir, así como se muestra a continuación */}
                {/*
                    Navigate es especial es un componente como otros, solo que este componente apenas se renderize, se termine de implementar y el contexto de nuestros componentes se normalize o ya todos esten dibujados, entoces va hacer la navegacion al componente o al path que nosotros especifiquemos en el to.
                
                */}
                <Route path='/*' element={ <Navigate to="/" /> } />
            </Routes>
        </>
    )
}
