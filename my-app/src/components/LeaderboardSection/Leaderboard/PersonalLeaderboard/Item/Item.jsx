import React, {Component} from 'react';
import s from './Item.module.css';
import {teamAPI} from "../../../../../utils/api";

class Item extends Component {
    state = {
        teamName: null,
        isFetching: false,
    };

    getTeamName = async () => {
        this.setState({
            isFetching: true
        });

        const teamData = await teamAPI.getTeamData(this.props.user.fields._team);

        this.setState({
            teamName: teamData.name,
            isFetching: false,
        })
    };

    componentDidMount() {
        if (!this.state.teamName && !this.state.isFetching && this.props.user) {
            this.getTeamName();
        }
    }

    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.place}>
                    {this.props.place}
                </div>
                <div className={s.trophey}>
                    <img src={this.props.trophey} alt=""/>
                </div>
                <div className={s.name}>
                    {this.props.user.fields.first_name}
                    {this.props.user.fields.last_name}
                </div>
                <div className={s.teamName}>
                    {this.state.teamName || 'Не в команде'}
                </div>
            </div>
        )
    }
}

export default Item;