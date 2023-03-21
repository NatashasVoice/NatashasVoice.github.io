import React from "react";
import "../styles/blog.css";
import TashGym from "../images/TashGym.JPG";
import Tash from "../images/Tash.JPG";

const Blog = () => {
  return (
    <>
      <article className="post" id="scroll-container">
        <h2>Natasha's Story</h2>

        <p>
          I want to introduce you to Natasha and for you to ‘hear’ her voice
          through my words. Where to begin? Natasha was many things and when I
          think of her an ocean of adjectives flood my thoughts. I hope Natasha
          will forgive me if I miss any out! She was bubbly, fun, bright,
          courageous, loving, talented, generous, loved animals but rabbits and
          puppies the most! She was also feisty, outspoken, fiercely loyal to
          family and friends, impatient to get things done in the shortest time
          possible and was like a machine in the gym!
        </p>

        <figure>
          <img src={TashGym} alt="Tash in Gym" />
          <figcaption>Tash at the gym</figcaption>
        </figure>

        <p>
          I want to tell you about her wicked sense of humour and how proud we
          were of Natasha when she realised her dream of becoming a journalist
          and working for the BBC.
        </p>

        <p>
          I want to tell you funny stories of her childhood but that would take
          too long and this is not the place!
        </p>

        <p>
          I don’t want to tell you that my gorgeous, adored daughter ended her
          own life in March 2020 because the pain of just writing those heart
          breaking words is overwhelming. Yet I have to because Natasha has left
          us with her ‘voice’ and thoughts as her legacy.
        </p>

        <p>
          As a BBC journalist working on Instagram Stories Natasha’s passion and
          drive was to try to find a platform for those who needed their voices
          to be heard; the people who might otherwise be overlooked.
        </p>

        <p>Natasha often said,</p>

        <blockquote>
          <p>“A goal without a plan is just a wish!”</p>
        </blockquote>

        <p>
          So here’s a plan: There are 2 main strands to Natasha’s Voice. The
          first is to raise funds to enable a media student from the University
          of Worcester to have a months Internship at the BBC, the purpose being
          to give a young journalist the opportunity to research and make a
          story of contemporary significance in an area of importance to young
          people. This will be an annual bursary.
        </p>

        <figure>
          <img src={Tash} alt="Big Ass" />
          <figcaption>Tasha headshot</figcaption>
        </figure>

        <p>
          The second strand is to set up initiatives aimed at reducing the risk
          of suicide in our local areas. Tragically, I have experience of some
          of the strategies that sometimes worked with Natasha. For example,
          when Natasha was feeling anguished last year and she didn’t feel
          ‘safe’, we used to talk about what ‘safe’ might look like. It changed
          from time to time but it was regularly somewhere peaceful, with
          rabbits to stroke, and a soft throw to wrap herself in.
        </p>

        <p>
          I have been having conversations with a variety of MH professionals, a
          wonderful GP and people who sadly understand what it is like to have
          lost a child by suicide or who has a loved one who is at risk of
          ending his/her life. One of the aims is to take someone to a room that
          looks comfortable and safe instead of a room that looks like a cell!
          We would like to provide items that will go some way to achieving
          that.
        </p>

        <p>It’s said</p>

        <blockquote>
          <p>"It takes a village to rear a child"</p>
        </blockquote>

        <p>
          well I think it also takes a village to save a child. Let’s start
          providing practical means to reach out to those in anguish.
        </p>
      </article>
    </>
  );
};

export default Blog;
