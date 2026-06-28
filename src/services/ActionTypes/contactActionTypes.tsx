export const SEND_CONTACT_REQUEST = "SEND_CONTACT_REQUEST";
export const SEND_CONTACT_SUCCESS = "SEND_CONTACT_SUCCESS";
export const SEND_CONTACT_FAILURE = "SEND_CONTACT_FAILURE";
export const CLEAR_CONTACT_SUCCESS="CLEAR_CONTACT_SUCCESS";
export const CLEAR_CONTACT_ERROR="CLEAR_CONTACT_ERROR"


export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SendContactRequestAction {
  type: typeof SEND_CONTACT_REQUEST;
}

export interface SendContactSuccessAction {
  type: typeof SEND_CONTACT_SUCCESS;
  payload: string;
}

export interface SendContactFailureAction {
  type: typeof SEND_CONTACT_FAILURE;
  payload: string;
}

export type ContactActionTypes =
  | SendContactRequestAction
  | SendContactSuccessAction
  | SendContactFailureAction;