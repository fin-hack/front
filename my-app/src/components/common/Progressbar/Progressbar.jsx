import React from 'react';
import s from './Progressbar.module.css';

class Progressbar extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.value}
                     style={{
                         width: `${this.props.value / this.props.max * 100}%`
                     }}
                >

                </div>
            </div>
        )
    }
}

export default Progressbar;