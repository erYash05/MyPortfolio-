import Spline from '@splinetool/react-spline';

const ExpContent = () => {
  const expContent = {
    title: "Frontend Developer Intern",
    date: "Jan 2024 - Present",
    responsibilities: [
      "Developed responsive UI components",
      "Integrated REST APIs with React",
      "Optimized web performance",
    ],
  };

  return (
    <div className="relative card-border rounded-xl p-6 overflow-hidden  shadow-lg">
  {/* Title */}
  <h1 className="font-semibold bg-amber-500 p-3 rounded-2xl text-lg relative z-10">
    Frontend Developer Intern
  </h1>

  {/* Gradient Image as Background */}
  <img 
    src="/gradient.png" 
    alt="Gradient-img" 
    className="absolute top-0 right-0 w-1/2 opacity-40 pointer-events-none"
  />

  {/* Glow Shadow */}
  <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63]"></div>

  {/* Spline Model */}
  <div className="relative w-[50rem] h-[30rem] mt-2 mr-8">
    <Spline scene="https://prod.spline.design/ahexc547vhkBfQdC/scene.splinecode" />
  </div>
</div>

  );
};

export default ExpContent;
