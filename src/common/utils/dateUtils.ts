export const today = (): Date => new Date()

export const formatDateDMY = (d: Date): string => {
  const day = `${d.getDay()}`.padStart(2, '0')
  const month = `${d.getMonth()}`.padStart(2, '0')

  return `${day}/${month}/${d.getFullYear()}`
}
