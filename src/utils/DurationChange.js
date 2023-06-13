export default function movieDuration(durationValue) {
  const hours = Math.floor(durationValue / 60);
  const minutes = durationValue % 60;

  if(hours === 0) {
    return (`${minutes}м`);
  } else{
    return (`${hours}ч ${minutes}м`);
  }
}
