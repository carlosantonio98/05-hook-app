import React from "react";

// Memorizamos todo el componente hijo
export const Hijo = React.memo(({ numero, incrementar }) => {  // memorizamos el componente y se redibujara solo si los argumentos cambian

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary me-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
