import React from 'react'
import ConfirmIcon from '../icons/Confirm.Icon';
import "../../_dist/Message.css"
import ErrorIcon from '../icons/ErrorIcon';
import WarningIcon from '../icons/WarningIcon';

interface MessageProps extends React.HTMLProps<HTMLParagraphElement> {
    id?: string;
    type:"success" | "warning" | "error"
  }

const Message = ({...props}: MessageProps) => {
  return (
    <p {...props} className={`message-alert ${props.className ?props.className:""} ${props.type}-message`}> {props.type === "success"? <ConfirmIcon/> : props.type ==="error"? <ErrorIcon/> : props.type=== "warning"? <WarningIcon/> : null } {props.children} </p>
  )
}

export default Message