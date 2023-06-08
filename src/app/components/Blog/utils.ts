import dayjs from 'dayjs'

export const toFormattedDate = (d: Date) => dayjs(d).format('ll')
export const toReadingTimeInMins = (sec: number) =>
  `${Math.ceil(sec / 60)} min${sec >= 120 ? 's' : ''}`
