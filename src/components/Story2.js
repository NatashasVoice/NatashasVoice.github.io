import React from "react";
import "../styles/blog.css";
import TashGym from "../images/TashGym.JPG";
import Tash from "../images/Tash.JPG";
import Joseph from "../images/Joseph.JPG";
import Helmi from "../images/helmi.png";
import VideoPlayer from "./VideoPlayer";
import Footer2 from "./Footer2";

const Blog = () => {
  return (
    <>
      <article className="post" id="scroll-container">
        <h2>Natasha's Story</h2>

        <p>
          I want to introduce you to Natasha and for you to ‘hear’ her voice
          through my words. Where to begin? Natasha was many things and when I
          think of her an ocean of adjectives flood my thoughts. I hope Natasha
          will forgive me if I miss any adjectives that she would have me
          include if she was editing this! So here goes. Tasha was bubbly, had
          the loudest laugh ever, fun, bright, courageous, loving, talented,
          generous, loved animals but rabbits and puppies the most! She was also
          feisty, outspoken, fiercely loyal to family and friends, impatient to
          get things done in the shortest time possible and was like a machine
          in the gym!
        </p>
        <figure>
          <img src={TashGym} alt="Tash in Gym" />
          <figcaption>Tash at the gym</figcaption>
        </figure>
        <p>
          I want to tell you about her wicked sense of humour and how proud we
          were of Natasha when she realised her dream of becoming a journalist
          and working for the BBC. I want to tell you the funny stories of her
          childhood.. but that would take too long and this is not the place!
        </p>
        <p>
          I don’t want to tell you that our gorgeous, adored daughter ended her
          own life in March 2020. The pain of even writing that sentence, let
          alone saying it out loud, is heart breaking beyond words. Yet I have
          to because Natasha has left us with her ‘voice’ and thoughts as her
          legacy and we want her to be heard. We believe that she would want us
          to do this.
        </p>
        <p>
          As a BBC journalist working on Instagram Stories Natasha’s passion and
          drive was to try to find a platform for those who needed their voices
          to be heard; the people who might otherwise be overlooked. Natasha
          often said,
        </p>
        <blockquote>
          <p>“A goal without a plan is just a wish!”</p>
        </blockquote>
        <p>
          So here’s the plan: There are 2 main strands to Natasha’s Voice. The
          first is to raise and provide funds to make an annual award to a
          student graduating from the University of Worcester with a degree in
          media studies. The award is given to a student who has demonstrated
          outstanding talent in broadcast journalism. The second strand is to
          develop and donate resources to programmes addressing mental anguish,
          predominantly, but not exclusively, experienced by young people.
        </p>
        <figure>
          <img src={Tash} alt="tash photo2" />
          <figcaption>Tasha headshot</figcaption>
        </figure>
        <h1>Broadcast Journalism Award</h1>
        <p>
          To date Natasha’s Voice has made awards to two graduates: Joseph
          Broady (2021) Joseph received the award for his work reporting
          politics in sport and the engagement of young people with politics.
        </p>
        <figure>
          <img src={Joseph} alt="Joseph graduation" />
          <figcaption>Joseph Broady (2021)</figcaption>
        </figure>
        <p>and Helmi Sunstrom (2022)</p>
        <figure>
          <img src={Helmi} alt="Joseph graduation" />
          <figcaption>Helmi Sunstrom (2022)</figcaption>
        </figure>
        <p>
          Helmi received the award for producing a compelling short film
          highlighting the impact of Brexit on EU citizens resident in the UK.
        </p>
        <VideoPlayer />
        <p>
          Resources The resource packs developed by Natasha’s Voice include a
          range of ‘first steps’ and conversation tools that have already been
          utilised to beneficial effect in a range of educational settings in
          Worcestershire.
        </p>
        <p>
          We are willing to donate resource packs to appropriate
          organisations/projects working with young people experiencing mental
          anguish so if you would like to learn more please get in touch To
          Contact us, Support us or if you would like to discuss working with us
          please, in the first instance, email natashasvoice@hotmail.com
        </p>
      </article>
      <Footer2 />
    </>
  );
};

export default Blog;
