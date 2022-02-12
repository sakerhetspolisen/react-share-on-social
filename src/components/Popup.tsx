import { PopupProps } from "interfaces";
import React, { CSSProperties } from "react";

import CloseButton from "./Close";
import CopyToClipboard from "./CopyToClipboard";
import Header from "./Header";
import SocialButton from "./SocialButton";

const SocialButtonsContainer = {
  maxWidth: "24rem",
  width: "90%",
  backgroundColor: "white",
  borderTopRightRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
};

const SocialButtonsListStyle: CSSProperties = {
  padding: "1.25rem",
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(60px,1fr))",
  columnGap: "0.75rem",
  rowGap: "0.6rem",
};

export default function Popup({
  onClose,
  shareTo,
  shareData,
  openInWindow,
  noReferer,
  closeText,
  copyToClipboardText,
  copySuccessText,
  onClick,
  fadeClass,
}: PopupProps) {
  return (
    <section role="dialog" aria-modal="true" className={fadeClass} style={SocialButtonsContainer}>
      <Header shareData={shareData} />
      <div style={SocialButtonsListStyle}>
        {shareTo.map((id) => (
          <SocialButton
            id={id}
            key={id}
            shareData={shareData}
            onClose={onClose}
            onClick={onClick}
            openInWindow={openInWindow}
            noReferer={noReferer}
          />
        ))}
      </div>
      <CopyToClipboard
        link={shareData.link}
        copyToClipboardText={copyToClipboardText}
        copySuccessText={copySuccessText}
      />
      <CloseButton onClose={onClose} closeText={closeText} />
    </section>
  );
}
