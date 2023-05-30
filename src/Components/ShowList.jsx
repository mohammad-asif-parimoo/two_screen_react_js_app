import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const ShowList = ({ shows }) => {
  return (
    <div className="container my-5">
      <div className="row">
        {shows.map(show => (
          <div key={show.show.id} className="col-md-4 mb-3">
            <Card>
              <CardImg
                top
                src={show.show.image ? show.show.image.medium : 'https://via.placeholder.com/210x295'}
                alt={show.show.name}
              />
              <CardBody>
                <CardTitle tag="h5" className="text-center">{show.show.name}</CardTitle>
                <CardText>{show.show.summary.replace(/(<([^>]+)>)/gi, '')}</CardText>
                <div className="d-flex justify-content-center">
                  <Link to={`/show/${show.show.id}`}>
                    <Button color="primary">View Summary</Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
