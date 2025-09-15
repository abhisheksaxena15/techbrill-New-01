// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// const TechStackSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const allTechnologies = [
//     // Generative AIs (indices 0-4)
//     {
//       name: "OpenAI",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
//       description: "Leading AI research and deployment company providing GPT models and advanced language processing capabilities."
//     },
//     {
//       name: "DALL-E",
//       logo: "https://i.pinimg.com/736x/7e/ee/2f/7eee2fc41654561afbe2ded749b06b29.jpg",
//       description: "AI system that creates realistic images and art from natural language descriptions."
//     },
//     {
//       name: "Midjourney",
//       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Midjourney_logo.svg/330px-Midjourney_logo.svg.png",
//       description: "AI-powered image generation tool that creates high-quality artwork from text prompts."
//     },
//     {
//       name: "Perplexity",
//       logo: "https://cdn.brandfetch.io/idNdawywEZ/w/800/h/800/theme/dark/idy0gCuAWE.png?c=1dxbfHSJFAPEGdCLU4o5B",
//       description: "AI-powered search engine that provides accurate, real-time answers with source citations."
//     },
//     {
//       name: "Gemini",
//       logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
//       description: "Google's most capable AI model with multimodal reasoning capabilities."
//     },
//     // ML Ops (indices 5-10)
//     {
//       name: "LangChain",
//       logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0",
//       description: "Framework for developing applications powered by language models with chaining capabilities."
//     },
//     {
//       name: "MLflow",
//       logo: "https://mlflow.org/docs/latest/images/logo-light.svg",
//       description: "Open source platform for managing the complete machine learning lifecycle."
//     },
//     {
//       name: "Comet ML",
//       logo: "https://uber.comet.ml/site/wp-content/uploads/2022/05/comet-logo.svg",
//       description: "Machine learning platform for tracking experiments, managing models, and monitoring production."
//     },
//     {
//       name: "Metaflow",
//       logo: "https://metaflow.org/images/metaflow.svg",
//       description: "Human-friendly Python library for building and managing real-life data science projects."
//     },
//     {
//       name: "Evidently",
//       logo: "https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/66180fbf4f40e9ed73ca2d39_evidently_ai_logo_fi.png",
//       description: "Open-source ML monitoring framework for data and model quality evaluation."
//     },
//     {
//       name: "Fiddler",
//       logo: "https://cdn.prod.website-files.com/67fda64a156dc33e1842992b/67fda64a156dc33e1842a198_651f09696bb7f6d238c323ce_fiddler-ai-logo.svg",
//       description: "AI observability platform for monitoring, explaining, and analyzing ML models in production."
//     },
//     // Deep Learning Libraries (indices 11-15)
//     {
//       name: "Keras",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
//       description: "High-level neural networks API written in Python, running on top of TensorFlow."
//     },
//     {
//       name: "Hugging Face",
//       logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
//       description: "Platform providing pre-trained models and tools for natural language processing."
//     },
//     {
//       name: "PyTorch Lightning",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/250px-PyTorch_logo_icon.svg.png",
//       description: "Lightweight PyTorch wrapper for high-performance AI research and production."
//     },
//     {
//       name: "Scikit Learn",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/120px-Scikit_learn_logo_small.svg.png?20180808062052",
//       description: "Deep learning library that provides high-level components for state-of-the-art results."
//     },
//     {
//       name: "TensorFlow",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/112px-Tensorflow_logo.svg.png?20170429160244",
//       description: "Open-source machine learning framework for building and deploying ML models."
//     },
//     // Data Analysis & Visualization (indices 16-21)
//     {
//       name: "Pandas",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/250px-Pandas_mark.svg.png",
//       description: "Powerful data manipulation and analysis library for Python programming language."
//     },
//     {
//       name: "NumPy",
//       logo: "https://numpy.org/images/logo.svg",
//       description: "Fundamental package for scientific computing with Python, providing N-dimensional arrays."
//     },
//     {
//       name: "Matplotlib",
//       logo: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png",
//       description: "Comprehensive library for creating static, animated, and interactive visualizations in Python."
//     },
//     {
//       name: "Seaborn",
//       logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
//       description: "Statistical data visualization library based on matplotlib with high-level interface."
//     },
//     {
//       name: "Tableau",
//       logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png",
//       description: "Leading data visualization software that helps people see and understand data."
//     },
//     {
//       name: "Bokeh",
//       logo: "https://static.bokeh.org/logos/logotype.svg",
//       description: "Interactive visualization library for modern web browsers with elegant, concise graphics."
//     }
//   ];

