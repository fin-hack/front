import React from 'react';
import s from './Progress.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';

class Progress extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper)}>
                <div className={cs.title}>План месяца</div>
                <div>
                    <svg width="110" height="110">
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

            </div>
        )
    }
}

export default Progress;