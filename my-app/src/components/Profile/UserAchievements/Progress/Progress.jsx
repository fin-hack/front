import React from 'react';
import s from './Progress.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';

class Progress extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper )}>
                <div className={cs.title}>progress</div>
            </div>
        )
    }
}

export default Progress;