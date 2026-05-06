import { useEffect, useState } from "react"

export default function Github(){

    const [data , setData] = useState([])

    useEffect(() => {

        fetch('https://api.github.com/users/spatil-in')
        .then((res) => res.json())
        .then(res => setData(res))
    }, [])

    return(
        <div className="text-center text-3xl text-white bg-gray-500 p-5">
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="me" />
        </div>
    )
}