import React, { useState } from 'react';
import { Heading } from '@wurde/comic.ui.typography.heading';
import { Image } from '@wurde/comic.ui.media.image';
import { Button } from '@wurde/comic.ui.forms.button';
import { useComic } from '@wurde/comic.ui.hooks.use-comic';

import chainOfCommand from './images/chain_of_command.png';
import dataTrap from './images/data_trap.png';
import git from './images/git.png';
import logical from './images/logical.png';
import makingProgress from './images/making_progress.png';
import MillionBillionTrillion from './images/million_billion_trillion.png';
import occam from './images/occam.png';
import productLaunch from './images/product_launch.png';
import starRatings from './images/star_ratings.png';
import worrying from './images/worrying.png';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Viewer() {
  const [comicId, setComicId] = useState(0);
  const comic = useComic(comicId);
  let img;

  switch (comic.img) {
    case 'chain_of_command.png':
      img = chainOfCommand;
      break;
    case 'data_trap.png':
      img = dataTrap;
      break;
    case 'git.png':
      img = git;
      break;
    case 'logical.png':
      img = logical;
      break;
    case 'making_progress.png':
      img = makingProgress;
      break;
    case 'million_billion_trillion.png':
      img = MillionBillionTrillion;
      break;
    case 'occam.png':
      img = occam;
      break;
    case 'product_launch.png':
      img = productLaunch;
      break;
    case 'star_ratings.png':
      img = starRatings;
      break;
    case 'worrying.png':
      img = worrying;
      break;
    default:
      img = chainOfCommand;
  }

  return (
    <main className="flex-col justify-center">
      <Heading variant="h3" className="m-auto">{comic.title}</Heading>

      <nav className="mb-4 m-auto">
        <Button className="underline" onClick={() => setComicId(0)}>First</Button>
        <Button className="underline" onClick={() => setComicId(Math.max(comicId - 1, 0))}>Prev</Button>
        <Button className="underline" onClick={() => setComicId(random(0, 9))}>Random</Button>
        <Button className="underline" onClick={() => setComicId(Math.min(comicId + 1, 9))}>Next</Button>
        <Button className="underline" onClick={() => setComicId(9)}>Last</Button>
      </nav>

      <Image
        src={img}
        alt={comic.alt}
        className="m-auto"
      />
    </main>
  );
}
