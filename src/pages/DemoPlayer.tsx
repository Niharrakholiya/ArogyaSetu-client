import  { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, PlayCircle, Pause, 
  SkipForward, SkipBack, Volume2, 
  VolumeX, ChevronRight, Smartphone,
  Activity, Brain, Heart
} from 'lucide-react';

const DemoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const phoneNumber = "918401372294"; // No + sign for the URL format
const message = encodeURIComponent("Hi, I am having headache");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
const handleWhatsAppRedirect = () => {
  window.location.href = whatsappUrl;
};
  // YouTube video URL - replace with your actual video ID
  const youtubeVideoId = "1zyNLSM8RcE"; // Example video ID
  
  const demoSteps = [
    {
      title: "Initiating a Conversation",
      user: "Hi, I'd like help with my health concern.",
      bot: "Hello! I'm आरोग्य सेतु, your AI health assistant. What health concern can I help you with today?",
      annotation: "Simply send a text or voice message to start the conversation."
    },
    {
      title: "Describing Your Symptoms",
      user: "I've been having headaches and slight fever for the past 2 days.",
      bot: "I understand you're experiencing headaches and fever for 2 days. Could you please rate your headache severity on a scale of 1-10? Also, have you noticed any patterns when the headache occurs or if anything makes it better or worse?",
      annotation: "Be as specific as possible about your symptoms and their duration."
    },
    {
      title: "Providing Additional Details",
      user: "It's about a 6/10 in pain. It's worse in the morning and when I bend down. I've taken paracetamol but it only helps for a few hours.",
      bot: "Thank you for those details. The morning pattern and worsening with position changes are important clues. A few more questions to better understand your situation: Do you have any other symptoms like sensitivity to light or sound, nausea, or neck stiffness? Have you been exposed to anyone with similar symptoms recently?",
      annotation: "The AI asks targeted follow-up questions based on your specific symptoms."
    },
    {
      title: "Receiving an Assessment",
      user: "Yes, I do feel a bit sensitive to bright light. No nausea though. My roommate had a cold last week.",
      bot: "Based on your symptoms (headache, fever, light sensitivity) and recent exposure, this could be a viral infection like the common cold or mild flu. The pattern of your headache suggests it might be tension or sinus-related, possibly due to the infection.\n\nRecommendations:\n1. Continue with paracetamol for fever and pain as directed on packaging\n2. Stay hydrated and get plenty of rest\n3. Apply a cool compress to your forehead for headache relief\n4. Consider a humidifier if the air is dry",
      annotation: "The AI analyzes your symptoms and provides an initial assessment with practical recommendations."
    },
    {
      title: "Understanding When to Seek Medical Care",
      user: "When should I see a doctor if it doesn't improve?",
      bot: "You should consult a doctor if:\n• Your fever exceeds 102°F (39°C) or lasts more than 3 days\n• Your headache becomes severe or is the worst you've ever had\n• You develop confusion, drowsiness, or stiff neck\n• You experience difficulty breathing or chest pain\n• Your symptoms worsen or don't improve after 5 days\n\nGiven your current symptoms, monitor for 2-3 more days while following the recommendations. If symptoms worsen or new concerning symptoms develop, please seek medical attention promptly.",
      annotation: "The AI provides clear guidance on when professional medical care is necessary."
    },
    {
      title: "Using Voice Messages",
      user: "🎤 [Voice message: I also feel a bit tired, is that normal with these symptoms?]",
      bot: "Yes, fatigue is a very common symptom with viral infections. Your body is using energy to fight the infection, which can make you feel tired. This is a normal part of your body's immune response. Extra rest during this time is important for your recovery. Try to get additional sleep and avoid strenuous activities until you're feeling better.",
      annotation: "You can send voice messages in Hindi or English – perfect for when typing is inconvenient."
    },
    {
      title: "Asking About Prevention",
      user: "How can I prevent spreading this to others?",
      bot: "To prevent spreading your infection to others:\n• Wash hands frequently with soap and water for 20 seconds\n• Cover your mouth and nose when coughing or sneezing (use elbow or tissue)\n• Wear a mask when around others if possible\n• Avoid sharing personal items like towels, utensils, or drinking glasses\n• Stay home and limit close contact with others, especially vulnerable individuals\n• Regularly clean frequently-touched surfaces\n\nThese measures are particularly important during the first few days when you're most contagious.",
      annotation: "The AI provides comprehensive prevention guidance to protect others."
    }
  ];
  
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  const startDemo = () => {
    setIsPlaying(true);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 0.5;
        if (newProgress >= 100) {
          moveToNextStep();
          return 0;
        }
        return newProgress;
      });
    }, 50);
  };
  
  const pauseDemo = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };
  
  const moveToNextStep = () => {
    setCurrentStep(prev => {
      const next = prev + 1;
      if (next >= demoSteps.length) {
        return 0;
      }
      return next;
    });
    setProgress(0);
  };
  
  const moveToPrevStep = () => {
    setCurrentStep(prev => {
      const next = prev - 1;
      if (next < 0) {
        return demoSteps.length - 1;
      }
      return next;
    });
    setProgress(0);
  };
  
  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };
  
  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setProgress(0);
    if (isPlaying) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      startDemo();
    }
  };
  
  const toggleVideoDisplay = () => {
    setShowVideo(prev => !prev);
    if (isPlaying) {
      pauseDemo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>
      
      <div className="max-w-6xl w-full z-10 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-purple-500/20">
            <PlayCircle className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300">Interactive Demo</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Watch How आरोग्य सेतु Works
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our AI health assistant can help you navigate health concerns through a simple WhatsApp conversation
          </p>
          
          {/* Video button */}
          <Button 
            onClick={toggleVideoDisplay}
            className="mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 px-6 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            {showVideo ? 'Hide Video Tutorial' : 'Watch Video Tutorial'}
          </Button>
        </div>
        
        {/* YouTube video embed - conditionally rendered */}
        {showVideo && (
          <div className="mb-12 w-full max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe 
                    className="w-full h-96 rounded-lg"
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0`}
                    title="आरोग्य सेतु Tutorial Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps navigation sidebar */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 mb-6">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-white mb-4">Demo Steps</h3>
                <div className="space-y-2">
                  {demoSteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => handleStepClick(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all flex items-center ${
                        currentStep === index 
                          ? "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30" 
                          : "hover:bg-gray-800/50"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        currentStep === index 
                          ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white" 
                          : "bg-gray-800 text-gray-400"
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className={`font-medium ${currentStep === index ? "text-white" : "text-gray-300"}`}>
                          {step.title}
                        </p>
                      </div>
                      {currentStep === index && (
                        <ChevronRight className="ml-auto text-purple-400 w-5 h-5" />
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mt-1 mr-4">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Voice & Text Support</h4>
                      <p className="text-gray-300 text-sm">Communicate however you feel comfortable - in English or Hindi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mt-1 mr-4">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Smart Assessment</h4>
                      <p className="text-gray-300 text-sm">AI analysis provides personalized health guidance based on your symptoms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mt-1 mr-4">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Clear Guidance</h4>
                      <p className="text-gray-300 text-sm">Know when self-care is appropriate and when to seek professional help</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-5 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    onClick={handleWhatsAppRedirect}
                  >
                    <Smartphone className="mr-2 h-5 w-5" /> 
                    Try on WhatsApp Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Demo player */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mr-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">आरोग्य सेतु</h2>
                      <p className="text-gray-400">AI Health Assistant</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full px-4 py-1 backdrop-blur-sm border border-purple-500/20">
                    <span className="text-purple-300 text-sm">Step {currentStep + 1} of {demoSteps.length}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-white mb-2">{demoSteps[currentStep].title}</h3>
                  <div className="w-full bg-gray-800/50 rounded-full h-2 mb-1">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 mb-6 min-h-96">
                  {/* Chat display */}
                  <div className="flex flex-col space-y-4">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3 max-w-xs md:max-w-md">
                        <div className="text-right mb-1">
                          <span className="text-xs text-gray-400">You</span>
                        </div>
                        <p className="text-gray-200">{demoSteps[currentStep].user}</p>
                      </div>
                    </div>
                    
                    {/* Bot response */}
                    <div className="flex justify-start">
                      <div className="bg-gray-700/50 border border-gray-700 rounded-lg p-3 max-w-xs md:max-w-md">
                        <div className="flex items-center mb-1">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mr-2">
                            <Activity className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs text-gray-400">आरोग्य सेतु</span>
                        </div>
                        <p className="text-gray-200 whitespace-pre-line">{demoSteps[currentStep].bot}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 rounded-lg p-3 mb-6 border border-purple-500/20">
                  <div className="flex items-start">
                    <div className="text-purple-400 mr-2 mt-1">💡</div>
                    <p className="text-gray-300 text-sm">{demoSteps[currentStep].annotation}</p>
                  </div>
                </div>
                
                {/* Player controls */}
                <div className="flex items-center justify-between">
                  <Button 
                    variant="outline"
                    size="icon"
                    className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                  
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline"
                      size="icon"
                      className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                      onClick={moveToPrevStep}
                    >
                      <SkipBack className="h-5 w-5" />
                    </Button>
                    
                    {isPlaying ? (
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 w-12 h-12 rounded-full"
                        onClick={pauseDemo}
                      >
                        <Pause className="h-5 w-5" />
                      </Button>
                    ) : (
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 w-12 h-12 rounded-full"
                        onClick={startDemo}
                      >
                        <PlayCircle className="h-5 w-5" />
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline"
                      size="icon"
                      className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                      onClick={moveToNextStep}
                    >
                      <SkipForward className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="w-8"></div> {/* Empty space for balance */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPlayer;