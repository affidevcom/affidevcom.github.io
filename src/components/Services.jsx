import React from 'react';
import { Layout, Code, Mail, CreditCard, MessageCircle, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { services } from '../mock';

const iconMap = {
  Layout: Layout,
  Code: Code,
  Mail: Mail,
  CreditCard: CreditCard,
  MessageCircle: MessageCircle,
  Globe: Globe
};

const Services = () => {
  const handleConsultation = () => {
    window.open('https://wa.me/6289509952003?text=Halo%20Affidev%2C%20saya%20tertarik%20dengan%20layanan%20Anda', '_blank');
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">Layanan Kami</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solusi Digital Terlengkap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan web development profesional untuk membantu bisnis Anda berkembang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-indigo-200 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-indigo-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={handleConsultation}
                    variant="ghost" 
                    className="w-full group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Tidak menemukan yang Anda cari?</p>
          <Button 
            onClick={handleConsultation}
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
          >
            Konsultasi Custom Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;