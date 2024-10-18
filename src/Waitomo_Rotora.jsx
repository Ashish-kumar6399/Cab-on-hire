import React from "react";
import img1 from "../src/Img/Waitomo Caves & Rotorua Tour (including Te Puia).jpg";
import { Link } from "react-router-dom";

function Waitomo_Rotora() {
  return (
    <>
      <div className="Auck">
        <h1 className="text-white fw-bolder text-uppercase about text-center ps-3 pe-3">
          WAITOMO CAVES & ROTORUA INCLUDING TE PUIA TOUR{" "}
        </h1>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-1 text-center"> </div>
          <div className="col-5  text-center">
            <img className="img_movie mt-5" src={img1} alt="" />
          </div>
          <div className="col-5  text-center">
            <h1 className="movie_h1">
              WAITOMO CAVES & ROTORUA INCLUDING TE PUIA TOUR
            </h1>
            <h6 className="movie_h6 ">
              Experience the ultimate day trip from Auckland with our small
              group, fully guided tour that combines nature, Māori culture and
              two of the North Island’s top attractions. This adventure
              seamlessly blends the best of Waitomo Caves and Rotorua into one
              unforgettable journey. Our passionate tour guides, known for their
              engaging stories and extensive knowledge, will enhance your
              experience every step of the way. Enjoy the comfort and safety of
              our modern, well-equipped minibuses throughout your journey.
            </h6>
            <Link className="text-decoration-none" to="/contact">
              <div className="movie_btn rounded mt-4 text-white text-center">
                {" "}
                BOOK NOW
              </div>
            </Link>{" "}
          </div>

          <div className="col-1  text-center"></div>
        </div>
      </div>

      <div className="container highlight">
        <h5 className="fw-bolder">Highlights</h5>
        <ul>
          <li> Waitomo Glowworm Caves</li>
          <li>Te Puia Geothermal Park & Pohutu</li>
          <li>Maori Cultural Village and Arts School</li>
          <li>Rotorua City Highlights</li>
        </ul>

        <h4>Itinerary:</h4>

        <p>
          {" "}
          <span className="fw-bold"> 1. Auckland –</span> Start of your tour is
          at the biggest city in New Zealand. Your guide will introduce you to
          the main sights of the city as we head out of town and lay the
          groundwork for your trip.
        </p>
        <p>
          {" "}
          <span className="fw-bold"> 2. Waikato – </span> We depart from
          Auckland and go south through the beautiful Waikato region, which is
          known as the greatest farming region in the world. Along the route,
          take in the breathtaking countryside, powerful rivers, charming
          mountains, and sights of farm animals. Traveling through Taupiri, a
          place rich in cultural value, we will see magnificent cultural totem
          poles and local Māori burial grounds.
        </p>
        <p>
          {" "}
          <span className="fw-bold"> 3. Pirongia – </span> After exploring the
          gorgeous countryside and learning about the Land Wars and the history
          of the area, we'll pause for a little coffee break in this quaint
          town.{" "}
        </p>
        <p>
          {" "}
          <span className="fw-bold"> 4. Otorohanga – </span> We keep traveling
          and soon arrive in Otorohanga, dubbed "The Kiwiana Capital of New
          Zealand." Explore this unique and quaint village and catch a glimpse
          of Kiwi culture.
        </p>
        <p>
          {" "}
          <span className="fw-bold"> 5. Waitomo Caves – </span> You will be
          taken through the historic and breathtaking caves to reach our first
          highlight. There, you will see a variety of formations such lime
          columns, stalactites, and stalagmites. Once below ground, you'll have
          a glowworm experience that won't soon be forgotten. See millions of
          glowworms twinkle overhead as you take a boat ride down the grotto
          river. A must-see for any traveler, the Waitomo Glowworm Caves have
          been a feature of New Zealand for over a century.
        </p>
        <p>
          {" "}
          <span className="fw-bold"> 6. Big Bird –</span> As we journey toward
          our next destination, Rotorua, we make a brief stop outside Big Bird
          to meet some of the friendly local animals. These creatures are
          familiar with our guides, and while we don’t have time to enter the
          park, the animals often come to the fences for a photo opportunity,
          delighting our guests.
        </p>
        <p>
          {" "}
          <span className="fw-bold"> 7. Te Puia Geothermal Park –</span> When
          you get to Te Puia, our second highlight, you'll go on a fully guided
          tour to experience the cultural and geothermal wonders. Highlights
          include geothermal craters, Māori architecture, The National Māori
          Arts School, Pōhutu Geyser and even the chance to get up close &
          personal with a Kiwi bird in the Kiwi observation house.
        </p>
        <p>
          {" "}
          <span className="fw-bold"> 8. Rotorua City Highlights – </span> We'll
          take a guided driving trip to see some of the most well-known sites in
          the city, such as Lake Rotorua, the Rotorua Museum, Government
          Gardens, Whangapipiro (Rachel Spring) and the Blue Baths, to wrap off
          our time in Rotorua. If there's time, we might also visit a unique
          memento shop for some bargain shopping and an opportunity to try
          Manuka honey.
        </p>
        <p>
          {" "}
          <span className="fw-bold"> 9. Auckland –</span> Unfortunately, it's
          time to begin our journey back north, but the day isn’t over yet as
          you'll enjoy a fully guided return trip to Auckland.
        </p>

        <h5>Inclusions:</h5>
        <ul className="ul_movie">
          <li className="ull">Small Group Tour</li>
          <li>Fully Guided</li>
          <li>Entry Tickets</li>
          <li>Bottled Water</li>
          <li>Snacks</li>
        </ul>

        <p>
          While the destination you will be visiting is truly spectacular, we at
          We believe Travel believe it is our small groups, our guides, the
          journey and the little details that set our tours well apart. Secret
          stops, wildlife viewings, specially designed vehicles, complementary
          refreshments and many other pleasant surprises ensure our tours are an
          experience to remember.
        </p>
      </div>
    </>
  );
}

export default Waitomo_Rotora;
