import React from "react";

export default function Header({ shareData }) {
  const rootDomainFromUri = (url: string) => {
    return url.replace(/(https|http):\/\/(www.|)/g, "").replace(/\/.*/g, "");
  };
  return (
    <header
      style={{
        padding: "1rem 1.25rem",
        fontSize: "0.75rem",
        fontWeight: 600,
        paddingBottom: 0,
        display: "flex",
        columnGap: "1rem",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "3.2rem",
          height: "3.2rem",
          borderRadius: 6,
          flexShrink: 0,
          flexBasis: "3.2rem",
        }}
      >
        <img
          src={shareData.linkFavicon}
          alt={`Favicon for ${shareData.title}`}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div>
        <span
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            lineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {shareData.linkTitle}
        </span>
        <span
          style={{
            color: "rgba(0,0,0,0.7)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
            margin: "0.15rem 0",
          }}
        >
          {shareData.linkMetaDesc}
        </span>
        <span
          style={{
            fontWeight: "lighter",
            color: "rgba(0,0,0,0.5)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            lineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {rootDomainFromUri(shareData.link)}
        </span>
      </div>
    </header>
  );
}
