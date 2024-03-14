import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

const api = 'https://api.unsplash.com/search/photos';
const accessId =  process.env.REACT_APP_UNSPASH_ACCESS;
export default function AlbumSearch() {
    const [ search, setSearch ] = useState('animal');
    const [ list, setList ] =useState([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get(
                `${api}?client_id=${accessId}&query=${search}`,
            );
            const { results } = response.data;
            console.log(results);

            setList(results);
        })();
    }, [search])

    return (<>
        搜尋頁面 { search }
        <input type="text" className="form-control"
            defaultValue={search}
            onKeyUp={(e) => {
                if (e.code === 'NumpadEnter') {
                    setSearch(e.target.value);
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