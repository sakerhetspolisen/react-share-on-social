import React, { CSSProperties, useState } from "react";

const CloseStyle: CSSProperties = {
  color: "#323c5a",
  cursor: "pointer",
  padding: "0.75rem",
  display: "block",
  width: "100%",
  border: 0,
  fontSize: "1rem",
  transition: "0.3s",
};

interface CloseButtonProps {
  onClose;
  closeText?: string;
}

export default function CloseButton({ onClose, closeText }: CloseButtonProps) {
  const [hover, setHover] = useState<boolean | null>(null);
  return (
    <button
      style={{
        ...CloseStyle,
        background: hover ? "#d8dff6" : "#e5eaf9",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Close"
      type="button"
      onClick={onClose}
    >
      {closeText || "Close"}
    </button>
  );
}
