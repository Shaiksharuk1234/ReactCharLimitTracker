
import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');
  const maxLimit = 200;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLimit) {
      setText(e.target.value);
    }
  };

  const charCount = text.length;
  const remaining = maxLimit - charCount;

  // Set styles based on length
  let countStyle = {};
  if (charCount >= 200) {
    countStyle = { color: 'red', fontWeight: 'bold' };
  } else if (charCount >= 100) {
    countStyle = { color: 'red' };
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: '10px' }}>
      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <div style={countStyle}>
        Characters: {charCount} / {maxLimit} | Remaining: {remaining}
      </div>
    </div>
  );
}

export default CharacterCounter;
