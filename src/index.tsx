import { ReactSocialShareProps } from "interfaces";
import React, { cloneElement, useMemo, useState } from "react";
import Backdrop from "./components/Backdrop";
import { iconList } from "./config";
import Portal from "./components/Portal";
import Popup from "./components/Popup";
import useDisclosure from "./hooks/use-disclosure";

const ReactSocialShare = ({
  children,
  backdropColor = "rgba(0,0,0,0.4)",
  closeText = "Close",
  copyToClipboardText = "Copy link",
  copySuccessText = "Copied",
  shareTo = Object.keys(iconList),
  textToShare,
  link,
  linkTitle,
  linkMetaDesc,
  linkImage,
  linkFavicon,
  openInWindow = true,
  noReferer = false,
  onSocialClick = () => null,
}: ReactSocialShareProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [backdropFadeClass, setBackdropFadeClass] = useState("socialShareBackdropFadeIn");
  const [popupFadeClass, setPopupFadeClass] = useState("socialSharePopupMoveIn");

  const shareData = useMemo(
    () => ({
      textToShare: textToShare || "test",
      link: link || (typeof window !== "undefined" && window.location.href) || "",
      linkTitle: linkTitle || "",
      linkMetaDesc: linkMetaDesc || "",
      linkImage: linkImage,
      linkFavicon: linkFavicon,
    }),
    [textToShare, link, linkTitle, linkMetaDesc, linkImage, linkFavicon]
  );

  const handleOnClick = async () => {
    if (window.navigator.share) {
      try {
        await window.navigator.share({
          url: shareData.link,
          title: shareData.linkTitle,
          text: shareData.textToShare,
        });
        onSocialClick();
      } catch (e) {
        console.warn(e);
      }
    } else {
      setPopupFadeClass("socialSharePopupMoveIn");
      setBackdropFadeClass("socialShareBackdropFadeIn");
      onOpen();
    }
  };

  const handleOnClose = () => {
    setTimeout(onClose, 500);
    setPopupFadeClass("socialSharePopupMoveOut");
    setBackdropFadeClass("socialShareBackdropFadeOut");
  };

  return (
    <>
      {cloneElement(children, {
        ...children?.props,
        onClick: handleOnClick,
      })}
      {isOpen && (
        <Portal>
          <Backdrop
            onClose={handleOnClose}
            backdropColor={backdropColor}
            fadeClass={backdropFadeClass}
          >
            <Popup
              onClose={handleOnClose}
              shareTo={shareTo}
              shareData={shareData}
              closeText={closeText}
              copyToClipboardText={copyToClipboardText}
              copySuccessText={copySuccessText}
              onClick={handleOnClick}
              openInWindow={openInWindow}
              noReferer={noReferer}
              fadeClass={popupFadeClass}
            />
          </Backdrop>
        </Portal>
      )}
    </>
  );
};

export default ReactSocialShare;
