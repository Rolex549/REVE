import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { question: "Are these earbuds specifically designed for women?", answer: "Yes! These earbuds are designed with a comfortable fit, lightweight design, and color options preferred by many women." },
    { question: "What makes these earbuds different from unisex options?", answer: "They offer a sleek aesthetic, compact case, softer ear tips, and a design that enhances long-time comfort." },
    { question: "How long does the battery last?", answer: "These earbuds offer up to 40 hours of total playback with fast charging support." },
    { question: "Are they sweat and water-resistant?", answer: "Yes! They come with IPX5 water resistance — suitable for workouts and light rain." },
    { question: "Do they work with both iPhone and Android?", answer: "Absolutely! They support seamless Bluetooth connectivity for both iOS and Android devices." },
    { question: "What's included in the box?", answer: "Earbuds, charging case, Type-C cable, extra ear tips, and user manual." },
    { question: "Is there a warranty?", answer: "Yes, they come with a 1-year replacement warranty against manufacturing defects." },
    { question: "Can I use just one earbud at a time?", answer: "Yes! Mono mode allows you to use either earbud separately." }
  ];

  return (
    <div className="w-full py-20 px-6 bg-gradient-to-b from-gray-50 via-purple-50 to-white">

      <h2 className="text-center text-4xl font-bold mb-10 text-gray-900">
        Have Questions? <span className="text-purple-600">We’ve Got Answers</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 transition-all hover:shadow-xl hover:-translate-y-1"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>

              <ChevronDown
                className={`transition-transform ${
                  open === index ? "rotate-180 text-purple-600" : "text-gray-600"
                }`}
              />
            </div>

            <div
              className={`mt-3 text-gray-600 text-sm transition-all overflow-hidden ${
                open === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      {/* CONTACT SUPPORT BOX */}
      <div className="max-w-lg mx-auto mt-16 bg-purple-50 border border-purple-200 p-10 rounded-2xl text-center shadow-sm">
        <p className="text-xl font-semibold text-gray-800 mb-2">
          Still having questions?
        </p>
        <p className="text-gray-600 mb-6">
          Our support team is here to help you anytime.
        </p>

        <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition shadow-lg">
          Contact Support
        </button>
      </div>
    </div>
    
  );
}
