import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { EnterpriseServiceCard } from "@/components/EnterpriseServiceCard";
import { Button } from "@/components/ui/button";
import { Brain, Database, Settings, Cloud, ArrowRight, Shield, Zap, Globe } from "lucide-react";
import Solutions from "./Solutions";

const Index = () => {
  const coreServices = [
    {
      title: "Enterprise AI Solutions",
      description: "Deploying AI-powered automation, intelligent document processing, and predictive analytics to drive operational efficiency and strategic decision-making for enterprise workflows. \
Our Enterprise AI solutions include custom AI model development, natural language processing, computer vision, and advanced analytics tailored to your business needs. We ensure seamless integration, robust security, and ongoing optimization for maximum ROI.",
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
      description: "Building enterprise data lakes, real-time analytics pipelines, and governance frameworks that transform your organization's data into competitive business intelligence. \
We design and implement scalable data architectures, ETL pipelines, and data governance strategies. Our expertise covers cloud data warehousing, real-time streaming, and compliance to empower data-driven decision-making.",
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
      description: "End-to-end operationalization of large language models, machine learning workflows, and DevOps practices, including deployment, monitoring, CI/CD for ML, and governance for scalable, responsible AI in production. \
Our LLMOps & DevOps services automate the ML lifecycle, from model training and deployment to monitoring and governance. We implement CI/CD for ML, MLOps best practices, and robust infrastructure for reliable, scalable AI operations.",
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
      description: "Implementing enterprise-ready cloud-native architectures, containerization, and infrastructure automation with security, compliance, and scalability at the forefront. \
We architect and manage secure, scalable cloud and on-premise infrastructure. Our services include container orchestration, infrastructure as code, disaster recovery, and continuous monitoring for operational excellence.",
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
      {/* <Header /> */}
      
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

        <section className="py-24 bg-enterprise-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-enterprise-primary mb-4">
                TechOps Service Lifecycle
              </h2>
              <p className="text-xl text-gray-600">Our comprehensive approach spans the full service journey, from collaborative sales engagement to solution design, contract setup, and final delivery.
Each phase is clearly owned—whether by our team, our partners, or through close collaboration—ensuring accountability and a seamless experience from start to finish.
This integrated lifecycle ensures seamless, end-to-end service delivery across all stakeholder touchpoints.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "SALES", content: ["Lead Generation","Discovery","Lead Qualification","Initial Proposal","Commercial Finalisation"] },
                { title: "PRESALES", content: ["Technical Discovery","Solution Design", "Proposal Finalization","Proof of Concept","Stakeholder Workshops"] },
                { title: "LEGAL & FINANCE", content: ["Contract Review","Legal Negotiation","Agreement Execution","Credit Approval","Purchase Order"] },
                { title: "DELIVERY", content: ["Project Initiation","SDLC","User Training","Hypercare & Support","Continuous Improvement"] }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                    <h3 className="font-bold text-enterprise-primary text-lg mb-2">{step.title}</h3>
                    {step.content.map((cnt,idx)=>{
                      return <p className="text-sm text-gray-600 mb-3">{cnt}</p>
                    })}
                    
                  </div>
                  {index < 3 && (
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-auto hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Solutions />

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