//   const cardConfigurations = [
//     {
//       techIndices: [0, 1, 2, 3, 4], // OpenAI, Dall E, Midjourney, Perplexity, Gemini
//       title: "Generative AIs"
//     },
//     {
//       techIndices: [5, 6, 7, 8, 9, 10], // langchain, ML flow, Comet ML, Metaflow, Evidently, Fiddler
//       title: "ML Ops"
//     },
//     {
//       techIndices: [11, 12, 13, 14, 15], // keras, hugging face, Pytorch lightning, fast.ai, TensorFlow
//       title: "Deep Learning Libraries"
//     },
//     {
//       techIndices: [16, 17, 18, 19, 20, 21], // pandas, numpy, matplotlib, seaborn, tableau, bokeh
//       title: "Data Analysis & Visualization"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % cardConfigurations.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + cardConfigurations.length) % cardConfigurations.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Responsive grid columns
//   const getGridCols = (count: number): string => {
//     if (count <= 2) return 'grid-cols-1 sm:grid-cols-2';
//     if (count <= 4) return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3';
//     return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3';
//   };

//   return (
//     <section className="min-h-[60vh] sm:min-h-[70vh] md:min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-500">
//       <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
//         <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">

//           {/* Left Side - Text Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}>
//                 Our Technology Stack
//               </motion.h2>
//               <div className="h-1 w-20 sm:w-28 bg-blue-800 mb-4 sm:mb-6" />
//               <motion.p
//                 className="text-xl text-gray-600 dark:text-gray-400"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 We leverage cutting-edge technologies to deliver exceptional digital solutions and drive innovation in every project we undertake.
//               </motion.p>

//               <motion.h2
//                 className="text-3xl md:text-4xl font-bold mb-2 text-black"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//               >
//               </motion.h2>
//             </div>
//           </div>

//           {/* Right Side - Tech Cards Display */}
//           <div className="relative">
//             {/* Navigation Arrows */}
//             <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-10 px-2 sm:px-4">
//               <button
//                 onClick={prevSlide}
//                 className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white p-2 sm:p-3 rounded-full shadow-lg border transition-all duration-300 hover:shadow-xl"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white p-2 sm:p-3 rounded-full shadow-lg border transition-all duration-300 hover:shadow-xl"
//                 aria-label="Next slide"
//               >
//                 <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>
//             </div>

//             <div className="overflow-hidden rounded-2xl">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//               >
//                 {cardConfigurations.map((card, cardIndex) => {
//                   const cardTechnologies = card.techIndices.map(index => allTechnologies[index]);
//                   return (
//                     <div key={cardIndex} className="min-w-full">
//                       <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-4 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[380px] md:min-h-[400px] shadow-lg">
//                         <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 text-center">
//                           {card.title}
//                         </h3>
//                         <div className={`grid ${getGridCols(cardTechnologies.length)} gap-3 sm:gap-4 md:gap-6 h-full`}>
//                           {cardTechnologies.map((tech, techIndex) => (
//                             <div
//                               key={techIndex}
//                               className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-2 md:space-y-4 hover:scale-105 transition-all duration-300 cursor-pointer group p-2 sm:p-4"
//                             >
//                               <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-1 sm:mb-2">
//                                 <img
//                                   src={tech.logo}
//                                   alt={`${tech.name} logo`}
//                                   className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
//                                   onError={(e) => {
//                                     (e.target as HTMLImageElement).style.display = 'none';
//                                   }}
//                                 />
//                               </div>
//                               <h4 className="font-semibold text-xs sm:text-base md:text-lg text-gray-800 dark:text-white">
//                                 {tech.name}
//                               </h4>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Navigation Dots */}
//             <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-8">
//               {cardConfigurations.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`h-2 w-6 sm:h-3 sm:w-8 rounded-full transition-all duration-300 ${index === currentIndex
//                       ? 'bg-blue-600 dark:bg-blue-400'
//                       : 'bg-gray-400 dark:bg-gray-600 hover:opacity-80'
//                     }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStackSection;



// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";

