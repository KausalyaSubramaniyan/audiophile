import { css } from "@emotion/react";
import { colors, radius } from "../styles/CommonStyles";
import { useLayoutEffect, useRef, useState } from "react";

export default function Overlay({
  open,
  onClick,
  children,
  placement = "center",
}) {
  const targetRef = useRef();
  const [childDimensions, setChildDimensions] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setChildDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, [children]);

  const getPlacementStyles = () => {
    switch (placement) {
      case "center":
        return css({
          top: `calc(50% - ${childDimensions.height}px / 2)`,
          left: `calc(50% - ${childDimensions.width}px / 2)`,
        });
      case "top-right": {
        return css({
          top: `10%`,
          left: `calc(100% - 10rem - ${childDimensions.width}px)`,
        });
      }
      default:
        return css({});
    }
  };

  if (open) {
    return (
      <>
        <div css={styles.overlay} onClick={onClick}></div>
        <div ref={targetRef} css={[styles.children, getPlacementStyles()]}>
          {children}
        </div>
      </>
    );
  }
  return <></>;
}

const styles = {
  overlay: css({
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    zIndex: "1",
    backgroundColor: colors.black,
    opacity: "50%",
  }),
  children: css({
    position: "absolute",
    backgroundColor: colors.white,
    zIndex: "2",
    opacity: "100%",
    borderRadius: radius.md,
  }),
};
