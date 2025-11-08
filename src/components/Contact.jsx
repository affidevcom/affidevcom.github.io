import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, kami akan segera menghubungi Anda.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/6289509952003?text=Halo%20Affidev%2C%20saya%20ingin%20konsultasi', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge className="mb-4 text-indigo-700 bg-indigo-100 hover:bg-indigo-100">Hubungi Kami</Badge>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Mari Wujudkan Project Anda
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Tim kami siap membantu mewujudkan ide Anda menjadi solusi digital yang powerful
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <Card className="transition-shadow border-2 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">Telepon</h3>
                    <a href="tel:+6289509952003" className="text-indigo-600 hover:underline">
                      +62 895-0995-2003
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow border-2 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl">
                    <Mail className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">Email</h3>
                    <a href="mailto:mail@affidev.com" className="text-violet-600 hover:underline">
                      mail@affidev.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow border-2 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">Lokasi</h3>
                    <p className="text-gray-600">Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleWhatsApp}
              className="w-full py-6 text-lg text-white bg-green-600 hover:bg-green-700"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat via WhatsApp
            </Button>
          </div>

          <Card className="border-2 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Nama Lengkap</label>
                    <Input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Nomor WhatsApp</label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08xx-xxxx-xxxx"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Pesan</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan project Anda..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;