// const techTabs = [
// 	{
// 		label: "Generative AIs",
// 		skills: [
// 			{ name: "Microsoft Visio", icon: <Icon icon="logos:microsoft-icon" className="w-7 h-7" /> },
// 			{ name: "Lucidchart", icon: <Icon icon="simple-icons:lucidchart" className="w-7 h-7" /> },
// 			{ name: "Miro", icon: <Icon icon="logos:miro" className="w-7 h-7" /> },
// 			{ name: "Draw.io", icon: <Icon icon="simple-icons:diagramsdotnet" className="w-7 h-7" /> },
// 			{ name: "Toggl Plan", icon: <Icon icon="logos:toggl" className="w-7 h-7" /> },
// 			{ name: "Monday.com", icon: <Icon icon="logos:monday-icon" className="w-7 h-7" /> },
// 			{ name: "Notion", icon: <Icon icon="logos:notion-icon" className="w-7 h-7" /> },
// 		],
// 	},
// 	{
// 		label: "ML Ops",
// 		skills: [
// 			{ name: "AWS", icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
// 			{ name: "Microsoft Azure", icon: <Icon icon="logos:microsoft-azure" className="w-7 h-7" /> },
// 			{ name: "Google Cloud", icon: <Icon icon="logos:google-cloud" className="w-7 h-7" /> },
// 			{ name: "IBM Cloud", icon: <Icon icon="logos:ibm" className="w-7 h-7" /> },
// 			{ name: "Oracle Cloud", icon: <Icon icon="logos:oracle" className="w-7 h-7" /> },
// 			{ name: "DigitalOcean", icon: <Icon icon="logos:digitalocean" className="w-7 h-7" /> },
// 		],
// 	},
// 	{
// 		label: "Deep Learning Libraries",
// 		skills: [
// 			{ name: "Salesforce", icon: <Icon icon="logos:salesforce" className="w-7 h-7" /> },
// 			{ name: "SAP", icon: <Icon icon="logos:sap" className="w-7 h-7" /> },
// 			{ name: "Microsoft 365", icon: <Icon icon="logos:microsoft-office" className="w-7 h-7" /> },
// 			{ name: "ServiceNow", icon: <Icon icon="simple-icons:servicenow" className="w-7 h-7" /> },
// 			{ name: "Workday", icon: <Icon icon="simple-icons:workday" className="w-7 h-7" /> },
// 			{ name: "Oracle ERP", icon: <Icon icon="logos:oracle" className="w-7 h-7" /> },
// 			{ name: "Dynamics 365", icon: <Icon icon="logos:microsoft-icon" className="w-7 h-7" /> },
// 		],
// 	},
// 	{
// 		label: "Data Analysis & Visualization",
// 		skills: [
// 			{ name: "Power BI", icon: <Icon icon="logos:microsoft-power-bi" className="w-7 h-7" /> },
// 			{ name: "Tableau", icon: <Icon icon="logos:tableau" className="w-7 h-7" /> },
// 			{ name: "Qlik Sense", icon: <Icon icon="simple-icons:qlik" className="w-7 h-7" /> },
// 			{ name: "Looker", icon: <Icon icon="simple-icons:looker" className="w-7 h-7" /> },
// 			{ name: "Grafana", icon: <Icon icon="logos:grafana" className="w-7 h-7" /> },
// 			{ name: "Splunk", icon: <Icon icon="logos:splunk" className="w-7 h-7" /> },
// 			{ name: "ElasticSearch", icon: <Icon icon="logos:elasticsearch" className="w-7 h-7" /> },
// 		],
// 	},
// 	{
// 		label: "Security & Compliance",
// 		skills: [
// 			{ name: "CrowdStrike", icon: <Icon icon="simple-icons:crowdstrike" className="w-7 h-7" /> },
// 			{ name: "Okta", icon: <Icon icon="simple-icons:okta" className="w-7 h-7" /> },
// 			{ name: "Palo Alto", icon: <Icon icon="simple-icons:paloaltonetworks" className="w-7 h-7" /> },
// 			{ name: "Fortinet", icon: <Icon icon="simple-icons:fortinet" className="w-7 h-7" /> },
// 			{ name: "Qualys", icon: <Icon icon="simple-icons:qualys" className="w-7 h-7" /> },
// 			{ name: "Rapid7", icon: <Icon icon="simple-icons:rapid7" className="w-7 h-7" /> },
// 			{ name: "Tenable", icon: <Icon icon="simple-icons:tenable" className="w-7 h-7" /> },
// 		],
// 	},
// 	{
// 		label: "Project Management",
// 		skills: [
// 			{ name: "Jira", icon: <Icon icon="logos:jira" className="w-7 h-7" /> },
// 			{ name: "Confluence", icon: <Icon icon="logos:confluence" className="w-7 h-7" /> },
// 			{ name: "Asana", icon: <Icon icon="logos:asana" className="w-7 h-7" /> },
// 			{ name: "Trello", icon: <Icon icon="logos:trello" className="w-7 h-7" /> },
// 			{ name: "Microsoft Project", icon: <Icon icon="logos:microsoft-icon" className="w-7 h-7" /> },
// 			{ name: "Smartsheet", icon: <Icon icon="simple-icons:smartsheet" className="w-7 h-7" /> },
// 			{ name: "ClickUp", icon: <Icon icon="simple-icons:clickup" className="w-7 h-7" /> },
// 		],
// 	},
// ];

