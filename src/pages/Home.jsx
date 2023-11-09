import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import RecipeReviewCard from "../components/Card";
import Search from "../components/Search";
import Gallery from "../components/Gallery";
import { useFetch } from "../hooks/useFetch";

const API =
  "https://api.unsplash.com/search/photos?client_id=ji28ItvOyeZ86pQC1-WrT4eHq-VLrLQ3b4OdpDI_mS8&page=1&query=";

function Home() {
  const [url, setUrl] = useState(API + "features");
  const { data, isPending, error } = useFetch(url);

  const setNewUrl = (url) => {
    setUrl(API + url);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "40px", marginBottom: "60px" }}>
      <Search setNewUrl={setNewUrl} />
      {data && <Gallery data={data} />}
      {isPending && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
    </Container>
  );
}

export default Home;
