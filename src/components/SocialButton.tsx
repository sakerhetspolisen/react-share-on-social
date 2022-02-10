import { IconProps } from "interfaces";
import React, { useState } from "react";

import { iconList, windowFeatures } from "../config";

export default function Icon({ id, shareData, onClose, onClick, noReferer }: IconProps) {
  const { title, path, viewBox = "0 0 24 24", color, url } = iconList[id];
  const [hover, setHover] = useState<boolean | null>(null);

  const handleOnButtonClicked = () => {
    onClick && onClick(); // callback
    let uri = url(
      encodeURIComponent(shareData.link),
      encodeURIComponent(shareData.textToShare),
      encodeURIComponent(shareData.linkTitle)
    );
    window.open(uri, id, windowFeatures + `${noReferer ? " noreferer" : ""}`);
    onClose();
  };

  return (
    <button
      onClick={handleOnButtonClicked}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={id}
      style={{
        width: "100%",
        height: "auto",
        cursor: "pointer",
        border: "none",
        background: "none",
      }}
    >
      <div
        style={{
          borderRadius: "0.5rem",
          height: "auto",
          background: color,
          scale: hover ? "1.03" : "none",
          boxShadow: hover ? "0 0 12px rgba(0,0,0,0.2)" : "none",
          padding: "0.75rem",
          paddingBottom: "calc(0.5rem + 1px)",
        }}
      >
        <svg fill="white" viewBox={viewBox}>
          {path}
        </svg>
      </div>
      <span
        style={{
          display: "block",
          marginTop: "0.3rem",
          fontSize: "0.75rem",
        }}
      >
        {title}
      </span>
    </button>
  );
}
