import { Building2, Globe, Check } from "lucide-react";

export default function AllOrganizations({ organizations }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      

      <div className="flex items-center gap-2 mb-1">
        <Building2 className="text-blue-600" size={18} />
        <h2 className="font-semibold text-gray-600">All Organizations</h2>
      </div>


     
      {organizations.map((org) => (
        <div
          key={org.id}
          className="border rounded-xl p-5 space-y-4"
        >
         
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-gray-900">
              {org.name}
            </h3>

            {org.isCurrent && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded">
                <Check size={12} />
                Current
              </span>
            )}
          </div>

          
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-700">
              {org.sector}
            </span>

            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded">
               Member
            </span>
          </div>

          
          <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white">
            {org.description}
          </div>

          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a
              href={org.website}
              className="text-blue-600 flex items-center gap-1"
            >
              <Globe size={14} />
              {org.website}
            </a>

            <span className="flex items-center gap-1">
              {org.membershipsCount} Active Membership
            </span>
          </div>

          <hr />

        
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">
              Your Memberships
            </p>

            <div className="flex gap-2">
              {org.memberships.map((role) => (
                <span
                  key={role}
                  className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}