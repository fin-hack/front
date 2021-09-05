import React from 'react';
import s from './Good.module.css';
import cs from '../../../../../common.module.css';
import cn from 'classnames';
import {getFullPath} from "../../../../../utils/utils";

class Good extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.good}>
                    <div>{this.props.text}</div>
                    <img src={getFullPath('ArrowFatLinesUp.svg')} alt=""/>
                </div>
                <div className={s.price}>
                    {this.props.price} баллов
                </div>
                <div className={s.button}>
                    Получить
                </div>
            </div>
        )
    }
}

export default Good;