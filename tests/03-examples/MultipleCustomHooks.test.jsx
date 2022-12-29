const { render, screen } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples");

describe('Prueba en <MultipleCustomHooks />', () => {

    test('Debe de mostrar el componente por defecto', () => {

        render( <MultipleCustomHooks />);
        // screen tiene la información tal cual esta en este momento

        // para hacer esta prueba facil lo podriamos hacer con un snapshot, pero para expander más nuestro conocimiento esta es otra manera de hacer este tipo de prueba

        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( 'BreakingBad Quotes' ) );

        const nextButton = screen.getByRole('button', { name: 'Next quote' }); // Para hacer mas precisa la búsqueda de un botón al momento de estar haciendo pruebas tenemos que poner el name, aria-label o text-id para poder identificarlo, hay muchas maneras de referenciar un botón en especifico.

        expect( nextButton.disabled ).toBeTruthy();
    });

})