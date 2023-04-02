import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Paragraph from '@/components/Paragraph';
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
        <h2 className='mb-8 font-serif text-3xl font-bold'>
          Επαγγελματική εμπειρία
        </h2>

        <Paragraph title='<span>2022 έως σήμερα</span>'>
          <span>
            Μουσικοκινητική αγωγή σε παιδιά 7-8 ετών. <br />
            Συνεργασία με το Πρότυπο Ωδείο Ανατολικής Αττικής στην Αγία
            Παρασκευή.
          </span>
        </Paragraph>

        <Paragraph title='<span>2021 έως σήμερα</span>'>
          <span>
            Μουσικοκινητική Αγωγή σε παιδιά από 2-4 ετών. <br />
            Συνεργασία με τον παιδικό σταθμό της Αεροπορίας.
          </span>
        </Paragraph>

        <Paragraph title='<span>2018 έως σήμερα</span>'>
          <span>
            Μουσικοκινητική αγωγή σε παιδιά 18-24 μηνών. <br />
            Συνεργασία με το Κλασσικό Ωδείο Χολαργού.
          </span>
        </Paragraph>

        <Paragraph title='<span>2015 έως σήμερα</span>'>
          <span>Ιδιαίτερα μαθήματα κλασσικού πιάνου</span>
        </Paragraph>

        <Paragraph title='<span>2021 - 2022</span>'>
          <span>
            Δασκάλα μουσικής σε παιδιά από 2-5 ετών. <br />
            Συνεργασία με τον παιδικό σταθμό Σιμόνη».
          </span>
        </Paragraph>

        <Paragraph title='<span>2017 - 2022</span>'>
          <span>
            Μουσικοκινητική Αγωγή και Θεατρικό παιχνίδι σε παιδιά από 2-5 ετών.
            <br />
            Συνεργασία με τον παιδικό σταθμό «Σιμόνη».
          </span>
        </Paragraph>

        <Paragraph title='<span>2017 - 2019</span>'>
          <span>
            Μουσικοκινητική Αγωγή σε παιδιά από 2-5 ετών. <br />
            Συνεργασία με τον παιδικό σταθμό « Η χαρά μας».
          </span>
        </Paragraph>

        <Paragraph title='<span>2016 - 2019</span>'>
          <span>
            Μουσικοκινητική αγωγή σε παιδιά 18 μηνών έως 3 ετών. <br />
            Συνεργασία με το Εθνικό Ωδείο Νέας Σμύρνης.
          </span>
        </Paragraph>

        <Paragraph title='<span>2016 - 2021</span>'>
          <span>
            Πρακτική άσκηση μουσικοκινητικής αγωγής σε συνδυασμό με θεατρικό
            παιχνίδι και εμψύχωση ομάδας στο Πολύτεχνο.
          </span>
        </Paragraph>

        <Paragraph title='<span>2015 - 2019</span>'>
          <span>
            Εθελοντική εργασία με παιδιά σε δράσεις περιβαλλοντικής εκπαίδευσης
            του Δικτύου Μεσόγειος S.O.S.
          </span>
        </Paragraph>

        <Paragraph title='<span>1999-2002</span>'>
          <span>
            Ομαδάρχισσα και Ειδικό στέλεχος Μουσικής (μουσικοκινητικά παιχνίδια,
            ομαδικό τραγούδι) στις παιδικές κατασκηνώσεις (Τ.Υ.Π.Ε.Τ.)
          </span>
        </Paragraph>
      </section>
    </Layout>
  );
}
