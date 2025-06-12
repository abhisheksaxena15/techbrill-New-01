import PageHeader from "@/components/page-header"
import TechnologyCard from "@/components/technology-card"
import { Button } from "@/components/ui/button"

export default function TechnologiesPage() {
  const technologies = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" },
    { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Joomla", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg" },
    { name: "Sitefinity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotcms/dotcms-original.svg" },
    { name: "ChatBot", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" },
    { name: "ML & AI", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149643.png" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ]

  return (
    <>
      <PageHeader title="Technologies" description="Cutting-edge technologies powering our solutions" />

      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Driven by innovation, powered by the right <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              We leverage the latest technologies to build robust, scalable, and future-proof solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Transforming business with latest <span className="text-primary italic">Trends & Technologies</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We stay at the forefront of technological advancements to provide innovative solutions that give your
                business a competitive edge.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Cloud Computing",
                    description: "Leverage the power of cloud for scalable, secure, and cost-effective solutions.",
                  },
                  {
                    title: "Artificial Intelligence",
                    description: "Implement AI-driven solutions to automate processes and gain valuable insights.",
                  },
                  {
                    title: "Internet of Things (IoT)",
                    description: "Connect devices and systems to create smart, integrated environments.",
                  },
                  {
                    title: "Blockchain",
                    description: "Utilize blockchain technology for secure, transparent, and efficient transactions.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button>Explore Our Technologies</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Web Technologies",
                  items: ["React", "Vue.js", "Node.js", "Express", "Next.js", "Django", "Ruby on Rails"],
                },
                {
                  title: "Mobile Technologies",
                  items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
                },
                {
                  title: "Database Technologies",
                  items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "Elasticsearch"],
                },
                {
                  title: "DevOps Tools",
                  items: ["Docker", "Kubernetes", "Jenkins", "Git", "AWS", "Azure", "Google Cloud"],
                },
              ].map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="!text-gray-700 dark:!text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
