import React from 'react';
import s from './Progress.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';
import {getFullPath} from "../../../../utils/utils";
import {CSSTransition} from "react-transition-group";

class Progress extends React.Component {
    state = {
        opened: false,
    };

    toggleMode = () => {
        this.setState({
            opened: !this.state.opened,
        });
    };

    render() {
        return (
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
                                  strokeDashoffset: 555 - (555 - 241) * this.props.percentage / 100
                              }}
                        />
                    </svg>
                    <div>
                        {this.props.percentage}%
                    </div>
                </div>
                <div className={cn(s.additional, {[s.opened]: this.state.opened})}>
                    <div>
                        <div>plan</div>
                        <div>365</div>
                    </div>
                    <div>
                        <div>successfully</div>
                        <div>238</div>
                    </div>
                    <div>
                        <div>corrected</div>
                        <div>10</div>
                    </div>
                </div>
                <img className={cn(s.arrow, {[s.down]: !this.state.opened})}
                     onClick={this.toggleMode}
                     src={getFullPath('CaretUp.svg')}
                     alt=""
                />
            </div>
        )
    }
}

export default Progress;