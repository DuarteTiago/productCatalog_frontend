import styles from "../../styles/productPage.module.scss";
import HeaderAuth from "@/src/components/common/headerAuth";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import productService, { ProductType } from "@/src/services/productService";
import { Button, Col, Container } from "reactstrap";

import Footer from "@/src/components/common/footer";
import PageSpinner from "@/src/components/common/spinner";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [favorited, setFavorited] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("G&M-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  const getProduct = async () => {
    if (typeof id !== "string") return;

    const res = await productService.getProduct(id);

    if (res.status === 200) {
      setProduct(res.data);
      setFavorited(res.data.favorited);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleFavProduct = async () => {
    if (typeof id !== "string") return;
    if (favorited === true) {
      await productService.removeFav(id);
      setFavorited(false);
    } else {
      await productService.addToFav(id);
      setFavorited(true);
    }
  };
  if (product === undefined) return <PageSpinner />;
  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <Head>
        <title>G&M - {product?.name}</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
        <Container className={styles.pageProduct}>
          <Col>
            <img
              src={`${process.env.NEXT_PUBLIC_BASEURL}/${product?.productImage}`}
              alt={product?.name}
              className={styles.productImg}
            />
          </Col>
          <Col>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product?.name} </p>
              <p className={styles.productDescription}>
                {product?.description}
              </p>
              <p className={styles.productCode}>Cod: {product?.productCode}</p>
              <p className={styles.productPrice}>R$: {product?.productPrice}</p>
            </div>
            <div className={styles.interations}>
              <Button className={styles.cardBtn}>Comprar</Button>
              {favorited === false ? (
                <img
                  className={styles.likeIcon}
                  src="/like.svg"
                  alt="likeImage"
                  onClick={handleFavProduct}
                />
              ) : (
                <img
                  className={styles.likeIcon}
                  src="/liked.svg"
                  alt="likedImage"
                  onClick={handleFavProduct}
                />
              )}
            </div>
          </Col>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default ProductPage;
