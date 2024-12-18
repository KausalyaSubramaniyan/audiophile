import { css } from "@emotion/react";
import { colors, mediaQuery } from "../../styles/CommonStyles";
import { useLayoutEffect, useRef, useState } from "react";

export default function Overlay({
  open,
  onClick,
  children,
  placement = "center",
  customCss = css({}),
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
      case "top-center":
        return css({
          top: "10%",
          left: `calc(50% - ${childDimensions.width}px / 2)`,
        });
      case "top-right": {
        return css({
          top: "calc(var(--nav-bar-height) + var(--spacing-2))",
          right: "var(--side-spacing)",
        });
      }
      case "top-left": {
        return css({
          top: "var(--nav-bar-height)",
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
        <div
          ref={targetRef}
          css={[styles.children, getPlacementStyles(), customCss]}
        >
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
    backgroundColor: "var(--color-secondary)",
    opacity: "50%",
  }),
  children: css({
    position: "absolute",
    backgroundColor: "var(--color-white-1000)",
    zIndex: "2",
    opacity: "100%",
    borderRadius: "var(--radius-md)",
    [mediaQuery["sm"]]: {
      left: "var(--side-spacing)",
    },
  }),
};
