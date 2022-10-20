import React from "react";

export default function IframeFaceBook() {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="fb-page fb_iframe_widget"
        data-href="https://www.facebook.com/lophocviet/"
        data-width={340}
        data-height={325}
        data-tabs="timeline"
        data-hide-cover={0}
        data-show-facepile={0}
        data-hide-cta={0}
        data-small-header={0}
        data-adapt-container-width={1}
        fb-xfbml-state="rendered"
        fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=0&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=340"
      >
        <span style={{ verticalAlign: "bottom", width: 340, height: 325 }}>
          <iframe
            width="340px"
            height="325px"
            data-testid="fb:page Facebook Social Plugin"
            title="fb:page Facebook Social Plugin"
            frameBorder={0}
            scrolling="no"
            allow="encrypted-media"
            src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df10dee7e54a3d2%26domain%3Dcybersoft.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcybersoft.edu.vn%252Ff20ebd498a06064%26relation%3Dparent.parent&container_width=0&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=340"
            style={{
              border: "none",
              visibility: "visible",
              width: 340,
              height: 325,
            }}
          />
        </span>
      </div>
    </div>
  );
}
