import React, {  useState } from "react";
// import {  useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { contactActionCreators } from "../../services/Action";
import Input from "../../components/inputs/Input";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import "../../_dist/ContactForm.css";
// import { State } from "../../services/Reducers";
import Message from "../../components/messages/Message";
import emailjs from "@emailjs/browser";

// import {
//   CLEAR_CONTACT_ERROR,
//   CLEAR_CONTACT_SUCCESS,
// } from "../../services/ActionTypes/contactActionTypes";
import TextArea from "../../components/inputs/TextArea";
import useFormValidation from "../../hooks/UseValidationForm";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
// Custom type for textarea change events
type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
const ContactForm = () => {
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Use the custom hook
  const { errors,validateField,setErrors , validateForm } =
    useFormValidation();

  const handleChange = (field: keyof typeof sendMessage, value: string) => {
    setSendMessage((prevState) => ({ ...prevState, [field]: value }));
  };
//email js

  const [hasShowResult, setHasShowresult] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the entire form
    const isFormValid = validateForm(sendMessage);

    if (!isFormValid) {
      console.log("Form has errors. Submission blocked.");
      return;
    }

    const formElement = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        formElement,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrorMessage(false);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage(true);
        }
      );

    setHasShowresult(true);

    setTimeout(() => {
      setHasShowresult(false);
    }, 3000);
    formElement.reset();
    setSendMessage({
      name: "",
      email: "",
      message: "",
    });
    handleClearErrors;
  };
  // const dispatch = useDispatch();

  // const { sendContactForm } = bindActionCreators(
  //   contactActionCreators,
  //   dispatch
  // );

  // const contactState = useSelector((state: State) => state.contactReducer);
  // const successMessage = contactState.successMessage?.message;
  // const errorMessage = contactState.error;

  // Auto-clear messages after 3 seconds
  // useEffect(() => {
  //   if (successMessage || errorMessage) {
  //     const timer = setTimeout(() => {
  //       if (successMessage) dispatch({ type: CLEAR_CONTACT_SUCCESS });
  //       if (errorMessage) dispatch({ type: CLEAR_CONTACT_ERROR });
  //       setSendMessage({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [successMessage, errorMessage, dispatch]);

   // Handle blur (validate on blur)
  const handleBlur = (field: keyof typeof sendMessage) => {
    const error = validateField(field, sendMessage[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };
const handleClearErrors = () => {
    setErrors({
      name: "",
      email: "",
      message: "",
    });
     
  };

 const { handleKeyDown } = useKeyboardNavigation();


  return (
    <form className="form-container" onSubmit={sendEmail} noValidate   >
      <Input
        type="text"
        placeholder="Votre Nom"
        // required
        name="name"
        value={sendMessage.name}
        onBlur={() => handleBlur("name")}
         onChange={(e: InputChangeEvent) => {
          e.stopPropagation();
          handleChange("name", e.target.value);
          
        }}
        onKeyDown={handleKeyDown}
      />
      {errors.name && <Message type="warning">{errors.name}</Message>}
      <Input 
      name="email"
        type="email"
        value={sendMessage.email}
        placeholder="Votre Email"
         onBlur={() => handleBlur("email")}
         onChange={(e: InputChangeEvent) => {
          e.stopPropagation();
          handleChange("email", e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {errors.email && <Message type="warning">{errors.email}</Message>}

      <TextArea
        name="message"
        placeholder="Message de vœux à l’attention des mariés."
        value={sendMessage.message}
        onBlur={() => handleBlur("message")}
        onChange={(e: TextAreaChangeEvent) => {
          e.stopPropagation();
          handleChange("message", e.target.value);
        }}
        onKeyDown={handleKeyDown}
        rows={5}
      />
      {errors.message && <Message type="warning">{errors.message}</Message>}

      <ButtonPrimary type="submit">Confirmer la réponse</ButtonPrimary>
      {hasShowResult ? (
        errorMessage ? (
          <Message type="error">Form has errors. Submission blocked.</Message>
        ) : (
          <Message type="success">
            Your message has been successfully sent.{" "}
          </Message>
        )
      ) : null}
    </form>
  );
};

export default ContactForm;

