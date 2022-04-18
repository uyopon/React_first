import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div  className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.item}>
                    Dima
                </div>
                <div className={s.item}>
                    Andrey
                </div>
                <div className={s.item}>
                    Sveta
                </div>
                <div className={s.item}>
                    Sasha
                </div>
                <div className={s.item}>
                    Viktor
                </div>
                <div className={s.item}>
                    Valera
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how are you</div>
                <div className={s.message}>hello hello</div>

            </div>
        </div>


    )

}



export default Dialogs;
