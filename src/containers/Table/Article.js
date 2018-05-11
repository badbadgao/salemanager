// @flow

import * as React from 'react';

type Props = {
  title: number,
  body: string,
};

export default function Article({ title, body }: Props) {
  
  const sumrise = value => value * 2;
  
  return (
    <article>
      <h1>{sumrise(title)}</h1>
      <p>{body}</p>
    </article>
  );
}

Article.defaultProps = {
  body: "aaksd",
};
