const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <ul className="space-y-4">
        <li><a href="#" className="block text-gray-700 hover:text-blue-600">Dashboard</a></li>
        <li><a href="#" className="block text-gray-700 hover:text-blue-600">Animal List</a></li>
        <li><a href="#" className="block text-gray-700 hover:text-blue-600">Add Animal</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;