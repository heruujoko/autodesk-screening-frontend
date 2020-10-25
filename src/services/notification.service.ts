import { dispatch } from "use-bus";

const successNotification = (message: string) => {
    dispatch({type: "@@notification/SUCCESS", payload: message})
}

const notificationService = {
    successNotification
}

export default notificationService;