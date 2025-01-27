// components/Card.js
const Card = ({ image, title, subtitle, year }) => {
  return (
    <div className="card shadow-sm h-100 rounded-3 border-0 position-relative text-black">
      <div className="position-relative">
        <img
          src={image}
          className="card-img-top rounded-top"
          alt={title}
          style={{
            height: "340px",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <button
          className="btn btn-light position-absolute translate-middle rounded-circle shadow-sm d-flex align-items-center justify-content-center"
          style={{
            width: "40px",
            height: "40px",
            color: "black",
            bottom: "-12%",
            right: "5%",
          }}
        >
          <i
            className="mi-play"
            style={{ color: "#21C4E8", fontSize: "25px" }}
          ></i>
        </button>
      </div>

      {/* Card Body */}
      <div className="card-body py-4" style={{ backgroundColor: "black" }}>
        <h4
          style={{
            color: "white",
            textDecoration: "none", // Ensure no underline
          }}
          className="card-title inter-font no-underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h4>
        <p
          style={{
            color: "white",
            fontSize: "12px",
            textDecoration: "none", // Ensure no underline
          }}
          className="card-text mb-1 no-underline"
        >
          {subtitle}
        </p>
        <small
          style={{
            color: "white",
            textDecoration: "none", // Ensure no underline
          }}
          className="text-muted no-underline"
        >
          {year}
        </small>
      </div>
    </div>
  );
};

export default Card;
