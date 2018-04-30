import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

//we use object destructing again here, this is the same as my original code below it
export default function GuessSection(props) {
  const { feedbackTest, guessCountTest } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedbackTest} guessCount={guessCountTest} />
      <GuessForm onMakeGuess={guess => props.onMakeGuessTest(guess)} />
    </section>
  );
}


// export default function GuessSection(props) {
//   return (
//     <section aria-label="Guess section" aria-describedby="feedback">
//       <Feedback feedback={props.feedback} guessCount={props.guessCount} />
//       <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
//     </section>
//   );
// }
