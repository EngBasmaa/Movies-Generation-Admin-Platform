import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editMovie, addNewMovie, getMovieById } from "../API/movieAPI";

export function MovieForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: [],
    duration: "",

    director: "",
    writer: "",
    premier: "",
    rating: "",
    actors: [],
    description: ""
  });

  // useEffect(
  //   () => {
  //     if (!id) return;

  //     if (id) {
  //       getMovieById(id).then(response => {
  //         setFormData(response.data);
  //       });
  //     }
  //   },
  //   [id]
  // );

  useEffect(
    () => {
      if (!id || id === "0") return;

      getMovieById(id)
        .then(response => {
          setFormData(response.data);
        })
        .catch(err => {
          console.error("Failed to fetch movie:", err);
        });
    },
    [id]
  );
  const categories = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller"
  ];

  const handleSelectChange = e => {
    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setFormData(prev => ({
      ...prev,
      category: selected
    }));
  };

  const handleActorsChange = e => {
    const value = e.target.value.split(",").map(actor => actor.trim());
    setFormData(prev => ({
      ...prev,
      actors: value
    }));
  };

  const getInputValue = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.duration.trim()) {
      newErrors.duration = "Duration is required";
      isValid = false;
    }

    if (!formData.premier) {
      newErrors.premier = "Premier date is required";
      isValid = false;
    }

    if (!formData.rating || isNaN(formData.rating)) {
      newErrors.rating = "Rating must be a number";
      isValid = false;
    } else if (formData.rating < 1 || formData.rating > 10) {
      newErrors.rating = "Rating must be between 1 and 10";
      isValid = false;
    }

    if (formData.category.length === 0) {
      newErrors.category = "At least one category is required";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    if (id == 0) {
      addNewMovie(formData)
        .then(() => navigate("/dashboard"))
        .catch(err => console.error(err))
        .finally(() => setIsSubmitting(false));
    } else {
      editMovie(id, formData)
        .then(() => navigate("/dashboard"))
        .catch(err => console.error(err))
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <Card className="movieFormCard shadow p-5 my-5 w-75 m-auto">
      <h3 className="text-center my-5 fw-bold">
        {id === "0" ? "Add New Movie" : "Edit Movie"}
      </h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="label" style={{ color: "#f8961e" }}>
                Name *
              </Form.Label>
              <Form.Control
                name="name"
                value={formData.name}
                onChange={getInputValue}
                isInvalid={!!errors.name}
                className="input"
                placeholder="Movie title"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="label" style={{ color: "#f8961e" }}>
                Duration *
              </Form.Label>
              <Form.Control
                name="duration"
                value={formData.duration}
                onChange={getInputValue}
                isInvalid={!!errors.duration}
                className="input"
                placeholder="e.g. 2h 15m"
              />
              <Form.Control.Feedback type="invalid">
                {errors.duration}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="label" style={{ color: "#f8961e" }}>
                Premier Date *
              </Form.Label>
              <Form.Control
                type="date"
                name="premier"
                value={formData.premier}
                onChange={getInputValue}
                isInvalid={!!errors.premier}
                className="input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.premier}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="label" style={{ color: "#f8961e" }}>
                Rating (1–10) *
              </Form.Label>
              <Form.Control
                type="number"
                name="rating"
                value={formData.rating}
                onChange={getInputValue}
                min="1"
                max="10"
                step="0.1"
                isInvalid={!!errors.rating}
                className="input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.rating}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className="label" style={{ color: "#f8961e" }}>
            Categories *
          </Form.Label>
          <Form.Control
            as="select"
            multiple
            value={formData.category}
            onChange={handleSelectChange}
            isInvalid={!!errors.category}
            className="input"
          >
            {categories.map(cat =>
              <option key={cat} value={cat}>
                {cat}
              </option>
            )}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.category}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="label" style={{ color: "#f8961e" }}>
            Actors (comma separated)
          </Form.Label>
          <Form.Control
            name="actors"
            value={formData.actors.join(", ")}
            onChange={handleActorsChange}
            className="input"
            placeholder="e.g. Tom Cruise, Zendaya"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="label" style={{ color: "#f8961e" }}>
            Director
          </Form.Label>
          <Form.Control
            name="director"
            value={formData.director}
            onChange={getInputValue}
            className="input"
            placeholder="Director name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="label" style={{ color: "#f8961e" }}>
            Writer
          </Form.Label>
          <Form.Control
            name="writer"
            value={formData.writer}
            onChange={getInputValue}
            className="input"
            placeholder="Writer name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="label" style={{ color: "#f8961e" }}>
            Description *
          </Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={getInputValue}
            isInvalid={!!errors.description}
            className="input"
            placeholder="Movie description"
          />
          <Form.Control.Feedback type="invalid">
            {errors.description}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="text-center">
          <Button
            type="submit"
            variant="warning"
            disabled={isSubmitting}
            style={{ width: "100%" }}
          >
            {id === "0" ? "Add Movie" : "Update Movie"}
          </Button>
        </div>
      </Form>
    </Card>
  );
}
