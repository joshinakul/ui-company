import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface EnterpriseServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accentColor: string;
}

export function EnterpriseServiceCard({ title, description, features, icon, accentColor }: EnterpriseServiceCardProps) {
  return (
    <Card className="p-8 h-full bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className={`w-12 h-12 rounded-lg ${accentColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-enterprise-primary mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-enterprise-green mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* <Button 
        variant="outline" 
        className="w-full group-hover:bg-enterprise-primary group-hover:text-white transition-colors"
      >
        Learn More
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button> */}
    </Card>
  );
}