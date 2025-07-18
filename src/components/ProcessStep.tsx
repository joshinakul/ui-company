interface ProcessStepProps {
  title: string;
  subtitle: string;
  items: { title: string; description: string }[];
  bgColor: string;
}

export function ProcessStep({ title, subtitle, items, bgColor }: ProcessStepProps) {
  return (
    <div className="flex-1 min-w-0">
      <div className={`${bgColor} text-center py-2 px-4 rounded-t-lg`}>
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </div>
      <div className="space-y-3 mt-4">
        {items.map((item, index) => (
          <div key={index} className="border-l-4 border-gray-300 pl-3">
            <h4 className="font-medium text-gray-800 text-sm">{item.title}</h4>
            <p className="text-xs text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}