import { Globe, MapPin } from "lucide-react";

export default function CurrentOrganization({ org }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4 text-gray-600">Current Organization</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-400">ORGANIZATION NAME</p>
          <p className=" text-gray-800 font-semibold">{org.name}</p>

          <a
            href={org.website}
            className="text-blue-600 text-sm flex items-center gap-1"
          >
            <Globe size={14} /> {org.website}
          </a>
        </div>

        <div>
          <p className="text-xs text-gray-400">YOUR PRIVILEGES</p>
          <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
            {org.role}
          </span>

          <p className="mt-2 text-xs text-gray-400">SECTOR</p>
          <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
            {org.sector}
          </span>
        </div>
      </div>

      <hr className="my-4" />

      <h3 className="font-medium mb-2 text-gray-400">Leadership Team</h3>
      <div className="border rounded-lg p-4 w-fit">
        <p className="font-semibold">
          <span className="text-black">{org.leader.name}{" "}</span>
          <span className="text-xs text-blue-600 bg-blue-100 p-1 rounded-sm mb-3">{org.leader.title}</span>
        </p>
        <p className="text-sm text-gray-500">{org.leader.email}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500 flex items-center gap-1">
        <MapPin size={14} /> {org.location}
      </div>
    </div>
  );
}