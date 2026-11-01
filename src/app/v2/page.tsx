import { LeftSection } from '@/components/v2/left-section'
import { RightSection } from '@/components/v2/right-section'
import { SakuraPetals } from '@/components/v2/sakura-petals'
import SNSButtons from '@/components/v2/sns-buttons'
import { getProfile } from '@/lib/content'

export default async function Home() {
  const { name } = await getProfile()

  return (
    <div className="relative min-h-screen bg-background lg:h-screen lg:overflow-hidden">
      <SakuraPetals />
      <main className="relative z-10 flex w-full flex-col lg:h-full lg:flex-row">
        <div className="w-full lg:flex lg:h-full lg:min-w-0 lg:flex-1 lg:justify-end">
          <LeftSection name={name} socials={<SNSButtons />} />
        </div>
        <div className="w-full lg:flex lg:h-full lg:min-w-0 lg:flex-1">
          <RightSection />
        </div>
      </main>
    </div>
  )
}
