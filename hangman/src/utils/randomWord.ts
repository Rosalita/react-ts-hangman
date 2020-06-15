import { words15 } from '../words/words15';

export const randomWord = (numLetters: number): string => {

    let words: string[]

    switch (numLetters){
        case 15:
        words = words15
        console.log(words)
    }


    // split on space
    // gen random number between 0 and len -1 of array
    // return the word at that index
    return "foo"

}