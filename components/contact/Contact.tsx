import { Button } from "@@//@ui/button/Button";
import { ErrorMsg, Input } from "@@//@ui/input/Input";
import { Container } from "@@//@ui/section-container/Container";
import { Subtitle } from "@@//@ui/titles/Subtitle";
import { IconMailForward } from "@tabler/icons-react";
import { useFormik } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";
const styles = {
  base: "rounded-lg border-transparent flex-1 appearance-none border w-full py-2 px-3.5 bg-white text-gray-700  shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent ",
  state: {
    normal: " placeholder-gray-400 border-gray-300 focus:ring-purple-600 ",
    error: " border-red-600 focus:ring-red-600 ",
    valid: " border-green-600 focus:ring-green-600 ",
    disabled: " cursor-not-allowed bg-gray-100 shadow-inner text-gray-400 ",
  },
};

export const Contact = () => {
  const {
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleReset,
    values,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("El nombre es un campo requerido"),
      email: Yup.string()
        .email("Ingrese un email valido.")
        .required("El email es un campo requerido"),
      message: Yup.string().required(
        "El mensaje de la consulta es un campo requerido"
      ),
    }),
    onSubmit: (e) => alert(e.name + "-" + e.email + e.message),
  });

  return (
    <Container id="contact">
      <>
        <Subtitle subtitle="Contacto" />

        <div className="flex flex-col gap-5 w-full">
          <form className="my-5" onSubmit={handleSubmit}>
            <div className="my-2">
              <Input
                onBlur={handleBlur}
                id="name"
                name="name"
                label="Nombre"
                type="text"
                onChange={handleChange}
                error={touched.name && errors.name ? true : false}
                errorMsg={touched.name && errors.name ? errors.name : ""}
                valid={touched.name && !errors.name ? true : false}
              />
            </div>
            <div className="my-2">
              <Input
                onBlur={handleBlur}
                id="email"
                name="email"
                label="Email"
                type="text"
                onChange={handleChange}
                error={touched.email && errors.email ? true : false}
                valid={touched.email && !errors.email ? true : false}
                errorMsg={touched.email && errors.email ? errors.email : ""}
              />
            </div>

            <div className="my-2">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                id="message"
                name="message"
                label="Consulta"
                type="textarea"
                error={touched.message && errors.message ? true : false}
                valid={touched.message && !errors.message ? true : false}
                errorMsg={
                  touched.message && errors.message ? errors.message : ""
                }
              />
            </div>
            <div>
              <Button variant="filled" width="full">
                <div className="flex justify-center align-center items-center gap-1">
                  <span>Enviar</span>
                </div>
              </Button>
            </div>
          </form>
        </div>
      </>
    </Container>
  );
};
