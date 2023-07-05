import { Container } from "reactstrap";
import styles from "./style.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <img
          src="/logoGrasi&Mary.png"
          alt="logoFooter"
          className={styles.footerLogo}
        />
        <Link href="/" target={"blank"} className={styles.footerLink}>
          Brechozice
        </Link>
      </div>
      <Container className={styles.footerDev}>
        <a
          href="https://www.linkedin.com/in/tiago-duarte-7101831b7/"
          target={"blank"}
          className={styles.footerLinkDev}
        >
          by: Tiago Duarte
        </a>
      </Container>
    </>
  );
};
export default Footer;
