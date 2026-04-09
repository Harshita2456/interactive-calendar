"use client";

import { useState, useEffect } from "react";

type NotesPanelProps = {
  startDate: Date | null;
  endDate: Date | null;
  currentMonth: Date;
};

export default function NotesPanel({
  startDate,
  endDate,
  currentMonth,
}: NotesPanelProps) {
  const [noteText, setNoteText] = useState("");
  const [savedNotes, setSavedNotes] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("calendar-notes");
    if (stored) setSavedNotes(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("calendar-notes", JSON.stringify(savedNotes));
  }, [savedNotes]);

  const getNoteKey = () => {
    if (startDate && endDate) {
      return `${startDate.toISOString().split("T")[0]}:${endDate.toISOString().split("T")[0]}`;
    }
    if (startDate) return startDate.toISOString().split("T")[0];
    return `month-${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}`;
  };

  const handleSave = () => {
    if (!noteText.trim()) return;
    const key = getNoteKey();
    setSavedNotes((prev) => ({ ...prev, [key]: noteText }));
    setNoteText("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // Get saved note for current selection
  const currentKey = getNoteKey();
  const currentSavedNote = savedNotes[currentKey];

  return (
    <div style={{
      padding: "12px 10px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Notes label - exactly like reference */}
      <p style={{
        fontSize: "13px",
        color: "#11111",
        marginBottom: "10px",
        fontWeight: "500",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
      }}>
        Notes
      </p>

      {/* Ruled lines with editable text - like a real notepad */}
      <div style={{ flex: 1, position: "relative" }}>
        {/* Background ruled lines */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            style={{
              borderBottom: "1px solid #e0e0e0",
              height: "24px",
              // Each div is one ruled line
            }}
          />
        ))}

        {/* Textarea sits on top of the ruled lines */}
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write here..."
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            resize: "none",
            fontSize: "9px",
            color: "#555",
            lineHeight: "24px",
            // lineHeight matches the ruled line height exactly
            padding: "0 4px",
            fontFamily: "inherit",
          }}
        />
      </div>

      {/* Saved note display */}
      {currentSavedNote && (
        <div style={{
          marginTop: "8px",
          padding: "4px 6px",
          background: "#f0f8ff",
          borderLeft: "2px solid #1da1e8",
          borderRadius: "2px",
        }}>
          <p style={{ fontSize: "8px", color: "#1da1e8", marginBottom: "2px" }}>Saved</p>
          <p style={{ fontSize: "8px", color: "#555" }}>{currentSavedNote}</p>
        </div>
      )}

      {/* Save button */}
      <button
        onClick={handleSave}
        style={{
          marginTop: "8px",
          padding: "4px 8px",
          background: saved ? "#4caf50" : "#1da1e8",
          color: "white",
          border: "none",
          borderRadius: "3px",
          fontSize: "8px",
          cursor: "pointer",
          fontWeight: "600",
          letterSpacing: "0.5px",
          transition: "background 0.3s",
        }}
      >
        {saved ? "Saved! ✓" : "Save Note"}
      </button>
    </div>
  );
}