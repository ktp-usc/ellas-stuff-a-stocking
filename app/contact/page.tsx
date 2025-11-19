import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement form submission to backend/email service
    // Options:
    // 1. EmailJS for client-side email sending
    // 2. Backend API endpoint to handle form submissions
    // 3. Third-party form service (Formspree, Netlify Forms, etc.)

    console.log("Form submitted:", formData);
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon. (This is a demo - form submission needs to be implemented)");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#FFE5F1] to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-black">Contact Us</h1>
          <p className="text-xl text-black/70">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="border-2" style={{ borderColor: '#FFB6D9' }}>
              <CardHeader>
                <CardTitle className="text-black flex items-center gap-2">
                  <Mail className="h-6 w-6" style={{ color: '#FFB6D9' }} />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-black/60">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-black mb-2 block">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-black/20 focus:border-[#FFB6D9]"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-black mb-2 block">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-black/20 focus:border-[#FFB6D9]"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <Label htmlFor="subject" className="text-black mb-2 block">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-black/20 focus:border-[#FFB6D9]"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-black mb-2 block">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      className="border-black/20 focus:border-[#FFB6D9] min-h-[150px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full py-6 text-white hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: '#FFB6D9', color: '#000000' }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Implementation Note for Developers */}
            <Card className="mt-6 border-black/10">
              <CardHeader>
                <CardTitle className="text-black text-sm">For Developers: Form Submission Options</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-black/70 space-y-2">
                <p>To implement form submission, consider these options:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li><strong>EmailJS:</strong> Simple client-side email service (<code className="bg-black/5 px-1 rounded">npm install @emailjs/browser</code>)</li>
                  <li><strong>Backend API:</strong> Create a backend endpoint to handle submissions and send emails</li>
                  <li><strong>Formspree:</strong> Third-party form backend service (no coding required)</li>
                  <li><strong>Netlify Forms:</strong> Built-in form handling if hosting on Netlify</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card className="border-black/10">
              <CardHeader>
                <CardTitle className="text-black">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#FFB6D9' }} />
                  <div>
                    <p className="text-sm text-black/60 mb-1">Email</p>
                    <a 
                      href="mailto:contact@ellasfoundation.org"
                      className="text-black hover:underline"
                    >
                      contact@ellasfoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#FFB6D9' }} />
                  <div>
                    <p className="text-sm text-black/60 mb-1">Phone</p>
                    <a 
                      href="tel:+18035551234"
                      className="text-black hover:underline"
                    >
                      (803) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#FFB6D9' }} />
                  <div>
                    <p className="text-sm text-black/60 mb-1">Location</p>
                    <p className="text-black">Columbia, South Carolina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black/10 bg-gradient-to-br from-[#FFE5F1] to-white">
              <CardHeader>
                <CardTitle className="text-black">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-black/70">
                  We typically respond to inquiries within 24-48 hours. Thank you for your patience!
                </p>
              </CardContent>
            </Card>

            <Card className="border-black/10">
              <CardHeader>
                <CardTitle className="text-black">Other Ways to Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-black/70">
                  Interested in volunteering or making a donation? Visit our Get Involved page to learn more.
                </p>
                <a
                  href="#/get-involved"
                  className="inline-block w-full text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors text-sm"
                >
                  Get Involved
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
