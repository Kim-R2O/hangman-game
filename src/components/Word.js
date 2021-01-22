const Word = ({ selectedWord, correctLetters }) => {
  
  return (
    <div className="wrong">
      {selectedWord.split('').map((letter, i) => {
      	return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
      	)
      })}
    </div>
  )
}

export default Word;