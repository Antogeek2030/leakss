// Edit these values to update the whole site.
export const SITE = {
  name: 'Thousand Oaks Leak Detection',
  domain: 'leakdetectionthousandoaksca.com',
  url: 'https://leakdetectionthousandoaksca.com',
  phone: '(805) 555-0142', // TODO: replace with your real number
  phoneHref: '+18055550142', // TODO: match the number above
  email: 'info@leakdetectionthousandoaksca.com',
  street: '28805 Calabria Dr',
  city: 'Agoura Hills',
  region: 'CA',
  zip: '91301',
  lat: 34.1467, // approximate; the map embed uses the street address
  lng: -118.7625,
  // Contact form posts here. Swap for a Formspree / Web3Forms URL for real submissions.
  formAction: 'mailto:info@leakdetectionthousandoaksca.com',
};
export const FULL_ADDRESS = `${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.zip}`;
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&z=15&output=embed`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`;
export const AREAS = [
  'Thousand Oaks', 'Agoura Hills', 'Westlake Village', 'Newbury Park', 'Oak Park', 'Calabasas',
  'Moorpark', 'Simi Valley', 'Camarillo', 'Malibu', 'Woodland Hills', 'Hidden Hills',
];
