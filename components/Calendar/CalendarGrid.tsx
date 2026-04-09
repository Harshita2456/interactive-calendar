// CalendarGrid is the actual date grid you see on the calendar
// It shows all the days of the month in a 7-column layout
// MON, TUE, WED, THU, FRI, SAT, SUN

import {
  startOfMonth,    // gives the first day of the month
  endOfMonth,      // gives the last day of the month
  eachDayOfInterval, // gives array of all days between two dates
  getDay,          // gives day of week (0=Sunday, 1=Monday... 6=Saturday)
  isSameDay,       // checks if two dates are the same day
  isToday,         // checks if a date is today
  isSameMonth,     // checks if a date is in the same month
} from "date-fns";
// date-fns is the package we installed - it makes working with dates very easy

import DayCell from "./DayCell";
// We import DayCell because CalendarGrid is made up of many DayCells

type CalendarGridProps = {
  currentDate: Date;        // which month are we showing
  startDate: Date | null;   // user selected start date (can be null if not selected)
  endDate: Date | null;     // user selected end date (can be null if not selected)
  onDayClick: (date: Date) => void; // function called when user clicks a day
};

// These are the day headers shown at top of grid
// We start from MON because most calendars in India/Europe start on Monday
const DAY_HEADERS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function CalendarGrid({
  currentDate,
  startDate,
  endDate,
  onDayClick,
}: CalendarGridProps) {

  // Step 1: Get all days of the current month
  const monthStart = startOfMonth(currentDate);
  // Example: if currentDate is April 2025, monthStart = April 1 2025

  const monthEnd = endOfMonth(currentDate);
  // Example: monthEnd = April 30 2025

  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  // This gives us an array like [Apr 1, Apr 2, Apr 3 ... Apr 30]

  // Step 2: Figure out how many empty boxes to show before day 1
  // Because the grid always starts on Monday
  // If April 1 is a Wednesday, we need 2 empty boxes before it
  let startDayIndex = getDay(monthStart);
  // getDay returns 0=Sunday, 1=Monday, 2=Tuesday...
  // We convert it so Monday=0, Tuesday=1... Sunday=6
  startDayIndex = startDayIndex === 0 ? 6 : startDayIndex - 1;
  // If Sunday (0), we make it 6 (last column)
  // Otherwise subtract 1 to shift from Sun-start to Mon-start

  // Step 3: Create empty placeholder boxes for days before month starts
  const emptyDays = Array.from({ length: startDayIndex });
  // Example: if April starts on Wednesday, this creates [empty, empty]

  return (
    <div className="p-4">
      {/* Day headers row: MON TUE WED THU FRI SAT SUN */}
      <div className="grid grid-cols-7 mb-2">
        {DAY_HEADERS.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-gray-400 uppercase py-1"
            // Each header is centered, small, gray, uppercase
          >
            {day}
          </div>
        ))}
      </div>

      {/* The actual date grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {/* grid-cols-7 = 7 columns, one for each day of week */}
        {/* gap-y-1 = small vertical gap between rows */}

        {/* Empty boxes before the 1st of the month */}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} />
          // These are invisible placeholder divs
          // They push day 1 to the correct column
        ))}

        {/* Actual day boxes */}
        {daysInMonth.map((date) => {
          // For each date, we calculate its visual state

          const isStart = startDate ? isSameDay(date, startDate) : false;
          // Is this date the selected start date?

          const isEnd = endDate ? isSameDay(date, endDate) : false;
          // Is this date the selected end date?

          const isInRange =
            startDate && endDate
              ? date > startDate && date < endDate
              : false;
          // Is this date between start and end?
          // We use > and < because we want dates STRICTLY between them

          const dayOfWeek = getDay(date);
          // 0 = Sunday, 6 = Saturday
          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
          // If Sunday or Saturday, mark as weekend

          return (
            <div key={date.toISOString()} className="flex justify-center">
              {/* Each day is centered in its column */}
              <DayCell
                day={date.getDate()}
                // getDate() gives just the number like 1, 2, 3...

                isToday={isToday(date)}
                // isToday() from date-fns checks if this is today

                isStart={isStart}
                isEnd={isEnd}
                isInRange={isInRange}
                isCurrentMonth={isSameMonth(date, currentDate)}
                // isSameMonth checks if this date belongs to current month

                isWeekend={isWeekend}
                onClick={() => onDayClick(date)}
                // When clicked, call the parent's onDayClick function
                // We pass the full date object so parent knows which date was clicked
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}