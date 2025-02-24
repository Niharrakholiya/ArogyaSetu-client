import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { MessageCircle, Brain, Shield, Phone, Heart, Award, Star, Users } from 'lucide-react';

const GlowingBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
    <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
  </div>
);

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

const StatCard = ({ icon: Icon, value, label }) => (
  <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
    <CardContent className="p-6 flex items-center space-x-4">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-gray-300">{label}</div>
      </div>
    </CardContent>
  </Card>
);

const ArogyaSetuLanding = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <GlowingBackground />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hackathon Winner Banner */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-purple-500/20">
            <Award className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300">🏆 DUHacks 4.0 Winner - Best Healthcare Innovation</span>
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

      {/* Stats Section */}
      <div className="relative py-16 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard icon={Users} value="1M+" label="Active Users" />
            <StatCard icon={Star} value="4.9/5" label="User Rating" />
            <StatCard icon={Heart} value="98%" label="Accuracy Rate" />
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default ArogyaSetuLanding;