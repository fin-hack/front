import React from 'react';
import cs from '../../../../common.module.css';
import s from './AboutBonuses.module.css';
import {getFullPath} from "../../../../utils/utils";
import cn from 'classnames';

class AboutBonuses extends React.Component {
    state = {
        opened: false,
    };

    toggleOpened = () => {
        this.setState({
            opened: !this.state.opened
        });
    };

    render() {
        return (
            <div className={cn(cs.card, s.wrapper, {[s.opened]: this.state.opened})}>
                <div className={s.title}>
                    <div className={cs.title}>Про твои бонусы</div>
                    <img onClick={this.toggleOpened} src={getFullPath('Info.svg')} alt=""/>
                </div>
                <div className={cn(s.additional, {[s.opened]: this.state.opened})}>
                    <div>
                        <div>100%</div><div>+24 000 рублей</div>
                    </div>
                    <div>
                        <div>110%</div><div>+30 000 рублей</div>
                    </div>
                    <div>
                        <div>120%</div><div>+36 000 рублей</div>
                    </div>
                    <div>
                        <div>130%</div><div>+42 000 рублей</div>
                    </div>
                    <div>
                        <div>140%</div><div>+48 000 рублей</div>
                    </div>
                    <div>
                        <div>150%</div><div>+54 000 рублей</div>
                    </div>
                    <div>
                        <div>160%</div><div>+60 000 рублей</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutBonuses;