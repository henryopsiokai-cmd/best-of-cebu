'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function SakuraArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine & Aesthetic"
        title="Pink Blossoms and Fluffy Pancakes"
        subtitle="Finding a moment of Japanese-inspired calm (and a lot of pink) in the heart of Ayala Central Bloc."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          It was Valentine’s Day, and Sakura Dining at Ayala Malls Central Bloc was exactly what you’d expect: packed, chaotic, and radiating a very specific shade of Japanese-inspired pink. Nestled on the 2nd floor of IT Park’s newest mall hub, directly above the Metro Supermarket, this cafe (often associated with the Fuwari brand) has quickly become a digital landmark for local foodies. I went with a friend for a long-overdue catch-up, navigating through the festive crowds of Cebu IT Park. Despite a 35-minute wait that stretched our patience, the eventual transition into the calm, cherry-blossom-scented interior felt like a hard-won victory.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/Ik1FpM7f1-w"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Sakura Dining Exterior • Cebu IT Park
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Fuwari Fluff Factor</H2>
          <Paragraph>
            The menu here is a broad Japanese-fusion mix, but let’s be honest: I was there for the sweets. Specifically, the legendary fluffy pancakes that have made the Fuwari name famous across Cebu, from SM Seaside to this new Ayala location. I ordered the Chocolate Banana Pancake (₱440), and it was easily the highlight of the afternoon. 
          </Paragraph>
          <Paragraph>
            The texture was a revelation—uniquely soft, smooth, and possessing a delicate, cloud-like consistency that is rare to execute with this much precision. Every bite felt intentional, a perfect marriage of warm, airy batter and the rich, cooling contrast of the chocolate and banana. It’s a dish that justifies the hype, standing out not just for its visual appeal but for a technical mastery of texture that distinguishes it from more traditional, dense American-style pancakes.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://drive.google.com/thumbnail?id=1bMZK-axAAMEbjV2tbn4aTAaKDr1kJYRj&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sakura Decor Detail"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://drive.google.com/thumbnail?id=14iRVAk39F8ahohHF1oVocpbNCoAVDT2r&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sakura Table Setting"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group">
              <img 
                src="https://drive.google.com/thumbnail?id=1i5fm3k_YBqbHrdXWsKkRbswYqASB4vhD&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sakura Pancake Close-up"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Paragraph>
            We attempted to balance the sugar with a savory turn, opting for the Creamy Pesto (₱400). This was where the experience became more nuanced. Visually, it was stunning—vibrant greens against the clean white of the plate—but the aromatic profile was polarizing. The scent was incredibly strong, almost overpowering when it first hit the table. Curiously, the taste was far more reserved; mild, balanced, and perfectly adequate, but the initial olfactory intensity made it a difficult act to follow after the ethereal sweetness of the pancakes.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            Surrounded by cherry blossoms and the soft hum of Valentine's chatter, the 30-minute wait for food began to feel less like a delay and more like a necessary intermission in the heart of the city's hustle.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1uxyaG9c_APfLZtBOw9M6zXI8EzT4Qi91&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1uxyaG9c_APfLZtBOw9M6zXI8EzT4Qi91" type="video/mp4" />
            </video>
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Table Detail
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Aesthetic Architecture</H2>
          <Paragraph>
            Sakura Dining isn't just a restaurant; it’s a meticulously designed photo dream. The space, which comfortably seats about 25-30 people, feels intimate yet can quickly reach a state of high-energy chaos during peak hours. Every corner is curated for the lens—from the iconic heart bench that anchors the room to the cascading cherry blossom accents that define the perimeter. 
          </Paragraph>
          <Paragraph>
            The outdoor area is particularly noteworthy, acting as a sentimental extension of the brand. It features a large heart backdrop and a "message heart tree" where guests leave handwritten notes—a perfect, interactive touch that felt especially poignant on a February 14 visit. While the service flow could benefit from some peak-hour refinement—we found ourselves pressing the table call button multiple times just to settle the bill—the overall experience is one of genuine charm. 
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <Paragraph>
            It feels like a labor of love, possibly a Japanese family-owned enterprise, and that personal investment radiates through the decor and the menu's focus on high-quality ingredients and presentation. For those seeking a date night destination or a catch-up spot for friends who value aesthetic as much as appetite, Sakura is an essential stop in the IT Park ecosystem. Just bring your patience for the wait, and keep your camera ready.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">2nd Floor, Ayala Malls Central Bloc (above Metro Supermarket), Cebu IT Park. Open Daily 10am-9pm.</p>
              <p className="text-sm text-stone-600 mt-2">IG: @fuwari.ayalait • FB: Sakura Dining Ayala Central Bloc</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">7/10. An aesthetic triumph with world-class pancakes. Service under pressure is the only friction point in an otherwise blooming experience.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1oKjibryxuwCOCTtnmgg18LbuXpj_s5E-",
            "1Zo4L5nxvSvcaQjBADFvFwgta1q1PALUa",
            "1wD-HcGhz2h5yR3MLPF5ZNw_NlIF5QAyl",
            "1eIWlmi-jwitOCK93jXJTdz-fTaK0akCx",
            "1uaohS9st9PXzPScL2INDIRyA3oBBUll3",
            "12RH-kIcQdTzoEhPMhO6RqDPDvLoHl_iP",
            "1u0f0wfWzUJxAFTvzICj00UP1cBZsV-w_",
            "1-ZS2cFqcLRi7Zu6Oy3p005nzZc4-4M_9",
            "1PHJHChCTMFBph2EWciLIzfnijU0eer15",
            "1Ae0n9Jl-8UiqhB6wp3qeAgh4SQ2gsZ2z",
            "16TGl-6mfcol64QxllX5NNvZtv4OZS8Gs",
            "1BNK0UX_GtmsDz7OCBWqxPMkBan-uLs4z",
            "1JVJw7MYnS3dU_cT-TKfhiRTdA_XFuC1N",
            "1kFlmK4Btten3Jc7KtgiAMq8jqP8kZJ1a",
            "1b6U04-T7Ar0mqAXqij59UWM3UYbyOWQu",
            "1-Az1LKdfzRiQIH5rqyq4GajkIg3NFKaV",
            "19V5-SsV8ZC7UtvcA6YvebnnhiQLbjzBP",
            "1-XozMcJ9lDXTl4Vl2KFIJMF9riSSvlw5",
            "1-RWPhUrFq65hV25Fd0N9rIvUebJqakn5",
            "1kcQW-aAOlJJovKN545FZhNJqGVwqO9FF",
            "11MvcejqIWPEA9MIvWuVC5eycA3WaP2IQ",
            "1TLkt-NxY8yWhooIGjZcPcXOgbfCyVGAP",
            "1qhw5JjnjX4UJxCJx5sk9D7gvfpgcVztD",
            "1MpJw74NYL0thQEM16z0XUxVHRjCs8WTI",
            "19VTpZbA-Ev65NlzuG-9vUZ3rwU7XYDdc",
            "12K9E8YWvf8vQyvZ3-OnkqwQ08EAFxhWE",
            "1zg3Pc6rozlEqN_gfwomTG6R70qkujkNl",
            "1DzBEwNS0i56tqAtWANcwxBxsSA_Sv5us",
            "1wqwtWtnARS9mYnZ3pKePqL9dhlRCVgwI",
            "1NXp0wRztzDLDlJbG3SIo8owix_l9WmsW",
            "1sAYh0IGvRPiBrt6uABJ03Qt8LZcRzIRb",
            "1JZBASupjuqLcrQIqKjWvgp91a43teHAz",
            "1HOYvw8H5fuv6ZAwLRCFqdx_cCpYLhEtE",
            "1jaFNWji7PVh_QrMGqWWKZzInJOGA8h0_",
            "1CGArEjcGpiShJP0mNWKrt7QLr2zjhncY",
            "14Qr8B0tSeuTlAWMepxrZHSPnnxQOAEJy",
            "1Favwkb-q6FTzSuuChwNxzgfsVfvSIyre",
            "1j5JNJQ2d9_EoDyUAEo7deJvABFTlfpJ3",
            "1ST6OlG4zJvC_T0USAgIuYcUfXjoJJZnV",
            "1enr8iXI5YJSfESheMQyaknBvITzBxGNN",
            "1fmNDlbhTyJ29WU1lGNZzQpBIndy8zCd3",
            "1FUZH_k7hy90xgwjE9tbQeItr0wQRJLHy",
            "1fHqZRF4Pm_JOVOwD4xcw95cJWW5fPjGU",
            "1iQUTdyPjuSp45NkYtaCh_5ue2LuKBc3U",
            "1MJkCG353xVA_dFlQDw6DQxn1tUupN6rl",
            "1bIrpIwUOOXS8i5peI0j4ZjEQ4fc-0PQr",
            "1yB10UiK_ObNRTQ5_dVtbTEW4t4v_bvIh",
            "1NZs_zqWkxgaRh3GF3g79gTt0PxYuyuYr",
            "1rIXbjaqUGjP3nO_syOj-Eg5Ay1HnN5ZU",
            "1Mgq5ZyD_sFeyjItcWIvGcOeM_pH6uzHA",
            "1xSHKV0SHmjvlNcduV06g4a2_3QoBBgZl",
            "1FmTGKXE81B1Gx9_429SiT-hrvT4MNkv2",
            "1U2bPFI_ra8blfTKhHxig1ckcX9dL3Cp2",
            "1Nk639Sg3K_kNqKif6LD8snak425VkV4h",
            "1KPQwz-NpCrVgFkFNK9Udo2CEINnvtxoq",
            "1pNHPtbM2dMJoNXyCSGV83NKcPtHtb6x3",
            "1QNV4EBiHVn45svZp40bbj25vwKRZBxX_",
            "1rW2NksH0BUGcRPi8o3gCb4R5My12PCE2",
            "1DawoNBCbgdOoGjo4HAiM6HXmSthJNVy2",
            "11cmFRXR8rSsyoG3HtfnhPoi_6ZyAgkKq",
            "1bcBrYEvDm0eYEY-ihKPyLWNyVi6fjIiO",
            "1NcaQKKYLfVIDsBitIkn26Igp7PmFujOR",
            "1PzODe0fZslH61FFnXOcAt521Y1u8TKO7",
            "1sFSw1QxckHbLo93RXRJm1egHRxEwOSSJ",
            "1AT8OjbIhDg9IvR5SAW-nDKY-ZXQ6ATlc",
            "1XJxnYePnuNRiHD_vhJVhMtusnDPd9X1x",
            "1mdCW9TZwTMU5hmJlLj700pgmWTSm2ly5",
            "1VcCKxdfjWQvh8NqUW7YCVWNez1oKxMpW",
            "1gw5iuCzdai4e6kjxoJIht5keLR3eV6Uv",
            "14HGW-apsXP4zlsZiDKIqcOQymUzS5618",
            "1M3axs2DNAAwegPqqPLE376vTzqZVgJwG",
            "1Jl7_fHykZQLwgbVfNNPybhq2EGcumd79",
            "1cVPG6bOsExWX0tCnVbJ1nnfC3e9lTnyb",
            "15UV5f5Ul2MghCGSeNKeEA_caBpwt7p2X",
            "1mx_STTXoOzBat-XBTYXacAnXQreV70XY",
            "1dZavyNmUEvKom67MCXNzf1rHeBzLTCdi",
            "1i5fm3k_YBqbHrdXWsKkRbswYqASB4vhD",
            "1bMZK-axAAMEbjV2tbn4aTAaKDr1kJYRj",
            "14iRVAk39F8ahohHF1oVocpbNCoAVDT2r",
            "1N74nXNC1pNY9W1RwJPWZ-W8gqT3L7cw5",
            "17E7jUzgO63a86qO50jypK5B9uQyD4Ev0",
            "1w1oyrSKau8FEyekBb-9RTUBHNglT95z_",
            "10_UX2Qg0P0n64BdznSs62RAMlN_UgWkT",
            "1nuaG0myZoOf9mN2uKlMxYasDlJl0Yr98",
            "1BUVBJAYKXEICKXIZqw6etJ96C3wdtPvv",
            "1Z6YfRgwTz-Bpwb1fKFN8aJ2VGilhjUsa",
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/tamp" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Tamp Cafe</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/laparisienne" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: French Soul</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
