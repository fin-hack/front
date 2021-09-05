import React from 'react';
import s from './MySkills.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';
import Progressbar from "../../../common/Progressbar/Progressbar";
import {connect} from "react-redux";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";

const skills = {
    stress_tolerance: 'Стрессоустойчивость',
    immersion: 'Скоропечатанье',
    attention: 'Внимательность'
};

class MySkills extends React.Component {
    render() {

        const data = this.props.userData;
        return (
            <div style={{gridColumn: '1 / 3'}}>
                <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                    {
                        data &&
                        <div className={cn(s.wrapper, cs.card)}>
                            <div className={s.title}>
                                <div>Мои навыки</div>
                                <div>Мой прогресс</div>
                            </div>
                            {
                                Object.keys(skills).map(key => {
                                    return (
                                        <div key={key} className={s.item}>
                                            <div>{skills[key]}</div>
                                            <div>
                                                <Progressbar value={data[key]}
                                                             max={100}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </WithPreloader>
            </div>
        )
    }
}

const mstp = (state) => ({
    userData: state.userData.userData,
    isFetching: state.userData.isFetching
});

export default connect(mstp)(MySkills);