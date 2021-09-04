import React from 'react';
import s from './Progress.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';
import {getFullPath} from "../../../../utils/utils";
import {connect} from "react-redux";
import {getUserProgress} from "../../../../store/reducers/userDataReducer";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";

class Progress extends React.Component {
    state = {
        opened: false,
    };

    toggleMode = () => {
        this.setState({
            opened: !this.state.opened,
        });
    };

    componentDidMount() {
        if (!this.props.progress) {
            this.props.getUserProgress();
        }
    }

    render() {

        const percent = this.props.progress?.percent.toFixed(2);
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    this.props.progress &&
                    <div className={cn(cs.card, s.wrapper, {[s.opened]: this.state.opened})}>
                        <div className={cs.title}>План месяца</div>
                        <div className={s.progressbar}>
                            <svg width="110" height="110" className={s.backface}>
                                <path d="M 55 5
                             A50 50 90 0 1 105 55
                             A50 50 90 0 1 55 105
                             A50 50 90 0 1 5 55
                             A50 50 90 0 1 55 5
                             Z"
                                      style={{
                                          color: 'white'
                                      }}
                                />
                            </svg>
                            <svg width="110" height="110" className={s.circle}>
                                <path d="M 55 5
                             A50 50 90 0 1 105 55
                             A50 50 90 0 1 55 105
                             A50 50 90 0 1 5 55
                             A50 50 90 0 1 55 5
                             Z"
                                      style={{
                                          strokeDashoffset: 555 - (555 - 241) * percent / 100
                                      }}
                                />
                            </svg>
                            <div className={s.percentage}>
                                {percent}%
                            </div>
                        </div>
                        <div className={cn(s.additional, {[s.opened]: this.state.opened})}>
                            <div>
                                <div>План</div>
                                <div>{this.props.progress.plan}</div>
                            </div>
                            <div>
                                <div>Успешно</div>
                                <div>{this.props.progress.good}</div>
                            </div>
                            <div>
                                <div>Исправлено</div>
                                <div>{this.props.progress.bad}</div>
                            </div>
                        </div>
                        <img className={cn(s.arrow, {[s.down]: !this.state.opened})}
                             onClick={this.toggleMode}
                             src={getFullPath('CaretUp.svg')}
                             alt=""
                        />
                    </div>
                }
            </WithPreloader>

        )
    }
}

const mstp = (state) => ({
    progress: state.userData.progress,
    isFetching: state.userData.isFetchingProgress
});

export default connect(mstp, {getUserProgress})(Progress);