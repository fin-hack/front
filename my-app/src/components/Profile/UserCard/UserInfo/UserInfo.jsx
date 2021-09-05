import React from 'react';
import s from './UserInfo.module.css';
import cs from '../../../../common.module.css';
import WithPreloader from "../../../common/WithPreloader/WithPreloader";
import {connect} from "react-redux";
import cn from 'classnames';
import {getFullPath} from "../../../../utils/utils";

class UserInfo extends React.Component {
    render() {
        return (
            <div className={cn(s.wrapper, cs.card)}>
                <div className={s.trophey}>
                    <img src={getFullPath('platinum.svg')} alt=""/>
                </div>
                <div className={s.ava}> </div>
                <div className={s.names}>
                    <div>{this.props.userData.first_name || 'first name'} {this.props.userData.last_name || 'last name'}</div>
                </div>
                <WithPreloader in={!this.props.isFetchingTeam} classNames={'page'}>
                    {
                        this.props.teamData?.name &&
                            <div className={s.teamName}>Team {this.props.teamData.name}</div>
                    }
                </WithPreloader>
            </div>
        )
    }
}

const mstp = (state) => ({
    userData: state.userData.userData,
    isFetchingTeam: state.teamData.isFetching,
    teamData: state.teamData.teamData,
});

export default connect(mstp)(UserInfo);