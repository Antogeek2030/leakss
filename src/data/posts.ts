export interface Post {
  slug: string; title: string; tag: string; excerpt: string;
  body: { h?: string; p: string }[];
}
export const POSTS: Post[] = [
  {
    slug: 'signs-of-a-hidden-water-leak',
    title: '5 Signs You Have a Hidden Water Leak',
    tag: 'For local homeowners',
    excerpt: 'Catching a leak early can save thousands. These are the warning signs we see most often in Conejo Valley homes.',
    body: [
      { p: 'Most leaks do not announce themselves. They hide in walls, under slabs and above ceilings, and by the time you see a stain the damage is already well underway. Here are five signs worth taking seriously.' },
      { h: '1. A rising water bill', p: 'If your usage climbs and your habits have not changed, water is going somewhere. Compare the last three to six bills.' },
      { h: '2. A moving water meter', p: 'Turn off every tap and appliance, then check your meter. If it is still moving, you have a leak somewhere on the property.' },
      { h: '3. Damp spots, stains or peeling paint', p: 'Discolored drywall, bubbling paint and soft baseboards usually mean moisture is behind the surface.' },
      { h: '4. Musty smells or mold', p: 'A persistent damp smell in a closet, cabinet or garage is a strong hint of a slow leak.' },
      { h: '5. Warm floors or low pressure', p: 'A warm patch on the floor can mean a hot water line is leaking under the slab. Sudden low pressure is another red flag.' },
      { p: 'If you notice any of these, a quick detection visit is far cheaper than opening walls to guess.' },
    ],
  },
  {
    slug: 'why-your-water-bill-spiked',
    title: 'Why Your Water Bill Spiked, and How to Check',
    tag: 'Water bill tips',
    excerpt: 'A simple fifteen-minute meter test can tell you whether a leak is behind a surprise bill.',
    body: [
      { p: 'A jump in your water bill has a short list of causes: more usage, irrigation changes, a running toilet, or a leak. You can rule most of them out in a few minutes.' },
      { h: 'Do the meter test', p: 'Turn off all water inside and outside. Find your meter, note the reading or the small leak indicator, wait fifteen minutes and check again. Any movement means water is escaping.' },
      { h: 'Check the usual suspects', p: 'Toilets that keep refilling, dripping irrigation valves and leaking water heater connections cause many high bills. Add a few drops of food coloring to a toilet tank and see if it shows up in the bowl.' },
      { h: 'When it is not one of those', p: 'If the meter still moves, the leak is probably in a supply line, under the slab or in the yard. That is when electronic detection pays off, because it finds the spot without digging.' },
    ],
  },
  {
    slug: 'why-non-invasive-detection-matters',
    title: 'Why Non-Invasive Leak Detection Protects Your Home',
    tag: 'Honest guidance',
    excerpt: 'Guessing means holes in your walls and floors. Here is how modern detection avoids that.',
    body: [
      { p: 'The old way of finding a leak was to open the wall where you think it might be. Sometimes you guess right. Often you do not, and you pay for patching in several places.' },
      { h: 'What we use instead', p: 'Acoustic sensors hear the sound of water escaping under pressure. Thermal cameras show temperature differences from moisture. Moisture meters confirm the reading without cutting anything.' },
      { h: 'What that means for you', p: 'A smaller repair, less mess and a lower total cost. You also get a clear location to hand to your plumber, which saves their time as well.' },
      { h: 'When repair is the next step', p: 'Detection tells you where the leak is. If the pipe needs replacing or rerouting, we will say so plainly and give you the information you need to get competing quotes.' },
    ],
  },
];
