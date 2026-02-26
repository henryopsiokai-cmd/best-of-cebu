'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function HatteArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Coffee & Architecture"
        title="The Mushroom Universe: Hatte Cafe in Banilad"
        subtitle="Step into the split-level, color-blocked world of Hatte Cafe, where the aesthetic is sharp but the hospitality is disarmingly sweet."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          There are spaces that feel like they belong to a different geography entirely, and Hatte Cafe is one of them. Located along the transit artery of Governor M. Cuenco Avenue, it sits in the Apas neighborhood near the University of Cebu. From the exterior, the sharp lines and color-blocked design hint at a modern industrialist sensibility. But once you cross the threshold, the vibe undergoes a curious transformation. It feels less like a sterile gallery and more like a tiny, self-contained universe. Some might describe it as stepping into the architecture of a mushroom, a whimsical, up-and-down adventure that makes the most of its compact footprint.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/4mhopBuQJSw"
              title="Best of Cebu — Hatte Cafe"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Hatte Cafe • Banilad Corridor
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">A Korean Aesthetic in Cebu</H2>
          <Paragraph>
            The interior design of Hatte is a masterclass in the "Korean cafe" aesthetic that has taken a firm hold of Cebuano youth culture. The space is layered and tiered, creating a sense of height and vertical exploration that is rare for cafes of this size. It is quiet and peaceful during the afternoon hours, providing a gentle reset for anyone looking to escape the traffic of the main road. The music is curated to be calm, an atmospheric layer that supports rather than interrupts the silence.
          </Paragraph>
          <Paragraph>
            The atmosphere is particularly popular with the local student population, specifically the Korean students from the nearby language schools. This makes perfect sense, as the cafe feels like a localized fragment of the Seoul cafe scene. It is a place for soft days and quiet discussions, where the objective is to sip something sweet and appreciate the surrounding aesthetic. The layout, with its multi-level seating, allows for a variety of vantage points, giving even a solo visitor a sense of being part of a larger, carefully designed world.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1l3TYo14AA8kylwsWEqABsMxFOt0CX1An&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Hatte Interior"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1VhS-B9HW1zM2B7F0aIDfSnvVKCmQeiEL&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Hatte Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1zSI98rF-_UmReGydX-D_PCsOBNMsUS-o&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Hatte Coffee"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Bashful Service and Warm Welcomes</H2>
          <Paragraph>
            What truly distinguishes Hatte is the human element behind the counter. The service is exceptional, rating a perfect five out of five for friendliness. During our visit, the staff were disarmingly sweet and supportive. When asked for permission to document the space, they agreed immediately without any of the hesitation often found in more corporate establishments.
          </Paragraph>
          <Paragraph>
            There was a charming, wholesome quality to the interaction. As cameras were brought out to capture the counter and the interior, the staff reacted with a bashful laughter, jokingly hiding their faces like shy celebrities caught in the spotlight. This lack of pretension makes Hatte feel safe and welcoming. It is the kind of hospitality that isn't taught in a manual, but instead stems from a genuine kindness that matches the cafe's cute, approachable vibe.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            At Hatte, the world feels smaller and gentler. It is a place where you can reset your mood and simply feel comfortable in the aesthetics of the moment.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Vanilla Bean Ritual</H2>
          <Paragraph>
            The menu is focused and effective. The Iced Vanilla Bean Latte (₱180) is a particular standout. It arrives with a distinct layer of creamy vanilla milk at the bottom of the glass, requiring a thorough stir to achieve the perfect balance. It is a sweet, consistent brew that becomes even more satisfying the longer you sit with it. For those who enjoy a vanilla-forward profile, it is an easy recommendation.
          </Paragraph>
          <Paragraph>
            The Oreo S’more Cookie (₱120) provides a textured companion to the coffee. It is flavored deeply with Oreo and carries a solid, firm consistency. While it is satisfying from the first bite, one could imagine it being even better if it were slightly softer, but it remains a reliable snack for a mid-afternoon break. The food and drinks arrive quickly, usually within five to ten minutes, reflecting a kitchen that is as efficient as it is friendly.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-xl">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/FJ5HE8KRM4c"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Barista Detail
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Room for Growth</H2>
          <Paragraph>
            For all its charm, Hatte does have some practical omissions that a frequent visitor will notice. There is no Wi-Fi provided, and more notably, there is no on-site bathroom. These are significant factors for a cafe that is otherwise so inviting to stay in for hours. One could also hope for a wider variety of seating options, perhaps some couch-style chairs to complement the existing aesthetic and make long coffee dates even more comfortable.
          </Paragraph>
          <Paragraph>
            However, these points are secondary to the atmosphere itself. Hatte remains a favorite for its uniqueness and the peaceful, aesthetic environment it provides. It is the sort of place you recommend to friends or a partner for an afternoon reset.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Contact</h3>
              <p className="text-sm text-stone-600 italic">Gov. M. Cuenco Ave, Apas, Cebu City. Near UC Banilad and Gaisano Country Mall.</p>
              <p className="text-sm text-stone-600 mt-2">Open 9:00 AM – 10:00 PM (Mon–Thu) and 11:00 PM (Fri–Sat). Closed Sundays.</p>
              <p className="text-sm text-stone-600 mt-2">IG: @hatte_cebu • FB: Hatte Cafe</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8/10. A visually striking, split-level sanctuary with a disarmingly kind staff. The lack of Wi-Fi and facilities are the only hurdles in an otherwise beautiful experience. Go for the vanilla latte and stay for the mood reset.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1qtB0lTCgvaoN0jBu-Zi9iD31EcW-9QDV",
            "1ufnk2_37w1Z0TmaFhsfvlJcjxdNUOdL5",
            "16EUOz54__X9NdSzcciOVoa_0h6XE1z5Y",
            "1y-3S_QQ3agQscmzTuxnny8PTM29DKeo9",
            "1fsjYYsf-UnOiAeTE9MGcIXXtwJHboryn",
            "1XSqQ6BKgtxwRP3qqho0x0upu3bAR62zq",
            "1JNaa5VyU8jdCgAgLizrgUKKSG9ESDzTR",
            "1JvCJwiyyahGAjnAqx6k7o7apJjZSW_di",
            "1uVRACTc4e1cnOn3erMvskX_Z2lKkKD7m",
            "11a1xhQU1V5KYmxhK8dkvuoiFaZwWJMiR",
            "14jHnRztrc_vvq-QwVUu-alFMFlNsy9fZ",
            "1rDKGsNJLC7aourY-UZFAV1DSi3Gwqv7x",
            "13WBQ1zzp5RVrjAgZlcsYFWBGWEPLnFH-",
            "1DFEYyQT-_1aNsNVpNSYnor0i17EFqaiv",
            "1J7TQ0CrQuMJcugrGSdzAwRSEPTYw0PqQ",
            "1J3yX9fy9tJJUShxGoUqBY_FnzHPttQXE",
            "114mVAPRUA3AxsBPvg-aE4GFo0dt0OV_T",
            "1-KkW40HGU6DHV3f9V_q0QWHDn_9ks5yy",
            "1x1LyDJiNJ3UdiqAR-t8bUQNOXEvr3xYH",
            "1_ZlbRHjihGp-5oQzEw1JjVNxKpoEd5Fj",
            "1KlAyfspsYI3-RSEYgcASXFUOmekrYrXU",
            "1wg1V3a6EL1BP3GrVETvIHKPXA8rqBWTp",
            "1Or57ThgkiuRK03dkkyU_ESjvJtyMlfi4",
            "1Ae6o-aC4QovNYfBxZzcUO6WTfRv7Hlck",
            "1vFdM9oAs4S3o2LIMJtTSuFejykmioWTj",
            "1ZoC9BzhaLDtbg9X1ooij__xmAL0V7V_a",
            "18bId5oBJUJoFL3D5ZCe6NrMKKNXsVFws",
            "1C193nmr4PZJmGMlRsEGdZeNtp9J1e9J4",
            "1wQn_KiirglUeeIDo9x9sE2RPdteiAlLT",
            "1FR8-U9ZU9qmXKC61ndesTB6aSOGytT1f",
            "1mzRTgzKykhcgpqhmV-pkGlFOLyvSMRpf",
            "1tn1lPgzsmI_FrrxjqSLOPaNFEYY3I3f_",
            "11UtinFmDtuEZDoAg6AOu8FssRGtu7_rW",
            "1pi6jxmxpj-zCoH8mNYvxA4BNbDajZE47",
            "1Ljnj-t65oW9b7RtvsSHdQwI-rzvG6Y_6",
            "1FyT_CZAoU4-LzUVb9IByAe2h6unBbj7v",
            "1ISBPm7YPIEJBnLT7Gb4dpKEIdJHqPZIO",
            "1tsG2kgxUfpuKNBxp8PxWTJRXZs5hZsWj",
            "1n5uUauPP0SiKC57TdYobrgzdqkYM-GTl",
            "1_NogVcoM1EDCgyw70sfRV-5XTuCJrr9c",
            "1mrHbaic-JTUVaMSBIUmfpenm5IJvwimC",
            "1LNT9-4YYQqGHh67krvZ4NyJA5e-IqgpX",
            "1Rc0mkiORxH2d9dic5H7vurW5Zow8OZID",
            "1B8k0wyHcWsn7ThEgerwzLCERCMVgY9u9",
            "1TNMip-gA8whMQ39mZvf6R8qqjf5KXKlk",
            "1jjdZ-W2X1Mdblh7Y_AX-z97OA7TzBliN",
            "1sHQ-DWW8dvl1xDqRio31jOH_d-HA-ASk",
            "1DnpbSVolnl5QfN9Lz8swRnLjvtIevzER",
            "1NtzQOJhsHBuu4wdMLJK9VWskgR96B6DV",
            "1KcCWQlHPV5E6x7Xaw5HP1F7H9mSC080A",
            "1-A7FbHvBP1nMBCtjdaAtHkq2Wb2qOqNr",
            "1ZPHHwcuqC4h5TTnH5HDfzp1jgQWOj8k0",
            "1xkmg4zf-8mfTgM2Ad22J2rVQJ5Lgpj3n",
            "1mZxay493uoiVyAGqZ2uN5DtpVuBTR6_d",
            "1rAOvDsTJHM6A943DLHs8hT-6xistFQdL",
            "1HsK_0xTLl40zMUl5vIykRbRrVkDK8l7A",
            "1pyYRU1Q8Qj__5pvyR9PYwB693qJ2HpDS",
            "1-w0nM-X4SoLHjF6kfDHT8YZYkmJdCW18",
            "1sFiR5yTz4O52fUdLb9YB5UhnsIPRuRLN",
            "1WQgSHRknmwjqMTx-cuxF9fLJzpRk6ZOf",
            "1GzF70zSAI4tt0et0qL59Ld8poGAnX2rG",
            "1t3GVd7Lt6YRIPfHq5n8fNsRe4Uc-igq8",
            "1DNV3g0B9pHrpjL7VMrWoV3hhfJ35S609",
            "1RHCk2m_t3QkwaM0s0eEMcXVLPCLjKMt_",
            "12tM9-WbgzbEbtfrWuPUFt2-cwNwLskel",
            "1mlG4jx38r6nqAGMpeQgTvkuYSZRVNYTj",
            "1kbgQtlLla4BWnlHfJfwkQqt7MCfy3tta",
            "1IZq17a5Hx_MZ93jz6S23bvxWg2B-FooH",
            "1mIV2k_TgpETngxWZJg1X9iFCBlxituaz",
            "1YA68IK0Y4N-QIKufbxOsP_1j5m-ryrou",
            "1Y2M3aDqIU0AQ5q_7LGMuEpf7C0Xnwx89",
            "1uVwhU_5wXLR0hOGePQnRDm1uyHMc0G6u",
            "1p1sGNoxQZQVFZ7HITLePF6w5CxAZYoqy",
            "1VEXsKw5nf6ryh5LBtZr81RLvHh-MMs_I",
            "1mLoGUdXqtCz4usL5PiZrmGmXiv2kZOyb",
            "1thERbiCsQQD7lgFVtmpEwRV5oWHMeTK7",
            "1NEjDx-yUkMiYk7AFS6mTuusLgtbyLHv5",
            "1hfL4TipA5fsOf78pTiiqDKzk-sPHNptc",
            "1FLSIiWwL6EhJ3nhJYknxJe1WPTPPX9-R",
            "1OIYtRsMKYY2XRoSj5O0WrFu0wY7ABDFN",
            "1xwXPFvj0O-UtPd9-DYqM0lhKCKkCy-Py",
            "1YXbnjqujx4UG39HbsQKfv3hqt6esHjvi",
            "1z0zshO7vwVigssGDy4xdZpLlL4PTN3zb",
            "1W5WMLkhqGXNuQQTNtDReRHWdcsrFofn6",
            "1BwcAmeGPuB5nEB8TvmTKzaFQm5YFYvd_",
            "1nqEC-si80PZSjWFGoDivO4iMdEIJl3Nz",
            "1iwU7eYkzT58AJ3uSg26oB-LFdU-el8wM",
            "1mldAAw_6Ox1izuQLAbuADv_itFV1BfFf",
            "1YSP-ye9ei7XN3Qr5t-c393f87_tpea4d",
            "1EWKz4ngI-Cx33dShVcl8FuRy-KfveKXj",
            "1a1vB2tCj9ZNIdg-Q_o1RuEWitzG_O2cU",
            "1FtvWi9bIz3Q7SAQzRHqwoLS4QPjXn3KA",
            "1v-AUvR8KMiv7YFg9qFQR_4VDi9HoCDu0",
            "1BtvOJiRABzxO7Xtr5FVTy9UohCXQTphx",
            "1rF5ST-fTKjpoxCFlqEoo8ZSZ_x6I7qyl",
            "1l2O2LxFd2ilq2A_LoUkr_awtcUwfB22u",
            "1-uMg37Z_EWf3l5uwCP--KqLrh-cvVL3f",
            "1upvWTDM1n3hpl1oa2GlwukaY9FnKmIFh",
            "1CmaJEkoriO6ECKSvqz-P8-UfHODAJ9t1",
            "1bqPx1Gsd1TtHViyXp5gcNliLpOirkSbM",
            "1WqeV-UukTBCVgg7GzoRgMiYHShxS3kkm",
            "1_qu9vVjGj_vJpIE96_jHyP2ytgRqRryY",
            "1MfyxBod3bHVrJBhhzXcC-2iHxeEFTOpe",
            "1zSI98rF-_UmReGydX-D_PCsOBNMsUS-o",
            "1hrB6JlN4UX0jBxDz5AXpYYFCwHJATu5z",
            "1H91z6vGlPjHJ3jkU1u_7lXHljhh37UNY",
            "1E4SgT6qMzsuOzl-Sn6m7XnM84tweQb61",
            "126KeTIImFN-UCLinEEwJO4Iv8fU7ekU_",
            "1VmtxFf6VYbsURJOA7AeIiO2kCbONyyGc",
            "1hwXuja3D5volWVcBsWpmgs3MWVlOKL48",
            "1xPoaRJNihyYNOhseOTAqF1WiPCyWRX3V",
            "1SnmdT7xwtamHL5VwbdWH5yGz7ATqGQi2",
            "1EkzKq4t0utyCcqcrSFPhbe9miVBurwLD",
            "1brsBQ2EqfXR4dANcxjFRkhDjcvKDc32v",
            "1vwnyZjDJIal1_Ks9KGtuRlux039g1i9A",
            "1bCol_I5fcGWl4VqRj5Wyin-X7WAmZYY1",
            "1L1IGQxekreNsuqmSJ3-2ShfKN3v5FF6a",
            "1wQEIS6JXK-qtxTtdoc_yaZoYZENpF33I",
            "1etzwvO84Hukz-vVnDtUMQqQ35i0HyC6o",
            "1erihX6dsru23QXoL_jVnLWvWAN_5eglh",
            "1Z3k0ihZ4RoK3CX_OY67cqt-v4Xf0XlyH",
            "1mRU-Cu-cgNwqC5Q4Bf3v5abMboJTZ-Lw",
            "1VhS-B9HW1zM2B7F0aIDfSnvVKCmQeiEL",
            "1h_LDS9BJo8hS1SmDQ_uitsFQsFY3_xs-",
            "149d3EVZys5vMQONBDPE7nIFTEYR0WxHx",
            "12oS8AcTsOC-CG9gt5ZXfaNZOLvWRPqO-",
            "1l3TYo14AA8kylwsWEqABsMxFOt0CX1An",
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/laparisienne" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: La Parisienne</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/pukot" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Pukot Kitchen</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
