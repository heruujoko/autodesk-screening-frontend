import React, { useState } from "react";
import NotificationPortal from "./NotificationPortal";
import useBus from "use-bus";

const NOTIFICATION_DURATION = 5;

const Notification: React.FC = () => {
    const [successNotification, showSuccessNotification] = useState<string>("");
    const [errorNotification, showErrorNotification] = useState<string>("");
    useBus(
        "@@notification/SUCCESS",
        (message) => {
            showSuccessNotification(`${message.payload}`);
            setTimeout(() => {
                showSuccessNotification("");
            }, NOTIFICATION_DURATION * 1000);
        },
        [successNotification]
    );

    useBus(
        "@@notification/ERROR",
        (message) => {
            showErrorNotification(`${message.payload}`);
            setTimeout(() => {
                showErrorNotification("");
            }, NOTIFICATION_DURATION * 1000);
        },
        [errorNotification]
    );

    return (
        <>
            {successNotification && <NotificationPortal>
                <div className="absolute top-0 flex justify-center w-full text-center">
                    <div className="p-3 bg-blue-300 rounded mt-12p">
                        <p>{successNotification}</p>
                    </div>
                </div>
            </NotificationPortal>}

            {errorNotification && <NotificationPortal>
                <div className="absolute top-0 flex justify-center w-full text-center">
                    <div className="p-3 bg-red-400 rounded mt-12p">
                        <p>{errorNotification}</p>
                    </div>
                </div>
            </NotificationPortal>}
        </>
    );
};

export default Notification;
