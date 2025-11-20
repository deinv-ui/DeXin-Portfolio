import React, { useRef, type FormEvent, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import Button from "../Button";
import { useToastStore } from "../../stores/toastStore";

const contactMethods = [
  {
    icon: MdOutlineEmail,
    title: "Email",
    info: "tanx3406@gmail.com",
    link: "mailto:tanx3406@gmail.com",
  },
  {
    icon: RiWhatsappLine,
    title: "WhatsApp",
    info: "+60 132724010",
    link: "https://api.whatsapp.com/send?phone=60132724010",
  },
];

const Contact: React.FC = () => {
  const toast = useToastStore.getState();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const formEndpoint = "https://formspree.io/f/mblwdbkk";

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    const formData = new FormData(formRef.current);

    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        toast.showToast("Message sent successfully!", "success");
        formRef.current.reset();
      } else {
        setStatus("error");
        toast.showToast("Something went wrong. Please try again.", "error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-12 bg-bg text-text">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <h5 className="text-sm text-light uppercase tracking-wider mb-2">
            Get In Touch
          </h5>
          <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center">
            Contact Me
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Methods */}
          <div className="flex-1 flex flex-col gap-6">
            {contactMethods.map(({ icon: Icon, title, info, link }, idx) => (
              <div
                key={idx}
                className="bg-bg-variant p-6 rounded-xl text-center border border-transparent hover:bg-transparent hover:border-primary transition-all duration-300"
              >
                <Icon className="text-primary text-3xl mb-2 inline-block" />
                <h4 className="text-lg font-medium text-white">{title}</h4>
                <p className="text-sm text-light mb-2">{info}</p>
                <a
                  href={link}
                  className="text-sm text-primary hover:underline transition"
                >
                  Send a message
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendForm}
            className="flex-1 bg-bg rounded-2xl shadow-md flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-3 rounded-md border-2 border-primary bg-white text-bg text-sm focus:outline-none focus:border-secondary hover:bg-gray-100 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-md border-2 border-primary bg-white text-bg text-sm focus:outline-none focus:border-secondary hover:bg-gray-100 transition"
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-md border-2 border-primary bg-white text-bg text-sm resize-none focus:outline-none focus:border-secondary hover:bg-gray-100 transition"
            />

            <Button
              type="submit"
              variant="primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
