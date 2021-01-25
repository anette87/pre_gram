import React from 'react';
import moment from "moment";

export default function Calendar() {

    const value = moment();
    const startDay = value.clone().startOf("month").startOf("week"); 
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day")
    const calendar = []
    
    while(day.isBefore(endDay, "day")){
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, "day").clone())
        )
    }


    return (
           <table className="calendar">
               {calendar.map((week) => (
                   <div>
                       {week.map((day) => (
                           <td className="day">{day.format("D").toString()}</td>
                        ))}
                    </div>
                ))}
            </table>        
        )
}


