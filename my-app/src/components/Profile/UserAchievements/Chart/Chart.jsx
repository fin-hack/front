import React from 'react';
import s from './Chart.module.css';
import {connect} from "react-redux";
import {getChart} from "../../../../store/reducers/userDataReducer";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";
import cs from '../../../../common.module.css';
import cn from 'classnames';
import {getFullPath} from "../../../../utils/utils";

class Chart extends React.Component {

    componentDidMount() {
        if (!this.props.isFetching && !this.props.chart) {
            this.props.getChart(15);
        }
    }

    render() {

        const data = this.props.chart?.values || [...Array(5).keys()].map(i => 0);

        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>

                <div className={s.wrapper}>
                    {data.map((value, index) => {
                        return (
                            <div key={index} className={s.item} style={{
                                height: `${100 * value}%`
                            }}>
                                <div>
                                    {index === data.length - 1 &&
                                        <img className={s.squirrel} src={getFullPath('squirrel.png')} alt=""/>
                                    }
                                    {index + 1}
                                </div>
                            </div>
                        )
                    })}
                    <img className={s.rightArrow} src={getFullPath('CaretUp.svg')} alt=""/>
                    <img className={s.topArrow} src={getFullPath('CaretUp.svg')} alt=""/>
                </div>

            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    chart: state.userData.chart,
    isFetching: state.userData.isFetchingChart
});

export default connect(mstp, {getChart})(Chart);