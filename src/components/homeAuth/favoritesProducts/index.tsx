import useSWR from "swr";
import styles from "../../../../styles/slideProducts.module.scss";
import productService from "@/src/services/productService";
import SlideComponent from "../../common/slideComponent";
import { Container } from "reactstrap";
import PageSpinner from "../../common/spinner";

const FavoriteProducts = () => {
  const { data, error } = useSWR("/favorites", productService.getFavProducts);

  if (error) return error;
  if (!data) {
    return (
      <>
        <PageSpinner />
      </>
    );
  }

  return (
    <>
      <Container>
        <p className={styles.sectionTitle}>Meus produtos favoritos</p>

        {data.data.products.length >= 1 ? (
          <SlideComponent product={data.data.products} />
        ) : (
          <p className="text-center pt-5 pb-5 h5">
            <strong>Desculpe, você ainda não possui produtos favoritos!</strong>{" "}
          </p>
        )}
      </Container>
    </>
  );
};
export default FavoriteProducts;
