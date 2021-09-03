import React from 'react';
import s from './Achievements.module.css';
import {connect} from "react-redux";
import {logout} from "../../store/reducers/loginPageReducer";

class Achievements extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.logout()}>
                achievements
            </div>
        )
    }
}

export default connect(null, {logout})(Achievements);