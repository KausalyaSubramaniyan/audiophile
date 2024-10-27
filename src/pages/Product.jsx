import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { productData } from "../data/mock/mock";

import Layout from "../components/Layout";
import ProductCards from "../components/ProductCards";
import ProductHeroSection from "../components/ProductHeroSection";
import SideBySideLayout from "../components/SideBySideLayout";
import SideBySideLayoutTextContent from "../components/SideBySideLayoutTextContent";
import Button from "../components/Button";
import Spacer from "../components/Spacer";
import { css } from "@emotion/react";
import { mediaQuery } from "../styles/CommonStyles";

export default function Product({ name }) {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    setProducts(productData(name));
  };

  useEffect(() => {
    getProducts();
  }, [window.location.pathname]);

  // TODO - See whether product should be sent instead of individual props
  const getContent = () => {
    const navigate = useNavigate();

    return products.map((product) => (
      <div css={styles.layoutContainer} key={product.id}>
        <SideBySideLayout
          isImgLeft={product.id % 2 === 1 ? false : true}
          content={
            <SideBySideLayoutTextContent
              title={<h2 css={styles.title}>{product.title}</h2>}
              tag={product.tag}
              description={product.description}
              suffix={
                <Button
                  onClick={() => {
                    navigate(`/product/${name.toLowerCase()}/${product.id}`, {
                      state: { product },
                    });
                  }}
                >
                  SEE PRODUCT
                </Button>
              }
            />
          }
          imgUrls={product.imgUrls}
          imgDimension={{ height: "560px", width: "538px" }}
        />
      </div>
    ));
  };

  return (
    <>
      <Layout
        heroSection={<ProductHeroSection product={name} />}
        content={
          <>
            {getContent()}
            <Spacer value="7rem" />
            <ProductCards />
          </>
        }
      />
    </>
  );
}

const styles = {
  layoutContainer: css({
    marginTop: "10rem",
    height: "38rem",
    [mediaQuery[2]]: {
      height: "45rem",
    },
  }),
  title: css({
    [mediaQuery[2]]: {
      width: "50%",
    },
    [mediaQuery[2]]: {
      width: "70%",
    },
  }),
};
