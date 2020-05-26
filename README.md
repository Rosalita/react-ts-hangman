# react-ts-hangman
Hangman with React and TypeScript

# Setup

This project was created with `yarn create react-app my-app --template typescript`

It looks like this has alread added the following type definitions to package.json 
- "@types/jest": "^24.0.0",
- "@types/node": "^12.0.0",
- "@types/react": "^16.9.0",
- "@types/react-dom": "^16.9.0",


# Design
[x] needs a text input that accepts a single letter

- Created a text input box 
Typing in a letter feels awkward, user input should be a single action.
Maybe try have 26 letter buttons that can be clicked as an interface.



[] needs to display guessed letters
[] needs to display an obfuscated word to guess
[] needs to reveal guessed letters in the word
[] needs to keep track of the number of guesses
[] needs to display a hangman at various stages of death
[] needs to reset after playing and generate a new word to guess

# Stuff I learned building this project
- Components muse be within /src otherwise typescript will fail to compile.
- If a React Component is returning JSX, the file containing it needs to be renamed .tsx
- Functional components have changed since the introduction of state hooks in React 16.8, they now use state.
- Buttons are just <input type="button">
- React types are needed to handle an <input type="text"> on change event `event: React.ChangeEvent<HTMLInputElement>`



