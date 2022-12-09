import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime() * 3,
            done: false,
            description: description,
        };

        // para emitir un evento tenemos que recibir la función a disparar desde los props y mandarla a llamar desde aca
        onNewTodo( newTodo );  // mandamos a enviar todo el newTodo, es decir el newTodo es lo que estamos emitiendo.
        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
