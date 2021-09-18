import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList = () => {

    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories)

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
        // dispatch(actionCreators.searchRepositories(term))
    }
    console.log(data);
    

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder="Name" value={term} onChange={e => setTerm(e.target.value)} />
            <button type="submit">Search</button>
            { error && <h3>{error}</h3>}
            { loading && <h3>Loading...</h3>}
            {!error && !loading && 
                data.map((name) => {
                    return <div key={name} >{name}</div>
                })
            }
        </form>
    )
}

export default RepositoriesList;
