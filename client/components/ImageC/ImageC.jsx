import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import "./ImageC.css";

export default function ImageComponent({ src }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div style={{ display: imageLoaded ? " none" : "inline" }}>
        <Blurhash
          hash="LHIhv=Io0exbThoIxTR+8^xu%PR$"
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          opacity={0.2}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        style={{ display: !imageLoaded ? " none" : "inline" }}
      />
    </>
  );
}
