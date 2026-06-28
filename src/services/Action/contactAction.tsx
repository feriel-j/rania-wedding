import axios, { AxiosError } from "axios";
import {
  ContactFormData,
  SEND_CONTACT_FAILURE,
  SEND_CONTACT_REQUEST,
  SEND_CONTACT_SUCCESS,
} from "../ActionTypes/contactActionTypes";
import { Dispatch } from "redux";

export const sendContactForm = (formData: ContactFormData) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: SEND_CONTACT_REQUEST });

      const response = await axios.post("/contact", formData, {
        withCredentials: true,
      });

      dispatch({
        type: SEND_CONTACT_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
    } catch (error: unknown) {
      const err = error as AxiosError<{ error: string }>;
      const backendMessage =
        err?.response?.data?.error || "Something went wrong";
        console.log(err)

      dispatch({
        type: SEND_CONTACT_FAILURE,
        payload: backendMessage,
      });
    }
  };
};
