import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolios } from '../mock';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Karya Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat beberapa project yang telah kami kerjakan dengan hasil yang memuaskan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolios.map((portfolio) => (
            <Card 
              key={portfolio.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-violet-200 cursor-pointer"
              onClick={() => window.open(portfolio.link, '_blank')}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={portfolio.image} 
                  alt={portfolio.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-violet-100 text-violet-700">{portfolio.category}</Badge>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                  {portfolio.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;