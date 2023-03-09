import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { SectionWrapper } from "../hoc";
import { yupResolver } from "@hookform/resolvers/yup";

import emailjs from "@emailjs/browser";

const templateId = "template_scgok8x";
const serviceId = "service_pqh319b";
const publicKey = "HwdkZL08dd0ah-uIZ";

import { styles } from "../style";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import clsx from "clsx";
import { toast, ToastContainer } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("please insert your name"),
  email: yup
    .string()
    .email("please insert a valid email address")
    .required("please insert your email"),
  message: yup.string().required("please write your message here."),
});
type FormData = yup.InferType<typeof schema>;

interface InputProps {
  registerObj: UseFormRegisterReturn;
  label: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  textarea?: boolean;
  className?: string;
  rows?: number;
}
const Input = (props: InputProps) => {
  const InputText = props.textarea ? "textarea" : "input";

  return (
    <label htmlFor={props.id} className="flex flex-col">
      <span className="font-medium mb-4">{props.label}</span>
      <InputText
        type={props.type}
        {...props.registerObj}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className={clsx(
          "bg-tertiary px-6 py-4 rounded-lg placeholder:text-secondary outline-none order-none",
          props.className
        )}
        rows={props.rows}
      />
    </label>
  );
};

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          to_name: "Luan Otávio",
          from_email: data.email,
          to_email: "work.luansilva@gmail.com",
          message: data.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);

          toast("Thank You. I will get back to you as soon as possible.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "dark",
          });

          reset();
        },
        (error) => {
          setLoading(false);
          console.log(error);

          toast("Something went wrong", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "dark",
          });

          reset();
        }
      );

    setLoading(false);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <Input
            id="name"
            name="name"
            placeholder="What's your name?"
            type="text"
            label="Your name"
            registerObj={register("name")}
          />

          <Input
            id="email"
            name="email"
            placeholder="What's your email address?"
            type="email"
            label="Your email address"
            registerObj={register("email")}
          />

          <Input
            id="message"
            name="message"
            placeholder="What do you want to say?"
            type="text"
            label="Your message"
            registerObj={register("message")}
            textarea
            rows={7}
            className="py-6 resize-none"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
