import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useLoaderData } from 'react-router-dom'

function Github() {

    const gitData = useLoaderData();
    const {username} = useParams();
    // const [gitData, setGitData] = useState({});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`https://api.github.com/users/hiteshchoudhary`);
    //             const data = await response.json();
    //             setGitData(data? data: {});
    //         }
    //         catch(err) {
    //             console.log(err);
    //         }
    //     }

    //     fetchData();
    // }, []);

    
    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-xl'>
            Github followers of {username}: {gitData.followers} 
            <img src={gitData.avatar_url} alt="profile pic" width="300" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return response.json();
}