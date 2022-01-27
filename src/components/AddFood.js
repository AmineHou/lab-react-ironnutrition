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
        type="file"
        name="image"
        id="image"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
      />

      <button>Add new food</button>
    </form>
  )
};

export default AddFood;
