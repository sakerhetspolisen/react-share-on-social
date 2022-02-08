import React, { CSSProperties, useState } from "react";
import copy from "copy-to-clipboard";

const CopyToClipboardStyle: CSSProperties = {
  background: "#dfe5f7",
  color: "#252d43",
  cursor: "pointer",
  padding: "0.75rem",
  margin: "0 1.25rem 1.25rem 1.25rem",
  width: "calc(100% - 2.5rem)",
  border: 0,
  fontSize: "1rem",
  borderRadius: "0.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
};

interface CopyToClipboardProps {
  copyToClipboardText?: string;
  copySuccessText?: string;
  link: string;
}

export default function CopyToClipboard({
  copyToClipboardText,
  copySuccessText,
  link,
}: CopyToClipboardProps) {
  const [buttonText, setButtonText] = useState<string | undefined>(copyToClipboardText);
  const [hover, setHover] = useState<boolean | null>(null);
  const handleClick = () => {
    copy(link);
    setButtonText(copySuccessText);
    setTimeout(() => setButtonText(copyToClipboardText), 3000);
  };
  return (
    <button
      style={{
        ...CopyToClipboardStyle,
        background: hover ? "#cbd5f3" : "#dfe5f7",
      }}
      aria-label={buttonText}
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginRight: "0.2rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 0 24 24"
          width="18px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
      </span>
      {buttonText}
    </button>
  );
}
