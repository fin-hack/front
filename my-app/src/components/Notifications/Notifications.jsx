import React from 'react';
import s from './Notifications.module.css';
import {connect} from "react-redux";
import cn from "classnames";
import {CSSTransition} from "react-transition-group";

const Notifications = (props) => {
    return (
        <CSSTransition
            in={props.opened}
            timeout={300}
            classNames="page"
            unmountOnExit
        >
            <div className={cn('page', s.notifications)}>
                <div className={s.title}>Уведомления:</div>
                <div className={s.notif}>
                    <div className={s.text}>
                        Вы выполнили план! Какой вы молодец! Напоминаем, что если вы выполните сверх плана, то вас ждут
                        приятные бонусы. Подбробнее ознакомиться с этой информацией возможно в личном кабинете
                    </div>
                    <div className={s.read}>Прочитано</div>
                </div>
                <div className={s.notif}>
                    <div className={s.text}>
                        Вы выполнили план! Какой вы молодец! Напоминаем, что если вы выполните сверх плана, то вас ждут
                        приятные бонусы. Подбробнее ознакомиться с этой информацией возможно в личном кабинете
                    </div>
                    <div className={s.read}>Прочитано</div>
                </div>
                <div className={s.triang}>

                </div>
            </div>
        </CSSTransition>
    )
};

const mstp = (state) => ({
    opened: state.app.notificationsOpened
});

export default connect(mstp)(Notifications)