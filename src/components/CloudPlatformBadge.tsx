import { Badge } from "@/components/ui/badge";

interface CloudPlatformBadgeProps {
  platform: string;
  className?: string;
}

const platformColors: Record<string, string> = {
  Azure: "bg-blue-600 hover:bg-blue-700 text-white",
  AWS: "bg-orange-500 hover:bg-orange-600 text-white", 
  Databricks: "bg-red-600 hover:bg-red-700 text-white",
  GCP: "bg-green-600 hover:bg-green-700 text-white"
};

export function CloudPlatformBadge({ platform, className }: CloudPlatformBadgeProps) {
  const colorClass = platformColors[platform] || "bg-gray-500 hover:bg-gray-600 text-white";
  
  return (
    <Badge className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${colorClass} ${className}`}>
      {platform}
    </Badge>
  );
}