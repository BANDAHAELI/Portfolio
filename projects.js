import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "REST API",
      description: "A scalable REST API for managing user data.",
      tech: "Node.js, Express, MongoDB",
      link: "https://github.com/yourusername/rest-api"
    },
    {
      title: "YouTube Search Website",
      description: "A website to search and display YouTube videos.",
      tech: "React.js, YouTube API",
      link: "https://youtube-search-demo.com"
    },
    {
      title: "WhatsApp Bot",
      description: "An automated bot for WhatsApp messaging.",
      tech: "Python, Twilio API",
      link: "https://github.com/yourusername/whatsapp-bot"
    }
  ];

  return (
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-neon-green">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <p className="text-gray-400 mt-2"><strong>Tech Stack:</strong> {project.tech}</p>
            <a href={project.link} className="text-neon-green hover:underline mt-4 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
