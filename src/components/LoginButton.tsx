import React, { FC } from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';

const LoginButton: FC = () => {
    const preLoginTracking = () => console.log('Attempt to login with google');
    const errorHandler = (error: string) => console.error(error);
    const responseGoogle = (googleUser: gapi.auth2.GoogleUser) => {
        const idToken = googleUser.getAuthResponse(true).id_token;
        const googleId = googleUser.getId();
        console.log({ googleId });
        console.log({ accessToken: idToken });
    }

    const clientConfig = { client_id: 'yourappid' };

    return (
        <div>
            <GoogleLoginButton
                responseHandler={responseGoogle}
                clientConfig={clientConfig}
                preLogin={preLoginTracking}
                failureHandler={errorHandler}
            />
        </div>
    )
}

export default LoginButton;