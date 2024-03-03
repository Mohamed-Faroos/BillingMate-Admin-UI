import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/auth/login";
import Home from "./components/home";

import * as frontendURL from "./lib/constants";
import { AuthRoute, PrivateRoute } from "./router";
import ForgotPassword from "./components/auth/forgotPassword";
import ResetPassword from "./components/auth/resetPassword";

function App() {

  return (
    <BrowserRouter basename={frontendURL.HOME_URL}>
      <Routes>
        {/* Auth Routes */}
        <Route path={frontendURL.LOGIN_URL} element={<AuthRoute><Login /></AuthRoute>} />
        <Route path={frontendURL.FORGOT_PASSWORD_URL} element={<AuthRoute><ForgotPassword /></AuthRoute>} />
        <Route path={frontendURL.RESET_PASSWORD_URL} element={<AuthRoute><ResetPassword></ResetPassword></AuthRoute>} />

        {/* Protected Routed */}
        <Route path={frontendURL.HOME_URL} element={<PrivateRoute><Home /></PrivateRoute>} />

        {/* Open Routed */}
        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
