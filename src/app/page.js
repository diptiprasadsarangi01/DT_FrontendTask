import ProfileHeader from "@/components/profile/ProfileHeader";
import CurrentOrganization from "@/components/profile/CurrentOrganization";
import Memberships from "@/components/profile/Memberships";
import AllOrganization from "@/components/profile/AllOrganization";
import MyProjects from "@/components/profile/MyProjects";
import { user,organization , memberships,allOrganizations,projects  } from "@/data/dummyData";
export default function Home() {
  return (
  <>
   <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      <ProfileHeader user={user} />
      <CurrentOrganization org={organization} />
      <Memberships mem={memberships} />
      <MyProjects projects={projects} />
      <AllOrganization organizations={allOrganizations} />
    </div>
  </>
  );
}
