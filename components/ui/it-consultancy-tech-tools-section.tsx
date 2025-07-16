"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const techTabs = [
	{
		label: "Strategy & Planning",
		skills: [
			{ name: "Microsoft Visio", icon: <Icon icon="logos:microsoft-icon" className="w-7 h-7" /> },
			{ name: "Lucidchart", icon: <Icon icon="simple-icons:lucidchart" className="w-7 h-7" /> },
			{ name: "Miro", icon: <Icon icon="logos:miro" className="w-7 h-7" /> },
			{ name: "Draw.io", icon: <Icon icon="simple-icons:diagramsdotnet" className="w-7 h-7" /> },
			{ name: "Toggl Plan", icon: <Icon icon="logos:toggl" className="w-7 h-7" /> },
			{ name: "Monday.com", icon: <Icon icon="logos:monday-icon" className="w-7 h-7" /> },
			{ name: "Notion", icon: <Icon icon="logos:notion-icon" className="w-7 h-7" /> },
		],
	},
	{
		label: "Cloud Platforms",
		skills: [
			{ name: "AWS", icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
			{ name: "Microsoft Azure", icon: <Icon icon="logos:microsoft-azure" className="w-7 h-7" /> },
			{ name: "Google Cloud", icon: <Icon icon="logos:google-cloud" className="w-7 h-7" /> },
			{ name: "IBM Cloud", icon: <Icon icon="logos:ibm" className="w-7 h-7" /> },
			{ name: "Oracle Cloud", icon: <Icon icon="logos:oracle" className="w-7 h-7" /> },
			{ name: "DigitalOcean", icon: <Icon icon="logos:digitalocean" className="w-7 h-7" /> },
		],
	},
	{
		label: "Enterprise Software",
		skills: [
			{ name: "Salesforce", icon: <Icon icon="logos:salesforce" className="w-7 h-7" /> },
			{ name: "SAP", icon: <Icon icon="logos:sap" className="w-7 h-7" /> },
			{ name: "Microsoft 365", icon: <Icon icon="logos:microsoft-office" className="w-7 h-7" /> },
			{ name: "ServiceNow", icon: <Icon icon="simple-icons:servicenow" className="w-7 h-7" /> },
			{ name: "Workday", icon: <Icon icon="simple-icons:workday" className="w-7 h-7" /> },
			{ name: "Oracle ERP", icon: <Icon icon="logos:oracle" className="w-7 h-7" /> },
			{ name: "Dynamics 365", icon: <Icon icon="logos:microsoft-icon" className="w-7 h-7" /> },
		],
	},
	{
		label: "Analytics & BI",
		skills: [
			{ name: "Power BI", icon: <Icon icon="logos:microsoft-power-bi" className="w-7 h-7" /> },
			{ name: "Tableau", icon: <Icon icon="logos:tableau" className="w-7 h-7" /> },
			{ name: "Qlik Sense", icon: <Icon icon="simple-icons:qlik" className="w-7 h-7" /> },
			{ name: "Looker", icon: <Icon icon="simple-icons:looker" className="w-7 h-7" /> },
			{ name: "Grafana", icon: <Icon icon="logos:grafana" className="w-7 h-7" /> },
			{ name: "Splunk", icon: <Icon icon="logos:splunk" className="w-7 h-7" /> },
			{ name: "ElasticSearch", icon: <Icon icon="logos:elasticsearch" className="w-7 h-7" /> },
		],
	},
	{
		label: "Security & Compliance",
		skills: [
			{ name: "CrowdStrike", icon: <Icon icon="simple-icons:crowdstrike" className="w-7 h-7" /> },
			{ name: "Okta", icon: <Icon icon="simple-icons:okta" className="w-7 h-7" /> },
			{ name: "Palo Alto", icon: <Icon icon="simple-icons:paloaltonetworks" className="w-7 h-7" /> },
			{ name: "Fortinet", icon: <Icon icon="simple-icons:fortinet" className="w-7 h-7" /> },
			{ name: "Qualys", icon: <Icon icon="simple-icons:qualys" className="w-7 h-7" /> },
			{ name: "Rapid7", icon: <Icon icon="simple-icons:rapid7" className="w-7 h-7" /> },
			{ name: "Tenable", icon: <Icon icon="simple-icons:tenable" className="w-7 h-7" /> },
		],
	},
	{
		label: "Project Management",
		skills: [
			{ name: "Jira", icon: <Icon icon="logos:jira" className="w-7 h-7" /> },
			{ name: "Confluence", icon: <Icon icon="logos:confluence" className="w-7 h-7" /> },
			{ name: "Asana", icon: <Icon icon="logos:asana" className="w-7 h-7" /> },
			{ name: "Trello", icon: <Icon icon="logos:trello" className="w-7 h-7" /> },
			{ name: "Microsoft Project", icon: <Icon icon="logos:microsoft-icon" className="w-7 h-7" /> },
			{ name: "Smartsheet", icon: <Icon icon="simple-icons:smartsheet" className="w-7 h-7" /> },
			{ name: "ClickUp", icon: <Icon icon="simple-icons:clickup" className="w-7 h-7" /> },
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

			<motion.div
				className="mt-20"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
			>
				<div className="mx-auto w-full max-w-[1100px]">
					<div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
						{/* Tab Selector - Desktop Vertical */}
						<div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] custom-scrollbar hidden md:flex">
							{techTabs.map((tab, idx) => (
								<button
									key={tab.label}
									className={`flex justify-between items-center px-4 py-3 rounded-xl text-left transition-all font-semibold text-lg tracking-wide ${
										activeTab === idx
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
						<div className="bg-blue-900 text-white p-2 flex md:hidden flex-row gap-3 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
							{techTabs.map((tab, idx) => (
								<button
									key={tab.label}
									className={`flex items-center px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all snap-center min-w-[180px] max-w-[220px] flex-shrink-0 overflow-hidden ${
										activeTab === idx
											? "bg-blue-800 shadow text-white"
											: "bg-blue-700/70 text-gray-200 hover:bg-blue-800/80"
									}`}
									onClick={() => setActiveTab(idx)}
									style={{ textOverflow: 'ellipsis' }}
								>
									<span className="mr-2 font-bold">{`0${idx+1}.`}</span>
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
						<div className="w-full bg-[#efefef] dark:bg-white p-2 min-h-[110px] flex md:hidden items-center">
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