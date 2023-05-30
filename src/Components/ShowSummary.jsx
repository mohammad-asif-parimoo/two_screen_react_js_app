import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await res.json();
        setShow(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShow();
  }, [id]);
  

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>{show.name}</h2>
          {show.image && (
            <img
              src={show.image.original}
              alt={show.name}
              className="img-fluid mb-3"
            />
          )}
          <p>{show.summary}</p>
          <form onSubmit={handleSubmit}>
            <h4>Book a Movie Ticket</h4>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleInputChange}
                required
                placeholder="Enter your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleInputChange}
                required
                placeholder="Enter your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="movie">Movie</label>
              <input
                type="text"
                className="form-control"
                id="movie"
                name="movie"
                value={show.name || ''}
                readOnly
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
          <br />
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
