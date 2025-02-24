import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Brain, Shield, Phone, Heart, Award, Activity, Zap, Clock, Smartphone } from 'lucide-react';

// Parallax effect component
const GlowingBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
    <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
  </div>
);
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME; // Replace with your actual cloud name

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
    <CardContent className="p-6">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const HealthJourneyMap = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Health Concern",
      icon: Activity,
      description: "User experiences symptoms or has a health-related question",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "WhatsApp Access",
      icon: Smartphone,
      description: "Opens WhatsApp and messages Arogya Setu in text or voice",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "AI Analysis",
      icon: Brain,
      description: "Advanced AI processes symptoms and medical context",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      title: "Personalized Guidance",
      icon: Heart,
      description: "Receives clear guidance, recommendations and next steps",
      color: "from-green-500 to-emerald-500"
    }
  ];
  
  const features = [
    {
      title: "Voice Message Support",
      icon: MessageCircle,
      description: "Send voice notes in Hindi or English - ideal for elderly users"
    },
    { 
      title: "Works Online", 
      icon: Zap, 
      description: "Messages are processed in real-time" 
    },
    {
      title: "Privacy First",
      icon: Shield,
      description: "End-to-end encrypted with medical-grade security"
    },
    {
      title: "24/7 Availability",
      icon: Clock,
      description: "Get health guidance anytime, day or night"
    }
  ];

  return (
    <div className="relative py-20 px-4 bg-gradient-to-b from-gray-900/80 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-purple-500/20">
            <Award className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300">Simplified Healthcare Journey</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              How Arogya Setu Works
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience healthcare guidance in minutes, not hours
          </p>
        </div>
        
        {/* Interactive Journey Map */}
        <div className="relative mb-20">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0"></div>
          
          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <button
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeStep === step.id
                      ? `bg-gradient-to-r ${step.color} scale-110 shadow-lg`
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <step.icon className={`w-8 h-8 ${activeStep === step.id ? 'text-white' : 'text-gray-400'}`} />
                </button>
                <h3 className="text-lg font-medium text-white text-center">{step.title}</h3>
                <p className="text-gray-400 text-center mt-2 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Interactive Display */}
        <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 overflow-hidden mb-16">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side: Animated visualization */}
              <div className="relative min-h-64 flex items-center justify-center bg-gray-800/50 rounded-lg overflow-hidden p-6">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <div className={`absolute w-64 h-64 rounded-full filter blur-3xl transition-all duration-500 animate-pulse ${
                    activeStep === 1 ? 'bg-red-500 top-0 left-0' :
                    activeStep === 2 ? 'bg-blue-500 top-0 right-0' :
                    activeStep === 3 ? 'bg-purple-500 bottom-0 left-0' :
                    'bg-green-500 bottom-0 right-0'
                  }`}/>
                </div>
                
                <div className="text-center z-10">
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r mb-4 ${steps[activeStep-1].color}`}>
                    {React.createElement(steps[activeStep-1].icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{steps[activeStep-1].title}</h3>
                  <p className="text-gray-300">
                    {activeStep === 1 && "Your health journey begins when you have a question or concern about your wellbeing"}
                    {activeStep === 2 && "Simply open WhatsApp and send a message to the Arogya Setu number - text or voice, your choice"}
                    {activeStep === 3 && "Our advanced AI analyzes your symptoms, medical history, and contextual factors"}
                    {activeStep === 4 && "Receive clear, actionable health guidance tailored specifically to your situation"}
                  </p>
                </div>
              </div>
              
              {/* Right side: Phone mockup */}
              <div className="relative">
                <div className="relative mx-auto w-64 h-128 bg-gray-900 rounded-3xl p-2 shadow-xl">
                  <div className="absolute top-0 w-40 h-6 bg-gray-900 rounded-b-xl left-1/2 -translate-x-1/2"></div>
                  <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden flex flex-col">
                    {/* WhatsApp header */}
                    <div className="bg-green-600 p-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 mr-3"></div>
                      <div>
                        <div className="text-white text-sm font-medium">आरोग्य सेतु</div>
                        <div className="text-green-100 text-xs">Online</div>
                      </div>
                    </div>
                    
                    {/* Chat area */}
                    <div className="flex-1 bg-gray-200 p-3 flex flex-col">
                      {activeStep >= 1 && (
                        <div className="self-end bg-green-100 rounded-lg p-2 mb-3 max-w-xs shadow-sm">
                          <p className="text-xs text-gray-800">
                            {activeStep === 1 ? "I've been having headaches and slight fever for 2 days. What should I do?" : 
                             "I've been having headaches and slight fever for 2 days. What should I do?"}
                          </p>
                          <div className="text-right mt-1">
                            <span className="text-xs text-gray-500">09:42 AM</span>
                          </div>
                        </div>
                      )}
                      
                      {activeStep >= 2 && (
                        <div className="self-start bg-white rounded-lg p-2 mb-3 max-w-xs shadow-sm">
                          <p className="text-xs text-gray-800">
                            {activeStep === 2 ? "I understand you're experiencing headaches and fever. How severe is the headache on a scale of 1-10?" : 
                             "I understand you're experiencing headaches and fever. How severe is the headache on a scale of 1-10?"}
                          </p>
                          <div className="text-right mt-1">
                            <span className="text-xs text-gray-500">09:43 AM</span>
                          </div>
                        </div>
                      )}
                      
                      {activeStep >= 3 && (
                        <div className="self-end bg-green-100 rounded-lg p-2 mb-3 max-w-xs shadow-sm">
                          <p className="text-xs text-gray-800">About a 6. It's worse in the morning.</p>
                          <div className="text-right mt-1">
                            <span className="text-xs text-gray-500">09:43 AM</span>
                          </div>
                        </div>
                      )}
                      
                      {activeStep >= 4 && (
                        <div className="self-start bg-white rounded-lg p-2 mb-3 max-w-xs shadow-sm animate-fade-in">
                          <p className="text-xs text-gray-800">
                            Based on your symptoms, this could be a viral infection. Rest, stay hydrated, and take paracetamol for the fever and pain. If symptoms worsen or continue beyond 3 days, please consult a doctor immediately.
                          </p>
                          <div className="text-right mt-1">
                            <span className="text-xs text-gray-500">09:44 AM</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Input area */}
                    <div className="bg-gray-700 p-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="mx-2 flex-1 h-8 bg-gray-600 rounded-full"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Try Now Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
            text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            <Smartphone className="mr-2 h-5 w-5" /> Experience Arogya Setu Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const ArogyaSetuLanding = () => {
  const team = [
    { name: "Nihar Rakholiya", role: "AI/ML Lead" },
    { name: "Lakhman Parmar", role: "WhatsApp Integration Lead" },
    { name: "Neil Patel", role: "Text-to-Speech Integration Lead" },
    { name: "Jenish Vamja", role: "Requirements & Deployment Lead" }
  ];

  // Cloudinary public ID for the team image
  const teamImagePublicId = "pnjtnljjphkhqvfpp5ao";

  return (
    <CloudinaryContext cloudName={CLOUDINARY_CLOUD_NAME}>
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <GlowingBackground />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
            {/* Hackathon Winner Banner */}
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-purple-500/20">
              <Award className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300">🏆 DUHacks 4.0  - Best Healthcare Innovation</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                आरोग्य सेतु
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-Powered Healthcare Companion on WhatsApp
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Transforming healthcare access through WhatsApp - because health guidance should be just a message away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
                text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                <Phone className="mr-2 h-5 w-5" /> Try on WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-6 rounded-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
        </div>
      </div>

      <HealthJourneyMap />

      {/* Features Section */}
      <div className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Why Choose Arogya Setu?
              </span>
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Brain}
              title="AI-Powered Analysis"
              description="Advanced symptom analysis with real-time health insights and personalized recommendations."
            />
            <FeatureCard 
              icon={MessageCircle}
              title="Voice Message Support"
              description="Send voice notes in your language. Perfect for elderly users and those who prefer speaking."
            />
            <FeatureCard 
              icon={Shield}
              title="Privacy First"
              description="HIPAA-compliant security with end-to-end encryption for your medical data."
            />
          </div>
        </div>
      </div>
      
      {/* Competitive Advantage Section */}
      <div className="relative py-16 px-4 bg-gradient-to-b from-gray-900/50 to-gray-900">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Why We're Better
              </span>
            </h2>
          
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Competitive Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">Voice message processing with Indian accent support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">Specialized medical knowledge base for accurate guidance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">HIPAA-compliant, medical-grade security protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">India-specific medical guidance and recommendations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Technical Excellence</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">Whisper ASR for high-accuracy voice recognition</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">Advanced LLMs for precise medical analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">ChromaDB for conversation memory and context</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">Scalable architecture for millions of concurrent users</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Team IndustryInnovators - The minds behind आरोग्य सेतु
          </p>
          
          {/* Team group photo using Cloudinary */}
          <div className="mb-16">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 p-2">
              <div className="rounded-lg overflow-hidden">
                <Image publicId={teamImagePublicId} className="w-full h-[640px] object-cover object-center">
                  <Transformation height="640" crop="fill" gravity="center" />
                  <Transformation quality="100" fetchFormat="auto" />
                </Image>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Team IndustryInnovators</h3>
                  <p className="text-gray-300 mb-4">
                    Our talented team came together at DUHacks 4.0 to create आरोग्य सेतु,
                    an innovative solution to make healthcare accessible to millions of Indians.
                  </p>
                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg p-3 inline-block">
                    <p className="text-purple-300">✨ DUHacks 4.0 Innovators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team members list */}
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 mr-3"></div>
                  <div>
                    <h4 className="text-white font-medium">{member.name}</h4>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
          
      {/* Call to Action */}
      <div className="relative py-16 px-4 bg-gradient-to-t from-gray-900 to-gray-900/80">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Ready to experience the future of healthcare?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of users who are already benefiting from instant medical guidance on WhatsApp.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
              text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              <Phone className="mr-2 h-5 w-5" /> Add Arogya Setu on WhatsApp
            </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">© 2024 Team IndustryInnovators. All rights reserved.</p>
          <p className="text-gray-600 text-sm mt-2">
            Created for DUHacks 4.0 Hackathon
          </p>
        </div>
      </footer>
    </div>
    </CloudinaryContext>
  );
};

export default ArogyaSetuLanding;