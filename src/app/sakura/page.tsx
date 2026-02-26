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
        subtitle="A Valentine visit to Sakura Dining in Cebu IT Park, where fluffy pancakes, pink interiors, and crowd day chaos all land in one memorable meal."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          Valentine&apos;s Day is not the easiest time to judge a restaurant fairly, but it does reveal what a place feels like under pressure. Sakura Dining at Ayala Malls Central Bloc was full, loud, and visibly stretched. I came with a friend for a long catch up, and we waited around 30 to 35 minutes before getting seated. By the time we settled in, the room still delivered what people come for: a cozy Japanese pink aesthetic, a crowd that treated dinner like an event, and a setting that instantly felt like Cebu IT Park date night.
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
            The menu covers both savory and sweet options, but the reason most people come here is obvious after one bite of the Chocolate Banana Pancake (₱440). It was the best item we ordered, and it carried the table from first spoonful to last. 
          </Paragraph>
          <Paragraph>
            The pancake texture is extremely soft and smooth, closer to a cloud like souffle style than a standard dense stack. Chocolate and banana were balanced, not overly sweet, and the plating looked polished without feeling forced. For a dish that gets a lot of social media attention, it still earns its reputation in person.
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
            We also ordered the Creamy Pesto (₱400) to balance the sweetness. This was the weaker plate. It looked great and the flavor itself was mild and acceptable, but the smell was very strong when it arrived. That first aroma was overpowering enough to affect the overall experience, which is why it landed as the least favorite item for this visit.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            On packed nights, Sakura can test your patience first and reward you second.
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
            The space is one of Sakura&apos;s biggest strengths. Seating is around 25 to 30 people, with indoor and outdoor areas under full air conditioning. On ordinary days it likely feels relaxed, but on major occasions it can shift into crowd mode quickly. The design language is consistent across the room, with cherry blossom details, soft pink tones, and the heart bench that many guests use as their main photo anchor.
          </Paragraph>
          <Paragraph>
            The outdoor zone adds another layer with a large heart backdrop and a message heart tree where people leave notes. It is a smart, local friendly touch that turns dinner into something more social and memorable. Service remains the weak point during peak periods. Food took around 20 to 30 minutes, staff attentiveness was around 2 out of 5, and we had to press the table call button multiple times before someone came to process payment.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <Paragraph>
            For guests who value atmosphere, photos, and dessert as much as the main course, Sakura remains one of the more distinctive stops in IT Park. I would come back mainly for the pancakes and the cozy vibe, and I would recommend it to couples, friend groups, and anyone who enjoys aesthetic Japanese style dining. The best strategy is simple: avoid peak rush if possible, then settle in and let the experience unfold.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">Ayala Malls Central Bloc, Cebu I.T. Park, Padriga Street, Apas, Cebu City 6000, Philippines. 2nd Floor above Metro Supermarket. Open daily 10am to 9pm.</p>
              <p className="text-sm text-stone-600 mt-2">Phone: 09660738063 • Email: fuwari.ayalait@gmail.com • IG: @sakura.ayalait • FB: Sakura Dining Ayala Central Bloc</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">★★★☆☆ (7/10) • Best order: Chocolate Banana Pancake (₱440) • Price range: ₱500 to ₱1000 • Main friction points: wait times and slower staff response during crowded periods • No WiFi available.</p>
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
