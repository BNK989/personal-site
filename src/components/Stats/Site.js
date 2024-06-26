import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.github.com/repos/mldangelo/personal-site',
    );
    const resData = await res.json();
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="statsContent">
      <h3>Some stats about this site</h3>
      <h4>This site is hosted on Render.com</h4>
      <p>With grate thanks to Michael D&apos;Angelo who made this site
        available. so I can spend more time on my <Link to="/projects">✨projects✨</Link>.
      </p>

      <h3>Stats about the original repository</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
