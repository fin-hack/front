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
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    this.props.chart &&
                    <div className={s.wrapper}>
                        {this.props.chart.values.map((value, index) => {
                            return (
                                <div key={index} className={s.item} style={{
                                    height: `${100 * value}%`
                                }}>
                                    <div>
                                        {index + 1}
                                    </div>
                                </div>
                            )
                        })}
                        <img className={s.rightArrow} src={getFullPath('CaretUp.svg')} alt=""/>
                        <img className={s.topArrow} src={getFullPath('CaretUp.svg')} alt=""/>
                        <img className={s.squirrel} src={getFullPath('squirrel.png')} alt=""/>
                    </div>
                }
            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    chart: state.userData.chart,
    isFetching: state.userData.isFetchingChart
});

export default connect(mstp, {getChart})(Chart);