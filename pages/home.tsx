import Footer from "@/src/components/common/footer";
import HeaderAuth from "@/src/components/common/headerAuth";
import PageSpinner from "@/src/components/common/spinner";
import FavoriteProducts from "@/src/components/homeAuth/favoritesProducts";

import SlideSectionAuth from "@/src/components/homeAuth/slideSectionAuth";
import CardsSection from "@/src/components/homeNoAuth/cardsSection";

import productService, { ProductType } from "@/src/services/productService";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

interface IndexPageProps {
  chrildren: ReactNode;
  product: ProductType[];
}
const HomeAuth = ({ product }: IndexPageProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("G&M-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <Head>
        <title>G&M - Home</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <main>
        <div>
          <HeaderAuth />
        </div>

        <FavoriteProducts />
        <SlideSectionAuth newestProducts={product} />

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
export default HomeAuth;
