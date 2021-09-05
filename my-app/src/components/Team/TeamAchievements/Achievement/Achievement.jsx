import React from 'react';
import s from './Achievement.module.css';
import {getFullPath} from "../../../../utils/utils";

class Achievement extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <img src={getFullPath('trophy.svg')} alt=""/>
                <div>{this.props.achievement}</div>
            </div>
        )
    }
}

export default Achievement;