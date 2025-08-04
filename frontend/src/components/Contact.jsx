import React, { useState } from "react";
import { mockData } from "../data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { contact } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Github": return <Github size={20} />;
      case "Linkedin": return <Linkedin size={20} />;
      case "Mail": return <Mail size={20} />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            {contact.title}
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-mono text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {contact.description}
              </p>
              <div className="text-red-500 font-mono text-sm">
                {contact.availability}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-white font-mono text-sm">Email</div>
                  <div className="text-gray-400">{contact.email}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center">
                  <Phone className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-white font-mono text-sm">Phone</div>
                  <div className="text-gray-400">{contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-white font-mono text-sm">Location</div>
                  <div className="text-gray-400">{contact.location}</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              {contact.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 group"
                >
                  <span className="text-red-500 group-hover:text-white">
                    {getIcon(link.icon)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900 border-red-500/20">
            <CardHeader>
              <CardTitle className="text-xl font-mono text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black border-red-500/20 text-white placeholder:text-gray-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black border-red-500/20 text-white placeholder:text-gray-500 focus:border-red-500"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-black border-red-500/20 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-black border-red-500/20 text-white placeholder:text-gray-500 focus:border-red-500 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-mono"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
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