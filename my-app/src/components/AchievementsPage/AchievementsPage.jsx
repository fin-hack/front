import React from 'react';
import {withLoginRedirect} from "../common/withLoginRedirect/withLoginRedirect";
import s from './AchievementsPage.module.css';

class AchievementsPage extends React.Component {
    render() {
        return (
            <div>
                achievements
            </div>
        )
    }
}

export default withLoginRedirect(AchievementsPage)