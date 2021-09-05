import React, {useState, useEffect} from 'react';
import s from './Progressbar.module.css';

const Progressbar = (props) => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!initialized) setInitialized(true);
    }, [initialized]);

    return (
        <div className={s.wrapper}>
            <div className={s.value}
                 style={{
                     width: `${(initialized ? props.value : 0) / props.max * 100}%`
                 }}
            >

            </div>
        </div>
    )
};

export default Progressbar;