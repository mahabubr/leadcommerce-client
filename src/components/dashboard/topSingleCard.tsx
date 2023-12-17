import React,{ReactElement} from 'react';
import style from '../dashboard/static/dashboard.module.css'

type IData={
    total:string;
    text:string;
    icon:ReactElement;
    link?:string;
}
const TopSingleCard = (props:IData) => {


    return (
        <div className={style.card}>
            <div className='data'>
                <h3 className={style.h3}>{props.total}</h3>
                <p className={style.para}>{props.text}</p>
            </div>
            <div className={style.icon}>
                {props.icon}
            </div>
        </div>
    );
};

export default TopSingleCard;