
import * as types from "./actiontype"

import axios from "axios"

// const env  =require("dotenv")

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})


const UserDeleted = () => ({
    type: types.DELETE_USER,
})


const Adduser = () => ({
    type: types.ADD_USER,
})


const GetsingleUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user
})


const userUpdate = () => ({
    type: types.UP_DATE,
})

console.log(process.env.REACT_API);

const REACT_API = "http://localhost:5000/user"


export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${REACT_API}`).then((resp) => {
            dispatch(getUsers(resp.data))
            console.log(resp.data)
        }).catch((error) => {
            console.log(error);
        })
    }

}







export const deleteUsers = (id) => {
    return function (dispatch) {
        axios.delete(`${REACT_API}/${id}`).then((resp) => {


            dispatch(UserDeleted())



        }).catch((error) => {
            console.log(error);
        })
    }

}



export const getsingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${REACT_API}/${id}`).then((resp) => {


            dispatch(GetsingleUser(resp.data))
            console.log(resp.data);


        }).catch((error) => {
            console.log(error);
        })
    }

}



export const updatedUser = (user ,id) => {
    return function (dispatch) {
        axios.put(`${REACT_API}/${id}` ,user).then((resp) => {


            dispatch(userUpdate(resp.data))
            console.log(resp.data);


        }).catch((error) => {
            console.log(error);
        })
    }

}















export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${REACT_API}`, user)
            .then((resp) => {

                dispatch(Adduser())
                console.log("success" + resp);
            }).catch((error) => {
                console.log(error);
            })
    }

}