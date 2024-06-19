const MovieComponent = ({movie}) => {
  return (
    <div className="card mb-5 bg-dark text-white" style={{width:"20rem", marginLeft:"10px"}}>
      <img src={movie.imageUrl} className="card-img-top" alt={movie.name} />
      <div className="card-body" >
        <h5 className="card-title mb-3">{movie.name}</h5>
        <h6>Description: </h6><span className="card-text mb-5">{movie.description}</span>
        <h5 className="card-text">Rating: {movie.rating}</h5>
      </div>
    </div>
  );
};
export default MovieComponent;
