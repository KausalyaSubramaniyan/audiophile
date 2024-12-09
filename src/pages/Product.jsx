import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import ProductCards from "../components/ProductCards";
import ProductHeroSection from "../components/ProductHeroSection";
import SideBySideLayout from "../components/SideBySideLayout";
import SideBySideLayoutTextContent from "../components/SideBySideLayoutTextContent";
import Button from "../components/Button";
import Spacer from "../components/Spacer";
import Spinner from "../components/Spinner";
import { css } from "@emotion/react";
import { centerAlign, mediaQuery } from "../styles/CommonStyles";
import { useGetProductsByCategoryQuery } from "../data/services/ProductApi";

export default function Product({ name }) {
  const navigate = useNavigate();

  const { isLoading, data: products } = useGetProductsByCategoryQuery(name);

  const getContent = () => {
    if (isLoading) {
      return (
        <div css={centerAlign}>
          <Spinner />
        </div>
      );
    }
    return products.map((product) => (
      <div css={styles.layoutContainer} key={product.id}>
        <SideBySideLayout
          isImgLeft={product.id % 2 === 1 ? false : true}
          content={
            <SideBySideLayoutTextContent
              title={<h2 css={styles.title}>{product.title}</h2>}
              tag={product.tag}
              description={product.description}
              children={
                <Button
                  onClick={() => {
                    navigate(`/products/${name}/${product.id}`);
                  }}
                >
                  SEE PRODUCT
                </Button>
              }
            />
          }
          imgUrls={product.imgUrls}
        />
      </div>
    ));
  };

  return (
    <>
      <Layout
        heroSection={<ProductHeroSection product={name.toUpperCase()} />}
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
    [mediaQuery["lg"]]: {
      height: "45rem",
    },
  }),
  title: css({
    [mediaQuery["lg"]]: {
      width: "50%",
    },
    [mediaQuery["lg"]]: {
      width: "70%",
    },
  }),
};
