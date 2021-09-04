import React from 'react';
import s from './SoftSkills.module.css';
import cs from '../../../../common.module.css';
import cn from 'classnames';

class SoftSkills extends React.Component {
    render() {
        return (
            <div className={cn(s.wrapper, cs.card)}>
                SoftSkills
            </div>
        )
    }
}

export default SoftSkills;