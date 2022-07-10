import React, { useEffect, useState } from 'react';
import { getCommitStreak } from '../api/getCommits';

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
    <>
      {streak && (
        <h2 className='text-xl font-mono my-4'>
          daily-commits streak: {streak}
        </h2>
      )}
    </>
  );
};
