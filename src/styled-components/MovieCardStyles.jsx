import styled from "styled-components";
import { Button } from "react-bootstrap";

// Styled-components for MovieCard
const StyledCard = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: var(--navbar-scrolled-bg-color);
  color: var(--text-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 200px; // Adjust the height of the image
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h5`
  font-weight: bold;
  color: var(--primary-color);
`;

const InfoText = styled.p`
  margin-bottom: 0.5rem;
`;

const DeleteButton = styled(Button)`
  background-color: var(--delete-btn-color) !important;
  border-color: var(--delete-btn-color) !important;
  color: white;
  font-weight: bold;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

export {
  StyledCard,
  ImageWrapper,
  CardImage,
  CardBody,
  Title,
  InfoText,
  DeleteButton
};
