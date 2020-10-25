import React, { useState } from "react";
import NotificationPortal from "./NotificationPortal";
import useBus from "use-bus";

const NOTIFICATION_DURATION = 5;

const Notification: React.FC = () => {
    const [successNotification, showSuccessNotification] = useState<string>("");
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

    return (
        <>
            {successNotification && <NotificationPortal>
                <div className="absolute top-0 text-center flex justify-center w-full">
                    <div className="bg-blue-400 p-3 rounded mt-12p">
                        <p>{successNotification}</p>
                    </div>
                </div>
            </NotificationPortal>}
        </>
    );
};

export default Notification;
