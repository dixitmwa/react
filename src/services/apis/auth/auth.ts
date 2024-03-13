import { REQUEST_METHODS, doFetch } from "../fetcher";
import { AUTH_API_ENDPOINTS } from "./authAPIEndPoints";

export default {
    userLoginService: (loginDetails: LoginDetails) =>
        doFetch(AUTH_API_ENDPOINTS.USER_LOGIN, REQUEST_METHODS.POST, loginDetails),

    userSignupService: (signupDetails: SignUpDetails) =>
        doFetch(
            AUTH_API_ENDPOINTS.USER_SIGNUP,
            REQUEST_METHODS.POST,
            signupDetails
        )
}