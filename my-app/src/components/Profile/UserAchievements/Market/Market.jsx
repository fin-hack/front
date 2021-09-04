import React from 'react';
import s from './Market.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';

class Market extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper)}>
                <div className={cs.title}>Магазин</div>
                <div className={s.goods}>
                    <div className={s.good}> </div>
                    <div className={s.good}> </div>
                    <div className={s.good}> </div>
                    <div className={s.good}> </div>
                </div>
            </div>
        )
    }
}

export default Market;