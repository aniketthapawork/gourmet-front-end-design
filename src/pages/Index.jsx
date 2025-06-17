
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuCategories = [
    { id: 'all', name: 'All' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const featuredItems = [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy arborio rice with black truffle, parmesan, and wild mushrooms",
      price: "$32",
      category: "mains",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 2,
      name: "Seared Scallops",
      description: "Pan-seared scallops with cauliflower purée and pancetta",
      price: "$28",
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400&h=300&fit=crop",
      rating: 4.8
    },
    {
      id: 3,
      name: "Chocolate Soufflé",
      description: "Classic French soufflé with vanilla bean ice cream",
      price: "$16",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 4,
      name: "Wagyu Beef Tenderloin",
      description: "Grade A5 wagyu with roasted vegetables and red wine reduction",
      price: "$85",
      category: "mains",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      rating: 5.0
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? featuredItems 
    : featuredItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Lumière
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            Where culinary artistry meets exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              Make Reservation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Signature Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our chef's carefully crafted selections that define fine dining
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="px-6 py-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-amber-600">
                  <Star className="w-3 h-3 mr-1" />
                  {item.rating}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                  <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Founded in 2015, Lumière has been dedicated to creating extraordinary 
                dining experiences that celebrate the art of fine cuisine. Our award-winning 
                chef combines traditional techniques with innovative flavors.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">8+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">15k+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">5</div>
                  <div className="text-sm text-gray-400">Star Rating</div>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop"
                alt="Chef at work"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                123 Gourmet Street<br />
                Downtown District<br />
                New York, NY 10001
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">
                Mon-Thu: 5:00 PM - 10:00 PM<br />
                Fri-Sat: 5:00 PM - 11:00 PM<br />
                Sun: 4:00 PM - 9:00 PM
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">
                Phone: (555) 123-4567<br />
                Email: info@lumiere.com<br />
                Reservations: book@lumiere.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
