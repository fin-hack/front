import React from 'react';
import s from './MySkills.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';
import Progressbar from "../../../common/Progressbar/Progressbar";

class MySkills extends React.Component {
    render() {
        return (
            <div className={cn(s.wrapper, cs.card)}>
                <div className={s.title}>
                    <div>Мои навыки</div>
                    <div>Мой прогресс</div>
                </div>
                <div className={s.item}>
                    <div>Внимательность</div>
                    <div>
                        <Progressbar value={80} max={100}/>
                    </div>
                </div>
                <div className={s.item}>
                    <div>Скоропечатанье</div>
                    <div>
                        <Progressbar value={60} max={100}/>
                    </div>
                </div>
                <div className={s.item}>
                    <div>Стрессоустойчивость</div>
                    <div>
                        <Progressbar value={90} max={100}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkills;