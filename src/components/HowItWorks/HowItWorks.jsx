const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and build a detailed profile to showcase your skills or company needs. Upload a portfolio, add your expertise, and make your profile stand out to attract the best clients or freelancers.",
  },
  {
    title: "Find Projects or Talent",
    description:
      "Browse available projects or search through qualified freelancers with ease. Use filters, read reviews, and compare proposals to select the best match for your needs or skills.",
  },
  {
    title: "Collaborate and Get Paid",
    description:
      "Communicate seamlessly through our integrated messaging tools. Manage project milestones, submit work, and receive payments securely with TaskNexus’s trusted escrow system ensuring protection for both parties.",
  },
];

const HowItWorks = () => (
  <section className="bg-white py-16 px-6">
    <div className="container px-3 lg:px-0 mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">How TaskNexus Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map(({ title, description }, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-default"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {`${idx + 1}. ${title}`}
            </h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
