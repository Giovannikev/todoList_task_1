import React, { useState } from "react";
import Button from "./ui/button";
import ListTodos from "./ListTodos";
import { Textarea } from "./ui/textarea";

function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("Response:", response);
      window.location.href = '/'
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value); 
  };

  return (
    <>
      <h1 className="text-center my-5 text-4xl font-light">Todo List</h1>
      <form className="gap-4" onSubmit={onSubmitForm}>
        <div className="flex gap-4 mb-10">
          <Textarea
            placeholder="Add todo"
            value={description}
            onChange={handleInputChange} // Utilise une fonction séparée
          />
          <Button type="submit">Add Task</Button>
        </div>
      </form>
      <ListTodos />
    </>
  );
}

export default InputTodo;
