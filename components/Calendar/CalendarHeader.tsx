// CalendarHeader shows the month name, year, and navigation arrows
// Example: "< January 2025 >"
// User clicks < or > to go to previous or next month

import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarHeaderProps = {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

export default function CalendarHeader({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps) {
  const monthName = currentDate.toLocaleString("default", { month: "long" }).toUpperCase();
  const year = currentDate.getFullYear();

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 12px 4px 12px",
    }}>
      {/* Previous month arrow */}
      <button
        onClick={onPrevMonth}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
        }}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Month and year - small and subtle */}
      <div style={{ textAlign: "center" }}>
        <p style={{
          fontSize: "12px",
          color: "#111111",
          letterSpacing: "1px",
        }}>
          {year}
        </p>
        <p style={{
          fontSize: "13px",
          fontWeight: "800",
          color: "#1da1e8",
          letterSpacing: "1px",
        }}>
          {monthName}
        </p>
      </div>

      {/* Next month arrow */}
      <button
        onClick={onNextMonth}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
        }}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}