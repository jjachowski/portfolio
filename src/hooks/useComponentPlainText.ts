import axios from 'axios';
import { useState } from 'react';

/**
 *
 * @param componentPath Component path starting from component directory, for example typography/Title.tsx, Button.tsx etc.
 */
export const useComponentPainText = (componentPath: string) => {
  const [data, setData] = useState<string>();
  const [loading, setLoading] = useState(true);
  axios
    .get(
      'https://raw.githubusercontent.com/jjachowski/portfolio/main/src/components/' +
        componentPath
    )
    .then(({ data }) => {
      setData(data);
    })
    .catch(() => setData('fetching failed'))
    .finally(() => setLoading(false));

  return { data, loading };
};
