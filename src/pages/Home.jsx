import { css } from "@emotion/react";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import { colors, buttonStyles } from "../styles/CommonStyles";

function ProductCards() {
  return (
    <div css={homeStyles.cardContainer}>
      <Card
        imgUrl="images/shared/desktop/image-category-thumbnail-headphones.png"
        productName="HEADPHONES"
      />
      <Card
        imgUrl="images/shared/desktop/image-category-thumbnail-speakers.png"
        productName="SPEAKERS"
      />
      <Card
        imgUrl="images/shared/desktop/image-category-thumbnail-earphones.png"
        productName="EARPHONES"
      />
    </div>
  );
}

function SpeakerHighlight() {
  return (
    <>
      <div css={homeStyles.highlights.speaker.container}>
        <div css={homeStyles.highlights.speaker.imgContainer}>
          <img
            alt="ZX9 Speaker"
            src="images/home/desktop/image-speaker-zx9.png"
            css={homeStyles.highlights.speaker.img}
          />
        </div>
        <div css={homeStyles.highlights.speaker.textContainer}>
          <div css={homeStyles.highlights.speaker.text}>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button css={buttonStyles(colors.white, colors.black)}>
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function EarphoneHighlight() {
  return (
    <div css={homeStyles.highlights.earphone.container}>
      <img
        alt="yx1 earphone"
        src="images/home/desktop/image-earphones-yx1.jpg"
        css={homeStyles.highlights.earphone.img}
      />
      <div css={homeStyles.highlights.earphone.textContainer}>
        <div css={homeStyles.highlights.earphone.text}>
          <h4>YX1 EARPHONES</h4>
          <button css={buttonStyles(colors.black, colors.white)}>
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductHighlights() {
  return (
    <>
      <SpeakerHighlight />
      <div css={homeStyles.spacer}></div>
      <EarphoneHighlight />
    </>
  );
}

export default function Home() {
  const getContent = () => {
    return (
      <div>
        <ProductCards />
        <ProductHighlights />
      </div>
    );
  };
  return (
    <>
      <Layout heroSection={HeroSection} content={getContent} />
    </>
  );
}

const homeStyles = {
  spacer: css({
    marginTop: "45px",
  }),
  cardContainer: css({
    margin: "12rem 0rem 9rem 0rem",
    display: "flex",
    justifyContent: "space-between",
  }),
  highlights: {
    speaker: {
      container: css({
        background: colors.orange,
        height: "35rem",
        display: "flex",
        borderRadius: "7px",
        backgroundImage: "url(images/home/desktop/pattern-circles.svg)",
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
    earphone: {
      container: css({
        height: "300px",
        display: "flex",
        justifyContent: "space-between",
      }),
      textContainer: css({
        backgroundColor: colors.grey,
        width: "48.5%",
        borderRadius: "7px",
      }),
      text: css({
        margin: "20% 0 0 20%"
      }),
      img: css({
        width: "48.5%",
        borderRadius: "7px",
      }),
    },
  },
};
