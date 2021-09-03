import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const mstp = (state) => ({
    isAuth: state.userData.isAuth,
});

export const withLoginRedirect = (Component) =>
    connect(mstp)((props) => {
        if (!props.isAuth) return <Redirect to={'/'}/>;
        return <Component {...props}/>
    });
