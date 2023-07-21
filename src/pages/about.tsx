import Image from 'next/image';
import PianoPic from 'public/images/piano.png';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <section>
        <h1 className='font-serif text-3xl font-bold'>Προφίλ</h1>
        <p className='my-5 text-neutral-200 text-neutral-800'>
          Η Ευγενία Πωλαναγνωστάκη γεννήθηκε και μεγάλωσε στη Θεσσαλονίκη.
          Έπαιξε πρώτη φορά πιάνο σε ηλικία 5 ετών και ήταν τότε που ξεκίνησε
          τις κλασσικές σπουδές της. Απόκτησε το πτυχίο πίανου στο{' '}
          <b>Εθνικό Ωδείο</b>. Όταν παρακολούθησε ένα σεμινάριο μουσικοκινητικής
          αγωγής αποφάσισε ότι θα ήθελε να ασχοληθεί πλήρως με την μουσική.
        </p>
        <p className='my-5 text-neutral-200 text-neutral-800'>
          Παρακολούθησε και αποφοίτησε απο τον τριετή μετεκπαιδευτικό κύκλο
          Μουσικοκινητικής Αγωγής <b>Carl Orff</b> σχολής Μωραΐτη (Orff –
          Schulwerk Forum και Orff Institut του Πανεπιστημίου Mozarteum στο
          Salzburg). Έχει παρακολουθήσει ετήσιο σεμινάριο θεατρικού παιχνιδιού
          στο Πολύτεχνο - χώρος παιδικής καλλιτεχνικής αγωγής & επιμόρφωσης
          ενηλίκων.
        </p>
        <hr />
        <p className='my-5 text-neutral-200 text-neutral-800'>
          Η μουσική και η ενασχόληση με τα παιδιά είναι κάτι που πάντα αγαπούσε
          και έβρισκε ενδιαφέρον. Εργάζεται ως δασκάλα πιάνου από το 2015 και ως
          μουσικοπαιδαγωγός μουσικοκινητικής από το 2016 με διάφορες ηλικιακές
          ομάδες, από 18 μηνών με συνοδό έως ενήλικες στα μαθήματα πιάνου.
          Συνεργάζεται με ωδεία, με παιδικούς σταθμούς και νηπιαγωγεία.
        </p>
        <div className='flex justify-center pt-16'>
          <Image
            src={PianoPic}
            className='rounded-full grayscale'
            alt='piano-oil-canvas'
            width={300}
            height={300}
            placeholder='blur'
            priority
          />
        </div>
      </section>
    </Layout>
  );
}
