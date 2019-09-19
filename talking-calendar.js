let months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}

let talkingCalendar = function(date) {
  let string = '';
  let [year, month, day] = date.split('/');
  if (day < 10) {
    day = day.replace('0', '');
  }
  
  if (day === '1' || day === '21' || day === '31') {
    day += 'st';
  } else if (day === '2' || day === '22') {
    day += 'nd';
  } else if (day === '3' || day === '23') {
    day += 'rd';
  } else {
    day += 'th';
  }

  string += `${months[month]} ${day}, ${year}`;

  return string;
};

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/04/23"));