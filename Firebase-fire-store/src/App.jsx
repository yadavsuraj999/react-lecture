import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import AddAnimal from "./components/AddAnimal";
import AnimalList from "./components/Animallist";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";


function App() {
  const [animals, setAnimal] = useState([])
  const [animalId, setAnimalId] = useState(null)
  const [input, setInput] = useState({
    name: "", species: "", age: ""
  })

  useEffect(() => {
    fetch()
  }, [])

  const handlechange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "animals", id))
      fetch()
    } catch (error) {
      console.log(alert(error));
    }

  }

  const handleEdit = async (id) => {
    try {
      await updateDoc(doc(db, "animals", animalId), input)
    } catch (error) {
      console.log(alert(error));
    }
  }


  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "animals"), input)
      fetch()
    } catch (err) {
      console.log(err);
    }

    setInput({
      name: "", species: "", age: ""
    })
  }

  const fetch = async () => {
    const data = await getDocs(collection(db, "animals"))
    setAnimal(data.docs.map((animal) => {
      return {
        id: animal.id,
        ...animal.data()
      }
    }))
  }
  console.log(animals);


  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Navbar />
        <div className="p-4 space-y-8">
          <Dashboard />
          <AnimalList animals={animals} handleDelete={handleDelete} handleEdit={handleEdit} animalId={animalId} />
          <AddAnimal handlesubmit={handlesubmit} handlechange={handlechange} input={input} />
        </div>
      </div>
    </div>
  );
}

export default App;
