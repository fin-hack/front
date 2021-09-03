import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import {logout} from "../../store/reducers/loginPageReducer";

class Profile extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.logout()}>
                profile
            </div>
        )
    }
}

export default connect(null, {logout})(Profile);