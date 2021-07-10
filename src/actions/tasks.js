import * as actionTypes from "../constants/action-types";

export const createTask = (newTask) => {
    return {
        type: actionTypes.CREATE_TASK,
        payload: newTask
    };
};

export const deleteTask = (taskId) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: taskId
    }
};
