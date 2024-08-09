/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";

const ImageToAsciiConverter = () => {
  const [asciiArt, setAsciiArt] = useState("");
  const [fullAsciiArt, setFullAsciiArt] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const fileInputRef = useRef(null);

  const ASCII_CHARS = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        convertToAscii(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertToAscii = (imageSrc) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const scaleFactor = 0.1;
      const asciiWidth = Math.floor((img.width * scaleFactor) / 2);
      const asciiHeight = Math.floor((img.height * scaleFactor) / 2);

      canvas.width = asciiWidth;
      canvas.height = asciiHeight;
      ctx.drawImage(img, 0, 0, asciiWidth, asciiHeight);

      const imageData = ctx.getImageData(0, 0, asciiWidth, asciiHeight);
      let asciiImage = "";

      for (let y = 0; y < asciiHeight; y++) {
        for (let x = 0; x < asciiWidth; x++) {
          const offset = (y * asciiWidth + x) * 4;
          const r = imageData.data[offset];
          const g = imageData.data[offset + 1];
          const b = imageData.data[offset + 2];
          const brightness = (r + g + b) / 3;
          const charIndex = Math.floor(
            (brightness / 255) * (ASCII_CHARS.length - 1)
          );
          asciiImage += ASCII_CHARS[charIndex];
        }
        asciiImage += "\n";
      }

      setFullAsciiArt(asciiImage);
      setAsciiArt("");
      setIsStreaming(true);
    };
    img.src = imageSrc;
  };

  useEffect(() => {
    if (isStreaming && fullAsciiArt.length > asciiArt.length) {
      const timer = setTimeout(() => {
        setAsciiArt(fullAsciiArt.slice(0, asciiArt.length + 3)); // Reduced from 10 to 3 characters
      }, 3); // Increased from 1 to 3 milliseconds

      return () => clearTimeout(timer);
    } else if (isStreaming && fullAsciiArt.length === asciiArt.length) {
      setIsStreaming(false);
    }
  }, [asciiArt, fullAsciiArt, isStreaming]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Image to ASCII Art Converter</h1>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          className="hidden"
        />
        <button onClick={() => fileInputRef.current.click()}>
          Upload Image
        </button>
      </div>
      {imagePreview && (
        <div className="mb-4">
          <img src={imagePreview} alt="Preview" className="max-w-xs mx-auto" />
        </div>
      )}
      {(asciiArt || isStreaming) && (
        <pre className="p-4 rounded overflow-x-auto whitespace-pre text-xs border w-96 mx-auto">
          {asciiArt}
        </pre>
      )}
    </div>
  );
};

export default ImageToAsciiConverter;
