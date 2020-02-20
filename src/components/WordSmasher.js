import React, {Component} from "react";
import Reverse from "./Reverse";
import Pyramid from "./Pyramid";
import Apothegm from "./Apothegm";
import ReversePyramid from "./InvertedPyramid";
//import Datamuse from "./Datamuse";
import RepeatLetters from "./RepeatLetters";
import ShuffleLetters from "./ShuffleLetters";
import DeleteWords from "./DeleteWords";
import InvisibleWords from "./InvisibleWords";

import styles from '../scss/WordSmasher.module.scss';
import LettersPermutations from "./LettersPermutations";
import WordsPermutation from "./WordsPermutation";

//import PropTypes from 'prop-types';

class WordSmasher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            <div className={styles.content}>
                <div className={styles.inputArea}>
					<textarea rows="10" cols="50"
							  value={this.state.input}
							  onChange={this.handleChange}
							  className="input_textarea"
							  placeholder="type here"
					/>
                </div>
                <div className={styles.outputArea}>
                    <WordsPermutation input={this.state.input}/>
                    <LettersPermutations input={this.state.input}/>
                    <InvisibleWords input={this.state.input}/>
                    <DeleteWords input={this.state.input}/>
                    <ShuffleLetters input={this.state.input}/>
                    <RepeatLetters input={this.state.input}/>
                    <Reverse input={this.state.input}/>
                    <Pyramid input={this.state.input}/>
                    <ReversePyramid input={this.state.input}/>
                    <Apothegm input={this.state.input}/>
                    {/*<Datamuse input={this.state.input}/>*/}
                </div>
            </div>
        );
    }
}

//WordSmasher.propTypes = {};

export default WordSmasher;