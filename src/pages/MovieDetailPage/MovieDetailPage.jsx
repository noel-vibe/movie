import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import "./MovieDetailPage.style.css";
import Reviews from "./components/Reviews";
import { numberWithCommas } from "../../utils/number";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../common/ErrorMessage";
import RelatedMovie from "./components/RelatedMovie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import MovieModal from "../../common/MovieModal/MovieModal";

const MovieDetailPage = (movie) => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  const [modalShow, setModalShow] = useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <>

      <Container className="pb-5">
        <Row>
          <Col xs={12} lg={6} className="d-flex justify-content-center mt-5">
            <img
              className="w-80"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.data.poster_path}`}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-5">
            <div className="d-flex mb-4">
              {data?.data.genres.map((genre, index) => (
                <Badge className="movie-detail-badge" bg="danger" key={index}>{genre.name}</Badge>
              ))}
            </div>
            <h1 className="movie-title">{data.data.title}</h1>
            <h3>{data.data.tagline}</h3>
            <div className="py-4 movie-number  border-bottom border-white">
              <span className="icon-text">
                <FontAwesomeIcon icon={faStar} className="card-icon"/>
                {data.data.vote_average}
              </span>
              <span className="icon-text">
              <FontAwesomeIcon icon={faUsers} className="card-icon"/>
                {data.data.popularity}
              </span>
              <span className="card-icon">
                {data.data.adult ? 'over18':'under18'}
              </span>
              
            </div>
            <div className="py-4 border-bottom border-white">
              {data.data.overview}
            </div>
            <Button variant="light px-3 py-2 " onClick={()=>setModalShow(true)}>
            <span className="fs-5">▶</span>재생
            </Button>

            <MovieModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              movie={movie}
            />

            <div className="py-4">
              <div className="d-flex align-items-center mb-2">
                <Badge className="movie-detail-badge" bg="danger">Budget</Badge>
                <div>$ {numberWithCommas(data.data.budget)}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <Badge className="movie-detail-badge" bg="danger">Revenue</Badge>
                <div>$ {numberWithCommas(data.data.revenue)}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <Badge className="movie-detail-badge" bg="danger">Release Date</Badge>
                <div>{data.data.release_date}</div>
              </div>

              <div className="d-flex align-items-center mb-2">
                <Badge className="movie-detail-badge" bg="danger">Run time</Badge>
                <div>{data.data.runtime}분</div>
              </div>
            </div>
          </Col>
        </Row>
        <RelatedMovie id={id} />
        <Reviews id={id} />
      </Container>
    </>
  );
};

export default MovieDetailPage;