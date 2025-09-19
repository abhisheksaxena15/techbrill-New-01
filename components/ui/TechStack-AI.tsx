"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";




const techTabs = [
  {
    label: "Generative AIs",
    skills: [
      {
        name: "OpenAI",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="OpenAI logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "DALL-E",
        icon: <img src="https://i.pinimg.com/736x/7e/ee/2f/7eee2fc41654561afbe2ded749b06b29.jpg" alt="DALL-E logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Midjourney",
        icon: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Midjourney_logo.svg/330px-Midjourney_logo.svg.png" alt="Midjourney logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Perplexity",
        icon: <img src="https://cdn.brandfetch.io/idNdawywEZ/w/800/h/800/theme/dark/idy0gCuAWE.png?c=1dxbfHSJFAPEGdCLU4o5B" alt="Perplexity logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Gemini",
        icon: <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "ML Ops",
    skills: [
      {
        name: "LangChain",
        icon: <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0" alt="LangChain logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "MLflow",
        icon: <img src="https://mlflow.org/docs/latest/images/logo-light.svg" alt="MLflow logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Comet ML",
        icon: <img src="https://uber.comet.ml/site/wp-content/uploads/2022/05/comet-logo.svg" alt="Comet ML logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Metaflow",
        icon: <img src="https://metaflow.org/images/metaflow.svg" alt="Metaflow logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Evidently",
        icon: <img src="https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/66180fbf4f40e9ed73ca2d39_evidently_ai_logo_fi.png" alt="Evidently logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Fiddler",
        icon: <img src="https://cdn.prod.website-files.com/67fda64a156dc33e1842992b/67fda64a156dc33e1842a198_651f09696bb7f6d238c323ce_fiddler-ai-logo.svg" alt="Fiddler logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Deep Learning Libraries",
    skills: [
      {
        name: "Keras",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" alt="Keras logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Hugging Face",
        icon: <img src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg" alt="Hugging Face logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "PyTorch Lightning",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/250px-PyTorch_logo_icon.svg.png" alt="PyTorch Lightning logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Scikit Learn",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/120px-Scikit_learn_logo_small.svg.png?20180808062052" alt="Scikit Learn logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "TensorFlow",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/112px-Tensorflow_logo.svg.png?20170429160244" alt="TensorFlow logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Data Analysis & Visualization",
    skills: [
      {
        name: "Pandas",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/250px-Pandas_mark.svg.png" alt="Pandas logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "NumPy",
        icon: <img src="https://numpy.org/images/logo.svg" alt="NumPy logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Matplotlib",
        icon: <img src="https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" alt="Matplotlib logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Seaborn",
        icon: <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="Seaborn logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Tableau",
        icon: <img src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" alt="Tableau logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Bokeh",
        icon: <img src="https://static.bokeh.org/logos/logotype.svg" alt="Bokeh logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
];

export default function ITConsultancyTechToolsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSkills = techTabs[activeTab].skills;


  return (
    <>
      {/* Add custom scrollbar styles */}

      <style jsx global>{`
				.custom-scrollbar::-webkit-scrollbar {
					width: 8px;
					height: 8px;
				}
				.custom-scrollbar::-webkit-scrollbar-track {
					background: rgba(59, 130, 246, 0.1);
					border-radius: 4px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb {
					background: rgba(59, 130, 246, 0.5);
					border-radius: 4px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
					background: rgba(59, 130, 246, 0.7);
				}

				.mobile-scrollbar::-webkit-scrollbar {
					width: 4px;
					height: 4px;
				}
				.mobile-scrollbar::-webkit-scrollbar-track {
					background: rgba(59, 130, 246, 0.1);
					border-radius: 2px;
				}
				.mobile-scrollbar::-webkit-scrollbar-thumb {
					background: rgba(59, 130, 246, 0.4);
					border-radius: 2px;
				}
				.mobile-scrollbar::-webkit-scrollbar-thumb:hover {
					background: rgba(59, 130, 246, 0.6);
				}
			`}</style>

<section className="pt-16">
                  <div className="container mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                        Technologies We Use
                      </h3>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                       Intelligent Technologies Powering Global Enterprises
                      </h2>
                      <div className="h-1 w-20 bg-red-600 dark:bg-blue-400 mx-auto mt-4"></div>
                      
                      <div className="flex justify-center mt-4">
                        {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
                        <h3 className=" max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                        Leveraging intelligent technologies that empower enterprises with innovation, efficiency, and lasting business impact        </h3>
                      </div>
                    </div>
                  
                  </div>
        
                </section>

      

        <motion.div
          className="px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto w-full max-w-[1100px]">
            <div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
              {/* Tab Selector - Desktop Vertical */}
              <div className="bg-blue-900 text-white p-6 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] custom-scrollbar hidden md:flex">
                {techTabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    className={`flex justify-between items-center px-4 py-3 rounded-xl text-left transition-all font-semibold text-lg tracking-wide ${activeTab === idx
                      ? "bg-blue-800 shadow-lg text-white"
                      : "hover:bg-blue-800/80 opacity-80 text-gray-200"
                      }`}
                    onClick={() => setActiveTab(idx)}
                  >
                    <span className="flex items-center">
                      <span className={`mr-2 font-bold ${activeTab === idx ? 'text-white' : 'text-gray-300'}`}>{`0${idx + 1}.`}</span>
                      {tab.label}
                    </span>
                    {activeTab === idx && <span className="ml-2 text-lg">→</span>}
                  </button>
                ))}
              </div>

              {/* Tab Selector - Mobile Horizontal */}
              <div className="bg-blue-900 text-white p-4 flex md:hidden flex-row gap-3 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
                {techTabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    className={`flex items-center px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all snap-center min-w-[180px] max-w-[220px] flex-shrink-0 overflow-hidden ${activeTab === idx
                      ? "bg-blue-800 shadow text-white"
                      : "bg-blue-700/70 text-gray-200 hover:bg-blue-800/80"
                      }`}
                    onClick={() => setActiveTab(idx)}
                    style={{ textOverflow: 'ellipsis' }}
                  >
                    <span className="mr-2 font-bold">{`0${idx + 1}.`}</span>
                    <span className="truncate block w-full">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Right: Skills Grid - Desktop */}
              <div className="w-full bg-[#efefef] dark:bg-white p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
                  {activeSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition min-h-[56px] text-neutral-800"
                    >
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        {skill.icon}
                      </div>
                      <span className="text-base font-medium text-black">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Carousel */}
              <div className="w-full bg-[#efefef] dark:bg-white p-4 min-h-[110px] flex md:hidden items-center">
                <div className="flex flex-row gap-4 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
                  {activeSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm px-3 py-2 mb-4 min-w-[110px] max-w-[130px] snap-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition text-neutral-800"
                      style={{ flex: '0 0 60%' }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center mb-1">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-blue-900 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </>
      );
}