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
          Σεμινάρια / Ημερίδες
        </h2>

        <Paragraph title='<span>11/2013 <br />20 ώρες</span>' gap={false}>
          <span>
            <b>«Η κατανόηση της δυναμικής της θεατρικής κίνησης ως μουσική»</b>
            <br />
            Εισηγήτρια: Κατερίνα Σαρροπούλου, καθηγήτρια Θεατρικής Κίνησης και
            Αυτοσχεδιασμού.
            <br />
            <b>
              «Πρόσεξα ότι όταν παίζατε ήταν σαν να μην σας ένοιαζε τίποτε άλλο
              παρά μόνο η μουσική»
            </b>
            <br />
            Εισηγητής: Παναγιώτης Κανελλόπουλος, αναπληρωτής καθηγητής Μουσικής
            Παιδαγωγικής στο Πανεπιστήμιο Θεσσαλίας
          </span>
        </Paragraph>

        <Paragraph title='<span>01/2014<br />20 ώρες</span>' gap={false}>
          <span>
            <b>«Από την πλευρά του παιδιού»</b> <br />
            Εισηγήτρια: Μαρία Φιλιάνου, πτυχιούχος του τμήματος Φιλοσοφίας-
            Παιδαγωγικής-Ψυχολογίας του Καποδιστριακού Πανεπιστημίου, καθηγήτρια
            μουσικής με μεταπτυχιακές σπουδές στην Ειδική Αγωγή και απόφοιτος
            του Διετούς Μετεκπαιδευτικού Κύκλου Σπουδών Μουσικοκινητικής Αγωγής
            Carl Orff της Σχολής Μωραΐτη
          </span>
        </Paragraph>

        <Paragraph title='<span>04/2014<br />20 ώρες</span>' gap={false}>
          <span>
            <b>
              «Παιδικοί Χοροί και Στοιχειακή Κίνηση στη Μουσικοκινητική Αγωγή
              C.Orff»
            </b>
            <br />
            Εισηγήτριες: Ολυμπία Αγαλιανού, παιδαγωγός, διδάκτορας του τμήματος
            ΦΠΨ του Καποδιστριακού Πανεπιστημίου, καθηγήτρια Φυσικής Αγωγής και
            απόφοιτος του Διετούς Μετεκπαιδευτικού Κύκλου Σπουδών
            Μουσικοκινητικής Αγωγής Carl Orff της Σχολής Μωραΐτη, και Αγγέλικα
            Σλάβικ, μουσικοπαιδαγωγός, καθηγήτρια Μουσικοκινητικής Αγωγής και
            απόφοιτος του Orff-Institut του Πανεπιστημίου Mozarteum στο Salzburg
          </span>
        </Paragraph>

        <Paragraph title='<span>10/2014<br />20 ώρες</span>' gap={false}>
          <span>
            <b>
              «Για την ενοποίηση των Τεχνών: Μουσική, Κίνηση, Λόγος και
              Εικαστικές Τέχνες μέσα από το πρίσμα της Μουσικοκινητικής Αγωγής
              Carl Orff»
            </b>
            <br />
            Εισηγήτρια: Barbara Hazelbach, καθηγήτρια στο Orff-Institut του
            Πανεπιστημίου Mozarteum στο Salzburg και πρόεδρος του Οrff-Schulwerk
            Forum
          </span>
        </Paragraph>

        <Paragraph title='<span>01/2015<br />20 ώρες</span>' gap={false}>
          <span>
            <b>
              «Στα μονοπάτια της Μουσικής και του Χορού: από τη βιωματική γνώση
              των παραδοσιακών κοινωνιών στα κελεύσματα της σύγχρονης
              μουσικοπαιδαγωγικής»
            </b>
            <br />
            Εισηγητές: Δρ. Χάρης Σαρρής, εθνομουσικολόγος, Δρ Φωτεινή Ρεράκη,
            κοινωνιολόγος - μουσικολόγος και Δρ Ολυμπία Αγαλιανού, καθηγήτρια
            Μουσικοκινητικής Αγωγής
          </span>
        </Paragraph>

        <Paragraph title='<span>04/2015<br />20 ώρες</span>' gap={false}>
          <span>
            <b>«Μύθοι και Τρόποι»</b> <br />
            Εισηγήτρια: Δανάη Αποστολίδου- Γκανιέ, χορεύτρια, μουσικός και
            καθηγήτρια μουσικοκινητικής αγωγής Orff στην Νέα Υόρκη (Trevor
            School)
          </span>
        </Paragraph>

        <Paragraph title='<span>10/2015<br />20 ώρες</span>' gap={false}>
          <span>
            <b>
              «Στοιχειακή σύνθεση και κατασκευή αυτοσχέδιων μουσικών οργάνων»
            </b>
            <br />
            Εισηγητής: Ernst Wieblitz, μουσικοπαιδαγωγός και καθηγητής στο
            Orff-Institut του Πανεπιστημίου Mozarteum στο Salzburg
          </span>
        </Paragraph>

        <Paragraph title='<span>01/2016<br />20 ώρες</span>' gap={false}>
          <span>
            <b>«Μουσική και παραστατικές τέχνες με έμφαση στην εικόνα»</b>
            <br />
            Εισηγητής: Δ. Μαραγκόπουλος, συνθέτης και καθηγητής στο Τμήμα
            Μουσικών Σπουδών, Ιόνιο Πανεπιστήμιο
          </span>
        </Paragraph>

        <Paragraph title='<span>05/2016<br />20 ώρες</span>' gap={false}>
          <span>
            <b>«Ανεβάζοντας μια παράσταση: Μουσική, Κίνηση, Λόγος»</b>
            <br />
            Εισηγήτρια: Κατερίνα Σαρροπούλου, Σκηνοθέτρια, Καθηγήτρια Θεατρικής
            Κίνησης, Λόγου και Αυτοσχεδιασμού και Υπεύθυνη του Κύκλου
            Μετεκπαίδευσης σε Σπουδές Μουσικοκινητικής Αγωγής ORFF της Σχολής
            Μωραΐτη.
          </span>
        </Paragraph>

        <Paragraph title='<span>11/2016 <br />8 ώρες</span>' gap={false}>
          <span>
            <b>
              «Ομαδικές δημιουργικές δραστηριότητες στη Μουσικοκινητική Αγωγή
              Orff»
            </b>
            <br />
            Εισηγητής: Andrea Sangiorgio
          </span>
        </Paragraph>

        <Paragraph title='<span>04/2017 <br />8 ώρες</span>' gap={false}>
          <span>
            <b>
              «Κουλτούρες, μουσικές και κώδικες: ένα δημιουργικό ταξίδι μέσα από
              τις μουσικές του κόσμου»
            </b>
            <br />
            Εισηγητής: Polo Vallejo
          </span>
        </Paragraph>

        <Paragraph title='<span>11/2017 <br />4 ώρες</span>' gap={false}>
          <span>
            <b>
              «ΧΡΙΣΤΟΥΓΕΝΝΑ Η ΓΙΟΡΤΗ ΤΗΣ ΑΓΑΠΗΣ (ΠΩΣ ΜΠΟΡΟΥΜΕ ΝΑ ΟΡΓΑΝΩΣΟΥΜΕ ΜΙΑ
              ΜΟΥΣΙΚΟΚΙΝΗΤΙΚΗ ΠΑΡΑΣΤΑΣΗ)»
            </b>
            <br />
            Εισηγήτρια: Γωγώ Αγγελοπούλου, καθηγήτρια μπαλέτου, σκηνοθέτης,
            κινησιολόγος και εκπαιδευτικός συγγραφέας
          </span>
        </Paragraph>

        <Paragraph title='<span>03/2018 <br />8 ώρες</span>' gap={false}>
          <span>
            <b>
              «Μέσα στον κύκλο και πέρα από αυτόν: παιδικοί χοροί από όλο τον
              κόσμο»
            </b>
            <br />
            Εισηγήτρια: Andrea Ostertag
          </span>
        </Paragraph>

        <Paragraph title='<span>09/2018 <br />8 ώρες</span>' gap={false}>
          <span>
            <b> «Τράμπα, τραμπαλίζομαι: η μουσική ως μητρική γλώσσα»</b>
            <br />
            Εισηγήτρια: Ολυμπία Αγαλιανού
          </span>
        </Paragraph>

        <hr />

        <h3 className='my-8'>Εκπαίδευση</h3>

        <Paragraph title='<span>2013-2016</span>' gap={false}>
          <span>
            Μουσικοκινητική αγωγή Carl Orff, Τριετής Μετεκπαιδευτικός κύκλος,
            Σχολή Μωραΐτη
          </span>
        </Paragraph>

        <Paragraph title='<span>2013-2014</span>' gap={false}>
          <span>Θεατρικό παιχνίδι, Ετήσιο σεμινάριο στο Πολύτεχνο</span>
        </Paragraph>

        <Paragraph title='<span>1993-2015</span>' gap={false}>
          <span>
            Πτυχίο κλασσικού πιάνου από το Εθνικό Ωδείο με την Ελένη
            Γιαννακοπούλου
          </span>
        </Paragraph>

        <Paragraph title='<span>2001-2006</span>' gap={false}>
          <span>
            Τμήμα Πολιτικών Έργων Υποδομής, Σχολή Τεχνολογικών Εφαρμογών, ΤΕΙ
            Θεσσαλονίκης
          </span>
        </Paragraph>
      </section>
    </Layout>
  );
}
