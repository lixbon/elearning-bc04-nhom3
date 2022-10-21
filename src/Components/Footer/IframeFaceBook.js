import React from "react";

export default function IframeFaceBook() {
  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&tabs=timeline&width=340&height=325&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        className="h-[325px] w-[340px]"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}
