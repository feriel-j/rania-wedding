import { useState } from "react";

// Validation functions
const validateName = (name: string): string => {
  if (!name.trim()) return "Name is required.";
  return "";
};

const validateEmail = (email: string): string => {
  if (!email.includes("@")) return "Please include an '@' in the email address.";
  const [localPart, domainPart] = email.split("@");

  if (!localPart) return "Please enter the part before the '@'.";
  if (!/^[a-zA-Z0-9._%+-]+$/.test(localPart))
    return "The part before the '@' can only contain letters, numbers, dots, underscores, percent signs, plus signs, or hyphens.";
  if (localPart.startsWith(".") || localPart.endsWith("."))
    return "The part before the '@' cannot start or end with a dot.";
  if (localPart.includes(".."))
    return "The part before the '@' cannot have consecutive dots.";
  if (localPart.length > 64)
    return "The part before the '@' is too long (maximum 64 characters).";

  if (!domainPart) return "Please enter the part after the '@'.";
  if (!domainPart.includes("."))
    return "The part after the '@' must include a dot (e.g., 'gmail.com').";
  if (!/^[a-zA-Z0-9.-]+$/.test(domainPart))
    return "The part after the '@' can only contain letters, numbers, dots, or hyphens.";
  if (domainPart.startsWith(".") || domainPart.endsWith("."))
    return "The part after the '@' cannot start or end with a dot.";
  if (domainPart.includes(".."))
    return "The part after the '@' cannot have consecutive dots.";

  const tld = domainPart.split(".").pop();
  if (!tld || tld.length < 2)
    return "The email must end with a valid suffix (e.g., '.com', '.org').";

  if (email.length > 254) return "The email address is too long (maximum 254 characters).";

  return ""; // No errors
};

const validateMessage = (message: string): string => {
  if (!message.trim()) return "Message is required.";
  return "";
};

// Custom hook for form validation
const useFormValidation = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
     
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const validateForm = (formData: { [key: string]: string }) => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  return { errors,setErrors ,validateField, validateForm };
};

export default useFormValidation;