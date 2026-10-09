import React, { useState } from "react";
import TitleHeader from "../TitleHeader.jsx";
import ExpContent from "../ExpContent.jsx";
import { TextRevealCard } from "../ui/text-reveal-card";

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
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    <div className="flex-center section-padding">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <TitleHeader sub="💬 Have questions or ideas? Let’s talk! 🚀" />

        <div className="flex items-center justify-center w-full max-w-full overflow-hidden mt-4 sm:mt-6">
          <TextRevealCard
            className="w-full max-w-md sm:max-w-xl flex items-center justify-center"
            text="I Found You Interesting"
            revealText="Let's Connect"
          />
        </div>

        <div className="grid-12-cols mt-6 sm:mt-10 md:mt-14 items-stretch">
          <div className="xl:col-span-5">
            <div className="flex-center card-border bg-[#12131d] border border-white/10 rounded-2xl p-4 xs:p-5 sm:p-7 md:p-8 h-full">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4 sm:gap-5"
              >
                <div>
                  <label htmlFor="name">Your Name</label>
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
                    rows="4"
                    required
                  />
                </div>

                <button type="submit" className="w-full mt-1">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Send Message</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" width={20} height={20} />
                    </div>
                  </div>
                </button>

                {submitted && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span>Sending to WhatsApp (+91 6265343571)...</span>
                    </div>
                    <p className="text-neutral-300 text-xs">
                      If WhatsApp did not open automatically,{" "}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-emerald-400 font-bold hover:text-emerald-300 inline"
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

          <div className="xl:col-span-7">
            <div className="bg-transparent w-full h-full rounded-2xl overflow-hidden">
              <ExpContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

