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
                    <Good text={'Повышенный коэффициент на день x2'} price={1000}/>
                    <Good text={'Повышенный коэффициент на 2 деня в 1.5 раза'} price={2000}/>
                    <Good text={'Плюс один ранг'} price={7000}/>
                    <Good text={'Оплачиваемый выходной'} price={10000}/>
                </div>
            </div>
        )
    }
}

export default Market;