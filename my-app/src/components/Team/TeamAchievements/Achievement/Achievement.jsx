import React from 'react';
import s from './Achievement.module.css';

class Achievement extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                {this.props.achievement}
            </div>
        )
    }
}

export default Achievement;