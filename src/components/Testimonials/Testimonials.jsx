const testimonials = [
  {
    name: "Sarah K.",
    role: "Startup Founder",
    feedback:
      "TaskNexus helped me find the perfect developer quickly and easily. The process was smooth and the freelancer delivered on time.",
  },
  {
    name: "David L.",
    role: "Freelancer",
    feedback:
      "I have landed multiple projects through TaskNexus. The platform is user-friendly and the payments are always secure.",
  },
  {
    name: "Priya M.",
    role: "Marketing Manager",
    feedback:
      "Great platform with a diverse talent pool. I highly recommend TaskNexus for hiring freelance professionals.",
  },
];

const Testimonials = () => (
  <section className=" py-16 px-6">
    <div className="container px-3 lg:px-0 mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, feedback }, idx) => (
          <div
            key={idx}
            className="border border-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-default"
          >
            <p className=" mb-4">{feedback}"</p>
            <h3 className="text-lg font-semibold ">{name}</h3>
            <p className="text-sm ">{role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
