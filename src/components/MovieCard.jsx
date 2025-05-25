import React from "react";
import { Button } from "react-bootstrap";

import {
  StyledCard,
  ImageWrapper,
  CardImage,
  CardBody,
  Title,
  InfoText
} from "../styled-components/MovieCardStyles";
import { DeleteButton } from "../styled-components/MovieCardStyles";
import { Link } from "react-router-dom";

export function MovieCard({
  title,
  image,
  imdbRating,
  onViewDetails,
  onDelete,
  id
}) {
  return (
    <StyledCard>
      <ImageWrapper>
        {/* Image */}
        <CardImage src={image} alt={title} />
      </ImageWrapper>

      {/* Card Body with Title and Buttons */}
      <CardBody>
        <Title>
          {title}
        </Title>
        <InfoText>
          {imdbRating}
        </InfoText>

        <div className="mt-3">
          <Button
            variant="light"
            className="fw-bold w-100 mb-2"
            onClick={onViewDetails}
          >
            <Link to={`/movies/${id}`}>
              <i className="fs-4 mx-1 text-warning bi bi-eye-fill" />
            </Link>
          </Button>

          <DeleteButton onClick={onDelete}>Delete Movie</DeleteButton>
        </div>
      </CardBody>
    </StyledCard>
  );
}
