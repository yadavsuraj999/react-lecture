import { addDoc, collection, getDocs } from "firebase/firestore";
import AddAnimal from "./components/AddAnimal";
import AnimalList from "./components/Animallist";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";


function App() {


  const [animals, setAnimal] = useState([])
  const [input, setInput] = useState({
    name: "", species: "", age: ""
  })

  useEffect(() => {
    fetch()
  }, [])

  const handlechange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }
  console.log(input);

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
          <AnimalList animals={animals} />
          <AddAnimal handlesubmit={handlesubmit} handlechange={handlechange} input={input}/>
        </div>
      </div>
    </div>
  );
}

export default App;
