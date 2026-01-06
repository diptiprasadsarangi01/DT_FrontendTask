import { FolderKanban, Clock } from "lucide-react";

export default function MyProjects({ projects }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      
      
      <div className="flex items-center gap-2 mb-1">
        <FolderKanban className="text-blue-600" size={18} />
        <h2 className="font-semibold text-gray-600">My Projects</h2>
      </div>


    
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-xl p-4 space-y-3"
          >
            
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">
                {project.name}
              </h3>

              <span
                className={`px-2 py-0.5 text-xs rounded ${
                  project.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            
            <p className="text-sm text-gray-600">
              {project.description}
            </p>

            
            <p className="text-sm">
              <span className="text-gray-400">Role:</span>{" "}
              <span className="text-gray-500">{project.role}</span>
            </p>

           
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <hr />

           
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={12} />
              Last updated {project.lastUpdated}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}