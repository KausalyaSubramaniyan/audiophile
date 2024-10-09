import { css } from "@emotion/react";

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import SideBySideLayout from "../components/SideBySideLayout";
import SideBySideLayoutTextContent from "../components/SideBySideLayoutTextContent";
import { colors, spacer, subTitle } from "../styles/CommonStyles";
import { useEffect, useState } from "react";
import { productDetailsData } from "../data/constants";
import Recommendations from "../components/Recommendations";
import ProductCards from "../components/ProductCards";
import { useLocation } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function ProductDetails() {
  // TODO - Will lose state on page refresh
  const { product } = useLocation().state;
  const [productInfo, setProductInfo] = useState({});

  const getProductInfo = () => {
    setProductInfo(productDetailsData(product.id));
  };

  useEffect(() => {
    getProductInfo();
  }, [product]);

  const getFeatures = () => {
    return (
      <div css={detailsStyles.features}>
        <h3>FEATURES</h3>
        <p>{productInfo.description}</p>
      </div>
    );
  };

  const getBox = () => {
    return (
      <div css={detailsStyles.box}>
        <h3>IN THE BOX</h3>
        <ul>
          {productInfo.inTheBox.map((i) => (
            <ol key={i.item}>
              <span css={detailsStyles.textHighlight}>{i.quantity}</span>
              <span css={subTitle}>{i.item}</span>
            </ol>
          ))}
        </ul>
      </div>
    );
  };

  const getContent = () => {
    return (
      <>
        <p css={subTitle}>Go Back</p>
        <SideBySideLayout
          isImgLeft={true}
          content={
            <SideBySideLayoutTextContent
              title={<h2>{product.title}</h2>}
              product={product}
              buttonInfo={{
                text: "ADD TO CART",
                color: colors.white,
                bgColor: colors.orange,
              }}
            />
          }
          imgurl={product.imgUrl}
          imgDimension={{ height: "560px", width: "538px" }}
        ></SideBySideLayout>
        {productInfo && Object.keys(productInfo).length > 0 && (
          <div>
            <div css={detailsStyles.about}>
              {getFeatures()}
              {getBox()}
            </div>
            <div css={spacer("7rem")}/>
            <Gallery imgs={productInfo.gallery} />
            <Recommendations products={productInfo.recommendations} />
          </div>
        )}
        <ProductCards />
      </>
    );
  };

  return (
    <>
      <Layout heroSection={<NavBar />} content={getContent()} />
    </>
  );
}

const detailsStyles = {
  about: css({
    display: "flex",
    justifyContent: "space-between",
  }),
  features: css({
    display: "flex",
    width: "55%",
    flexDirection: "column",
    p: subTitle,
  }),
  box: css({
    display: "flex",
    width: "35%",
    flexDirection: "column",
    ul: { padding: "0" },
    ol: { padding: "0" },
  }),
  textHighlight: css({
    color: colors.orange,
    marginRight: "2rem",
  }),
};
