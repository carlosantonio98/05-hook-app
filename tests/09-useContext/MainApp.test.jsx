import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas en <MainApp />', () => {

    test('Debe de mostrar el HomePage', () => {

        // El MemoryRouter proporciona el useHref, porporciona el useLocation, el useHistorie, y x cantidad de cosas que  necesita nuestra aplicación, si no lo colocaramos no podriamos hacer las pruebas ya que el router necesita que le provean el useHref y otras cosas para que pueda funcionar de manera correcta, por lo general el que provee estos hooks internos que necesita el router en nuestro proyecto es el BrowserRouter, por desgracia nosotros no podemos manipular los datos de ese componente al momento de hacer pruebas por lo que debemos de usar el MemoryRouter que vendria siendo como un BrowseRouter pero en este si podemos simular en que ruta nos encontramos y nos proveeria funciones que el router de nuestra app necesita para que funcione

        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getByText('HomePage') ).toBeTruthy();
    });

    test('Debe de mostrar el LoginPage', () => {

        // El initialEntries esta esperando un arreglo en el cual es el segmento de la url en la que me encuentro, en este caso el login

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();

    });

    test('Debe de mostrar el AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('AboutPage') ).toBeTruthy();

    });

});