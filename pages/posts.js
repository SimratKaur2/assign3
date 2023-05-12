// pages/posts.js
import PostsPage from "../components/PostsPage";

export default function Posts() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin:"12px 0" }}>
        <img
          src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-black-gel-icing-musings-marvelous-15.png"
          alt="Pokeball"
          style={{
            width: "120px", // Adjust the size as needed
            height: "80px",
            marginLeft: "8px", // Add spacing between the image and the text
          }}
        />
        <h1>Pokéball Gallery</h1>
      </div>
      <PostsPage />
    </div>
  );
}
