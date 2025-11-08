import React from 'react';
import { Badge } from './ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs } from '../mock';

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge className="mb-4 text-orange-700 bg-orange-100 hover:bg-orange-100">FAQ</Badge>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={`item-${faq.id}`}
              className="px-6 transition-colors border-2 rounded-xl hover:border-indigo-200"
            >
              <AccordionTrigger className="font-semibold text-left text-gray-900 hover:text-indigo-600 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;