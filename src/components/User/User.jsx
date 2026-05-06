import { useParams } from "react-router-dom"
import React from "react"

export default function User(){

    const {Userid} = useParams()

    return(
        <div 
        className="text-center text-3xl text-white bg-gray-500 p-5">
            User : {Userid} </div>
    )
}