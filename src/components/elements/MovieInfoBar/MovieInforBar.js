import React from 'react';
import { calcTime, convertMoney } from '../../../helpers.js';
import './MovieInfoBar.css';
const MovieInfoBar = (props) => {
    return (
        <div className="rmdb-movieinfobar">
            <div className="rmdb-movieinfobar-content">
                <div className="rmdb-movieinfobar-content-co">

                    <span className="rmdb-movieinfobar-info" > <i className="far fa-clock fa-lg"></i>
                        Running Time: {calcTime(props.time)}</span>
                </div>
                <div className="rmdb-movieinfobar-content-co">

                    <span className="rmdb-movieinfobar-info" ><i className="fas fa-rupee-sign fa-lg"></i>
                        Budget: {convertMoney(props.budget)}</span>

                </div>
                <div className="rmdb-movieinfobar-content-co">
                    <span className="rmdb-movieinfobar-info" ><i className="fab fa-btc fa-lg"></i>
                        Revenue: {convertMoney(props.revenue)}</span>

                </div>

            </div>
        </div>
    )
}
export default MovieInfoBar;