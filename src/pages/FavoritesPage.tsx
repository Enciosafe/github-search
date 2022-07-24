import React from 'react';
import {useAppSelector} from "../hooks/redux";

const FavoritesPage = () => {
    const {favorites} = useAppSelector(state => state.github)

    if (favorites.length === 0) return <p className='text-center'>no items</p>

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            <ul className='list-none'>
                {favorites.map(f => (
                    <li key={f}>
                        <a href={f} target='_blank'>{f}</a>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default FavoritesPage;
