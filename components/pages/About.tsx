import { Link } from "react-router-dom";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card } from "../ui/card";
import { Heart, Target, Users } from "lucide-react";
import ellaImage from "figma:asset/391755e80db83732d7649c19b83a0725a8609794.png";
import riverBluffImage from "figma:asset/b8e3f9a2c5d1e7f4a8b2c6d9e3f7a1b5c8d2e6f9.png";

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#FFE5F1] to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-black">About Ella's Foundation</h1>
          <p className="text-xl text-black/70">
            Honoring Ella's memory by making our community safer and supporting families in need.
          </p>
        </div>
      </div>

      {/* Ella's Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#FFE5F1' }}>
              <span className="text-black">Our Story</span>
            </div>
            <h2 className="text-3xl mb-6 text-black">Ella's Legacy Lives On</h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>
                Ella's Foundation was established in 2011, following the tragic loss of Ella Shumate in a drunk driving accident. In the face of unimaginable grief, Ella's family chose to honor her memory by creating something positive and lasting.
              </p>
              <p>
                Founded by Devin Shumate and his wife Dacia Shumate, a dedicated social studies teacher at River Bluff High School, the foundation represents a commitment to turning tragedy into hope and action.
              </p>
              <p>
                Based in Columbia, South Carolina, we work tirelessly to prevent similar tragedies through safe driving awareness while simultaneously bringing joy to families facing financial hardships in our community.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmljJTIwaGlnaCUyMHNjaG9vbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYwMzkyOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="High School"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-20 bg-gradient-to-br from-[#FFB6D9] to-[#FFE5F1] rounded-2xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
              <Target className="h-8 w-8" style={{ color: '#FFB6D9' }} />
            </div>
          </div>
          <h2 className="text-3xl mb-6 text-black">Our Mission</h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            To honor Ella Shumate's memory by promoting safe and responsible driving practices, while providing meaningful support to families in need within our community. Through awareness, education, and compassionate action, we strive to prevent tragedies and spread hope.
          </p>
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
                We partner with local elementary schools to identify and support financially unstable families. Our flagship program, Ella's Stuff a Stocking, provides gifts and necessities to families during the holiday season, bringing joy when it's needed most.
              </p>
            </Card>
          </div>
        </div>

        {/* Founders Section */}
        <div className="bg-[#FFE5F1] rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl mb-8 text-center text-black">Meet the Founders</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl mb-4 text-black">Devin & Dacia Shumate</h3>
              <p className="text-black/80 leading-relaxed mb-4">
                Devin and Dacia Shumate founded Ella's Foundation in 2011 to honor the memory of Ella Shumate and to create positive change in their community. Their dedication has touched countless lives throughout Columbia, South Carolina.
              </p>
              <p className="text-black/80 leading-relaxed">
                Dacia serves as a social studies teacher at River Bluff High School, where she continues to inspire young minds daily. Together, Devin and Dacia channel their personal tragedy into meaningful action, ensuring that Ella's legacy lives on through every family helped and every life saved through safe driving awareness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#FFB6D9] to-[#FFE5F1] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4 text-black">Join Us in Making a Difference</h2>
          <p className="text-lg mb-8 text-black/80">
            Help us continue Ella's legacy through your support and involvement.
          </p>
          <Link
            to="/get-involved"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
}