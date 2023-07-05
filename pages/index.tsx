import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";

import CardsSection from "@/src/components/homeNoAuth/cardsSection";
import SlideSection from "@/src/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import productService, { ProductType } from "@/src/services/productService";
import { ReactNode } from "react";

import Footer from "@/src/components/common/footer";

interface IndexPageProps {
  chrildren?: ReactNode;
  product: ProductType[];
}

const HomeNoAuth = ({ product }: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>Catálogo</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:title" content="Catálogo" key="title" />
        <meta
          name="description"
          content="Tenha acesso a produtos ótimos e com valores acessiveis "
        />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
        </div>

        <SlideSection newestProducts={product} />
        <CardsSection />
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await productService.getNewestProducts();
  return {
    props: {
      product: res.data,
    },
    revalidate: 3600 * 6,
  };
};

export default HomeNoAuth;
