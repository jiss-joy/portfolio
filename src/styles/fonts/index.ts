import { Concert_One, DM_Mono, Montserrat, Nunito, Rethink_Sans } from 'next/font/google'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  weight: '400',
  subsets: ['latin'],
})

const rethinkSans = Rethink_Sans({
  variable: '--font-rethink-sans',
  weight: '400',
  subsets: ['latin'],
})

const concertOne = Concert_One({
  variable: '--font-concert-one',
  weight: '400',
  subsets: ['latin'],
})

const nunito = Nunito({
  variable: '--font-nunito',
  weight: '400',
  subsets: ['latin'],
})

export { concertOne, dmMono, montserrat, nunito, rethinkSans }
