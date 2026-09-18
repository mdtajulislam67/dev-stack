import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technology/Technologies";
import { useEffect, useState } from "react";
import type { Itechnology } from "./Type/Techology";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [technologies, setTechnologies] = useState<Itechnology[]>([]);
  const [stack, setStack] = useState<Itechnology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("technologies.json");
        if (!response.ok) throw new Error("Unable to load technology data.");
        const data: Itechnology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error("Could not load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Itechnology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning("Already added!");
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success("Technology added!");
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Technologies
        technologies={technologies}
        stack={stack}
        loading={loading}
        handleAddToStack={handleAddToStack}
        handleRemoveFromStack={handleRemoveFromStack}
        handleRemoveAll={handleRemoveAll}
      />

      <Footer />
      <ToastContainer position="top-right" autoClose={2200} />
    </>
  );
};

export default App;
