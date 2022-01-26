import { useState } from "react";

const AddFood = ({ createHandler }) => {
  const [name, setName] = useState("")
  const [calories, setCalories] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const food = { name, calories, image }
    createHandler(food);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="calories">Calories</label>
      <input
        type="text"
        name="calories"
        id="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button>Add new food</button>
    </form>
  )
};

export default AddFood;
