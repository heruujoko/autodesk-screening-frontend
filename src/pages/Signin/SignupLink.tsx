import React from "react";
import { useHistory } from 'react-router-dom';

const SignupLink: React.FC = () => {
    const history = useHistory();

    return (
        <p>
            <span className="text-gray-600">New to Autodesk?</span>{" "}
            <button onClick={() => history.push('/signup')} className="link underline">Create account</button>
        </p>
    );
};

export default SignupLink;
