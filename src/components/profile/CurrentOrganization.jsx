import { Globe,ShieldCheck,Layers, MapPin } from "lucide-react";

export default function CurrentOrganization({ org }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4 text-gray-600">Current Organization</h2>
      <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase">
        Overview
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="border rounded-xl p-4 space-y-2">
          <p className="text-xs text-gray-400 uppercase">
            Organization Name
          </p>
          <p className="font-medium text-gray-900">{org.name}</p>

          <p className="text-xs text-gray-400 uppercase mt-3">
            Website
          </p>
          <a
            href={org.website}
            className="text-sm text-blue-600 flex items-center gap-1"
          >
            <Globe size={14} />
            {org.website}
          </a>
        </div>


        <div className="border rounded-xl p-4 space-y-3">
          <div>
            <p className="text-xs text-gray-400 uppercase">
              Your Privileges
            </p>
            <span className="inline-flex items-center gap-1 px-2 py-1 mt-1 text-xs bg-green-100 text-green-700 rounded">
              <ShieldCheck size={12} />
              Member
            </span>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase">
              Sector
            </p>
            <span className="inline-flex items-center gap-1 px-2 py-1 mt-1 text-xs bg-blue-100 text-blue-700 rounded">
              <Layers size={12} />
              Education Technology
            </span>
          </div>
        </div>
      </div>

     
      <div className="mt-4 border rounded-xl p-4">
        <p className="text-xs text-gray-400 uppercase mb-1">
          About
        </p>
        <p className="text-sm text-gray-700">
          DeepThought is a platform for Education Technology
        </p>
      </div>

      <hr className="my-4" />

      <h3 className="font-medium mb-2 text-gray-400">Leadership Team</h3>
      <div className="border rounded-lg p-4 w-fit">
        <p className="font-semibold">
          <span className="text-black">{org.leader.name}{" "}</span>
          <span className="text-xs text-blue-600 bg-blue-100 p-1 rounded-sm mb-3">{org.leader.title}</span>
        </p>
        <p className="text-sm text-gray-500">{org.leader.email}</p>
        <p className="text-sm text-gray-500">{org.leader.phone}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500 flex items-center gap-1">
        <MapPin size={14} /> {org.location}
      </div>
    </div>
  );
}