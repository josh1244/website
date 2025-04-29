import React from "react";

interface NonDraggableImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const NonDraggableImage: React.FC<NonDraggableImageProps> = ({
  src,
  alt,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      draggable="false"
      onDragStart={(e) => e.preventDefault()}
      {...props}
    />
  );
};

export default NonDraggableImage;
