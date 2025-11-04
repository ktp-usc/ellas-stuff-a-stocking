import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { DollarSign, Gift, Heart, QrCode, Smartphone, Users } from "lucide-react";
//import eventImage from "figma:asset/1b2287fa386856a39cf2451acc2e82846b4b888b.png";
import Link from "next/link";

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#FFE5F1] to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-black">Get Involved</h1>
          <p className="text-xl text-black/70">
            Your support helps us honor Ella's legacy and make a real difference in our community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Donation Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-black">Make a Donation</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Your generous donations help us support families in need and promote safe driving awareness. Every contribution makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Venmo Card */}
            <Card className="border-2" style={{ borderColor: '#FFB6D9' }}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFE5F1' }}>
                    <Smartphone className="h-8 w-8" style={{ color: '#FFB6D9' }} />
                  </div>
                </div>
                <CardTitle className="text-black">Donate via Venmo</CardTitle>
                <CardDescription className="text-black/60">
                  Quick and easy donations through Venmo
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-[#FFE5F1] rounded-xl p-8 mb-6">
                  <div className="bg-white rounded-lg p-6 inline-block mb-4">
                    <QrCode className="h-32 w-32" style={{ color: '#FFB6D9' }} />
                  </div>
                  <p className="text-sm text-black/60 mb-2">Scan QR code to donate</p>
                  <p className="text-black/80">Or search for:</p>
                  <p className="text-xl mt-2 text-black" style={{ color: '#FFB6D9' }}>@EllasFoundation</p>
                </div>
                <a
                  href="https://venmo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#FFB6D9', color: '#000000' }}
                >
                  Open Venmo
                </a>
              </CardContent>
            </Card>

            {/* Why Donate Card */}
            <Card className="border-black/10">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFE5F1' }}>
                    <Heart className="h-8 w-8" style={{ color: '#FFB6D9' }} />
                  </div>
                </div>
                <CardTitle className="text-black text-center">Your Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black/70 mb-6 text-center">
                  Your donations directly support:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFB6D9' }}></span>
                    <span className="text-black/80">Purchasing gifts and necessities for families during Ella's Stuff a Stocking</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFB6D9' }}></span>
                    <span className="text-black/80">Safe driving awareness campaigns and educational materials</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFB6D9' }}></span>
                    <span className="text-black/80">Gift wrapping supplies and delivery coordination</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFB6D9' }}></span>
                    <span className="text-black/80">Administrative costs to keep the foundation running</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-black">Volunteer With Us</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Be part of something special. We have various volunteer opportunities throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                //src={eventImage}
                alt="Gift wrapping volunteers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXRhYmxlJTIwZ2l2aW5nJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NTkyNjE1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Volunteers helping"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-black/10">
              <CardHeader>
                <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                  <Gift className="h-6 w-6" style={{ color: '#FFB6D9' }} />
                </div>
                <CardTitle className="text-black">Gift Wrapping Sessions</CardTitle>
                <CardDescription className="text-black/60">
                  Join us during mid-December to help wrap gifts for families. No experience necessary – just bring your enthusiasm and holiday spirit!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-black/10">
              <CardHeader>
                <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                  <Users className="h-6 w-6" style={{ color: '#FFB6D9' }} />
                </div>
                <CardTitle className="text-black">Gift Delivery</CardTitle>
                <CardDescription className="text-black/60">
                  Help deliver wrapped gifts to families. This is a rewarding opportunity to see the direct impact of your efforts and bring joy to families.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-black/10">
              <CardHeader>
                <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                  <Heart className="h-6 w-6" style={{ color: '#FFB6D9' }} />
                </div>
                <CardTitle className="text-black">Event Support</CardTitle>
                <CardDescription className="text-black/60">
                  Assist with event planning, coordination, and execution. Help us organize awareness campaigns and community outreach initiatives.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Contact/Next Steps */}
        <div className="bg-gradient-to-br from-[#FFB6D9] to-[#FFE5F1] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl mb-4 text-black">Ready to Get Involved?</h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Whether you're interested in volunteering, making a donation, or partnering with us, we'd love to hear from you. Together, we can make a lasting impact in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@ellasfoundation.org"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://venmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white px-8 py-3 rounded-lg hover:bg-white/90 transition-colors"
              style={{ color: '#000000' }}
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}