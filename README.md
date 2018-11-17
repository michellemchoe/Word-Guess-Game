# Word-Guess-Game
03-Homework


(screen will always display title, gallow, incorrect guesses box)
have an array of images 
    [0] gallow
    [1] head
    [2] torso
    [3] left arm
    [4] right arm
    [5] left leg
    [6] right leg

randomly choose mysteryWord from list

while (guessesLeft > 0) && !puzzleSolved
    take yourGuess from user.
        use toUpper to make it capital

    if (call checkLetter function -- will return true if its a match )
        call updatePuzzle to update blanks
    else 
        call updateWrongs to update incorrect guesses
        decrement guessesLeft
        call updateVictim to add another body part
            head > torso > left arm > right arm > left leg > right leg

**     call puzzleSolved function to check if puzzle is solved
    ** do it in while statement if possible







/*= updatePuzzle function ==========================================================================*/
    input: 
        mysteryWord -- the word to guess
        currPuzzle  -- the string of blanks with previous correctly guessed letters filled in
        yourGuess   -- the correct letter guess
    output:
        currPuzzle  -- updated with new letter filled in.

    compare yourGuess to each element of entire mysteryWord
    if mysteryWord[index] === yourGuess, assign yourGuess to that index of currPuzzle
    return currPuzzle

/*= checkLetter function ============================================================================*/
    input: 
        mysteryWord -- the word to guess
        yourGuess   -- the user's guess
    output:
        match       -- true if the yourGuess is found in mysteryWord

    set match to false
    for ( i=0; i < mysteryWord.length; i++)
        if mysteryword[i] === yourGuess
            set match to true
            break
    return match
        
/*= updateWrongs function ===========================================================================*/
    input: 
        yourGuess   -- user's incorrect letter guess
        wrongList   -- list of previous incorrect letter guesses
    output: 
        wrongList   -- updated list of incorrect letter guesses

    push yourGuess to end of string

/*= updateVictim function =====================================================*/
    input:
        guessesLeft -- number of guesses remaining
    output: 
        none

    (all images in array should be invisible)
    for (i=0; i < (7-guessesLeft); i++)
        make image in index[i] visible using 
        img.style.visibility = 'visible';

/*= puzzleSolved function =====================================================*/
    input: 
        mysteryWord -- word to guess
        currPuzzle  -- blanks updated with correct letters
    return:
        isSolved    -- is the puzzle solved

    if (mysteryWord === currPuzzle)
        return true
    else
        return false



difficulty levels
    more body parts


topics