const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between">
      <div className="text-red-500 text-5xl font-bold">Savar Jain</div>
      <div className="flex justify-evenly w-96 border-blue-500 h-10 bg-red-500">
        <div className="">About</div>
        <div className="">Projects</div>
        <div className="">Skills</div>
        <div className="">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
