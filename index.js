const ERRORMSG = 'Please use a valid Date object'
const dayOfWeekMap = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6,
}

const dateType = date => date instanceof Date

const getCurrentDate = () => new Date(Date.now());

const getDayOfMonth = date => dateType(date) ? date.getDate() : ERRORMSG

const getFirstDayOfMonth = date => {
  return dateType(date)
    ? new Date((new Date()).setDate(date.getDate() - getDayOfMonth(date) + 1))
    : ERRORMSG
}

const subtractDays = (date, days) => {
  return dateType(date)
    ? new Date((new Date()).setDate(date.getDate() - days))
    : ERRORMSG
}

const getDayOfWeek = date => dateType(date) ? date.getDay() : ERRORMSG

const firstCalendarDate = date => {
  const FDOM = getFirstDayOfMonth(date);
  const DOW = getDayOfWeek(FDOM);
  return subtractDays(FDOM, DOW);
}

const generateWeek = date => {
  const arr = [];
  let j = 0;
  for (j; j < 7; j++) {
    arr.push(new Date((new Date(date)).setDate(date.getDate() + j)));
  }
  return arr
}

const generateCalendar = date => {
  let FCD = firstCalendarDate(date);
  const calendar = [];
  let i = 0;
  for (i; i < 6; i++) {
    const FDOW = new Date((new Date(FCD)).setDate(FCD.getDate() + (i * 7)));
    const week = generateWeek(FDOW);
    calendar.push(week)
  }
  console.log('Calendar: ', calendar);
  return calendar
}

generateCalendar(getCurrentDate());
