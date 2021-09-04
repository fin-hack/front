import React from 'react';
import s from './UserCard.module.css';
import {connect} from "react-redux";
import {getUserData} from "../../../store/reducers/userDataReducer";

class UserCard extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        console.log(this.props.userData);
        return (
            <div>
                <div>Logo</div>
                <div>UserInfo(ava + name)</div>
                <div>quote</div>
                <div>score + stars</div>
                <div>My team</div>
            </div>
        )
    }
}

const mstp = (state) => ({
    userData: state.userData.userData,

});

export default connect(mstp, {getUserData})(UserCard);