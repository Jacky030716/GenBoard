const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

interface CalendarDayProps {
  day: number;
  events: any[];
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day, events }) => {
  if (day === 0) return <div className="calendar-day"></div>;

  const dayEvents = events.filter((event) => event.date.getDate() === day);

  return (
    <div className="calendar-day p-1 text-xs">
      <div className="font-semibold text-gray-600">{day}</div>
      {dayEvents.map((event) => (
        <div
          key={event.id}
          className="event p-1 mt-1 rounded text-xs overflow-hidden text-ellipsis"
          style={{ backgroundColor: event.color }}
        >
          <div className="font-medium">{event.title}</div>
          <div className="text-xs">{event.time}</div>
        </div>
      ))}
    </div>
  );
};

interface CalendarProps {
  events: any[];
  year: number;
  month: number;
}

export const MeetingCalendar: React.FC<CalendarProps> = ({
  events,
  year,
  month,
}) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const days = Array.from({ length: 42 }, (_, i) => {
    const day = i - firstDay + 1;
    return day > 0 && day <= daysInMonth ? day : 0;
  });

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="calendar bg-white rounded-lg p-4">
      <div className="calendar-header flex justify-between items-center mb-4">
        <div className="text-sm font-semibold">
          {monthNames[month]} {year}
        </div>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-1">
        {weekdays.map((day) => (
          <div
            key={day}
            className="calendar-weekday text-xs font-semibold text-center text-gray-500"
          >
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <CalendarDay key={index} day={day} events={events} />
        ))}
      </div>
    </div>
  );
};
