import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechStackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allTechnologies = [
    // Generative AIs (indices 0-4)
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      description: "Leading AI research and deployment company providing GPT models and advanced language processing capabilities."
    },
    {
      name: "DALL-E",
      logo: "https://i.pinimg.com/736x/7e/ee/2f/7eee2fc41654561afbe2ded749b06b29.jpg",
      description: "AI system that creates realistic images and art from natural language descriptions."
    },
    {
      name: "Midjourney",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Midjourney_logo.svg/330px-Midjourney_logo.svg.png",
      description: "AI-powered image generation tool that creates high-quality artwork from text prompts."
    },
    {
      name: "Perplexity",
      logo: "https://cdn.brandfetch.io/idNdawywEZ/w/800/h/800/theme/dark/idy0gCuAWE.png?c=1dxbfHSJFAPEGdCLU4o5B",
      description: "AI-powered search engine that provides accurate, real-time answers with source citations."
    },
    {
      name: "Gemini",
      logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
      description: "Google's most capable AI model with multimodal reasoning capabilities."
    },
    // ML Ops (indices 5-10)
    {
      name: "LangChain",
      logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0",
      description: "Framework for developing applications powered by language models with chaining capabilities."
    },
    {
      name: "MLflow",
      logo: "https://mlflow.org/docs/latest/images/logo-light.svg",
      description: "Open source platform for managing the complete machine learning lifecycle."
    },
    {
      name: "Comet ML",
      logo: "https://uber.comet.ml/site/wp-content/uploads/2022/05/comet-logo.svg",
      description: "Machine learning platform for tracking experiments, managing models, and monitoring production."
    },
    {
      name: "Metaflow",
      logo: "https://metaflow.org/images/metaflow.svg",
      description: "Human-friendly Python library for building and managing real-life data science projects."
    },
    {
      name: "Evidently",
      logo: "https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/66180fbf4f40e9ed73ca2d39_evidently_ai_logo_fi.png",
      description: "Open-source ML monitoring framework for data and model quality evaluation."
    },
    {
      name: "Fiddler",
      logo: "https://cdn.prod.website-files.com/67fda64a156dc33e1842992b/67fda64a156dc33e1842a198_651f09696bb7f6d238c323ce_fiddler-ai-logo.svg",
      description: "AI observability platform for monitoring, explaining, and analyzing ML models in production."
    },
    // Deep Learning Libraries (indices 11-15)
    {
      name: "Keras",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      description: "High-level neural networks API written in Python, running on top of TensorFlow."
    },
    {
      name: "Hugging Face",
      logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
      description: "Platform providing pre-trained models and tools for natural language processing."
    },
    {
      name: "PyTorch Lightning",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/250px-PyTorch_logo_icon.svg.png",
      description: "Lightweight PyTorch wrapper for high-performance AI research and production."
    },
    {
      name: "Scikit Learn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/120px-Scikit_learn_logo_small.svg.png?20180808062052",
      description: "Deep learning library that provides high-level components for state-of-the-art results."
    },
    {
      name: "TensorFlow",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/112px-Tensorflow_logo.svg.png?20170429160244",
      description: "Open-source machine learning framework for building and deploying ML models."
    },
    // Data Analysis & Visualization (indices 16-21)
    {
      name: "Pandas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/250px-Pandas_mark.svg.png",
      description: "Powerful data manipulation and analysis library for Python programming language."
    },
    {
      name: "NumPy",
      logo: "https://numpy.org/images/logo.svg",
      description: "Fundamental package for scientific computing with Python, providing N-dimensional arrays."
    },
    {
      name: "Matplotlib",
      logo: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png",
      description: "Comprehensive library for creating static, animated, and interactive visualizations in Python."
    },
    {
      name: "Seaborn",
      logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      description: "Statistical data visualization library based on matplotlib with high-level interface."
    },
    {
      name: "Tableau",
      logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png",
      description: "Leading data visualization software that helps people see and understand data."
    },
    {
      name: "Bokeh",
      logo: "https://static.bokeh.org/logos/logotype.svg",
      description: "Interactive visualization library for modern web browsers with elegant, concise graphics."
    }
  ];

  const cardConfigurations = [
    {
      techIndices: [0, 1, 2, 3, 4], // OpenAI, Dall E, Midjourney, Perplexity, Gemini
      title: "Generative AIs"
    },
    {
      techIndices: [5, 6, 7, 8, 9, 10], // langchain, ML flow, Comet ML, Metaflow, Evidently, Fiddler
      title: "ML Ops"
    },
    {
      techIndices: [11, 12, 13, 14, 15], // keras, hugging face, Pytorch lightning, fast.ai, TensorFlow
      title: "Deep Learning Libraries"
    },
    {
      techIndices: [16, 17, 18, 19, 20, 21], // pandas, numpy, matplotlib, seaborn, tableau, bokeh
      title: "Data Analysis & Visualization"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cardConfigurations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cardConfigurations.length) % cardConfigurations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getGridCols = (count: number): string => {
    if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
    if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
    return 'grid-cols-2 md:grid-cols-3';
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-500">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
                Our Technology Stack
              </h2>
              <div className="h-1 w-28 bg-blue-800 mb-6" />
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We leverage cutting-edge technologies to deliver exceptional digital solutions and drive innovation in every project we undertake.
              </p>
            </div>
          </div>

          {/* Right Side - Tech Cards Display */}
          <div className="relative">
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
              <button
                onClick={prevSlide}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white p-3 rounded-full shadow-lg border transition-all duration-300 hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white p-3 rounded-full shadow-lg border transition-all duration-300 hover:shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {cardConfigurations.map((card, cardIndex) => {
                  const cardTechnologies = card.techIndices.map(index => allTechnologies[index]);
                  return (
                    <div key={cardIndex} className="min-w-full">
                      <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 min-h-[400px] shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                          {card.title}
                        </h3>
                        <div className={`grid ${getGridCols(cardTechnologies.length)} gap-6 h-full`}>
                          {cardTechnologies.map((tech, techIndex) => (
                            <div 
                              key={techIndex} 
                              className="flex flex-col items-center justify-center text-center space-y-4 hover:scale-105 transition-all duration-300 cursor-pointer group p-4"
                            >
                              <div className="w-20 h-20 flex items-center justify-center mb-2">
                                <img 
                                  src={tech.logo} 
                                  alt={`${tech.name} logo`}
                                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              </div>
                              <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                                {tech.name}
                              </h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {cardConfigurations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 dark:bg-blue-400 w-8' 
                      : 'bg-gray-400 dark:bg-gray-600 hover:opacity-80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;