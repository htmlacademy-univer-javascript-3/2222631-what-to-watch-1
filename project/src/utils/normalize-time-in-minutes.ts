function normalizeTimeInMinutes(timeInMinutes: number): string {
  const hours = parseInt(String((timeInMinutes) / 60), 10);
  const minutes = timeInMinutes - hours * 60;

  const hoursDuration = `${hours}h`;
  const minutesDuration = `${minutes.toString().padStart(2,'0')}m`;

  if (hours === 0) {
    return minutesDuration;
  }

  return `${hoursDuration} ${minutesDuration}`;
}

export default normalizeTimeInMinutes;
