import React from 'react';
import s from './Market.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';
import Good from "./Good/Good";

class Market extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper)}>
                <div className={cs.title}>Магазин</div>
                <div className={s.goods}>
                    <Good />
                    <Good />
                    <Good />
                    <Good />
                </div>
            </div>
        )
    }
}

export default Market;