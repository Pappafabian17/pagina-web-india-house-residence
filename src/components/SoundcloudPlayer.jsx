import React from "react";

const SoundcloudPlayer = () => {
  return (
    <>
      <h2 className="musica-titulo"> Nuestra Musica</h2>

      <div className="reproductor-container">
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1497022141&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
            fontWeight: "100",
          }}
        >
          <a
            href="https://soundcloud.com/alejo-gonzalia"
            title="INDIA House 🇦🇷"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            INDIA House 🇦🇷
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/alejo-gonzalia/sets/india-house-resistance"
            title="INDIA HOUSE RESISTANCE"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            INDIA HOUSE RESISTANCE
          </a>
        </div>
      </div>
    </>
  );
};

export default SoundcloudPlayer;
