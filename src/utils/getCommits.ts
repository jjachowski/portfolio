import axios, { AxiosResponse } from 'axios';
import { CommitResponse } from '../types/commits';

// TODO: refactor this entire file or ima puke 🤢

const twoDays = 1000 * 60 * 60 * 24 * 2;
const day = 1000 * 60 * 60 * 24;

type Streak = {
  day: string;
  streak: number;
};

function isToday(date: Date) {
  const today = new Date();

  if (today.toDateString() === date.toDateString()) {
    return true;
  }

  return false;
}

export const getCommits = async (): Promise<AxiosResponse<CommitResponse[]>> =>
  axios.get('https://api.github.com/repos/jjachowski/portfolio/commits');

export const getCommitStreak = async (): Promise<number> => {
  const existingStreak = localStorage.getItem('streak');
  if (existingStreak) {
    const streak = JSON.parse(existingStreak) as Streak;
    if (isToday(new Date(streak.day))) {
      return (JSON.parse(existingStreak) as Streak).streak;
    }
  }

  const response = await getCommits();
  if (response.status === 200 && response.data) {
    let previous = new Date();

    for (let i = 0; i < response.data.length; i++) {
      const currentData = response.data[i];
      if (!currentData) {
        continue;
      }

      let current = new Date(currentData.commit.author.date);
      let diff = previous.getTime() - current.getTime();

      if (diff > twoDays) {
        let streak = new Date().getTime() - previous.getTime();
        streak = Math.ceil(streak / day);
        const streakToSave: Streak = { streak, day: new Date().toDateString() };
        localStorage.setItem('streak', JSON.stringify(streakToSave));
        return streak;
      }
      previous = current;
    }
  }
  return 0;
};
