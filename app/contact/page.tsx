"use client"

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
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

    console.log("Form submitted:", formData)

    setTimeout(() => {
      setIsSubmitting(false)
      alert(
        "Thank you for your message! We'll get back to you soon. (Demo only — submission not connected) 🚀"
      )
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1500)
  }

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
            Have questions or want to get involved? We&apos;d love to hear from you.
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
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-black mb-2 block">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-black/20 focus:border-[#FFB6D9]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-black mb-2 block">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-black/20 focus:border-[#FFB6D9]"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-black mb-2 block">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-black/20 focus:border-[#FFB6D9]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-black mb-2 block">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={handleChange}
                      className="border-black/20 focus:border-[#FFB6D9] min-h-[150px]"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full py-6 text-white hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: '#FFB6D9', color: '#000000' }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-black/10">
              <CardHeader>
                <CardTitle className="text-black">Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 mt-1" style={{ color: '#FFB6D9' }} />
                  <div>
                    <p className="text-sm text-black/60">Email</p>
                    <a
                      href="mailto:contact@ellasfoundation.org"
                      className="text-black hover:underline"
                    >
                      contact@ellasfoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 mt-1" style={{ color: '#FFB6D9' }} />
                  <div>
                    <p className="text-sm text-black/60">Phone</p>
                    <a href="tel:+18035551234" className="text-black hover:underline">
                      (803) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin
                    className="h-5 w-5 mt-1"
                    style={{ color: "#FFB6D9" }}
                  />
                  <div>
                    <p className="text-sm text-black/60">Location</p>
                    <p className="text-black">Columbia, SC</p>
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
                  We typically respond within 24–48 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-black/10">
              <CardHeader>
                <CardTitle className="text-black">Support Our Work</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href="/get-involved"
                  className="block text-center bg-black text-white py-2 rounded-lg hover:bg-black/90 transition-colors text-sm"
                >
                  Get Involved
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
