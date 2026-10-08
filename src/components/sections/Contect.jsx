import { useState } from "react";
import TitleHeader from "../TitleHeader.jsx";
import ExpContent from "../ExpContent.jsx";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "../ui/text-reveal-card";
import { BackgroundBoxesDemo } from "../Models/TechLogos/BackgroundDemo.jsx";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    const recipientPhone = "916265343571";
    const text = `Hello Yash! 👋\n\n*New Inquiry from Website:*\n👤 *Name:* ${form.name.trim()}\n📧 *Email:* ${form.email.trim()}\n💬 *Message:* ${form.message.trim()}`;
    const targetUrl = `https://wa.me/${recipientPhone}?text=${encodeURIComponent(text)}`;

    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    // Open WhatsApp in a new tab/window
    const anchor = document.createElement("a");
    anchor.href = targetUrl;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Reset form after submit
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader sub="💬 Have questions or ideas? Let’s talk! 🚀" />

        <div className="flex items-center justify-center w-full max-w-full overflow-hidden px-2 sm:px-4">
          <TextRevealCard
            className="h-28 sm:h-36 w-full max-w-md sm:max-w-xl flex items-center justify-center"
            text="I Found You Intresting "
            revealText="Let's Connect  "
          />
        </div>

        <div className="grid-12-cols mt-10 md:mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-5 sm:p-8 md:p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 sm:gap-7"
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

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex flex-col gap-1.5 animate-fadeIn">
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Sending to WhatsApp (+91 6265343571)...</span>
                    </div>
                    <p className="text-neutral-300 text-xs">
                      If WhatsApp did not open automatically,{" "}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-emerald-400 font-bold hover:text-emerald-300"
                      >
                        click here to send message
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="bg-transparent w-full h-full rounded-3xl overflow-hidden">
              <ExpContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
