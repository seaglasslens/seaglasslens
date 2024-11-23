import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PageTransition = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <motion.svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="loading-overlay"
        initial={{ y: 0 }}
        animate={{
          y: "100vh",
          transition: { delay: 4, duration: 0 },
        }}
        exit={{ y: 0, transition: { duration: 0 } }}
      >
        <mask id="Mask">
          <rect width={width} height={height} fill="white" />
          <motion.circle
            cx={width / 2}
            cy={height / 2}
            r={width > height ? width : height}
            fill="black"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                delay: 2.5,
                duration: 1.25,
                ease: [0.5, 0, 0.75, 0],
              },
            }}
            exit={{
              scale: 0,
              transition: { duration: 1.25, ease: [0.25, 1, 0.5, 1] },
            }}
          />
        </mask>
        <rect width={width} height={height} fill="black" mask="url(#Mask)" />
      </motion.svg>

      <motion.div
        className="loading-fish"
        initial={{ y: 0 }}
        animate={{ y: "100vh", transition: { delay: 2.5, duration: 0 } }}
        exit={{ y: "100vh" }}
      />

      {children}
    </>
  );
};

export default PageTransition;
