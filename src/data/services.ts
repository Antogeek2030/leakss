export interface Service {
  slug: string; title: string; short: string; intro: string;
  signs: string[]; process: string[]; note: string;
}
export const SERVICES: Service[] = [
  {
    slug: 'water-leak-detection',
    title: 'Water Leak Detection',
    short: 'Find hidden leaks in walls, ceilings and supply lines without tearing anything open.',
    intro: 'A small leak can run for months before you see a stain. We use acoustic listening gear, thermal imaging and moisture meters to pinpoint the exact spot, so any repair is small and targeted.',
    signs: ['A water bill that climbs with no change in use', 'The sound of running water when everything is off', 'Damp spots, peeling paint or bubbling drywall', 'A musty smell in a closet, garage or bathroom'],
    process: ['Walk the property and review your water bill history', 'Run a meter test to confirm water is actually escaping', 'Trace the leak with acoustic and thermal tools', 'Mark the exact location and explain your repair options'],
    note: 'You get a plain-language report with photos that you can hand to a plumber or your insurer.',
  },
  {
    slug: 'slab-leak-detection',
    title: 'Slab Leak Detection',
    short: 'Locate leaks in pipes under your concrete foundation before floors and walls are damaged.',
    intro: 'Pipes under a concrete slab are hard to reach and easy to miss. Non-invasive electronic detection lets us map the line and find the leak within inches, so a plumber cuts one small opening instead of a trench.',
    signs: ['Warm spots on tile or hardwood floors', 'Cracks in walls or flooring that keep growing', 'Low water pressure throughout the house', 'The sound of water running under the floor'],
    process: ['Isolate the hot and cold lines to narrow the search', 'Listen along the slab with ground microphones', 'Confirm with thermal imaging and pipe tracing', 'Mark the leak and advise on the least invasive repair'],
    note: 'Early detection is the difference between one small repair and a flooded room.',
  },
  {
    slug: 'emergency-leak-detection',
    title: 'Emergency Leak Detection',
    short: 'Fast response when water is spreading and you need to know where it is coming from.',
    intro: 'When water is coming through a ceiling or pooling under a floor, every hour adds damage. We come out quickly, help you shut off the right valve, and find the source so repairs can start the same day.',
    signs: ['Water dripping from a ceiling or light fixture', 'Wet carpet with no obvious cause', 'A sudden drop in water pressure', 'A water meter that spins with everything off'],
    process: ['Call us and we tell you how to shut off water safely', 'Arrive and locate the source of the leak', 'Document the damage for your insurance claim', 'Hand off a clear plan to your plumber or restoration team'],
    note: 'Call any time. We will tell you honestly whether it can wait until morning.',
  },
  {
    slug: 'pool-leak-detection',
    title: 'Pool & Spa Leak Detection',
    short: 'Pressure and dye testing to find leaks in pool shells, plumbing and equipment.',
    intro: 'Losing more than a quarter inch of water a day is not just evaporation. We test the shell, skimmers, returns and underground plumbing to find out where your pool is losing water.',
    signs: ['Water level dropping faster than evaporation explains', 'Wet or soft ground around the pool deck', 'Cracked or lifting decking', 'An auto-fill valve that never stops running'],
    process: ['Run a bucket test to separate leaks from evaporation', 'Dye-test the shell, fittings and light niches', 'Pressure-test the plumbing lines', 'Report the leak location and repair options'],
    note: 'Fixing a pool leak early saves water, chemicals and a lot of money.',
  },
  {
    slug: 'leak-inspection',
    title: 'Leak Inspection Reports',
    short: 'A documented moisture and leak inspection for home sales, insurance and peace of mind.',
    intro: 'Buying, selling or filing a claim? We inspect for active leaks and hidden moisture and give you a clear written report with photos and readings.',
    signs: ['You are buying or selling a home', 'An insurer needs proof of the source of damage', 'You have seen stains but no active drip', 'You want a baseline after a past repair'],
    process: ['Visual inspection of plumbing, fixtures and appliances', 'Moisture mapping with meters and thermal imaging', 'Water meter test to check for active leaks', 'Written report delivered with photos and recommendations'],
    note: 'Reports are written in plain English, not trade jargon.',
  },
];
