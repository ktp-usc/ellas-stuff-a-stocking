import Link from "next/link";
import { Heart, Users } from "lucide-react";
import React from "react";
import {ImageWithFallback} from "@/components/figma/ImageWithFallback";
import {Card} from "@/components/ui/card";


export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#FFE5F1] to-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-black mt-10">About the Gabriella Shumate Memorial Foundation</h1>
          <p className="text-xl text-black/70">
            Honoring Ella&apos;s memory by making our community safer and supporting families in need.
          </p>
            <hr style={{ border: '1px solid black', width: '75%', margin: '40px auto' }} />
        </div>
      </div>

      {/* Ella's Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#FFE5F1' }}>
              <span className="text-black">Our Story</span>
            </div>
            <h2 className="text-3xl mb-6 text-black">Ella&apos;s Legacy Lives On</h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>
                The Gabriella Shumate Memorial Foundation was established in 2011, following the tragic loss of Ella Shumate in a drunk driving accident. In the face of unimaginable grief, Ella&apos;s family chose to honor her memory by creating something positive and lasting.
              </p>
              <p>
                Founded by Dacia and Devin Shumate, the foundation represents a commitment to turning tragedy into hope and action.
              </p>
              <p>
                Based in Lexington, South Carolina, we work to promote safe driving awareness while simultaneously bringing joy to families facing financial hardships in our community.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="/Images/volunteers.jpg"
              alt="Volunteers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-20 bg-gradient-to-br from-[#FFB6D9] to-[#FFE5F1] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="/Images/ellas_volunteers.jpg"
                  alt="Ella's Foundation Volunteers"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="mt-3 text-center text-black/60 text-sm">
                From left to right: Angel DelPriore, Devin Shumate, Dacia Shumate, Kristin Truex
              </p>
            </div>
            <div>
              <h2 className="text-3xl mb-6 text-black">Our Mission</h2>
              <p className="text-xl text-black/80 leading-relaxed">
                To honor Gabriella Shumate&apos;s memory by promoting safe and responsible driving practices, while providing meaningful support to families in need within our community. Through awareness, education, and compassionate action, we strive to prevent tragedies and spread hope.
              </p>
            </div>
          </div>
        </div>

        {/* Press Coverage Section */}
        <div className="mb-20 bg-[#FFE5F1] rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col gap-4 p-6">
            {/* First Quote Block */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="flex items-center justify-center p-4">
                <a href="https://wach.com/news/local/river-bluff-high-school-honors-the-memory-of-teachers-daughter-killed-by-drunk-driver" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block max-w-[700px] h-72 relative rounded-2xl overflow-hidden transition-shadow hover:shadow-2xl">
                  <ImageWithFallback
                    src="/Images/Fox_article.png"
                    alt="Fox News Article"
                    className="w-full h-full object-contain rounded-2xl transition-opacity"
                  />
                </a>
              </div>
              <div className="p-4 h-full flex items-center">
                <p className="text-black text-base font-semibold leading-snug italic">
                    &quot;The Shumate&apos;s have turned this tragedy into forgiveness, into compassion, into larger life lessons, so Ella&apos;s legacy to me is just profound and it&apos;s impacting our entire school campus&quot;
                </p>
              </div>
            </div>

            {/* Separator Line */}
            <div className="border-t border-[#FFB6D9] my-2"></div>

            {/* Second Quote Block */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="p-4 h-full flex items-center order-2 md:order-1">
                <p className="text-black text-base font-semibold leading-snug italic">
                    &quot;A nonprofit organization created to improve the lives of children in the community by helping schools build playgrounds and providing basic necessities for children in need&quot;
                </p>
              </div>
              <div className="flex items-center justify-center p-4 order-1 md:order-2">
                <a href="https://www.coladaily.com/lifestyle/photo-gallery-memorial-5k-remembers-little-girl-killed-by-drunken-driver/article_08a41084-30c4-56f9-b03a-3eec6a457255.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block max-w-[700px] h-72 relative rounded-2xl overflow-hidden transition-shadow hover:shadow-2xl">
                  <ImageWithFallback
                    src="/Images/Cola_daily.png"
                    alt="Cola Daily Article"
                    className="w-full h-full object-contain rounded-2xl transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h2 className="text-3xl mb-12 text-center text-black">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-black/10">
              <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                <Heart className="h-6 w-6" style={{ color: '#FFB6D9' }} />
              </div>
              <h3 className="text-xl mb-4 text-black">Safe Driving Advocacy</h3>
              <p className="text-black/70 leading-relaxed">
                We work to raise awareness about the dangers of drunk driving and promote safe driving habits throughout our community. Through education and advocacy, we aim to prevent other families from experiencing the loss we endured.
              </p>
            </Card>

            <Card className="p-8 border-black/10">
              <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                <Users className="h-6 w-6" style={{ color: '#FFB6D9' }} />
              </div>
              <h3 className="text-xl mb-4 text-black">Supporting Families in Need</h3>
              <p className="text-black/70 leading-relaxed">
                We partner with local elementary schools to identify and support financially unstable families. Our flagship program, Ella&apos;s Stuff a Stocking, provides gifts and necessities to families during the holiday season, bringing joy when it&apos;s needed most.
              </p>
            </Card>
          </div>
        </div>

        {/* Founders Section */}
        <div className="bg-[#FFE5F1] rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl mb-8 text-center text-black">Meet the Founders</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="/Images/Devin_and_Dacia.jpg"
                    alt="Devin and Dacia Shumate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl mb-4 text-black">Devin & Dacia Shumate</h3>
                  <p className="text-black/80 leading-relaxed mb-4">
                    Devin and Dacia Shumate founded The Gabriella Shumate Memorial Foundation in 2011 to honor the memory of Ella Shumate and to create positive change in their community. Their dedication has touched countless lives throughout Columbia, South Carolina.
                  </p>
                  <p className="text-black/80 leading-relaxed">
                    Dacia serves as a social studies teacher at River Bluff High School, where she continues to inspire young minds daily. Together, Devin and Dacia channel their personal tragedy into meaningful action, ensuring that Ella&apos;s legacy lives on through every family helped and every life saved through safe driving awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       {/* Our Team — Full width pink background, matching Founders section */}
<div className="mb-20 bg-[#FFFFFF] rounded-2xl p-8 md:p-12">
  <h2 className="text-3xl text-center font-medium mb-8 text-black">Our Team</h2>

  {/* Grid: 1 column on mobile, 2 columns on md, centered inside */}
  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Dacia */}
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-[#FFB6D9] flex items-center justify-center font-semibold text-black">DS</div>
        <div>
          <div className="font-semibold text-lg text-black">Dacia Shumate</div>
          <div className="text-sm text-black">President</div>
        </div>
      </div>
    </div>

    {/* Devin */}
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-[#FFB6D9] flex items-center justify-center font-semibold text-black">DV</div>
        <div>
          <div className="font-semibold text-lg text-black">Devin Shumate</div>
          <div className="text-sm text-black">Vice President</div>
        </div>
      </div>
    </div>

    {/* Angel */}
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-[#FFB6D9] flex items-center justify-center font-semibold text-black">AD</div>
        <div>
          <div className="font-semibold text-lg text-black">Angel DelPriore</div>
          <div className="text-sm text-black">Board Member</div>
        </div>
      </div>
    </div>

    {/* Kristin */}
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-[#FFB6D9] flex items-center justify-center font-semibold text-black">KT</div>
        <div>
          <div className="font-semibold text-lg text-black">Kristin Truex</div>
          <div className="text-sm text-black">Board Member</div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#FFB6D9] to-[#FFE5F1] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4 text-black">Join Us in Making a Difference</h2>
          <p className="text-lg mb-8 text-black/80">
            Help us continue Ella&apos;s legacy through your support and involvement.
          </p>
          <Link
            href="/get-involved"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
}