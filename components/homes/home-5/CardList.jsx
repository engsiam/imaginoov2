import Link from "next/link";
import Card from "./Card";

const CardList = () => {
  const cards = [
    {
      image: "assets/images/campaigns/floating.jpg",
      title: "Feel the Fragrance. See the Elegance.",
      subtitle: "Spec Dior Commercial",
     // year: "2024",
      id: 1,
    },
    {
      image: "assets/images/campaigns/yellow.jpeg",
      title: "What If Your Brand Could Inspire Like This?",
      subtitle: "A Reinterpretation of Art Morphing Showcase",
      //year: "2024",
      id: 2, // Unique id for each card (for URL)
    },
    {
      image: "assets/images/campaigns/puma-big.jpg",
      title: "Fierce Moves. Bold Style.",
      subtitle: "Spec Puma Commercial",
     // year: "2024",
      id: 3, // Unique id for each card (for URL)
    },
    {
      image: "assets/images/campaigns/Bringing.jpg",
      title: "Bringing The Shadows <br> to Life",
      subtitle: "A Noir Animation Showcase",
      //year: "2024",
      id: 4, // Unique id for each card (for URL)
    },
  ];

  return (
    <div className="" style={{margin:"0 50px"}}>
      <div className="row g-4">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-sm-8 col-lg-3">
            <Link href={`/bold-portfolio-single/${card.id}`}>
              <Card
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                year={card.year}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
