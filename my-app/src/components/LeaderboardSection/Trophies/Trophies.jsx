import React from 'react';
import s from './Trophies.module.css';
import {getFullPath} from "../../../utils/utils";
import Trophy from "./Trophy/Trophy";

const trophies = [
    {
        img: getFullPath('common.svg'),
        goal: '1300 - 1200 очков',
    },
    {
        img: getFullPath('bronze.svg'),
        goal: '1300 - 1200 очков',
    },
    {
        img: getFullPath('silver.svg'),
        goal: '1300 - 1200 очков',
    },
    {
        img: getFullPath('gold.svg'),
        goal: '1300 - 1200 очков',
    },
    {
        img: getFullPath('platinum.svg'),
        goal: '1300 - 1200 очков',
    },

];

class Trophies extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                {trophies.map((trophy, index) => <Trophy key={index} img={trophy.img} goal={trophy.goal}/>)}
            </div>
        )
    }
}

export default Trophies;