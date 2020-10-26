import { dispatch } from "use-bus";

const successNotification = (message: string) => {
    dispatch({type: "@@notification/SUCCESS", payload: message})
}

const errorNotification = (message: string) => {
    dispatch({type: "@@notification/ERROR", payload: message})
}

const notificationService = {
    successNotification,
    errorNotification
}

export default notificationService;