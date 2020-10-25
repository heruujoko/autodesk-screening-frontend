import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({children}: any) => {
  const mount = document.getElementById("notification-root");
  const el = document.createElement("div");

  // @ts-ignore
  useEffect(() => {
      // @ts-ignore
    mount.appendChild(el);
    // @ts-ignore
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el)
};

export default Portal;