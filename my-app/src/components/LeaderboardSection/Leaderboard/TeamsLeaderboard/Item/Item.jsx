import React, {Component} from 'react';
import s from './Item.module.css';

class Item extends Component {
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
                    {this.props.team.name}
                </div>
                <div className={s.score}>
                    {this.props.team.score}
                </div>
            </div>
        )
    }
}

export default Item;