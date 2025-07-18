import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Solutions = () => {
  const aiSolutions = [
    {
      title: "Industry-Specific Agent Suites",
      description: "Autonomous AI agents tailored for specific industries, automating complex workflows and decision-making processes with domain expertise.",
      features: ["Domain Expertise", "Workflow Automation", "Decision Support", "Custom Integration"],
      color: "border-l-enterprise-red"
    },
    {
      title: "Computer Vision Analytics Platform",
      description: "Advanced visual intelligence combining LLM capabilities with traditional computer vision for batch and real-time analytics across industries.",
      features: ["Real-time Processing", "LLM Integration", "Batch Analytics", "Multi-modal AI"],
      color: "border-l-enterprise-blue"
    }
  ];

  const dataSolutions = [
    {
      title: "Modern Data Lakehouse Accelerator",
      description: "Unified blueprint enabling ingestion → processing → governance → consumption with auto-discovery templates, Delta/Parquet storage, and pre-built data quality validation.",
      features: ["BFSI", "Retail", "Healthcare", "Public Sector"],
      color: "border-l-enterprise-blue",
      tech: "Azure Synapse + Delta | AWS Lake Formation + Glue | GCP BigQuery + Dataproc | Databricks"
    },
    {
      title: "Real-Time Data Ingestion & Processing Framework",
      description: "Event-driven architecture with streaming ETL patterns, auto-scaling, and real-time analytics for mission-critical operations requiring instant insights.",
      features: ["Manufacturing", "Logistics", "FinTech", "eCommerce"],
      color: "border-l-enterprise-blue",
      tech: "Kafka (Confluent) | Azure Event Hub | AWS Kinesis | GCP Pub/Sub | Apache Spark/Flink"
    }
  ];

  const llmSolutions = [
    {
      title: "Unified LLMOps Platform for Enterprise Model Lifecycle Management",
      description: "Standardized end-to-end LLM lifecycle from fine-tuning, evaluation, and deployment to monitoring and feedback loops with enterprise governance and auditability.",
      features: ["LLM Deployment Blueprint", "CI/CD Integration", "Vector DB", "Evaluation Harness"],
      color: "border-l-enterprise-orange",
      benefit: "Enterprise governance, reproducibility & accelerated GenAI time-to-value"
    },
    {
      title: "Multi-Model Orchestration & Cost Optimization Layer",
      description: "Dynamic prompt routing between open-source and commercial LLMs based on context, latency, and cost optimization with intelligent fallback mechanisms.",
      features: ["LLM Router Module", "API Gateway", "Fallback Logic", "Usage Policy Manager"],
      color: "border-l-enterprise-blue",
      benefit: "30-50% LLM cost reduction & enhanced client ROI transparency"
    }
  ];

  const infraSolutions = [
    {
      title: "Cloud Landing Zone Accelerator",
      description: "Enterprise-ready foundation setup with secure, scalable, and policy-compliant landing zones across Azure, AWS, and GCP using hyperscaler frameworks.",
      features: ["Terraform/Bicep Scripts", "Governance Guardrails", "Cost Dashboard", "CAF Aligned"],
      color: "border-l-enterprise-green",
      benefit: "Fast-tracks cloud onboarding with security, identity, cost & networking pre-baked"
    },
    {
      title: "FinOps Optimization & Cloud Cost Intelligence",
      description: "Cost observability, forecasting, and optimization using native and third-party tools for comprehensive cloud financial management and CFO alignment.",
      features: ["Cost Intelligence Dashboard", "Anomaly Detection", "Auto-Archiving Scripts", "Forecasting Engine"],
      color: "border-l-enterprise-green",
      benefit: "CFO-aligned cloud strategy & 20-40% cost reduction"
    }
  ];

  const SolutionCard = ({ title, description, features, color, tech, benefit }: any) => (
    <Card className={`p-6 ${color} border-l-4 hover:shadow-lg transition-shadow mb-6`}>
      <h3 className="text-xl font-semibold text-enterprise-primary mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {features.map((feature: string, index: number) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {feature}
          </Badge>
        ))}
      </div>
      
      {tech && (
        <p className="text-xs text-gray-500 italic mb-2">{tech}</p>
      )}
      
      {benefit && (
        <p className="text-xs text-enterprise-green font-medium">{benefit}</p>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise Solution Portfolios
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive pre-built solutions designed for enterprise-scale digital transformation across AI, data engineering, LLMOps, and infrastructure domains.
            </p>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white bg-enterprise-primary py-4 px-6 rounded-lg inline-block">
                Enterprise AI Solutions Portfolio
              </h2>
              <p className="text-gray-600 mt-4">Comprehensive AI-Driven Business Transformation</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiSolutions.map((solution, index) => (
                <SolutionCard key={index} {...solution} />
              ))}
            </div>
          </div>
        </section>

        {/* Data Engineering Solutions */}
        <section className="py-16 bg-enterprise-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white bg-enterprise-primary py-4 px-6 rounded-lg inline-block">
                Data Engineering Accelerators Portfolio
              </h2>
              <p className="text-gray-600 mt-4">Pre-Built Solutions for Modern Data Architecture</p>
            </div>
            
            {dataSolutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </section>

        {/* LLMOps Solutions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white bg-enterprise-primary py-4 px-6 rounded-lg inline-block">
                Enterprise LLMOps Solutions Portfolio
              </h2>
              <p className="text-gray-600 mt-4">Model-Aware DevOps for Production GenAI at Scale</p>
            </div>
            
            {llmSolutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </section>

        {/* Infrastructure Solutions */}
        <section className="py-16 bg-enterprise-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white bg-enterprise-primary py-4 px-6 rounded-lg inline-block">
                Enterprise Infrastructure Services Portfolio
              </h2>
              <p className="text-gray-600 mt-4">Cloud-Native Foundation & DevOps Acceleration</p>
            </div>
            
            {infraSolutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
            
            {/* Excellence Banner */}
            <div className="bg-enterprise-primary text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-enterprise-green">
                Enterprise Cloud Foundation Excellence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-enterprise-green mb-2">Accelerated Onboarding</h4>
                  <p className="text-sm">Pre-built accelerators reduce cloud setup time by 60-80%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-enterprise-green mb-2">Cost Optimization</h4>
                  <p className="text-sm">FinOps intelligence delivers 20-40% cost reduction</p>
                </div>
                <div>
                  <h4 className="font-semibold text-enterprise-green mb-2">AI-Ready Architecture</h4>
                  <p className="text-sm">Future-proof infrastructure with MLOps/LLMOps layers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;