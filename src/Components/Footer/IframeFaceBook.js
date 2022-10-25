import React from "react";

export default function IframeFaceBook() {
  const viewWidth = window.innerWidth; //check view Width on Load site
  let iframeWith = 340;
  if (viewWidth < 1300 && viewWidth > 1023.99) {
    iframeWith = 270;
  }
  return (
    <div style={{ textAlign: "center" }} className={`w-[${iframeWith}px]`}>
      <iframe
        title="fb-plugin"
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&tabs=timeline&width=${iframeWith}&height=325&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
        className={`h-[325px] w-[${iframeWith}px]`}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}
