import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import contactImg from "../assets/contactL.json";
const Contact = () => {
  const [success, setSuccess] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("");
    emailjs
      .sendForm(
        "service_vr03iuf",
        "template_hqi9coq",
        form.current,
        "kHLS_4FnHkwhAgCMd"
      )
      .then(
        (result) => {
          setSuccess("Send Message Successful!");
          e.target.reset();
        },
        (error) => {}
      );
  };
  return (
    <div className="md:flex gap-3 py-10 md:justify-between">
      <Lottie animationData={contactImg} loop={true} />
      <div className="w-full bg-blue-300 p-5 md:p-8 rounded-md">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex w-full flex-col gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required={true}
              shadow={true}
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              name="message"
              placeholder="Leave a comment..."
              required={true}
              rows={4}
            />
          </div>
          <p className="">
            <small className="text-green-500 font-medium">{success}</small>
          </p>
          <Button className="w-[50%]" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
