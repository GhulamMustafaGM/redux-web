import * as actionTypes from "../constants/action-types";
import axios from "axios";

export const fetchTasks = () => async (dispatch) => {

    //dispatch response data to FETCH_TASKS_REQUEST action; it will be received by the reducer
    dispatch({ type: actionTypes.FETCH_TASKS_REQUEST });
    try {
        var response = await axios.get("http://localhost:7000/tasks");

        //dispatch response data to FETCH_TASKS_SUCCESS action; it will be received by the reducer
        dispatch({
            type: actionTypes.FETCH_TASKS_SUCCESS,
            payload: response.data
        });
    }
    catch (err) {
        //dispatch error to FETCH_TASKS_ERROR action; it will be received by the reducer
        dispatch({
            type: actionTypes.FETCH_TASKS_ERROR,
            payload: err
        });
    }
};

export const createTask = (newTask) => async (dispatch) => {

    //dispatch response data to CREATE_TASK_REQUEST action; it will be received by the reducer
    dispatch({ type: actionTypes.CREATE_TASK_REQUEST });
    try {
        var response = await axios.post("http://localhost:7000/tasks", newTask);

        //dispatch response data to CREATE_TASK_SUCCESS action; it will be received by the reducer
        dispatch({
            type: actionTypes.CREATE_TASK_SUCCESS,
            payload: response.data
        });
    }
    catch (err) {
        //dispatch error to CREATE_TASK_ERROR action; it will be received by the reducer
        dispatch({
            type: actionTypes.CREATE_TASK_ERROR,
            payload: err
        });
    }
};

export const deleteTask = (taskId) => async (dispatch) => {

    //dispatch response data to DELETE_TASK_REQUEST action; it will be received by the reducer
    dispatch({ type: actionTypes.DELETE_TASK_REQUEST });
    try {
        await axios.delete(`http://localhost:7000/tasks/${taskId}`);

        //dispatch response data to DELETE_TASK_SUCCESS action; it will be received by the reducer
        dispatch({
            type: actionTypes.DELETE_TASK_SUCCESS,
            payload: taskId
        });
    }
    catch (err) {
        //dispatch error to DELETE_TASK_ERROR action; it will be received by the reducer
        dispatch({
            type: actionTypes.DELETE_TASK_ERROR,
            payload: err
        });
    }
};
