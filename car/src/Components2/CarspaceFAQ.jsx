import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "How flexible are Carspace's membership plans?",
    answer: "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
  },
  {
    question: "What kind of events and networking opportunities does Carspace provide?",
    answer: "",
  },
  {
    question: "Can I tour the Carspace before committing to a membership?",
    answer: "",
  },
  {
    question: "Is Carspace suitable for remote teams and distributed workforces?",
    answer: "",
  },
  {
    question: "What measures does Carspace take for environmental sustainability?",
    answer: "",
  },
  {
    question: "Still have questions?",
    answer: "",
  },
];

const CarspaceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-12 gap-10 shadow-2xl bg-white rounded-lg">
      
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">
          <span className="border-l-4 border-red-500 pl-2">Your Roadmap to</span> <br />
          <span className="font-bold">Carspace Clarity</span>
        </h2>
        <p className="text-gray-600 text-sm">
          Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call
          to action, they may still have questions (doubts) that can be answered.
        </p>
      </div>

   
      <div className="md:w-1/2 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-md">{item.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {openIndex === index && item.answer && (
              <p className="text-gray-600 mt-2 text-sm">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarspaceFAQ;
