import { css } from "@emotion/react";
import { colors, mediaQuery, radius } from "../styles/CommonStyles";
import Button from "./Button";
import Spacer from "./Spacer";

function SpeakerHighlight() {
  return (
    <>
      <div css={styles.highlights.speaker.zx9.container}>
        <div css={styles.highlights.speaker.zx9.imgContainer}>
          <picture>
            <source
              srcSet="images/home/mobile/image-speaker-zx9.png"
              media="(max-width: 576px)"
              css={styles.highlights.speaker.zx9.img}
            />
            <source
              srcSet="images/home/tablet/image-speaker-zx9.png"
              media="(max-width: 768px)"
              css={styles.highlights.speaker.zx9.img}
            />
            <img
              alt="ZX9 Speaker"
              src="images/home/desktop/image-speaker-zx9.png"
              css={styles.highlights.speaker.zx9.img}
            />
          </picture>
        </div>
        <div css={styles.highlights.speaker.zx9.textContainer}>
          <div css={styles.highlights.speaker.zx9.text}>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button color="secondary">SEE PRODUCT</Button>
          </div>
        </div>
      </div>
      <Spacer value="3rem" />
      <div css={styles.highlights.speaker.zx7.container}>
        <h4>ZX7 SPEAKER</h4>
        <Button color="secondary" variant="outlined">
          SEE PRODUCT
        </Button>
      </div>
    </>
  );
}

function EarphoneHighlight() {
  return (
    <div css={styles.highlights.earphone.container}>
      <picture css={styles.highlights.earphone.imgContainer}>
        <source
          srcSet="images/home/mobile/image-earphones-yx1.jpg"
          media="(max-width: 576px)"
          css={styles.highlights.earphone.img}
        />
        <source
          srcSet="images/home/tablet/image-earphones-yx1.jpg"
          media="(max-width: 768px)"
          css={styles.highlights.earphone.img}
        />
        <img
          alt="yx1 earphone"
          src="images/home/desktop/image-earphones-yx1.jpg"
          css={styles.highlights.earphone.img}
        />
      </picture>
      <div css={styles.highlights.earphone.textContainer}>
        <div css={styles.highlights.earphone.text}>
          <h4>YX1 EARPHONES</h4>
          <Button color="secondary" variant="outlined">
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </div>
  );
}

// TODO - See if sidebysidelayout can be used for earphone
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
          background: "var(--color-primary)",
          height: "35rem",
          display: "flex",
          borderRadius: radius.md,
          backgroundImage: "url(/images/home/desktop/pattern-circles.svg)",
          backgroundPosition: "-90% 10%",          
          backgroundRepeat: "no-repeat",
          [mediaQuery["lg"]]: {
            flexDirection: "column",
            height: "40rem",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "var(--spacing-2-5) 0",
            backgroundPosition: "50% 120%",
          },
        }),
        text: css({
          width: "80%",
          p: {
            opacity: "78%",
            mixBlendMode: "normal",
          },
          [mediaQuery["lg"]]: {
            textAlign: "center",
          },
        }),
        textContainer: css({
          width: "40%",
          color: colors.white,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          [mediaQuery["lg"]]: {
            width: "50%",
            alignItems: "center",
          },
        }),
        img: css({
          height: "450px",
          width: "350px",
          verticalAlign: "middle",
          [mediaQuery["lg"]]: {
            height: "250px",
            width: "210px",
          },
          [mediaQuery["md"]]: {
            height: "210px",
            width: "160px",
          },
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
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0% 10%",
          backgroundSize: "100% 100%",
          borderRadius: "var(--radius-md)",
          [mediaQuery["lg"]]: {
            backgroundImage: "url(/images/home/tablet/image-speaker-zx7.jpg)",
          },
          [mediaQuery["sm"]]: {
            backgroundImage: "url(/images/home/mobile/image-speaker-zx7.jpg)",
          },
        }),
      },
    },
    earphone: {
      container: css({
        height: "300px",
        display: "flex",
        columnGap: "var(--spacing-2)",
        [mediaQuery["sm"]]: {
          flexWrap: "wrap",
          rowGap: "var(--spacing-2)",
          height: "400px",
        },
        width: "100%",
      }),
      textContainer: css({
        backgroundColor: "var(--color-grey-200)",
        width: "50%",
        borderRadius: "var(--radius-md)",
        display: "flex",
        alignItems: "center",
        height: "100%",
        [mediaQuery["sm"]]: {
          width: "100%",
          height: "50%",
        },
      }),
      text: css({
        padding: "0% 10%",
      }),
      imgContainer: css({
        width: "50%",
        [mediaQuery["sm"]]: {
          width: "100%",
          height: "50%",
        },
      }),
      img: css({
        width: "100%",
        borderRadius: "var(--radius-md)",
        height: "100%",
      }),
    },
  },
};