// export default function ITConsultancyTechToolsSection() {
// 	const [activeTab, setActiveTab] = useState(0);
// 	const activeSkills = techTabs[activeTab].skills;

// 	return (
// 		<>
// 			{/* Add custom scrollbar styles */}
// 			<style jsx global>{`
// 				.custom-scrollbar::-webkit-scrollbar {
// 					width: 8px;
// 					height: 8px;
// 				}
// 				.custom-scrollbar::-webkit-scrollbar-track {
// 					background: rgba(59, 130, 246, 0.1);
// 					border-radius: 4px;
// 				}
// 				.custom-scrollbar::-webkit-scrollbar-thumb {
// 					background: rgba(59, 130, 246, 0.5);
// 					border-radius: 4px;
// 				}
// 				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
// 					background: rgba(59, 130, 246, 0.7);
// 				}

// 				.mobile-scrollbar::-webkit-scrollbar {
// 					width: 4px;
// 					height: 4px;
// 				}
// 				.mobile-scrollbar::-webkit-scrollbar-track {
// 					background: rgba(59, 130, 246, 0.1);
// 					border-radius: 2px;
// 				}
// 				.mobile-scrollbar::-webkit-scrollbar-thumb {
// 					background: rgba(59, 130, 246, 0.4);
// 					border-radius: 2px;
// 				}
// 				.mobile-scrollbar::-webkit-scrollbar-thumb:hover {
// 					background: rgba(59, 130, 246, 0.6);
// 				}
// 			`}</style>

// 			<motion.div
// 				className="mt-20"
// 				initial={{ opacity: 0, y: 30 }}
// 				whileInView={{ opacity: 1, y: 0 }}
// 				viewport={{ once: true, amount: 0.3 }}
// 				transition={{ duration: 0.8 }}
// 			>
// 				<div className="mx-auto w-full max-w-[1100px]">
// 					<div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
// 						{/* Tab Selector - Desktop Vertical */}
// 						<div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] custom-scrollbar hidden md:flex">
// 							{techTabs.map((tab, idx) => (
// 								<button
// 									key={tab.label}
// 									className={`flex justify-between items-center px-4 py-3 rounded-xl text-left transition-all font-semibold text-lg tracking-wide ${
// 										activeTab === idx
// 											? "bg-blue-800 shadow-lg text-white"
// 											: "hover:bg-blue-800/80 opacity-80 text-gray-200"
// 									}`}
// 									onClick={() => setActiveTab(idx)}
// 								>
// 									<span className="flex items-center">
// 										<span className={`mr-2 font-bold ${activeTab === idx ? 'text-white' : 'text-gray-300'}`}>{`0${idx + 1}.`}</span>
// 										{tab.label}
// 									</span>
// 									{activeTab === idx && <span className="ml-2 text-lg">→</span>}
// 								</button>
// 							))}
// 						</div>

