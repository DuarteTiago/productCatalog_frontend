import { ProductType } from "@/src/services/productService";
import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import Link from "next/link";

interface props {
  newestProducts: ProductType[];
}
const SlideSectionAuth = ({ newestProducts }: props) => {
  return (
    <>
      <Container className="d-flex flex-column">
        <div className={styles.sectionSlide}>
          <p className={styles.sectionTitle}>Produtos recentes</p>
          <SlideComponent product={newestProducts} />
          <Link href="https://api.whatsapp.com/send?phone=5548984589424&text=Olá, gostaria de saber sobre alguns produtos.">
            <Button outline color="light" className={styles.slideSectionBtn}>
              Comprar já
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default SlideSectionAuth;
