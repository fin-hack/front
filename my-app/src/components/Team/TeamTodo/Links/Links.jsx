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
            <div className={s.links}>
                {links}
                {
                    this.state.currentClickedIndex !== null &&
                    <div className={s.floatingElem}
                         style={{
                             left: this.state.currentClickedIndex * 33.33 + '%',
                         }}
                    >

                    </div>
                }
            </div>
        )
    }
}

export default Links;