import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Notification from "./components/Notification";

const Signin = lazy(() => import("./pages/Signin/Signin"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
    return (
        <div className="main-container">
            <Router>
                <Suspense fallback={<div></div>}>
                    <Switch>
                        <Route exact path="/">
                            <AuthLayout>
                                <Signin />
                            </AuthLayout>
                        </Route>
                        <Route exact path="/signup">
                            <AuthLayout>
                                <Signup />
                            </AuthLayout>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>

            <Notification />
        </div>
    );
}

export default App;
