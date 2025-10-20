import { Link } from "react-router-dom";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar, Gift, Heart } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#FFE5F1] to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-black">Making a Difference in Our Community</h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Join us in supporting families in need and promoting safe driving awareness in Columbia, South Carolina.
          </p>
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
                src="https://images.unsplash.com/photo-1638224966976-ae2e4257c09e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwd3JhcHBpbmclMjBwcmVzZW50c3xlbnwxfHx8fDE3NTkxNjI0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gift wrapping"
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

        {/* Additional Events/Activities */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-black/10">
            <CardHeader>
              <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                <Heart className="h-6 w-6" style={{ color: '#FFB6D9' }} />
              </div>
              <CardTitle className="text-black">Safe Driving Awareness</CardTitle>
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
              <CardTitle className="text-black">Community Partnerships</CardTitle>
              <CardDescription className="text-black/60">
                Working with local schools and organizations to maximize our impact.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-black/10">
            <CardHeader>
              <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFE5F1' }}>
                <Calendar className="h-6 w-6" style={{ color: '#FFB6D9' }} />
              </div>
              <CardTitle className="text-black">Volunteer Opportunities</CardTitle>
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
            to="/get-involved"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 transition-colors"
          >
            Get Involved Today
          </Link>
        </div>
      </div>
    </div>
  );
}