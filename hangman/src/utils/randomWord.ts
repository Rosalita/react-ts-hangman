import { words4 } from '../words/words4';
import { words5 } from '../words/words5';
import { words6 } from '../words/words6';
import { words7 } from '../words/words7';
import { words8 } from '../words/words8';
import { words9 } from '../words/words9';
import { words10 } from '../words/words10';
import { words11 } from '../words/words11';
import { words12 } from '../words/words12';
import { words13 } from '../words/words13';
import { words14 } from '../words/words14';
import { words15 } from '../words/words15';

export const randomWord = (numLetters: number): string => {

    let words: string[]

    switch (numLetters) {
        case 4:
            words = words4
            break
        case 5:
            words = words5
            break
        case 6:
            words = words6
            break
        case 7:
            words = words7
            break
        case 8:
            words = words8
            break
        case 9:
            words = words9
            break
        case 10:
            words = words10
            break
        case 11:
            words = words11
            break
        case 12:
            words = words12
            break
        case 13:
            words = words13
            break
        case 14:
            words = words14
            break
        case 15:
            words = words15
            break
        default:
            words = ["cat"]
    }

    const randomIndex = Math.floor(Math.random() * words.length) // random number between 0 and len -1 of array
    return words[randomIndex]
}