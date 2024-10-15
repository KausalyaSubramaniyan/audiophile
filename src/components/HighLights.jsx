import { css } from "@emotion/react";
import { colors, radius, spacer } from "../styles/CommonStyles";
import Button from "./Button";
import Spacer from "./Spacer";

function SpeakerHighlight() {
  return (
    <>
      <div css={styles.highlights.speaker.zx9.container}>
        <div css={styles.highlights.speaker.zx9.imgContainer}>
          <img
            alt="ZX9 Speaker"
            src="images/home/desktop/image-speaker-zx9.png"
            css={styles.highlights.speaker.zx9.img}
          />
        </div>
        <div css={styles.highlights.speaker.zx9.textContainer}>
          <div css={styles.highlights.speaker.zx9.text}>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button color="black">SEE PRODUCT</Button>
          </div>
        </div>
      </div>
      <Spacer value="3rem" />
      <div css={styles.highlights.speaker.zx7.container}>
        <div>
          <h4>ZX7 SPEAKER</h4>
          <Button color="black" variant="outlined">
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </>
  );
}

function EarphoneHighlight() {
  return (
    <div css={styles.highlights.earphone.container}>
      <img
        alt="yx1 earphone"
        src="images/home/desktop/image-earphones-yx1.jpg"
        css={styles.highlights.earphone.img}
      />
      <div css={styles.highlights.earphone.textContainer}>
        <div css={styles.highlights.earphone.text}>
          <h4>YX1 EARPHONES</h4>
          <Button color="black" variant="outlined">
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Highlights() {
  return (
    <>
      <SpeakerHighlight />
      <Spacer value="3rem" />
      <EarphoneHighlight />
    </>
  );
}

const styles = {
  highlights: {
    speaker: {
      zx9: {
        container: css({
          background: colors.orange,
          height: "35rem",
          display: "flex",
          borderRadius: radius.md,
          backgroundImage: "url(/images/home/desktop/pattern-circles.svg)",
          backgroundPosition: "-195px -40px",
          backgroundRepeat: "no-repeat",
        }),
        text: css({
          width: "80%",
          p: {
            opacity: "78%",
            mixBlendMode: "normal",
          },
        }),
        textContainer: css({
          width: "40%",
          color: colors.white,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }),
        img: css({
          height: "450px",
          width: "350px",
          objectPosition: "100% 12px",
        }),
        imgContainer: css({
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }),
      },
      zx7: {
        container: css({
          height: "300px",
          backgroundImage: "url(/images/home/desktop/image-speaker-zx7.jpg)",
          display: "flex",
          alignItems: "center",
          padding: "0% 10%",
        }),
      },
    },
    earphone: {
      container: css({
        height: "300px",
        display: "flex",
        justifyContent: "space-between",
      }),
      textContainer: css({
        backgroundColor: colors.grey,
        width: "48.5%",
        borderRadius: radius.md,
        display: "flex",
        alignItems: "center",
      }),
      text: css({
        padding: "0% 20%",
      }),
      img: css({
        width: "48.5%",
        borderRadius: radius.md,
      }),
    },
  },
};
