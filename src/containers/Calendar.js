import React, {useState, useEffect} from 'react';
import moment from "moment";

export default function Calendar() {

    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment());

    const startDay = value.clone().startOf("month").startOf("week"); 
    const endDay = value.clone().endOf("month").endOf("week");

    useEffect(() => {
        const day = startDay.clone().subtract(1, "day")
        const a = []

        while(day.isBefore(endDay, "day")){
            a.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            )
        }
        setCalendar(a);
    },[value])

    function isSelected(day) {
        return value.isSame(day, "day")
    }

    function beforeToday(day) {
        return day.isBefore(new Date(), "day")
    }

    function isToday(day){
        return day.isSame(new Date(), "day")
    }

    function dayStyles(day){
        if (beforeToday(day)) return "before"
        if (isSelected(day)) return "selected"
        if (isToday(day)) return "today"
        return ""
    }

    function currMonthName(){
        return value.format("MMMM")
    }
    
    function currYear(){
        return value.format("YYYY")
    }

    function prevMonth(){
        return value.clone().subtract(1, "month")
    }

    function nextMonth(){
        return value.clone().add(1, "month")
    }

    function thisMonth(){
        return value.isSame(new Date(), "month")
    }

    return (
            <div className="calendar">
                <div className="header">
                    <div className="previous" onClick={() => !thisMonth() &&setValue(prevMonth())}>{!thisMonth() ? String.fromCharCode(171) : null }</div>
                    <div className= "current">{currMonthName()} {currYear()}</div>
                    <div className= "next" onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</div>
                </div>
                <div className="body">
                    <div className="day-names">
                        {["s","m","t","w","t","f","s"].map((d) => (
                            <div className="week">{d}</div>
                        ))}
                    </div>
                    <table>
                        {calendar.map((week) => (
                            <div>
                                {week.map((day) => (
                                    <td className="day" onClick={() => !beforeToday(day) && setValue(day)}>
                                    <div className={dayStyles(day)}>{day.format("D").toString()}</div>
                                    </td>
                                ))}
                            </div>
                        ))}
                    </table> 
                </div>     
           </div>  
        )
}


