import React, { useEffect, useState } from 'react';
import { getCommitStreak } from '../utils/getCommits';

interface CommitStreakProps {}

export const CommitStreak: React.FC<CommitStreakProps> = ({}) => {
  const [streak, setStreak] = useState<number>();
  useEffect(() => {
    const test = async () => {
      const res = await getCommitStreak();
      setStreak(res);
    };
    test();
  }, []);
  return (
    <h2 className='text-lg font-mono my-4 h-6'>
      {streak ? `daily-commits streak: ${streak}` : ''}
    </h2>
  );
};
