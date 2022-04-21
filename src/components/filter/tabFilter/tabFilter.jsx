
import "./tabFilter.scss";
import { useState } from 'react';

export default function TabFilter() {
  const [selectedToday, setSelectedToday] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(false);

  const handleSelected =(option)=>{
    if(option === "today"){
      setSelectedToday(true);
      setSelectedWeek(false);
      setSelectedMonth(false);
    } else if(option === "week"){
      setSelectedToday(false);
      setSelectedWeek(true);
      setSelectedMonth(false);
    }else{
      setSelectedToday(false);
      setSelectedWeek(false);
      setSelectedMonth(true);
    }
  }

  return (
    <div className="tabs">
        <button onClick={()=>handleSelected("today")} className={`tab-button ${ selectedToday && "tab-seleted"}`}>Hoy</button>
        <button onClick={()=>handleSelected("week")} className={`tab-button ${selectedWeek && "tab-seleted"}`}>Esta semana</button>
      <button onClick={()=>handleSelected("month")} className={`tab-button ${selectedMonth && "tab-seleted"}`}>Septiembre</button>
    </div>
  );
}
