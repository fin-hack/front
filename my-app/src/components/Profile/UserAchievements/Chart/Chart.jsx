import React from 'react';
import s from './Chart.module.css';
import {connect} from "react-redux";
import {getChart} from "../../../../store/reducers/userDataReducer";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";

class Chart extends React.Component {

    componentDidMount() {
        if (!this.props.isFetching && !this.props.chart) {
            this.props.getChart(15);
        }
    }

    render() {

        console.log(this.props.chart);
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    this.props.chart &&
                    <div className={s.wrapper}>
                        chart
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