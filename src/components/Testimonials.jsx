import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { testimonials } from '../mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-100">Testimoni</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-shadow border-2 hover:border-pink-200">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-pink-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.comment}</p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;