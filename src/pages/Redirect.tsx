import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, ArrowRight, MessageSquare, Send, Check, Smartphone } from 'lucide-react';

const WhatsAppRedirectPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [redirected, setRedirected] = useState(false);
  const phoneNumber = "918401372294"; // No + sign for the URL format
  const message = encodeURIComponent("Hi, I'd like to try Arogya Setu health service.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  useEffect(() => {
    if (countdown > 0 && !redirected) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !redirected) {
      window.location.href = whatsappUrl;
      setRedirected(true);
    }
  }, [countdown, redirected, whatsappUrl]);
  
  const handleRedirectNow = () => {
    window.location.href = whatsappUrl;
    setRedirected(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>
      
      <div className="max-w-md w-full z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              आरोग्य सेतु
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">Connecting to WhatsApp...</p>
          <p className="text-gray-400">You'll be redirected to chat with our AI health assistant in {countdown} seconds</p>
        </div>
        
        <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mr-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">AI Health Assistant</h2>
                <p className="text-gray-400">+91 8401372294</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <p className="text-gray-300 text-sm">
                <span className="text-purple-400 font-medium">What to expect:</span> Our AI assistant will respond to your health concerns and provide guidance based on your symptoms.
              </p>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-gray-300">Initial message:</span>
              </div>
            </div>
            
            <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20 mb-6">
              <p className="text-gray-300 text-sm">Hi, I'd like to try Arogya Setu health service.</p>
            </div>
            
            <Button 
              onClick={handleRedirectNow}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-5 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              <MessageSquare className="mr-2 h-5 w-5" /> 
              Open WhatsApp Now
            </Button>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-2">
                <Send className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm text-gray-400">Message</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-2">
                <ArrowRight className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm text-gray-400">Connect</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-2">
                <Check className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm text-gray-400">Get Help</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            By continuing, you agree to our Terms of Service & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppRedirectPage;