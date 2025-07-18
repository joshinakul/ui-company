import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { EnterpriseServiceCard } from "@/components/EnterpriseServiceCard";
import { Button } from "@/components/ui/button";
import { Brain, Database, Settings, Cloud, ArrowRight, Shield, Zap, Globe } from "lucide-react";

const Index = () => {
  const coreServices = [
    {
      title: "Enterprise AI Solutions",
      description: "Deploy AI-powered automation, intelligent document processing, and predictive analytics to drive operational efficiency and strategic decision-making for enterprise workflows.",
      features: [
        "Industry-specific AI agent suites",
        "Computer vision analytics platform", 
        "Conversational AI and voice bots",
        "Predictive forecasting solutions"
      ],
      icon: <Brain className="h-6 w-6 text-white" />,
      accentColor: "bg-enterprise-blue"
    },
    {
      title: "Data Engineering Accelerators",
      description: "Build enterprise data lakes, real-time analytics pipelines, and governance frameworks that transform your organization's data into competitive business intelligence.",
      features: [
        "Modern data lakehouse accelerators",
        "Real-time data ingestion frameworks",
        "Data quality & observability suites",
        "Cross-cloud data mesh enablement"
      ],
      icon: <Database className="h-6 w-6 text-white" />,
      accentColor: "bg-enterprise-green"
    },
    {
      title: "LLMOps & DevOps Solutions",
      description: "End-to-end operationalization of large language models, machine learning workflows, and DevOps practices with enterprise governance and auditability.",
      features: [
        "Unified LLMOps platform lifecycle",
        "Automated prompt management & A/B testing",
        "GenAI DevSecOps governance toolkit",
        "Multi-model orchestration & cost optimization"
      ],
      icon: <Settings className="h-6 w-6 text-white" />,
      accentColor: "bg-enterprise-orange"
    },
    {
      title: "Infrastructure Services",
      description: "Implement enterprise-ready cloud-native architectures, containerization, and infrastructure automation with security, compliance, and scalability.",
      features: [
        "Cloud landing zone accelerators",
        "Infrastructure-as-Code factories",
        "FinOps optimization & cost intelligence",
        "Platform engineering enablement"
      ],
      icon: <Cloud className="h-6 w-6 text-white" />,
      accentColor: "bg-enterprise-red"
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current technology stack, business requirements, and digital transformation goals.",
      icon: <Shield className="h-8 w-8 text-enterprise-blue" />
    },
    {
      title: "Solution Architecture",
      description: "Custom enterprise-grade solution design with detailed technical architecture and implementation roadmap.",
      icon: <Zap className="h-8 w-8 text-enterprise-green" />
    },
    {
      title: "Implementation & Deployment",
      description: "Full-scale deployment with enterprise governance, security compliance, and scalability built-in from day one.",
      icon: <Globe className="h-8 w-8 text-enterprise-orange" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Core Services Section */}
        <section className="py-24 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-enterprise-primary mb-4">
                Comprehensive Digital Transformation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI-powered automation to cloud infrastructure, we deliver enterprise-grade solutions 
                that transform your business operations and accelerate growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <EnterpriseServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-enterprise-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-enterprise-primary mb-4">
                Our Proven Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A streamlined approach from initial assessment to full deployment, 
                ensuring seamless integration with your existing enterprise systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-enterprise-primary mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-enterprise-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprise clients who trust us with their digital transformation journey. 
              Let's discuss how we can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-enterprise-primary hover:bg-gray-100 font-semibold px-8 py-3"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-enterprise-primary font-semibold px-8 py-3"
              >
                View Case Studies
              </Button> */}
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Index;