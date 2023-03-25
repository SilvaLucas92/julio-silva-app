import { Input } from "@@//@ui/input/Input";
import { Text } from "@@//@ui/paragraps/Text";
import { Container } from "@@//@ui/section-container/Container";
import { Subtitle } from "@@//@ui/titles/Subtitle";
import { Title } from "@@//@ui/titles/Title";
import { useFormik } from "formik";
import * as Yup from "yup";
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
      email: Yup.string().email().required("El email es un campo requerido"),
      message: Yup.string().required(
        "El mensaje de la consulta es un campo requerido"
      ),
    }),
    onSubmit: (e) => console.log(e),
  });

  console.log(values, errors, touched);
  return (
    <Container id="contact">
      <>
        <Subtitle subtitle="Contacto" />

        <div className="flex flex-col gap-5 w-full">
          <form className="my-5">
            <div className="my-2">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                id="name"
                name="name"
                label="Nombre"
                type="text"
                error={touched.name && errors.name}
              />
              {touched.name && errors.name && (
                <div>
                  <p className="text text-red-600">{errors.name}</p>
                </div>
              )}
            </div>
            <div className="my-2">
              <Input
                onBlur={handleBlur}
                id="email"
                name="email"
                label="Email"
                type="text"
                onChange={handleChange}
                error={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <div>
                  <p className="text text-red-600">{errors.email}</p>
                </div>
              )}
            </div>

            <div className="my-2">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                id="message"
                name="message"
                label="Consulta"
                type="textarea"
                error={touched.message && errors.message}
              />
              {touched.message && errors.message && (
                <div>
                  <p className="text text-red-600">{errors.message}</p>
                </div>
              )}
            </div>
            <div>
              <button
                className="border border-b block w-full rounded-lg  py-2 px-3.5 my-2"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </>
    </Container>
  );
};
