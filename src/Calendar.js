import React, { memo } from 'react';

function Calendar({ count }) {
  console.log('Rendu Calendar');
  return <h2>Calendrier - {count}</h2>;
}

export default memo(Calendar, (prevProps, newProps) => {
  if (prevProps.count === newProps.count) {
    return true;
  }
});
