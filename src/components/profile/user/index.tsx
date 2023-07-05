import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileServece from "@/src/services/profileService";
import ToastComponent from "../../common/toast";
import { useRouter } from "next/router";

const UserForm = () => {
  const router = useRouter();
  const [color, setColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [initialEmail, setInitialEmail] = useState("");

  useEffect(() => {
    profileServece.fetchCurrent().then((user) => {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setInitialEmail(user.email);
    });
  }, []);
  const handleUserUpdate = async function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await profileServece.userUpdate({
      firstName,
      lastName,
      email,
    });
    if (res === 200) {
      setToastIsOpen(true);
      setErrorMessage("Informações alteradas com sucesso!");
      setColor("bg-success");
      setTimeout(() => setToastIsOpen(false), 1000 * 4);
      if (email != initialEmail) {
        sessionStorage.clear();
        router.push("/");
      }
    } else {
      setToastIsOpen(true);
      setErrorMessage("Você não pode mudar para esse email");
      setColor("bg-danger");
      setTimeout(() => setToastIsOpen(false), 1000 * 4);
    }
  };
  return (
    <>
      <Form onSubmit={handleUserUpdate} className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.shortName}>
            {firstName.slice(0, 1)}
            {lastName.slice(0, 1)}
          </p>
          <p className={styles.userName}>{`${firstName} 
          ${lastName}`}</p>
        </div>
        <hr />

        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="firstName">
              NOME
            </Label>
            <Input
              name="firstName"
              type="text"
              id="firstaName"
              placeholder="Qual seu primeiro nome?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="lastName">
              SOBRENOME
            </Label>
            <Input
              name="lastName"
              type="text"
              id="firstaName"
              placeholder="Qual seu último nome?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for="email">
              EMAIL
            </Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Coloque o seu email"
              required
              maxLength={40}
              className={styles.input}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </FormGroup>
          <Button type="submit" outline className={styles.formBtn}>
            Salvar Alterações
          </Button>
        </div>
      </Form>
      <ToastComponent
        color={color}
        isOpen={toastIsOpen}
        message={errorMessage}
      />
    </>
  );
};

export default UserForm;
