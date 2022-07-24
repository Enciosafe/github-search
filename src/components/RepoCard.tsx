import React, { useState } from 'react';
import { IRepo } from '../models/models';
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";

const RepoCard = ({repo}: { repo:IRepo }) => {

    const {favorites} = useAppSelector(state => state.github)
    const {addFavorites, removeFavorites} = useActions()
    const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

    const addToFavHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavorites(repo.html_url)
        setIsFav(true)
    }

    const removeFromFavHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavorites(repo.html_url)
        setIsFav(false)
    }


    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-amber-400 transition-all '>
            <a href={repo.html_url} target='_blank'>
                <h2 className='text-lg font-bold '>{repo.full_name}</h2>
                <p className='text-sm'>
                    Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                    Watchers: <span className='font-bold'>{repo.watchers}</span>
                </p>
                <p className='text-sm font-thin'>{repo?.description}</p>

                {!isFav && <button
                    className='py-2 px-4 bg-amber-300 rounded hover:shadow-md hover:text-white transition-all'
                    onClick={addToFavHandler}
                >add</button>}

                {isFav && <button
                    className='py-2 px-4 bg-red-400 rounded hover:shadow-md hover:text-white transition-all'
                    onClick={removeFromFavHandler}
                >remove</button>}
            </a>
        </div>
    );
};

export default RepoCard;
