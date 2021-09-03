import React from 'react';
import {withLoginRedirect} from "../common/withLoginRedirect/withLoginRedirect";

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