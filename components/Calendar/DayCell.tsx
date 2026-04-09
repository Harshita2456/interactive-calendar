// DayCell represents ONE single date box in the calendar
// For example: the box showing "15" in the grid

type DayCellProps = {
  day: number;           // the date number to show (1, 2, 3... 31)
  isToday: boolean;      // is this box today's date?
  isStart: boolean;      // is this the START of selected range?
  isEnd: boolean;        // is this the END of selected range?
  isInRange: boolean;    // is this date BETWEEN start and end?
  isCurrentMonth: boolean; // does this date belong to current month?
  isWeekend: boolean;    // is this Saturday or Sunday?
  onClick: () => void;   // what happens when user clicks this date
};

export default function DayCell({
  day,
  isToday,
  isStart,
  isEnd,
  isInRange,
  isCurrentMonth,
  isWeekend,
  onClick,
}: DayCellProps) {

  // We build the className dynamically based on the state of this day
  let cellClass = "relative flex items-center justify-center w-8 h-8 rounded-full cursor-pointer text-sm font-medium transition-all duration-200 ";

  if (!isCurrentMonth) {
    // Dates from previous/next month appear faded
    cellClass += "text-gray-300 ";
  } else if (isStart || isEnd) {
    // Start and end dates get a bold blue circle
    cellClass += "bg-blue-600 text-white font-bold ";
  } else if (isInRange) {
    // Dates between start and end get a light blue background
    cellClass += "bg-blue-100 text-blue-800 rounded-none ";
  } else if (isToday) {
    // Today gets a light ring around it
    cellClass += "ring-2 ring-blue-400 text-blue-600 ";
  } else if (isWeekend) {
    // Weekends appear in blue color like the reference image
    cellClass += "text-blue-500 ";
  } else {
    // Normal weekday
    cellClass += "text-gray-700 hover:bg-gray-100 ";
  }

  return (
    <div onClick={onClick} className={cellClass}>
      {day}
    </div>
  );
}