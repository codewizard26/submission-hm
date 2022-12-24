import React from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({data,children,redirectTo,...rest}) =>{
    console.log(data,"private")
    const user = localStorage.getItem('username')
    return (
        user? children:"please login first to generate nft"
    )
}

export default PrivateRoute