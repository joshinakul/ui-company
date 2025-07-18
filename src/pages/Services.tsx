import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Database, Settings, Cloud, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Enterprise AI Solutions",
      description: "Comprehensive AI-driven business transformation solutions",
      icon: <Brain className="h-8 w-8 text-enterprise-blue" />,
      features: [
        "Industry-Specific Agent Suites",
        "Computer Vision Analytics Platform", 
        "Conversational AI Suite",
        "Industry-Specific Forecasting Suite",
        "Classical Analytics & Business Intelligence"
      ],
      color: "border-enterprise-blue"
    },
    {
      title: "Data Engineering Accelerators", 
      description: "Pre-built solutions for modern data architecture",
      icon: <Database className="h-8 w-8 text-enterprise-green" />,
      features: [
        "Modern Data Lakehouse Accelerator",
        "Real-Time Data Ingestion & Processing Framework",
        "Data Quality & Observability Suite",
        "Automated Metadata Enrichment & Cataloging",
        "Cross-cloud Data Mesh Enablement Kit"
      ],
      color: "border-enterprise-green"
    },
    {
      title: "LLMOps Solutions",
      description: "Model-aware DevOps for production GenAI at scale",
      icon: <Settings className="h-8 w-8 text-enterprise-orange" />,
      features: [
        "Unified LLMOps Platform for Enterprise Model Lifecycle",
        "Automated Prompt Lifecycle Management & A/B Testing",
        "GenAI DevSecOps Governance Toolkit",
        "Multi-Model Orchestration & Cost Optimization",
        "LLM Observability & Feedback Loop Engine"
      ],
      color: "border-enterprise-orange"
    },
    {
      title: "Infrastructure Services",
      description: "Cloud-native foundation & DevOps acceleration",
      icon: <Cloud className="h-8 w-8 text-enterprise-red" />,
      features: [
        "Cloud Landing Zone Accelerator",
        "Infrastructure-as-Code Factory & Automation",
        "FinOps Optimization & Cloud Cost Intelligence",
        "Platform Engineering Enablement",
        "Data-Driven Infrastructure with AI Stack Readiness"
      ],
      color: "border-enterprise-red"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise Technology Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions powered by cutting-edge AI, 
              data engineering, and cloud infrastructure technologies.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <Card key={index} className={`p-8 border-l-4 ${service.color} hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-enterprise-primary">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-enterprise-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* <Button className="w-full bg-enterprise-primary hover:bg-enterprise-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Lifecycle */}
        <section className="py-24 bg-enterprise-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-enterprise-primary mb-4">
                TechOps Service Lifecycle
              </h2>
              <p className="text-xl text-gray-600">From Sales to Delivery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "SALES", subtitle: "Lead Generation", phase: "Discovery & Qualification" },
                { title: "PRESALES", subtitle: "Solution Design", phase: "Architecture & Proposal" },
                { title: "LEGAL & FINANCE", subtitle: "Contract Setup", phase: "Agreement & Execution" },
                { title: "DELIVERY", subtitle: "Project Execution", phase: "Implementation & Support" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                    <h3 className="font-bold text-enterprise-primary text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{step.subtitle}</p>
                    <p className="text-sm text-gray-700">{step.phase}</p>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-auto hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;