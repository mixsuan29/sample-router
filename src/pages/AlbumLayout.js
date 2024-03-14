import { Outlet, Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const api = 'https://api.unsplash.com/search/photos';
const accessId =  process.env.REACT_APP_UNSPASH_ACCESS;
console.log(api, accessId);
export default function AlbumLayout() {
    const [list, setList] =useState([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get(
                `${api}?client_id=${accessId}&query=cat`,
            );
            const { results } = response.data;
            console.log(results);

            setList(results);
        })();
    }, [])

    return (
        <div className="row">
            <div className="col-4">
                左側選單列表
                {list.map((item) => {
                    return(
                        <li key={item.id}>
                            <Link to={item.id}>{item.id}</Link>
                        </li>
                    )
                })}
            </div>
            <div className="col-4">
                <Outlet context={list}/>
            </div>
        </div>
    )
}