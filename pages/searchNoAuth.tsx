import styles from "../styles/search.module.scss";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import productService, { ProductType } from "@/src/services/productService";
import { Container } from "reactstrap";
import NewCard from "@/src/components/common/card";
import Footer from "@/src/components/common/footer";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";

const Search = () => {
  const router = useRouter();
  const searchName: any = router.query.name;
  const [searchResult, setSearchResult] = useState<ProductType[]>([]);

  const searchProducts = async () => {
    const res = await productService.getSearch(searchName);

    setSearchResult(res.data.products);
  };
  useEffect(() => {
    searchProducts();
  }, [searchName]);

  return (
    <>
      <Head>
        <title> G&M - {searchName}</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div>
          <HeaderNoAuth />
        </div>

        {searchResult.length >= 1 ? (
          <div className={styles.searchContainer}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
              {searchResult?.map((product) => (
                <div key={product.id}>
                  <NewCard product={product} />
                </div>
              ))}
            </Container>
          </div>
        ) : (
          <div className={styles.searchContainer}>
            <p className={styles.noSearchResult}>
              Nenhum resultado encontrado!
            </p>
          </div>
        )}
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
};
export default Search;
