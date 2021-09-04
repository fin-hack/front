import React from 'react';
import s from './Trophy.module.css';

class Trophy extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <img src={this.props.img}/>
                <div>{this.props.goal}</div>
            </div>
        )
    }
}

export default Trophy;