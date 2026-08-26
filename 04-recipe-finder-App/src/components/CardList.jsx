import Card from "./Card";

const recipes = [
  {
    id: 1,
    name: "Poke Bowls",
    image:
      "https://imgs.search.brave.com/hZBTDkbx2yvPY_FKTaA71eUa_Y08dEyEuNsls0X1Vq8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/MDUxMjMwMi9waG90/by9tYW4tZWF0aW5n/LXNhbG1vbi1wb2tl/LWJvd2wuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWtiOFhV/dnRjaFFCOE9LaEpz/ZkxDWmZKVjF6VUpy/MldnUVY1X2N1QVdi/RWc9",
    tag: "Casual Dinner",
    timeToCookInMinutes: 50,
  },
  {
    id: 2,
    name: "Chocolate Banana Cake",
    image:
      "https://imgs.search.brave.com/x957PoRA89Oaxt_omIR2J_vajq8eDm6hWzlzQXCX5jo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wYXN0/cnlsaXZpbmcuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA3L0Nob2NvbGF0/ZS1iYW5hbmEtY2Fr/ZS1wcm9jZXNzLXNo/b3QtNDUucG5n",
    tag: "Casual Dinner",
    timeToCookInMinutes: 150,
  },
  {
    id: 3,
    name: "Shwarma",
    image:
      "https://imgs.search.brave.com/1u59yayzm5ZXI5quZWvj1HYyevDlq-_YQ20G6UgRzys/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzUwLzY0LzQ5/LzM2MF9GXzk1MDY0/NDkyNV9SS3lLQ3Fq/aEM0SVBmOFdnUHI4/d0YzY0Z1azJPMXBk/dS5qcGc",
    tag: "Casual Dinner",
    timeToCookInMinutes: 300,
  },
  {
    id: 4,
    name: "Knafeh",
    image:
      "https://imgs.search.brave.com/ia-7tiVGvH42mfX6SiCoYvHPzsyzAHcJhT8NmHKL6uY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGluZ3RhYmxl/LmNvbS9pbWcvZ2Fs/bGVyeS9ldmVyeXRo/aW5nLXlvdS1uZWVk/LXRvLWtub3ctYWJv/dXQta25hZmVoLWV4/cGxhaW5lZC9pbnRy/by0xNzI2MjQzMTA5/LmpwZw",
    tag: "Middle Eastern Blast",
    timeToCookInMinutes: 175,
  },
  {
    id: 5,
    name: "Steak",
    image:
      "https://imgs.search.brave.com/GnGsc8TPdZif3XbutZiREef1VNXoON6cDanrCjLrhe0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGVh/a3MuYmlndGV4YW4u/Y29tL19hc3NldHMv/aW1hZ2VzL0Zvb2Qv/NzItb3VuY2Utc3Rl/YWstcGxhdHRlci5w/bmc",
    tag: "Hungry Dinner",
    timeToCookInMinutes: 450,
  },
  {
    id: 6,
    name: "Barbeque",
    image:
      "https://imgs.search.brave.com/BbjnNA3HG0yFcWXoy7kABxaP5nHwo8nXqwRibrmEJ4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYw/MzkzMTAyL3Bob3Rv/L2JhcmJlcXVlLWdh/cy1icmFhaS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SDIw/Rm9mazVhLXc0WWtI/bUpiY3lQdE5QckdT/ZkdURWNMT0lRNzV0/MEd3ST0",
    tag: "Hungry Dinner",
    timeToCookInMinutes: 600,
  },
];

export default function CardList() {
  return (
    <section className="cards">
      {/* <Card /> */}
      {recipes.map((recipe) => (
        <Card key={recipe.id} amICool={false} recipe={recipe} />
      ))}
    </section>
  );
}

/**
 * <div className="card" key={recipe.id}>
          <img src={recipe.image} alt="" />
          <div className="card-content">
            <h3>{recipe.name}</h3>
            <div className="card-info">
              <div className="tag">
                <p>{recipe.tag}</p>
              </div>
              <p className="time-text">{recipe.timeToCookInMinutes} minutes</p>
            </div>
          </div>
        </div>
 */
