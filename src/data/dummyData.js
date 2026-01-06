export const user = {
  name: "deep4439",
  email: "deep44@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/88604576?v=4"
};

export const organization = {
  name: "DeepThought",
  website: "https://deepthought.com",
  sector: "Education Technology",
  role: "Member",
  leader: {
    name: "Hariharan Anand",
    title: "CTO",
    email: "hariharan@gmail.com",
    phone: "+91 1234567890"
  },
  location: {
      id: "loc_1",
      city: "Hyderabad",
      state: "TG",
      country: "India",
      address: "Street No. 2, Hyderabad, TG 500007, India"
  },
};

export const memberships = {
  total: 1,
  members:{
  name:"Amresh Puri",
  designation: "spmember",
  joindate: "January 3, 2026",
  status: "Active"
  }
  
};

export const allOrganizations = [
  {
    id: "org_001",
    name: "DeepThought",
    sector: "Education Technology",
    website: "https://deepthought.com",
    isCurrent: true,
    membershipsCount: 1,
    memberships: ["member"],
    description: "DeepThought - Education Technology"
  }
];

export const projects = [
  {
    id: "proj_001",
    name: "Admin Dashboard",
    description: "Internal dashboard to manage users, analytics, and reports.",
    status: "Active",
    role: "Frontend Developer",
    techStack: ["Next.js", "Tailwind", "Node.js"],
    lastUpdated: "Jan 12, 2026"
  },
  {
    id: "proj_002",
    name: "AI Parent-Teacher Assistant",
    description:
      "AI system to summarize parent queries and share key points with teachers.",
    status: "In Progress",
    role: "Full Stack Developer",
    techStack: ["React", "Node.js", "AI API"],
    lastUpdated: "Jan 5, 2026"
  }
];