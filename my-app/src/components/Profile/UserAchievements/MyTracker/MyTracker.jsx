import React from 'react';
import s from './MyTracker.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';
import Chart from "../Chart/Chart";

class MyTracker extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper)}>
                <div className={cs.title}>Мой трекер</div>
                <Chart />
            </div>
        )
    }
}

export default MyTracker;