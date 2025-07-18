import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-hero text-white py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-enterprise-primary/90 to-enterprise-secondary/90"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
         

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Digital Journey
            <span className="block text-transparent bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text">
              Partner
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming Ideas into Digital Reality with Enterprise-Grade AI, 
            Data Engineering, and Cloud Infrastructure Solutions
          </p>

          {/* Statistics */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-enterprise-blue mb-2">500+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-enterprise-green mb-2">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-enterprise-orange mb-2">24/7</div>
              <div className="text-sm text-gray-300">Enterprise Support</div>
            </div>
          </div> */}

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-enterprise-primary hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-enterprise-primary font-semibold px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div> */}

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-6">Powered by leading cloud platforms</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="bg-enterprise-blue text-white px-4 py-2 rounded text-sm font-medium">Azure</div>
              <div className="bg-enterprise-orange text-white px-4 py-2 rounded text-sm font-medium">AWS</div>
              <div className="bg-enterprise-red text-white px-4 py-2 rounded text-sm font-medium">Databricks</div>
              <div className="bg-enterprise-green text-white px-4 py-2 rounded text-sm font-medium">GCP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}