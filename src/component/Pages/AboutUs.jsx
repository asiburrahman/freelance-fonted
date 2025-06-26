import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-base-200 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Website Description */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to FreelanceNation</h2>
          <p className="max-w-3xl mx-auto leading-relaxed">
            FreelanceNation is a modern freelance service platform that bridges the gap between clients and talented professionals. 
            Whether you're looking to hire or get hired, we provide a secure, fast, and user-friendly environment where tasks meet talent. 
            With real-time communication, smart bidding, and easy task management, FreelanceNation is your all-in-one freelance workspace.
          </p>
        </div>

        {/* Our Services */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-base-100 p-6 rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold">💼 Our Services</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Post and manage freelance tasks effortlessly</li>
              <li>Browse skilled freelancers in various fields</li>
              <li>Secure bidding and hiring functionality</li>
              <li>Real-time task updates and notifications</li>
              <li>User authentication with role-based access</li>
            </ul>
          </div>

          {/* What You Can Do */}
          <div className="bg-base-100 p-6 rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold">🌐 What You Can Do</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Create, update, and delete your tasks</li>
              <li>Bid on tasks relevant to your expertise</li>
              <li>Track your posted and assigned tasks</li>
              <li>Manage your freelancer/client profile</li>
              <li>Collaborate and communicate seamlessly</li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-base-100 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">🎯 How FreelanceNation Helps You</h3>
          <p className="leading-relaxed text-justify">
            FreelanceNation empowers users by providing a simplified freelance workflow. It reduces time spent searching for clients or freelancers by offering categorized tasks, powerful search tools, and quick bids. 
            Freelancers can boost their visibility and clients can ensure quality work — all in a well-organized, intuitive platform. Our mobile-friendly, accessible, and secure system supports productivity whether you’re a part-time gig worker or a growing business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
