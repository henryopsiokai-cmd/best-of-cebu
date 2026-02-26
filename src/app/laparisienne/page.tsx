'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function LaParisienneArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine & Ambiance"
        title="La Parisienne Cebu: A Golden Hour Address for Slow Evenings"
        subtitle="A full fresh look at the Lahug favorite where candlelit mood, rooftop views, and honest comfort dining create one of Cebu's most memorable night out settings."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24 -mt-4 md:-mt-6">
        <DropCap>
          I arrived at La Parisienne just before sunset, when Gorordo still felt busy and practical, and stepped into a room that asked me to slow down. That first shift in pace is the magic here. The restaurant does not try to impress you with noise. It wins through mood, warmth, and a sense that your evening is supposed to unfold, not rush.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/TtWfYsJ9WzE"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Atmospheric View
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">A Room Built for Lingering</H2>
          <Paragraph>
            La Parisienne feels intentionally layered. There are comfortable indoor tables for longer conversations, outdoor seating for people watching, and a rooftop that becomes the emotional center once evening settles in. Every area carries the same personality, so whether you come as a couple, with friends, or on your own, you feel included in the same story.
          </Paragraph>
          <Paragraph>
            Timing matters here. Around 5:00 PM to 6:00 PM gives you the best transition from daylight to city lights, plus easier seat selection. By later hours, the place gets busier, but the energy stays soft and romantic. You can still hear your table, still stay present, and still enjoy the music without strain.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m&sz=w1600"
                alt="La Parisienne facade and first impression"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1X7hRsNRM-WVY7ka6mfKVb-EZD3NvV_u8&sz=w1600"
                alt="La Parisienne interior seating"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Design That Feels Personal</H2>
          <Paragraph>
            Many themed restaurants feel staged. This one feels lived in. The wine wall, lighting choices, and rooftop accents all support the identity without pushing too hard. Even playful details, including the Eiffel Tower corner and two seat photo spot, feel integrated instead of forced.
          </Paragraph>
          <Paragraph>
            One detail that deserves credit is maintenance. The koi area is clean, the public spaces are cared for, and the restroom remains one of the strongest in this category. It is roomy, clean, and thoughtfully designed. It sounds minor, but this kind of consistency usually reflects serious management discipline.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            La Parisienne is not just pretty. It is emotionally reliable, which is exactly what date night venues often fail to deliver.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Food Notes From This Visit</H2>
          <Paragraph>
            Initial service speed was strong. We were seated quickly, and first plates arrived in about 5 to 10 minutes. I ordered Spaghetti Meatballs (₱450), Water (₱60), and Dark Chocolate Gelato (₱175). The spaghetti scored 7.8/10 for me. It was satisfying, with the meatballs doing most of the heavy lifting in flavor and texture.
          </Paragraph>
          <Paragraph>
            The Dark Chocolate Gelato was the standout at 9.3/10. Smooth, balanced, and rich without feeling heavy, it was the clearest reason to return for another round. If you are building a smart first order here, treat dessert as essential, not optional.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1KMv1w73XVTR8qV6uIo-P2cBBqaNj5rKS&sz=w1200"
                alt="Dessert and table styling at La Parisienne"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1u_9Bp1KVC-8446wlZmZMR7ulZTNJVXHe&sz=w1200"
                alt="Ambient corner at La Parisienne"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
            <figure>
              <img
                src="https://drive.google.com/thumbnail?id=1Aq7hbwLJFjiXy-aHWoyFUzWCQsDHeo8w&sz=w1200"
                alt="Night atmosphere at La Parisienne Cebu"
                className="w-full aspect-[4/5] object-cover border shadow-sm"
              />
            </figure>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Final Assessment</H2>
          <Paragraph>
            This is one of the few Cebu spots where atmosphere and comfort stay aligned from arrival to last bite. La Parisienne understands pacing, and that makes it ideal for date nights, low pressure reunions, and solo evenings when you want a beautiful room without pretense.
          </Paragraph>
          <Paragraph>
            The weakest area is still service warmth during busy periods. Friendliness and attentiveness can dip, and WiFi through PisoNet is practical but not seamless for long laptop sessions. Better protein forward main options would also round out the menu for frequent repeat guests.
          </Paragraph>
          <Paragraph>
            Overall score: 8.9/10. If your top priority is ambiance that actually sustains a full evening, La Parisienne remains one of Lahug&apos;s most dependable choices.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
              <p className="text-sm text-stone-600 italic">371 Gorordo Ave, Lahug, Cebu City 6000. Near UP Cebu with easy drop off access for Grab and taxi riders.</p>
              <p className="text-sm text-stone-600 mt-2">Mon to Thu: 9:00 AM to 1:00 AM. Fri to Sun: 9:00 AM to 2:00 AM. Prime visit window is 5:00 PM to 6:00 PM.</p>
              <p className="text-sm text-stone-600 mt-2">Seating: indoor, outdoor, and rooftop. WiFi: PisoNet access. Parking is available but can fill quickly at peak dinner hours.</p>
              <p className="text-sm text-stone-600 mt-2">Phone: 0999 885 4318 • IG: @laparisiennecebu • FB: La Parisienne CEBU</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">★★★★☆ (8.9/10) • Price: ₱₱₱. Best order: Dark Chocolate Gelato (₱175) at 9.3/10. Spaghetti Meatballs (₱450): 7.8/10. Best for couples, friend catch ups, solo reset nights, and family dinners. Main drawback: service warmth can vary during high traffic periods.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "12HXeq6Bd9t24moWO3T2rewWgOTjkZ3_I",
            "1mzAIhOh8zh0W9q5gIaQrH0rxoP_vqGE_",
            "1gHW28Hhbv59XfF41Gl8qD8LBRWLGnx8q",
            "1y2rCiK2nXn6H4slZYxsHyAOHy7VzSvWD",
            "1Q2uWR5A7UAMuASY9wgGjFzsdz4GfqZQR",
            "1PuCYx4GtHBt7wwKXWpEIC3hkQNnbCP4X",
            "1-6otWeeOe7oYbYKH91c77W5nbjpCYExo",
            "1Jv4snPsLfdx-nLdBl4VrWfOyT7XaZ-9X",
            "1CBb0227sjbU7nk2Nbb7xj16U-IHVaANP",
            "1gce7S04XgYsY0K1BCJi9V6P-U411m4Bc",
            "1HUcVr_MIhApgrvlqhGbzmVx1YtMKWoLq",
            "1l1a7WgbOvTgPEKWJQTK2IP1u5jCByr6h",
            "1Z04TP8iJlCGuIYSuJMk5bgMQlP0N8GTz",
            "1tdyfwDVNVr25-9WYBQhzYpvm9lbRUIXT",
            "1SEK5klPWlYAQdkhL86RgxfKAf-hilHPz",
            "1NNIKyk6k2rINdgXX1wawp1OHvjYa86tV",
            "1isPdjXSkai6IgDJpGifTspdcnfYsmasT",
            "1UTIHUCYxu7s9NHHYbWN5DrV2ohkrPdbG",
            "1Vn1D4RJbuNR4wCgp3kTeGxXrtqlraSqY",
            "11SFUbO4HxDXgMQgPurU1KOdETXxUgTgG",
            "1JrcyPj1-Ylsu16IT-fP4zR-Y3ByS23lH",
            "1u_9Bp1KVC-8446wlZmZMR7ulZTNJVXHe",
            "1h2pq7UfwUQW_j4seJxbhIdPj8LPdgfNm",
            "1LPulHkltrPkNeVa-SNiGuEJ9as2W2iXg",
            "1cQyBvmIxt5WJOqdeO9Rd3HdbJur2jpPA",
            "1rGoRKDqNmqpYkmdi55Ibx9fDwHUd9Yce",
            "1KjpBDjkeBbj3G2ikXmsVv9eBnCIdiY0G",
            "1KXGXbphIPMIld-jFBgRp46kluOhJd8Cf",
            "1Aq7hbwLJFjiXy-aHWoyFUzWCQsDHeo8w",
            "1n-yVjTkMFoBP0DdTL4nd-acuayu3TFit",
            "1B1e7ZVjdlNTB0ho0gYZGvgLZ7WyGL--t",
            "1ds-92-N_TwtGQNy5Jdq2_lJd-4IKfKzH",
            "1eh_D7YKiZ-glmMsILIq_67jRF2Wq6qWj",
            "1RAjGUvtX7hsnCzmGtbtvTR5bTRwzKZIE",
            "1ls498k19BcRAI8Dz6zdPbEWM__SoEAFC",
            "12yeDaCqRaPhq-x2fIwMeK3K5_fIvWHan",
            "1VWbx4Wp_u-1dviejhK6gvlqn7jOsBynq",
            "1qohSoPshsZkE_SQQI1pW2tskdprdkp93",
            "1DaUH8wI7ce-cjF671P0nDNfhe8LFH53x",
            "1jI1a5hpYXwa4BCPRbmuQyVn1zS4hg0Tr",
            "1emZVezizCH9lewke3MFq5zsz3-OEIKnM",
            "1u2vcC4Ztz9gY9vh70QBbqr_gB5Br1dC-",
            "13pq0yaSqXpVRrVKckB1L6yqBLJvjHKiI",
            "1j9q9WplR7alrUX9qezD2L4svkIRPfyjx",
            "1GbFL-w4aqpNh3Qokam03in29oS66-Ypy",
            "1-uiEUeT5vgQxZKsyXjS35FiwDFsQPiR0",
            "1Ql91PYc7VnoHwXQl5jTX0ju2f2pxwha3",
            "12Xzygl4Lf3JayNQgkyXN8byCRKhS8xa1",
            "1evnqa2Bpsmtn5Hoeelk7Va8I79Wktvh8",
            "1QF-5ekzBUV0AZ_lyOBlQyj_Xixh0jBtP",
            "14HCSpqL4aIs8jZGaPRoNprnh_fMdG8FP",
            "1yeMeGqljlpM4__xgkFg5IdURcoLS_esm",
            "1cfERvzleYurSbArowCc-O2Qg8bQwuWJF",
            "12RF2u9XS6iAY6qqJE0Ir_OgeGjHZrvnH",
            "1MVebl1iDniqZ-oHkBEHIiaMDdTFqD5kq",
            "1ahg9JUGGU_JnJnOYymH-fEzYywjZugXy",
            "1DsGtJ-IHB4hPVrNNJCZYPa_1LUGZvqsn",
            "1cG0c2Sz2VR6tvo9Fn1vS044MDNeSBbCn",
            "1l-L3F0Mf2douVYCGYBvGiYI3pX__4kb4",
            "1-wo9sboOieiWyoNNz2SZN7XDPKb88NAa",
            "10pa_myByTKpRDDUjk-JYUc7QpfGIwHZK",
            "1Rkd9SABGyc7yCl-vILU466Jqad3rzw4U",
            "1k6fVMqoSs7w53eREQjbuHhEiwkTx_-f5",
            "1r_p2lp5msN24bQoVgTh6hgna4sF3yTwp",
            "1sWEToEEUXTsAvMXEvFB8KT6i-ZB168qy",
            "1WXbW8GnYiYz32LoxbjHTeAN253FJSHyY",
            "1msNAvRUte2cM9ehE3fDVYoAtsU-yt0jC",
            "16opf-h_XP33buR1krs67GqARnbu-_eCr",
            "1HwgGJ726IPuuBJUz3Mc7FStEmdAZtFPn",
            "1ouX5JIotfaBQP8XE_3o94m9-Pw_u6fSD",
            "1_tljxuylVjKT2UcJzeDKw-YziVtSZai1",
            "1Wks45XFbdUgeqQSIb-xIJ8Bto5r9G3i1",
            "13jUXHnIgEGoPfISi7yR0Uyuhm5Ae3BYX",
            "19nF0QF0L9EC0TCklkKf4hmr1pKEqBuyE",
            "1luL6Kf1WMIyHx8HnHg-HuxcHPmRAoyUv",
            "1Edx4Lo1GCmIIdS4TwenueKFjKSuQJwAn",
            "1s6CfjXWTjlVC59IrRhl94duoEBUFn8at",
            "1yBmXkI3cWD4YEf128BvTHu_IXpSQZK05",
            "1TLGS3FvtlJC0NsVvWvV74mySbP9sp9ul",
            "1lDEYGscTxBQdaSKbK749jaWq0STXjRsL",
            "1EAxQQ7zZgITa4rD7i6oxECRIO0tBp6AN",
            "1VtdtLvMKXYfo-QosPippiGe9CqM0pwF8",
            "1YLMsVYSppizLdjd0ZurLDFl35KfquueG",
            "1UyeQMLzuP9HRYxr2VZKUGrHVfGIsRmRj",
            "1Jv5QMpoWyWQpHxQNaAgunXqm5mSQ7aBn",
            "16EbaORZK3bvekqNlv-z002wIxLBJ1aeT",
            "17cjDAcYlGwuWG05cabs-SVKWz850I19q",
            "1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m",
            "1tpQk70E5Ht28aVce7y04ajlALW2gbXna",
            "15F_lQ_dKKgIX9aauFvSKSTBYyNd0GcpG",
            "1GFzr_t6VegBd_iac4gNeFUcU7eeGMiA9",
            "1zyoT_MU8UNIdeZmc7DBiMscf5L8dF_Fs",
            "1mZQChhmbjM4hU3clK1z7C3j7-xgXA_Hb",
            "1aIIzg46iygKp28fWrVvfNcNYKecETyU0",
            "1dtpcsfl6cEWNoPpmDyHfy1qax3Rv1aLn",
            "1EPu200MYuFo3SltkOzuWqSMRGAE3UsLL",
            "1Bnlibv03rFYoC9IhEp0tB7G3_D9J-nBs",
            "1K766o2BuhHZRzFnjLPalFvx6hHzTDrew",
            "10tx8RgcefC5ZG8OfG25FfsNJV8InXJZd",
            "1bpKSU8VdaF1yTpwLAk34_GK313qWWQFq",
            "1G9PX48EozPhOZno2uebI5GaSwWXiGW3s",
            "1-dK26xe-Mk2XyVxt-yORUPFeAeTKKpkf",
            "1vyB6KTYZOHyios-1trrmCABcn3hrVn_S",
            "12P4_qU5pRdaqFxW6cHC5y8G-aQi8vrhy",
            "1Lr91uAa5qAaLO6_jAe76vAB97hPq8UdY",
            "1X7hRsNRM-WVY7ka6mfKVb-EZD3NvV_u8",
            "1iYuIcV1QqnFBj1FM6uQKTBi0GFD3wZ36",
            "1b5rFOiF5yh6-BpW398Opq9PiyeD-CFbt",
            "1i_RLLbnC5sGgqPJzshYR1Q2_PGvGABHf",
            "1KkvYxv89muEAWMhIcvluV3KK2K3gI5dR",
            "11S9tTY9m7G1NWIeUOJvCagmTLqZRA29B",
            "1T-qeXsKy8RXevtPXRLsfdx1O_EJiRJn9",
            "1Mg7NTQACJ63Incmjfm6fri0LGGCblFlG",
            "1uKufgc8tju7rogu-N0Sifyrp74bFfH83",
            "1JDnJeSGVY8f0yGtxzU4iGDmc5lF20fRE",
            "1AI8le1U5WJp_SgtLpaBM8T40l3cfvQVy",
            "1Rh8KIxg4m_tmWzWrkI3SPcGjhXQ2BMfY",
            "1CXHKN0jJQwtE3kBixTlLfxG3srDX1DhY",
            "1n812MZg1oqo0GPST-pvPajaZqIJVWG4g",
            "1RLYK9gmGrll4ufs0fnpj8ib4GkQLwkdP",
            "1XEq8NgQVLaIEyx_VK0yA5n4o4gfvh_0G",
            "1MKkDPBh9UliJHzEcqYTe1Qug8uuWGRGa",
            "1U_4xJZaRZ39NCh2NsFI0yeVcLuughC-N",
            "1PSetnJoOX9TIzASdwTkGnUIXUl1JNvSB",
            "1ewHu8vjZirDMItKuvV1axp4nXM_XvtHN",
            "1k_f8KJqgvqbEHuRniZ_mwolCuP7RTpNk",
            "1Kh-wNcXatrki5wtVSxbrFPAEYc5YUS3u",
            "1VG9ASsp8KNA8t2iOT9-BJ-ynyYpXJJgI",
            "1vX17TKP3xsDlh7VKeRs3j_Ey86F74nLs",
            "1DB9aLeyi1mrJHE1fpBX55EAKLO07g0dk",
            "156QxAjoMoU4hqdrhEwAvxMVhXzjOuaJ7",
            "1I5pwFZEB4bcmTYDRLO7GQ3oT9lSTjJ11",
            "1eb56kbri4BL-CqkNvgY7WT0ai7JVeMiK",
            "12v_Iz41GFqEKGUJapvIsFkLTxaLbGcYp",
            "16DIdCx6rxhvgI7WAvIFefIlvieIvB08_",
            "1lxEDi5Y3NNoYdx1_fwRYt4nmriygr_NI",
            "1FOwFOz_a-YPTUOssrwL_0PuL7jMibx04",
            "1Wgwg5ydwQ37h-1ePnMLmqPYZNyeN7cD1",
            "16v_Gq4PPATS23Qzqke1yCV5MBZI_EaCB",
            "1oEuo6kfvlZWqG1VImqEFPuU1nQg6HGKw",
            "1HMnKrQo4Z5936i_mxTTJVi6CZJ4hLhvs",
            "1b7YpR9VUesTsuZLkpyR1gfxhqhMR7W82",
            "1_gIg7S3GUf1lQUsMS36n1XhqaomeyeaP",
            "1B9fBNoX4VmCcWtU2Y2JK55PyRLc3PfM-",
            "1Yg8bicax7CQH-clnntMRTAliEHxAP9Mg",
            "1GJrISqZhzL6BYfB_TeQNhWTpKxfuTpjH",
            "1fqVUPDx1gl9Fdk35e4rBAIaWpRFLA2zA",
            "1zQYuEPorWcYNzwnIlvmCGqc2FxUTRarU",
            "1-s2YF4mL4mmgh7UsvCmW2631HvIgf92A",
            "1Wn3QoAjhzVcrq0iJHdPBIfoRFbqpGnaY",
            "19A9lo8bVe3cD0iTrGHDBYQLQ-eOLoeMc",
            "1dd1_Y7O4D1M-GFD4wPNBpghonzee4PPH",
            "1BD8LuvWT90masQTNeTHJ_RtBMXlkAbwK",
            "1zV91BD84Lrr0Xvsdtjt5lKLSLft_P6k2",
            "1Tju7r0V8F4Eu-WAdqlXklnSpUmUG9QBV",
            "1rjhQMhlBmsLaekOoBK-TTQ0NiC_eeSvn",
            "1qrMxXXoYEArBj-F1j3VUCzK0F7ul8iBG",
            "1eXZ0gvmJe3g7XjR3wvp3uHPDVp95KZoj",
            "1wcbPNRiOgOaCRZ9_jVI-u4b0uA58d7Hg",
            "1cw9u1ohUOAQ2QuXNWi-uzGBlcoDZlgbl",
            "10QHLEY33JKKhAAci1-1p51Ee16hevSXA",
            "1s65xwWzcq1lg6vOQXzJgQ-3eGAZ_ZCrR",
            "1rmzukoVjgV_NkpHXzn54DEG6gUMse4uo",
            "1nAQb4HDSyHe-8izelPOuLwLG-1q8q-07",
            "1gHUi9-QidGk7hjXfQM0Ng9T_Wv01e0NG",
            "1RMxmv14_PYinLI2ttJXJM2IOePqJrmWq",
            "16Z1Ubzx2mv144Cgx3HEy2YECD18UEco7",
            "1eTwpKCUTh5U6r39qTStZFWTX5wvK6wM7",
            "1vXaAfR7X9EYgt-rm9mDNIG4n7QetVtey",
            "1qgz-93bYronVzJ_BnHCVIE1Uk2IpJ_UI",
            "10vzf30kHcfYu44LfzpzJ-jWr0f5Sfbno",
            "1L9LqyAWqXnvWtKnJy03D4LK8Z-SGpBAE",
            "1KMv1w73XVTR8qV6uIo-P2cBBqaNj5rKS",
            "1aCj57T-yp7TtsoUbTemrkutcnSmjnkG8",
            "1gQGKOyrvB4QQZp8MZom8cbicug9gkgQ6",
            "1yGZpJRh2NYCVZOYG0U6MAya4fjPHXoIl",
            "1aFxXl92Dh0KQgGNa-U4DoKiceTSW7fk-",
            "1oS8PRE59vv7TIXXgLF907zZxgeAoIQyU",
            "1jBAfBNCdQFDDQmrgNGrO5_ema3qcDdji",
            "1ze-xP7CIxYj8qbi6cCI9O0-BLgeggJfK",
            "1yUfF2n9pFOMjtFstDEZ5DagG9Re5DULX",
            "1N3gpDbbFB7vCAE1vmDeckVvl2vd35o7r",
            "1OHRjGK9LeARb5FgqYqFRpmc_6i9HUsu_",
            "1gXtwpTLJyDnJNiArKEkXgULtWaZ7lYMF",
            "1jM0KCfA9C8Xwis_aDbe1ybOxkslQKqr0",
            "1UmJeMtFhHzLgd8XPTxFy7WunVlOLOpjl",
            "1ESxFXk7KNBjoUBHFBx0ACOJKGtRXrwyK",
            "1Dz5njiKGhPNzFL-Nr65EC12AxJ0SKf_U",
            "1QtmqHI4tTFXKQ2OY-nfshl6bDFpjukZP",
            "1KM-woEYf_HDQ3WPI-hKZhknOEeuvT9yz",
            "1FeFU0jQPcwnj85CUc7po5VVlSvPML8x7",
            "18h-XjjGr5VbvsqMacQjz4dGuCgdDX4DF",
            "15MzXR8fRwCi07vkHYkFTqjGTmMAIOHz0",
            "184auUfB3A-JyYp22KiSH80Pnn9_meK5D",
            "1zCiY8RmhZkPTJCpqoRCxetmKFaMUBaLa",
            "1V2yyAg8cBtatoF-xOYMksad5lDJul7Pq",
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/sakura" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Pink Blossoms</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/hatte" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Hatte Cafe</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
