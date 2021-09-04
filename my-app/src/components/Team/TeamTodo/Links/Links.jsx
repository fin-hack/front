import React from 'react';
import s from './Links.module.css';
import {NavLink} from "react-router-dom";

class Links extends React.Component {
    state = {
        currentClickedIndex: null,
    };

    isActiveHandler = (match, url, index) => {
        if (!match) {
            return false;
        }

        if (match.url === url && index !== this.state.currentClickedIndex) {
            this.setState({
                currentClickedIndex: index,
            });
            return true;
        }

        return false;
    };

    render() {
        const links = this.props.routes.map((route, index) => {
            return <NavLink key={route.name}
                            to={route.url}
                            className={s.link}
                            isActive={(match) => this.isActiveHandler(match, route.url, index)}
            >{route.name}</NavLink>
        });

        return (
            <div className={s.links}
                 style={{
                     gridTemplate: `auto / repeat(${links.length}, 1fr)`
                 }}
            >
                {links}
                {
                    this.state.currentClickedIndex !== null &&
                    <div className={s.floatingElem}
                         style={{
                             width: 100 / links.length + '%',
                             left: this.state.currentClickedIndex * 100 / links.length + '%',
                         }}
                    >

                    </div>
                }
            </div>
        )
    }
}

export default Links;