import { Route, redirect, Redirect } from "react-router";
import {isAuthenticated} from '../../utils/auth';

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location})=>

            isAuthenticated() ? (
                children
            ) : (
                <Redirect 
                    to={{
                        pathname: "/login",
                        state: {from: location}
                    }}
                />
            )
            
        }
        />
    );
}

export default PrivateRoute;