import React from "react";

const animationCSS =
  ".socialShareBackdropFadeIn{animation:simpleFade .5s;}.socialShareBackdropFadeOut{animation:simpleFade .5s reverse;}.socialSharePopupMoveIn{animation:fadeInUp .5s; }.socialSharePopupMoveOut{animation:fadeInUp .5s reverse; }@keyframes simpleFade{0%{opacity:0}100%{opacity:1}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}";

export default function Backdrop({ children, onClose, backdropColor, fadeClass }) {
  const handleOnClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <div
      onClick={handleOnClose}
      className={fadeClass}
      style={{
        background: backdropColor,
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 1400,
      }}
    >
      <style children={animationCSS} />
      {children}
    </div>
  );
}
