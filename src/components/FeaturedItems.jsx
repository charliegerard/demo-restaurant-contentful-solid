import gallery from "../../data/gallery.json";

export default function FeaturedItems({ title, subtitle }) {
  const homepageImages = gallery.slice(0, 4);

  const displayTitle = (id) => {
    if (id === 0) {
      return (
        <section className="title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </section>
      );
    }
  };

  return (
    <section className="featured-item">
      {homepageImages.map((img, id) => {
        return (
          <div className="image-block" key={id}>
            {displayTitle(id)}
            <img src={img.imageUrl} alt={img.caption} />
          </div>
        );
      })}

      <style jsx global>{`
        .featured-item {
          display: grid;
          grid-template-areas:
            "head head"
            "main nav";
          grid-template-rows: 90vh 1fr;
          grid-template-columns: 1fr 1fr;
        }

        .image-block {
          position: relative;
          display: flex;
        }

        .title {
          color: white;
          width: 70%;
          height: 100vh;
          position: absolute;
          margin-top: 50vh;
          z-index: 100;
          padding-left: 40px;
        }

        .title h2 {
          font-size: 40px;
        }

        .image-block img {
          width: 100%;
          filter: brightness(70%);
        }
      `}</style>
    </section>
  );
}
