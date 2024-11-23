import { useState } from "react";

interface MagnifierProps {
  source: string;
  alt: string;
  magnifierWidth: number;
  magnifierHeight: number;
  magnifierBorderRadius: number;
  magnifierOffsetX: number;
  magnifierOffsetY: number;
  zoom: number;
}

const Magnifier = ({
  source,
  alt,
  magnifierWidth,
  magnifierHeight,
  magnifierBorderRadius,
  magnifierOffsetX,
  // magnifierOffsetY,
  zoom,
}: MagnifierProps) => {
  // const [active, setActive] = useState(false);
  const [[imageWidth, imageHeight], setDimensions] = useState([0, 0]);
  const [[x, y], setPosition] = useState([0, 0]);

  /*
  const imageRef = useRef<HTMLImageElement | null>(null);
  const w = imageRef.current?.offsetWidth as number;
  const h = imageRef.current?.offsetHeight as number;
  setDimensions([w, h]);*/

  const mouseEnterSource = (e: any) => {
    const el = e.currentTarget;

    const { width, height } = el.getBoundingClientRect();
    setDimensions([width, height]);
    // setActive(true);
  };

  // get cursor coordinates relative to image
  const mouseMoveSource = (e: any) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    let x = e.pageX - left - window.scrollX;
    let y = e.pageY - top - window.scrollY;

    /*
    if (x > imageWidth - magnifierWidth / 2 / zoom) {
      x = imageWidth - magnifierWidth / 2 / zoom;
    }
    if (x < magnifierWidth / 2 / zoom) {
      x = magnifierWidth / 2 / zoom;
    }
    if (y > imageHeight - magnifierHeight / 2 / zoom) {
      y = imageHeight - magnifierHeight / 2 / zoom;
    }
    if (y < magnifierHeight / 2 / zoom) {
      y = magnifierHeight / 2 / zoom;
    }*/

    setPosition([x, y]);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          className="magnifier"
          //ref={imageRef}
          src={source}
          alt={alt}
          onMouseEnter={(e) => mouseEnterSource(e)}
          onMouseMove={(e) => mouseMoveSource(e)}
        />

        <div
          style={{
            //display: active ? "" : "none",
            position: "absolute",
            pointerEvents: "none",
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            // opacity:
            // border:
            // backgroundColor:
            borderRadius: `${magnifierBorderRadius}%`,
            backgroundImage: `url('${source}')`,
            backgroundRepeat: "no-repeat",
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifierWidth / 2 - magnifierOffsetX}px`,
            backgroundSize: `${imageWidth * zoom}px ${imageHeight * zoom}px`,
            backgroundPositionX: `${
              -x * zoom + magnifierWidth / 2 + magnifierOffsetX * zoom
            }px`,
            backgroundPositionY: `${-y * zoom + magnifierHeight / 2}px`,
          }}
        >
          <div className="glasses" />
        </div>

        <div
          style={{
            //display: active ? "" : "none",
            position: "absolute",
            pointerEvents: "none",
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            // opacity:
            // border:
            // backgroundColor:
            borderRadius: `${magnifierBorderRadius}%`,
            backgroundImage: `url('${source}')`,
            backgroundRepeat: "no-repeat",
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifierWidth / 2 + magnifierOffsetX}px`,
            backgroundSize: `${imageWidth * zoom}px ${imageHeight * zoom}px`,
            backgroundPositionX: `${
              -x * zoom + magnifierWidth / 2 - magnifierOffsetX * zoom
            }px`,
            backgroundPositionY: `${-y * zoom + magnifierHeight / 2}px`,
          }}
        />
      </div>
    </>
  );
};

export default Magnifier;
