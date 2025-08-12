const AddAnimal = ({handlesubmit, handlechange, input, animalId}) => { 

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Animal</h2>
      <form onSubmit={handlesubmit} className="bg-white p-6 rounded shadow space-y-4">
        <input type="text" id="name" value={input.name} placeholder="Name" className="w-full border px-3 py-2 rounded" onChange={handlechange}/>
        <input type="text" id="species" value={input.species} placeholder="Species" className="w-full border px-3 py-2 rounded" onChange={handlechange}/>
        <input type="number" id="age" value={input.age} placeholder="Age" className="w-full border px-3 py-2 rounded" onChange={handlechange}/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{animalId ? "Edit Animal" : "Add Animal"}</button>
      </form>
    </div>
  );
};

export default AddAnimal;
