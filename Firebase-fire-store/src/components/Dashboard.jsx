const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Total Animals</h3>
          <p className="text-3xl">15</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Species</h3>
          <p className="text-3xl">6</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">New Entries</h3>
          <p className="text-3xl">2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
