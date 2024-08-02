import style from "../css/Count.module.css";

/* eslint-disable react/prop-types */
export default function Count({count,totalTodo}) {
    return (
        <div className={style.div}>
           <span className={style.span}>TOTAL : {totalTodo}</span>
           <span className={style.span}>COMPLETED : {count}</span>
        </div>
    );
}