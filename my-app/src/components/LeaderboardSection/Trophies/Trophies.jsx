import React from 'react';
import s from './Trophies.module.css';
import {getFullPath} from "../../../utils/utils";
import Trophy from "./Trophy/Trophy";

const trophies = [
    {
        img: getFullPath('common.svg'),
        name: "Деревянный желудь",
        goal: '0 - 100 очков',
    },
    {
        img: getFullPath('bronze.svg'),
        name: "Бронзовый желудь",
        goal: '101 - 200 очков',
    },
    {
        img: getFullPath('silver.svg'),
        name: "Серебряный желудь",
        goal: '201 - 300 очков',
    },
    {
        img: getFullPath('gold.svg'),
        name: "Золотой желудь",
        goal: '301 - 400 очков',
    },
    {
        img: getFullPath('platinum.svg'),
        name: "Платиновый желудь",
        goal: '401 - 500 очков',
    },

];

class Trophies extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                {trophies.map((trophy, index) => <Trophy key={index} name={trophy.name} img={trophy.img} goal={trophy.goal}/>)}
            </div>
        )
    }
}

export default Trophies;