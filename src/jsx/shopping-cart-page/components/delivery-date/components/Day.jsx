
const Day = (props) => {


  const days = {
    1: { dayName: 'شنبه', date: 21 },
    2: { dayName: 'یکشنبه', date: 22 },
    3: { dayName: 'دوشنبه', date: 23 },
    4: { dayName: 'سه شنبه', date: 24 },
    5: { dayName: 'چهارشنبه', date: 25 },
    6: { dayName: 'پنجشنبه', date: 26 },
    7: { dayName: 'جمعه', date: 27 },
  }


  return (
    <div className={` ${props.selected ? 'selected' : ''} day `}
      onClick={() => { props.setSelected(props.dayIndex); }}>
      <span>{days[props.dayIndex].date}</span>
      <h1>{days[props.dayIndex].dayName}</h1>
    </div>
  )
}

export default Day
