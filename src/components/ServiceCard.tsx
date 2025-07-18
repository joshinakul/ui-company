import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  borderColor: string;
  className?: string;
}

export function ServiceCard({ title, description, features, borderColor, className }: ServiceCardProps) {
  return (
    <Card className={`p-6 ${borderColor} border-l-4 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-lg ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            {feature}
          </Badge>
        ))}
      </div>
    </Card>
  );
}