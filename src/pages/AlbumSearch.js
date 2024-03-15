import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios"

const api = 'https://api.unsplash.com/search/photos';
const accessId =  process.env.REACT_APP_UNSPASH_ACCESS;
export default function AlbumSearch() {
    const [ search, setSearch ] = useState('');
    const [ list, setList ] = useState([]);
    const [ searshParams, setSearchParams ] = useSearchParams(); 

    // useEffect(() => {
    //     console.log(searshParams.get('query')); //取出
    //     setSearchParams({ query: 'building' });
    // }, []);

    useEffect(() => {
        if (search !== '') { //解決重新整理時，會出現空字串問題
            (async() => {
                const response = await axios.get(
                    `${api}?client_id=${accessId}&query=${search}`,
                );
                const { results } = response.data;
                console.log(results);
    
                setList(results);
            })();
        }
    }, [search])

    useEffect(() => {
        setSearch(searshParams.get('query'));
    }, [searshParams]);

    return (<>
        搜尋頁面 { search }
        <input type="text" className="form-control"
            defaultValue={search}
            onKeyUp={(e) => {
                if (e.code === 'NumpadEnter' || e.code === 'Enter') {
                    // setSearch(e.target.value);
                    setSearchParams({ query: e.target.value });
                }
            }}
        />
        {list.map((item) => {
            return(
                <li key={item.id}>
                    <Link to={`/album/${item.id}`}>{item.id}</Link>
                </li>
            )
        })}
    </>)
}