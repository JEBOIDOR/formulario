import "./Form.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { formRequest } from "../../api/auth.js";
import { Icon } from "@iconify/react";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const form = useRef();

  const sendEmail = (event) => {
    emailjs
      .sendForm(
        "service_gyo6vkv",
        "template_d39tbv9",
        form.current,
        "DQB3WWpuCXUlIdI_a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = handleSubmit(async (values) => {
    sendEmail(values);
    const res = await formRequest(values);
    console.log(res);
  });

  return (
    <div id="form-container">
      <h1 className="form-tittle">Get in touch</h1>
      <form onSubmit={onSubmit} className="form" ref={form}>
        <input
          name="name"
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <Icon
          icon="mdi:user"
          width="20"
          height="20"
          id="user-icon"
          className="input-icon"
        />
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <Icon
          icon="material-symbols:mail"
          width="20"
          height="20"
          id="mail-icon"
          className="input-icon"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="message"
          {...register("message", { required: true })}
        ></textarea>
        <Icon
          icon="ic:baseline-message"
          width="20"
          height="20"
          id="message-icon"
          className="input-icon"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
