const comics = [
  {
    month: '2',
    year: '2022',
    alt: 'It\'s important to make sure your analysis destroys as much information as it produces.',
    img: 'data_trap.png',
    title: 'Data Trap',
    day: '16',
  },
  {
    month: '11',
    year: '2021',
    alt: 'Oh no, Murphy just picked up the razor.',
    img: 'occam.png',
    title: 'Occam',
    day: '12',
  },
  {
    month: '8',
    year: '2012',
    alt: 'I got lost and wandered into the world\'s creepiest cemetery, where the headstones just had names and star ratings. Freaked me out. When I got home I tried to leave the cemetery a bad review on Yelp, but as my hand hovered over the \'one star\' button I felt this distant chill ...',
    img: 'star_ratings.png',
    title: 'Star Ratings',
    day: '22',
  },
  {
    month: '12',
    year: '2018',
    alt: 'You can tell most people don\u2019t really assign an absolute meaning to these numbers because in some places and time periods, \u201cbillion\u201d has meant 1,000x what it\'s meant in others, and a lot of us never even noticed.',
    img: 'million_billion_trillion.png',
    title: 'Million, Billion, Trillion',
    day: '28',
  },
  {
    month: '1',
    year: '2015',
    alt: 'If the breaking news is about an event at a hospital or a lab, move it all the way over to the right.',
    img: 'worrying.png',
    title: 'Worrying',
    day: '2',
  },
  {
    month: '6',
    year: '2021',
    alt: '\'Okay, that was weird, but the product reveal was normal. I think the danger is pas--\' \'One more thing.\' \'Oh no.',
    img: 'product_launch.png',
    title: 'Product Launch',
    day: '7',
  },
  {
    month: '10',
    year: '2017',
    alt: 'I started off with countless problems. But now I know, thanks to COUNT(), that I have \'#REF! ERROR: Circular dependency detected\' problems.',
    img: 'making_progress.png',
    title: 'Making Progress',
    day: '23',
  },
  {
    month: '5',
    year: '2011',
    alt: 'Themistocles said his infant son ruled all Greece -- \'Athens rules all Greece; I control Athens; my wife controls me; and my infant son controls her.\' Thus, nowadays the world is controlled by whoever buys advertising time on Dora the Explorer.',
    img: 'chain_of_command.png',
    title: 'Chain of Command',
    day: '13',
  },
  {
    month: '10',
    year: '2017',
    alt: 'It\'s like I\'ve always said--people just need more common sense. But not the kind of common sense that lets them figure out that they\'re being condescended to by someone who thinks they\'re stupid, because then I\'ll be in trouble.',
    img: 'logical.png',
    title: 'Logical',
    day: '11',
  },
  {
    month: '10',
    year: '2015',
    alt: 'If that doesn\'t fix it, git.txt contains the phone number of a friend of mine who understands git. Just wait through a few minutes of \'It\'s really pretty simple, just think of branches as...\' and eventually you\'ll learn the commands that will fix everything.',
    img: 'git.png',
    title: 'Git',
    day: '30',
  },
];

export function useComic(id: number) {
  if (id >= 0 && id <= 9) {
    return comics[id];
  }
  return comics[0];
}
