import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Sectioncomp from './section';
function Sidenavcomp() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(json => setDatas(json))
    }, [])

    return (
        <>
            <div style={{ paddingTop: 170, paddingBottom: 30, display: 'flex', justifyContent: 'flex-end' }}>
                <nav style={{ paddingRight: 20 }}>
                    {datas.map((value) => (
                        <span key={value}>
                            <NavLink
                                to={`/${value}`}
                                style={({ isActive }) => ({
                                    color: isActive ? 'violet' : 'blue',
                                    textDecoration: 'none',
                                })}
                            >
                                {value}
                            </NavLink> /
                        </span>
                    ))}
                </nav>
            </div>
        </>
    )
}

export default Sidenavcomp;