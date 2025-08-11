const AnimalList = ({animals, handleDelete, handelEdit}) => {

  console.log(handleDelete);
   return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Animal List</h2>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="text-left py-2 px-4 border-b">Name</th>
            <th className="text-left py-2 px-4 border-b">Species</th>
            <th className="text-left py-2 px-4 border-b">Age</th>
            <th className="text-left py-2 px-4 border-b">Action</th>
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
                  <td className="py-2 px-4 border-b flex gap-5">
                    <button className="text-yellow-500" onClick={()=>handelEdit()} >Edit</button>
                    <button className="text-red-600" onClick={()=>handleDelete(animal.id)}>Delete</button>
                  </td>
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
