import { useState } from "react";

import TitleHeader from "../TitleHeader.jsx";
import ExpContent from "../expContent.jsx";
import { TextHoverEffect } from "../ui/text-hover-effect.js";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card.js";
import { BackgroundBoxesDemo } from "../Models/TechLogos/BackgroundDemo.jsx";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    // Reset form after submit
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader sub="💬 Have questions or ideas? Let’s talk! 🚀" />

        <div className="flex w-full min-w-0 items-center justify-center overflow-hidden px-2 sm:px-4">
          <TextRevealCard
            className="
      flex items-center justify-center
      h-32 w-full max-w-[320px]
      sm:h-36 sm:max-w-[420px]
      md:h-40 md:max-w-[500px]
      lg:max-w-[40rem]
    "
            text="I Found You Interesting"
            revealText="Let's Connect"
          />
        </div>

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border min-w-0 rounded-xl p-5 sm:p-8">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Send Message</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="min-h-72 min-w-0 xl:col-span-7 xl:min-h-96">
            <div className="h-full min-w-0 overflow-hidden rounded-3xl bg-transparent">
              <ExpContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
