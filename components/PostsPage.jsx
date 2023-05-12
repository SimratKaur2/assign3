import { useState, useEffect } from "react";
import {CardContainer} from '../styles/StyledComponents.js';
import PokemonCard from "./PokemonCard.jsx";
import Filter from "./Filter.jsx";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


export default function PostsPage() {
  //state variables
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  //for filtering
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setTotalCount(data.count);
      const postsData = await Promise.all(
        data.results
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map(async (post) => {
            const pokemonResponse = await fetch(post.url);
            return pokemonResponse.json();
          })
      );
      setPosts(postsData);
      setIsLoading(false);
    }

    fetchPosts();
  }, [currentPage]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  //to handle first and last page
    const handleFirstPage = () => {
      setCurrentPage(1);
    };

    const handleLastPage = () => {
      setCurrentPage(totalPages);
    };


  // Calculate start and end index of the items being shown
  const startItemIndex = (currentPage - 1) * pageSize + 1;
  const endItemIndex = Math.min(currentPage * pageSize, totalCount);

  // max page numbers to be shown
  const maxPageNumbers = 5;

  // calculating the total number of pages
  const totalPages = Math.ceil(totalCount / pageSize);

  // generating the page numbers to display in the pagination
  const pageNumbers = [];
  if (totalPages <= maxPageNumbers) {
    // if there are less than or equal to `maxPageNumbers` pages, display all the page numbers
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else if (currentPage <= Math.floor(maxPageNumbers / 2) + 1) {
    // if the current page is close to the beginning of the page range, display the first `maxPageNumbers` pages
    for (let i = 1; i <= maxPageNumbers; i++) {
      pageNumbers.push(i);
    }
  } else if (currentPage >= totalPages - Math.floor(maxPageNumbers / 2)) {
    // if the current page is close to the end of the page range, display the last `maxPageNumbers` pages
    for (let i = totalPages - maxPageNumbers + 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // otherwise, display the `maxPageNumbers` pages centered around the current page
    const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);
    for (
      let i = currentPage - halfMaxPageNumbers;
      i <= currentPage + halfMaxPageNumbers;
      i++
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <>
      <div>
        <Filter />
        <Typography variant="h6" align="center" gutterBottom>
          Total Pokémon: {totalCount}
          <br></br>
          Showing {startItemIndex}-{endItemIndex}
        </Typography>
        <CardContainer>
          {/* {posts.map((post, index) => (
          <Card key={index}>
            <h2>{post.name}</h2>
            <img src={post.sprites.front_default} alt={post.name} />
            <p>Abilities:</p>
<ul>
              {post.abilities.map((ability, i) => (
                <li key={i}>{ability.ability.name}</li>
              ))}
            </ul>
          </Card> */}
          <Grid container spacing={3}>
            {posts.map((pokemon, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <PokemonCard key={index} pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>

          {/* {posts.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))} */}
        </CardContainer>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
          gap: "5px"
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleFirstPage}
          disabled={currentPage === 1}
        >
          First
        </Button>

        {currentPage > 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
        )}
        {pageNumbers.map((pageNumber) => (
          <Button
            variant="contained"
            color={currentPage === pageNumber ? "secondary" : "primary"}
            onClick={() => setCurrentPage(pageNumber)}
            style={{ margin: "0 5px" }} // Add space between each button
          >
            {pageNumber}
          </Button>
        ))}
        {currentPage < totalPages && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        )}
         <Button
          variant="contained"
          color="primary"
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
        >
          Last
        </Button>
      </div>
    </>
  );
}
