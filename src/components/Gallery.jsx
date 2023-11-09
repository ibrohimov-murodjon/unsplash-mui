import React from "react";
import Box from "@mui/material/Box";
import RecipeReviewCard from "./Card";

function Gallery({ data: { results } }) {
  console.log(results);
  return (
    <Box display="flex" flexWrap="wrap" gap="30px">
      {results.map((image) => {
        return (
          <RecipeReviewCard
            image={image}
            key={image.id}
            imageId={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            desc={image.description}
            approved={image?.topic_submissions?.wallpapers?.status}
            likes={image.likes}
            downloadURL={image?.links?.download}
            slug={image?.slug}
            avatar={image?.user?.profile_image?.medium}
            username={image?.user?.name}
            created_at={image?.created_at}
            instagramUser={image?.user?.social?.instagram_username}
          />
        );
      })}
    </Box>
  );
}

export default Gallery;
