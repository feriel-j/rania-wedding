import { AnyAction } from "redux";
import {  CLEAR_CONTACT_ERROR, CLEAR_CONTACT_SUCCESS, SEND_CONTACT_FAILURE, SEND_CONTACT_REQUEST, SEND_CONTACT_SUCCESS } from "../ActionTypes/contactActionTypes";


const initialState = {
  loading: false,
  successMessage: "",
  error: "",
};

const contactReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {

    case SEND_CONTACT_REQUEST:
      return { ...state, loading: true, error: "", successMessage: "" };
    case SEND_CONTACT_SUCCESS:
     return { ...state, loading: false, successMessage: action.payload };
    case SEND_CONTACT_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case CLEAR_CONTACT_SUCCESS:
  return {
    ...state,
    successMessage: null,
  };

case CLEAR_CONTACT_ERROR:
  return {
    ...state,
    error: null,
  };

    default:
      return state;
  }
};

export default contactReducer;