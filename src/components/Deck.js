import React, { Component, Fragment } from "react";
import PHOTO1 from "../images/PHOTO1.png";
import PHOTO2 from "../images/PHOTO2.png";
import PHOTO3 from "../images/PHOTO3.png";
import PHOTO4 from "../images/PHOTO4.png";
import BG from "../images/BG.jpg";
import leftArrow from "../images/left-chevron.png";
import rightArrow from "../images/right-chevron.png";

import Card from "./Card.js";

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        <Card picsum={PHOTO1} id="one" key="one" />,
        <Card picsum={PHOTO2} id="two" key="two" />,
        <Card picsum={PHOTO3} id="three" key="three" />,
        <Card picsum={PHOTO4} id="four" key="four" />,
        <Card picsum={BG} id="five" key="five" />,
      ],
    };
  }

  listen_resize = () => {
    this.new_width = this.props.gallery.current.getBoundingClientRect().width;

    this.view_port.style.width = `${this.new_width}px`;
    this.nav_buttons_container.style.width = `${100}%`;
    this.button_prev.style.width = `${(this.new_width / 2) * 0.15}px`;
    this.button_next.style.width = `${(this.new_width / 2) * 0.15}px`;

    for (let i = 0; i < this.images.children.length; i++) {
      this.selection_buttons_container.children[i].transitionDuration = "0.0s";
      this.selection_buttons_container.children[i].style.width = `${
        this.new_width * 0.05
      }px`;
      this.selection_buttons_container.children[i].style.height = `${
        this.new_width * 0.05
      }px`;
    }

    this.order_cards();

    this.right_boundary =
      parseFloat(
        this.images.children[this.number_of_cards_by_index].style.left
      ) + this.new_width;
    this.left_boundary =
      parseFloat(this.images.children[0].style.left) - this.new_width;

    for (let i = 0; i < this.images.children.length; i++) {
      this.last_positions[i] = parseFloat(this.images.children[i].style.left);
    }
  };

  componentDidMount() {
    this.number_of_cards_by_index = this.images.children.length - 1;
    this.middle_card_by_index = Math.floor(this.number_of_cards_by_index / 2);
    this.current_card = this.middle_card_by_index;

    /* ********** RESPONSIVE CODE ******** */
    let nav_buttons_placement_as_percentage = 100;

    this.new_width = this.props.gallery.current.getBoundingClientRect().width;

    this.view_port.style.width = `${this.new_width}px`;
    this.nav_buttons_container.style.width = `${nav_buttons_placement_as_percentage}%`;
    this.button_prev.style.width = `${(this.new_width / 2) * 0.15}px`;
    this.button_next.style.width = `${(this.new_width / 2) * 0.15}px`;

    for (let i = 0; i < this.images.children.length; i++) {
      this.selection_buttons_container.children[i].transitionDuration = "0.0s";
      this.selection_buttons_container.children[i].style.width = `${
        this.new_width * 0.05
      }px`;
      this.selection_buttons_container.children[i].style.height = `${
        this.new_width * 0.05
      }px`;
    }

    this.order_cards();
    this.update_selection();

    window.addEventListener("resize", this.listen_resize);

    // window.addEventListener('resize', () => {
    //     this.new_width = this.props.gallery.current.getBoundingClientRect().width;

    //     this.view_port.style.width = `${this.new_width}px`;
    //     this.nav_buttons_container.style.width = `${nav_buttons_placement_as_percentage}%`;
    //     this.button_prev.style.width = `${(this.new_width / 2) * 0.15}px`;
    //     this.button_next.style.width = `${(this.new_width / 2) * 0.15}px`;

    //     for (let i = 0; i < this.images.children.length; i++) {
    //         this.selection_buttons_container.children[i].transitionDuration = '0.0s';
    //         this.selection_buttons_container.children[i].style.width = `${this.new_width * 0.05}px`;
    //         this.selection_buttons_container.children[i].style.height = `${this.new_width * 0.05}px`;
    //     }

    //     this.order_cards();

    //     this.right_boundary = parseFloat(this.images.children[this.number_of_cards_by_index].style.left) + this.new_width;
    //     this.left_boundary = parseFloat(this.images.children[0].style.left) - this.new_width;

    //     for (let i = 0; i < this.images.children.length; i++) {
    //         this.last_positions[i] = parseFloat(this.images.children[i].style.left);
    //     }
    // });
    /* *********************************** */

    this.last_positions = [];
    this.right_boundary =
      parseFloat(
        this.images.children[this.number_of_cards_by_index].style.left
      ) + this.new_width;
    this.left_boundary =
      parseFloat(this.images.children[0].style.left) - this.new_width;

    for (let i = 0; i < this.images.children.length; i++) {
      this.last_positions.push(parseFloat(this.images.children[i].style.left));
    }

    /* ******** BUTTON NAVIGATION ******** */
    this.scroll_in_progress = false;
    /* *********************************** */

    /* *********** AUTOPLAY CODE ********* */
    this.autoplay_timeout_id = null;
    this.autoplay_interval_id = null;
    /* *********************************** */

    /* ************ INIT CODE ************ */
    this.selection_buttons_container.children[0].click();
    /* *********************************** */
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.listen_resize);
    clearTimeout(this.autoplay_timeout_id);
    clearInterval(this.autoplay_interval_id);
  }

  update_selection = () => {
    for (let i = 0; i < this.images.children.length; i++) {
      if (i === this.current_card) {
        this.selection_buttons_container.children[i].style.backgroundColor =
          "white";
        this.selection_buttons_container.children[i].style.boxShadow =
          "0 0 10px 5px white";
      } else {
        this.selection_buttons_container.children[i].style.backgroundColor =
          "#67ab33";
        this.selection_buttons_container.children[i].style.boxShadow =
          "0 0 10px 5px black";
      }
    }
  };

  order_cards = () => {
    let counter_for_right = 1,
      counter_for_left = this.middle_card_by_index;

    for (let i = 0; i < this.images.children.length; i++) {
      this.images.children[i].style.transitionDuration = "0.0s";

      if (i < this.middle_card_by_index) {
        this.images.children[i].style.left = `-${
          counter_for_left * this.new_width - this.new_width / 2
        }px`;
        counter_for_left--;
      } else if (i > this.middle_card_by_index) {
        this.images.children[i].style.left = `${
          counter_for_right * this.new_width + this.new_width / 2
        }px`;
        counter_for_right++;
      } else {
        this.images.children[i].style.left = `${this.new_width / 2}px`;
      }
    }
  };

  handle_boundaries = () => {
    if (Math.round(this.last_positions[0]) <= this.left_boundary) {
      const end_of_deck =
        this.last_positions[this.number_of_cards_by_index] + this.new_width;

      this.images.children[0].style.left = `${end_of_deck}px`;
      this.last_positions[0] = end_of_deck;

      this.images.appendChild(
        this.images.children[0],
        this.images.children[this.number_of_cards_by_index]
      );
      this.last_positions.splice(
        this.number_of_cards_by_index,
        0,
        this.last_positions.shift()
      );
    }
    if (
      Math.round(this.last_positions[this.number_of_cards_by_index]) >=
      this.right_boundary
    ) {
      const beginning_of_deck = this.last_positions[0] - this.new_width;

      this.images.children[
        this.number_of_cards_by_index
      ].style.left = `${beginning_of_deck}px`;
      this.last_positions[this.number_of_cards_by_index] = beginning_of_deck;

      this.images.insertBefore(
        this.images.children[this.number_of_cards_by_index],
        this.images.children[0]
      );
      this.last_positions.splice(0, 0, this.last_positions.pop());
    }
  };

  /* ******** BUTTON NAVIGATION ******** */
  handle_next = () => {
    if (this.scroll_in_progress) return;

    this.scroll_in_progress = true;

    for (let i = 0; i < this.images.children.length; i++) {
      this.images.children[i].style.transitionDuration = "0.0s";

      const updated_position = this.last_positions[i] - this.new_width;

      this.images.children[i].style.left = `${updated_position}px`;
      this.last_positions[i] = updated_position;
    }

    this.current_card =
      this.current_card === this.number_of_cards_by_index
        ? 0
        : ++this.current_card;

    this.handle_boundaries();
    this.update_selection();

    setTimeout(() => {
      this.scroll_in_progress = false;
      this.start_autoplay();
    }, 200);
  };

  handle_prev = () => {
    if (this.scroll_in_progress) return;

    this.scroll_in_progress = true;

    for (let i = 0; i < this.images.children.length; i++) {
      this.images.children[i].style.transitionDuration = "0.0s";

      const updated_position = this.last_positions[i] + this.new_width;

      this.images.children[i].style.left = `${updated_position}px`;
      this.last_positions[i] = updated_position;
    }

    this.current_card =
      this.current_card === 0
        ? this.number_of_cards_by_index
        : --this.current_card;

    this.handle_boundaries();
    this.update_selection();

    setTimeout(() => {
      this.scroll_in_progress = false;
      this.start_autoplay();
    }, 200);
  };
  /* *********************************** */

  /* ******** SELECTION NAVIGATION ***** */
  handle_selection = (event) => {
    if (event.target === this.selection_buttons_container) return;

    let new_card = null;

    for (let i = 0; i < this.images.children.length; i++) {
      if (event.target === this.selection_buttons_container.children[i])
        new_card = i;
    }

    for (let i = 0; i < this.images.children.length; i++) {
      const updated_position =
        this.last_positions[i] +
        (this.current_card - new_card) * this.new_width;

      this.images.children[i].style.transitionDuration = "0.0s";
      this.images.children[i].style.left = `${updated_position}px`;
      this.last_positions[i] = updated_position;
    }

    for (let i = 0; i < Math.abs(this.current_card - new_card); i++) {
      this.handle_boundaries();
    }

    this.current_card = new_card;

    this.update_selection();
    this.start_autoplay();
  };
  /* *********************************** */

  /* *********** AUTOPLAY CODE ********* */
  start_autoplay = () => {
    clearTimeout(this.autoplay_timeout_id);
    clearInterval(this.autoplay_interval_id);

    this.autoplay_timeout_id = setTimeout(() => {
      this.autoplay_interval_id = setInterval(() => {
        for (let i = 0; i < this.images.children.length; i++) {
          this.images.children[i].style.transitionDuration = "0.0s";

          const updated_position = this.last_positions[i] - this.new_width;

          this.images.children[i].style.left = `${updated_position}px`;
          this.last_positions[i] = updated_position;
        }

        this.current_card =
          this.current_card === this.number_of_cards_by_index
            ? 0
            : ++this.current_card;

        this.handle_boundaries();
        this.update_selection();
      }, 1100);
    }, 1200);
  };
  /* *********************************** */

  render() {
    return (
      <Fragment>
        <div
          ref={(ref_id) => (this.nav_buttons_container = ref_id)}
          style={styles.nav_buttons_container}
        >
          <img
            onClick={this.handle_prev}
            ref={(ref_id) => (this.button_prev = ref_id)}
            style={styles.nav_button}
            src={leftArrow}
            alt="prev"
            id="prev"
          />
          <img
            onClick={this.handle_next}
            ref={(ref_id) => (this.button_next = ref_id)}
            style={styles.nav_button}
            src={rightArrow}
            alt="next"
            id="next"
          />
        </div>
        <div
          ref={(ref_id) => (this.view_port = ref_id)}
          style={styles.view_port}
        >
          <div
            ref={(ref_id) => (this.images = ref_id)}
            style={styles.images_container}
          >
            {this.state.cards}
          </div>
        </div>
        <div
          onClick={this.handle_selection}
          ref={(ref_id) => (this.selection_buttons_container = ref_id)}
          style={styles.selection_buttons_container}
        >
          {this.state.cards.map((_, i) => {
            return <div style={styles.selection_button} key={i}></div>;
          })}
        </div>
      </Fragment>
    );
  }
}

const styles = {
  view_port: {
    margin: 0,
    padding: 0,
    width: "500px",
    height: "300px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
  },
  images_container: {
    margin: 0,
    padding: 0,
    width: "inherit",
    height: "inherit",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  nav_buttons_container: {
    margin: 0,
    padding: 0,
    width: "100vw",
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
  },
  nav_button: {
    width: "50%",
    height: "auto",
    pointerEvents: "all",
    cursor: "pointer",
  },
  selection_buttons_container: {
    margin: 0,
    padding: 0,
    width: "fit-content",
    height: "fit-content",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
    zIndex: 99999,
  },
  selection_button: {
    marginRight: "15px",
    padding: 0,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "grey",
    pointerEvents: "all",
    cursor: "pointer",
  },
};

export default Deck;
