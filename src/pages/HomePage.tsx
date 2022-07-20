import React, {useEffect, useState } from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';
import {useDebounce} from "../hooks/debounce";

const HomePage = () => {
    const {isLoading, isError, data} = useSearchUsersQuery('save')
    const [search, setSearch] = useState('');

    const debounced = useDebounce(search)

    useEffect(() => {
        console.log(debounced)
    }, [debounced]);


    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            { isError && <p className='text-center text-red-600 '>Something went wrong...</p>}

            <div className='relative w-[560px]'>
                <input
                    type='text'
                    className='border py-2 px-4 w-full h-[42px] mb-2'
                    placeholder='search for github username...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className='absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-amber-300'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, laudantium!
                </div>
            </div>
        </div>
    );
};

export default HomePage;
