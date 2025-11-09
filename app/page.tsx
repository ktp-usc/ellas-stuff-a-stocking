
"use client";
import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Calendar, Gift, Heart } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#FFE5F1] to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-black">Making a Difference in Our Community</h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Join us in supporting families in need and promoting safe driving awareness in Columbia, South Carolina.
          </p>
            <hr style={{ border: '1px solid black', width: '75%', margin: '40px auto' }} />
        </div>
      </div>

      {/* Main Event Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 text-black">Our Events</h2>
          <p className="text-lg text-black/70">
            Throughout the year, we organize events to support our mission and help families in need.
          </p>
        </div>

        {/* Stuff a Stocking - Featured Event */}
        <div className="mb-16 bg-gradient-to-br from-[#FFE5F1] to-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto">
              <ImageWithFallback
                src="/Images/Student Volunteers.jpg"
                
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="h-8 w-8" style={{ color: '#FFB6D9' }} />
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#FFB6D9', color: '#000000' }}>
                  Featured Event
                </span>
              </div>
              <h3 className="text-3xl mb-4 text-black">Ella's Stuff a Stocking</h3>
              <div className="flex items-center gap-2 mb-6 text-black/70">
                <Calendar className="h-5 w-5" />
                <span>Mid-December Annually</span>
              </div>
              <p className="text-black/80 mb-6 leading-relaxed">
                Our flagship event bringing joy to families during the holiday season. We partner with local elementary schools to identify financially unstable families and gather wish lists for children and their families.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-black/10">
                  <h4 className="mb-2 text-black">How It Works:</h4>
                  <ul className="space-y-2 text-black/70">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFB6D9' }}></span>
                      <span>We reach out to local elementary schools to identify families in need</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFB6D9' }}></span>
                      <span>Gather wish lists of presents and necessities from children and families</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFB6D9' }}></span>
                      <span>Participating schools "adopt" a family</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFB6D9' }}></span>
                      <span>Students bring in gifts, wrap them with care, and we deliver them to families</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Quote Section */}
        <div className="mb-16 bg-[#FFB6D9] rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-0 items-center h-56">
            <div className="flex items-center justify-center p-4">
              <a href="https://lexingtonsc.org/community-event/ellas-stuff-a-stocking-at-river-bluff-high-school" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full max-w-[500px] h-48 relative">
                <ImageWithFallback
                  src="/Images/LexRich_Article.png"
                  alt="LexRich Article"
                  className="w-full h-full object-contain hover:opacity-90 transition-opacity rounded-xl"
                />
              </a>
            </div>
            <div className="p-6 md:p-8 h-full flex items-center">
              <p className="text-black text-base md:text-lg font-semibold leading-snug italic">
                "Over the past 11 years, Ella's Stuff A Stocking has profoundly impacted the magic of the holiday season for numerous children who might otherwise go without. The program reflects the compassion, unity, and generosity that defines the River Bluff High School community."
              </p>
            </div>
          </div>
        </div>

        {/* Additional Events/Activities */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-black/10">
            <CardHeader>
              <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                <Heart className="h-6 w-6" style={{ color: '#FFB6D9' }} />
              </div>
              <CardTitle className="text-black">Safe Driving Campaigns</CardTitle>
              <CardDescription className="text-black/60">
                Year-round initiatives promoting safe and responsible driving in our community.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-black/10">
            <CardHeader>
              <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                <Gift className="h-6 w-6" style={{ color: '#FFB6D9' }} />
              </div>
              <CardTitle className="text-black">Elmentary School Playground Rennovations</CardTitle>
              <CardDescription className="text-black/60">
                Working with local elementary schools to renovate playgrounds and create safe play spaces for children.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-black/10">
            <CardHeader>
              <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                <Calendar className="h-6 w-6" style={{ color: '#FFB6D9' }} />
              </div>
              <CardTitle className="text-black">Ella's Stuff-a-Stocking</CardTitle>
              <CardDescription className="text-black/60">
                Get involved through gift wrapping sessions and delivery assistance.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#FFB6D9] to-[#FFE5F1] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4 text-black">Want to Make a Difference?</h2>
          <p className="text-lg mb-8 text-black/80">
            Your support helps us bring joy to families and promote safe driving in our community.
          </p>
          <Link
            href="/get-involved"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 transition-colors"
          >
            Get Involved Today
          </Link>
        </div>
      </div>
    </div>
  );
}
// ...existing code...