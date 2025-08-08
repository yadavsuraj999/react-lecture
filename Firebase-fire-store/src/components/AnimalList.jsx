const AnimalList = ({animals}) => {
   return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Animal List</h2>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="text-left py-2 px-4 border-b">Name</th>
            <th className="text-left py-2 px-4 border-b">Species</th>
            <th className="text-left py-2 px-4 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          {
            animals.map((animal) => {
              return (
                <tr key={animal.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{animal.name}</td>
                  <td className="py-2 px-4 border-b">{animal.species}</td>
                  <td className="py-2 px-4 border-b">{animal.age}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
};

export default AnimalList;