// 						{/* Tab Selector - Mobile Horizontal */}
// 						<div className="bg-blue-900 text-white p-2 flex md:hidden flex-row gap-3 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
// 							{techTabs.map((tab, idx) => (
// 								<button
// 									key={tab.label}
// 									className={`flex items-center px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all snap-center min-w-[180px] max-w-[220px] flex-shrink-0 overflow-hidden ${
// 										activeTab === idx
// 											? "bg-blue-800 shadow text-white"
// 											: "bg-blue-700/70 text-gray-200 hover:bg-blue-800/80"
// 									}`}
// 									onClick={() => setActiveTab(idx)}
// 									style={{ textOverflow: 'ellipsis' }}
// 								>
// 									<span className="mr-2 font-bold">{`0${idx+1}.`}</span>
// 									<span className="truncate block w-full">{tab.label}</span>
// 								</button>
// 							))}
// 						</div>

// 						{/* Right: Skills Grid - Desktop */}
// 						<div className="w-full bg-[#efefef] dark:bg-white p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex overflow-y-auto custom-scrollbar">
// 							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
// 								{activeSkills.map((skill) => (
// 									<div
// 										key={skill.name}
// 										className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition min-h-[56px] text-neutral-800"
// 									>
// 										<div className="w-8 h-8 flex items-center justify-center shrink-0">
// 											{skill.icon}
// 										</div>
// 										<span className="text-base font-medium text-black">{skill.name}</span>
// 									</div>
// 								))}
// 							</div>
// 						</div>

// 						{/* Mobile Carousel */}
// 						<div className="w-full bg-[#efefef] dark:bg-white p-2 min-h-[110px] flex md:hidden items-center">
// 							<div className="flex flex-row gap-4 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
// 								{activeSkills.map((skill) => (
// 									<div
// 										key={skill.name}
// 										className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm px-3 py-2 mb-4 min-w-[110px] max-w-[130px] snap-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition text-neutral-800"
// 										style={{ flex: '0 0 60%' }}
// 									>
// 										<div className="w-8 h-8 flex items-center justify-center mb-1">
// 											{skill.icon}
// 										</div>
// 										<span className="text-sm font-semibold text-blue-900 text-center">{skill.name}</span>
// 									</div>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</motion.div>
// 		</>
// 	);
// }

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

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
  const [openAccordion, setOpenAccordion] = useState(null);

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


      <section className="pt-10">
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
              Leverage intelligent technologies that empower enterprises with innovation, efficiency and lasting buiseness impact.                </h3>
            </div>
          </div>

        </div>

      </section>
      <motion.div
        className="mt-20 px-4 sm:px-6 lg:px-8"
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
                    {tab.label}
                  </span>
                  {activeTab === idx && <span className="ml-2 text-lg">→</span>}
                </button>
              ))}
            </div>

            {/* Tab Selector - Mobile Horizontal */}
            <div className="md:hidden flex flex-col gap-5 w-full bg-white py-2">
              {techTabs.map((tab, idx) => (
                <div
                  key={tab.label}
                  className="bg-blue-900 rounded-lg shadow relative"
                  style={{ borderRadius: '16px' }}
                >
                  <button
                    className="flex items-center gap-3 w-full px-4 py-4 text-white font-semibold text-left"
                    style={{
                      minHeight: "56px",
                      fontSize: "1.13rem",
                    }}
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                  >
                    {/* Serial Number as in the laptop view */}
                    {/* <span className="mr-2 font-bold text-white w-8 h-8 flex items-center justify-center">{`0${idx + 1}.`}</span> */}
                    <span>{tab.label}</span>
                    <span className="ml-auto">
                      <Icon
                        icon={openAccordion === idx ? "mdi:chevron-up" : "mdi:chevron-down"}
                        className="w-6 h-6"
                      />
                    </span>
                  </button>
                  {openAccordion === idx && (
                    <div className="bg-[#efefef] dark:bg-white px-4 py-4 rounded-b-lg transition-all duration-300">
                      <div className="flex flex-col gap-3">
                        {tab.skills.map(skill => (
                          <div
                            key={skill.name}
                            className="flex items-center gap-3 bg-white border border-gray-200 rounded-md shadow-sm px-3 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow transition text-neutral-800"
                          >
                            <div className="w-8 h-8 min-w-[32px] flex items-center justify-center shrink-0">
                              {skill.icon}
                            </div>
                            <span className="text-base font-medium text-black">{skill.name}</span>
                          </div>
                        ))}

                      </div>
                    </div>
                  )}
                </div>
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
            {/* <div className="w-full bg-[#efefef] dark:bg-white p-4 min-h-[110px] flex md:hidden items-center">
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
              </div> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}