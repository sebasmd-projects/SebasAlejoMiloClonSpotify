import { useFetch } from '../../hooks';
import { LoadingQuote } from '../../components/inicio';


export const Inicio = () => {

    const { data, isLoading } = useFetch(``);
    console.log(data);

    return (
        <>
            <h1>Hola</h1>
            {
                isLoading
                 ? <LoadingQuote />
                 : <div>data = </div>
            }
        </>
    )
}