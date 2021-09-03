import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withLoginRedirect} from "../common/withLoginRedirect/withLoginRedirect";
import {logout} from "../../store/reducers/loginPageReducer";

class Cabinet extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.logout()}>
                Cabinet
            </div>
        )
    }
}

export default compose(
    connect(null, {logout}),
    withLoginRedirect
)(Cabinet);