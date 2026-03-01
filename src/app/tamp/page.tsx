'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function TampArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cuisine &amp; Comfort"
        title="Tamp Cafe in Banawa: The One Peso Cake That Actually Delivers"
        subtitle="A full fresh take on Paseo Arcenas favorite, where tender beef, warm service, and a tiny fish pond turn dinner into a story."
        author="Criste Joy"
        publishedAt="February 2026"
        imageSrc="https://drive.google.com/thumbnail?id=1EimJ5SSpFDL5_V4cGY_R80C0mZN3_few&sz=w1600"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          I arrived at Tamp Cafe &amp; Co. around 7:00 PM on February 19, and the contrast was immediate. Much of Paseo Arcenas felt calm for a weekday night, but Tamp was packed and lively. Tables were full, conversations were loud in a good way, and the team still managed the room with structure. I expected a quiet midweek cafe stop and walked into one of the busiest dining pockets in Banawa.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/A3UrYUDROEU"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Tamp Cafe &amp; Co. • Paseo Banawa
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The One-Peso Masterstroke</H2>
          <Paragraph>
            The first thing to understand about Tamp is the promo, because it shapes the whole experience. If you order one meal and one drink, you can add a cake for one peso. In practice, it does not feel like a token giveaway. The serving is generous and the quality is real, which is why people keep talking about it.
          </Paragraph>
          <Paragraph>
            I chose the Yema Cake promo slice and it came out rich, creamy, and satisfying, with a portion that felt larger than expected for a promo add on. I rated it 7.5/10. For one peso, it is a genuinely thoughtful offer and not a gimmick. It makes the meal feel complete and gives guests a reason to return with friends or family.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1EimJ5SSpFDL5_V4cGY_R80C0mZN3_few&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Interior"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1tAZiftIdiMZKOw1OeTxwhmyl05HrfKHh&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=125nKaB3y_3fyl2RLXkZl6rIoDHUZyf4-&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Food"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Beef Stroganoff Question</H2>
          <Paragraph>
            The Beef Stroganoff at ₱395 was my best order. The beef was very tender, the creamy white sauce blended well, and the overall taste felt comforting and well built. The rice was fine with a slight garlic note, while the lettuce side was fresh and bright from lemon.
          </Paragraph>
          <Paragraph>
            The weakness was balance on the plate. The beef portion felt small relative to how good it was, and the side was too simple to support it. This is a dish that could move from very good to excellent with stronger side options.
          </Paragraph>
          <Paragraph>
            I also ordered the Iced Pistachio Latte at ₱275. The aroma was strong and nutty right away, and the flavor held up if you like pistachio forward drinks. The only gap was texture, since it drank lighter than expected.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            Tamp won me over with small details that felt human, warm service, one peso cake, and a tiny fish pond that made the whole cafe feel unforgettable.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Supervisor, the Fish, and Other Small Miracles</H2>
          <Paragraph>
            Service was one of the strongest parts of this visit. We were seated right away even during a busy hour, and food arrived in about 8 minutes despite a quoted 15 to 20 minute wait. Staff friendliness was 5/5 and attentiveness 3/5, with the supervisor standing out for being warm, helpful, and genuinely engaged.
          </Paragraph>
          <Paragraph>
            When I introduced Best of Cebu, the team was curious and open. They asked questions, listened, and took my number for follow up with their office side. At the same time, the supervisor stayed professional and clear about limits without owner permission, which made the interaction feel respectful.
          </Paragraph>
          <Paragraph>
            The most unique design detail is the tiny pond near the counter. It has stones, plants, small fish in orange and blue tones, and even snails. It is simple, cute, and surprisingly memorable. That one feature gives the space personality and makes the cafe easier to remember after the meal.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Tamp Empire</H2>
          <Paragraph>
            Tamp Cafe &amp; Co. is now a familiar Cebu name with several branches across the city, and this Banawa location shows why the brand keeps growing. It combines value, speed, and warm service in a way that works for everyday diners, not just special occasion crowds.
          </Paragraph>
          <Paragraph>
            The Paseo Arcenas branch benefits from easy highway access, available parking, and a mixed crowd that includes students, families, and groups of friends. It is easy to reach, easy to recommend, and active even on nights when nearby spots are quieter.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Honest Tradeoffs</H2>
          <Paragraph>
            The gaps are clear too. There is no WiFi, no background music, and seating can feel tight once the dinner rush starts. Even with capacity around 40 to 60, the room can still feel limited because of layout pressure on busy nights.
          </Paragraph>
          <Paragraph>
            Bathroom condition was decent at 3/5. The food quality is good overall, but side options need work, especially beside strong mains like the beef stroganoff. Better side choices and a little more space would immediately improve the full dining experience.
          </Paragraph>
          <Paragraph>
            Even with those tradeoffs, Tamp gets the important parts right. Service feels human, pricing feels fair, and the one peso cake promo gives guests a reason to stay longer and come back.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Takeaway</H2>
          <Paragraph>
            Tamp Cafe &amp; Co. at Paseo Arcenas delivers a strong Banawa dining experience built on comfort food, warm staff energy, and practical value. The beef stroganoff is the dish to prioritize, the pistachio latte is a good companion, and the one peso cake promo is one of the smartest value plays in this category.
          </Paragraph>
          <Paragraph>
            Final score from this visit is 8/10. I would come back for the service, the stroganoff, and the relaxed but lively atmosphere. If they improve space flow and side options, this location gets even stronger.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
              <p className="text-sm text-stone-600 italic">Paseo Arcenas Mall, Banawa, Cebu City, Philippines • Open daily 7:30 AM to 10:00 PM • Parking available • Easy Grab or taxi access beside the main highway.</p>
              <p className="text-sm text-stone-600 mt-2">Best for solo dining, families, friends, and students • Seating capacity around 40 to 60 • Mixed indoor and outdoor setup with good air conditioning • No WiFi • Conversational noise level • Cleanliness 4/5 • Bathroom 3/5.</p>
              <p className="text-sm text-stone-600 mt-2">Best known for the one peso cake promo with one meal plus one drink, plus warm service from a well managed floor team.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">★★★★☆ (8/10) • Best order: Beef Stroganoff (₱395) • Drink pick: Iced Pistachio Latte (₱275) • Promo highlight: Yema Cake (₱1) rated 7.5/10 • Main improvements needed: stronger sides, more space, and better seating flow during peak hours.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1zmq9nLOfbhtUIFA4H9GExhMYf1cq1KR8",
            "1I3UG1eZJzao4b1AlJ3s26Rg39ndurZWE",
            "1ZiHj63__xzAG0P0Jds4yhLiOtZ2bIBQp",
            "1ZsBXJrKxRnToYso_BYgAgzrcKb-xp3Er",
            "1HIHFDVz5-dHangXZjfoDxKgombyaHTfc",
            "1d2vqs1OB971PRUSWZIPsVzdZxZ8weuzt",
            "1EaDR3skN2-M1f1klvPWu1__ln2mFRPkP",
            "1hOFFuWG_u1u5mptYuF2kZ_bNpcJRUTTp",
            "1HSVo64BLk-sTxE4kHRU_TugIHuyeybWq",
            "1GtUs435_b8NCiwtHmYzB8XhoJ37Fa9lk",
            "1ytcwGBTHht1FiY8eVKJSBtK5oF7nkQXO",
            "1eVDcl_EVoeUpy8DX87FfcgUatKSygXFh",
            "1Ub5lHOGV9QrTL9d_raLGdVKmayAD8LQ1",
            "14L2pg0qrEGcZSNqWcElfDbUx8f-E_IZU",
            "1WDUgYWe3Icr2kHVc6UF0oCdbmT5S4Fek",
            "1enD6mLBERcaanHx9_1obQDlVOfmML6HX",
            "1hwOTDvi5V-xNGnnIbVFnNg8ykeSUhdEF",
            "1w3qihTqbOvudfxLjlPtxPNt3Ly8ntsG-",
            "1yUtD9RX6fOqYxEQCdo7yTz5SFxkAD9sO",
            "18kQSJQiZyk05OFv1rv6PV2cpjucOitLI",
            "1bJG5jvkChVpagqy2w_Jw_QXroFUKh01D",
            "1bdJdE2028CraUsMjXkIkiPR8QuP8x4Au",
            "1zMSLBuNdTdtG1YQT-nE4sYT8eA8JDOlI",
            "1Yb2EibTZCFR8cN1OB4Vw5-GzR1EaHbXG",
            "1HnxM2JxjKWWrHQHmjK8j9W-GI04e2R0T",
            "19VUwBCXsZMZ0cEkt_algDhvBot3S8usw",
            "1wWGKevyBKBRX0ivnBQriVPXTlU--ct4i",
            "1hdrYmRha8A-7FxKJniI5dCjFkNXh9TaL",
            "1sK6h448m1qM8S1QkhGuJBYK2E3UlwlxQ",
            "1f5Rm789KDGOFaBxbsB5Vd8byoaf-ckt-",
            "1xw9a8GwVa8hIuKPiYA99Y9R6j6Ihv7US",
            "1-5cXD2e-ZlXS9CbtJ0a2yyItztAkAAD0",
            "1_Bb5Sm0MsVpZRgKOs9qADtPWwQ6jwPl8",
            "1J4_0SKYrzU2EePmdmnmkY9N5tAY73-Mi",
            "1-hjHJ2khAcsZUlbHBvLn8YoTTfOwAVlG",
            "14yH8VbqafHhqClE3j5-secI5h5JkPoDa",
            "1mJKNh2RByU-S5z3dbYczEHqMz8fhtS0u",
            "1TUmQ6FDhWd5_CuU4wJ0KQl9Br4zRAqec",
            "1D7aVo90dP_otfpLHlmTlsxp-pB4yr6xh",
            "1f-1Nyow1WAn7nvVmBWuQdFbmuT8TKo0K",
            "18KZkbwyUzEkaIBPGIKJelYmpFTlcPTUj",
            "1t3ZmYBIogCWrNb_XCBcVPX4iBFaJWsWd",
            "1OGBYwTDOqgoeQmWoOKv1CNoFHt225d31",
            "11vIb6mPW_mJpY1Ct42qjS9mXs4RzdJpp",
            "17UpatX7uPscVUZcFj1fA0tFmDPUPx8kt",
            "1r0KXM6n6QgZBO3J-I63yqL5WlCiPuZnn",
            "1b-ijyeAsjyn_6msCdqprtTF1OgpQPfMj",
            "1kL4bQWE3Qj-c9G5KJqa9NvHNf90cwXoq",
            "1J4T8tD__xex00-jm0RKy8MSE11mpfS0f",
            "1EYug_7O89RD2sd9M9yk-WQDjFUJJnwB3",
            "1s_Zwlezb4NV7ynnoFxjIhCLgzL3oEmc6",
            "1cpHts6RC11JPr-3QKOfG_7NcDqX9TrS_",
            "1wRza6GNEHNp8WtkWbxacrN9pK1VXAnQB",
            "1Kd4zGVY8-4QOQRgpqDfosMmaVwGZxu-s",
            "1cDy_uIM3oC3KDCYyvInOwHbD6463ODyV",
            "10k65hgwYjBt8bMIQ43f6e_6LfAzEwRtM",
            "1-RHwbCWaZpwS4cpE519ULrRo7VEJhk3O",
            "1kFFaDsKfLdSYzUiAmdCOLBQI78HSPGWG",
            "14v2Q3YbbA2rI31_UlJRiGC6TAy28vLx5",
            "1I-sIjdmQVqgY-_iK893fVHY-v8LNjP5A",
            "1l2e4Q-Et0L05WgDkcQQ2_t6_nmvmhccG",
            "1v4xTrCfk3OMaM40r6j2hB_KeDt_9qsYr",
            "1O3kKuAoat3hIF-3PJ7eMEXEbBdXSiZNp",
            "1GzchBvUKxag_799d5dZVGUirpho0e8vT",
            "1SR54_ca_vYDQmtZIAXAU4QoQHdnLYTXv",
            "1059b8lnoXpXFlU-apcIl0lI5hKzGTadQ",
            "1bF15P9VV7d0Lxbuo0dt9Hd_606Yj-fgM",
            "1Se8j0DDPDdvdhsaTOsHSH4LtwfM2vnTb",
            "1TOKW2-AyGhTZnjjU6SUPki8XdVKrTpxZ",
            "1hEpHflSgXPKIxJ7n_uO0WvNOY-bwaGsR",
            "1kRs4oQGOPlNzUnYyfaV4dDqP7bUd_-Ba",
            "1STeubxDsITxOAI5I25ThENBHXNDISTAy",
            "1wYOWhaembHC3aSAiHGspVkKNb5V_49Mj",
            "1BXPwGQQe08zlykn_KkXf5THMeiWPZyWF",
            "10572IjWZsjfFtV5xG0wBr7FOLZBMqlAN",
            "1gM-ac9RluvrkhePkZdQtpeHiTRGq6_8L",
            "1gISlJJrP-P8KyQS4e-Ow8gRvTCvYuaVu",
            "1awNyiXCZ2Wv-_hxRsh8elbRiZNVch-g8",
            "1XYXKiKRQhHfUm2mgjil9eVjxnAF0KVDS",
            "1tJdzMsbsWIUjjMC6jvskDSQuBPna0YsN",
            "1pFLDxqr2vbwk0eBKSBrthT-tiZJ4oBCo",
            "1yye4ICHeZpM4fset-MwwINt1ecG28Svr",
            "1QdaLB5H8sifgKlAtWVnDAKuJjrItfFEQ",
            "1cbKP_4nhmuPJtcqZfQulY7O01AB2dQOg",
            "1bzgipOwDK6AlcDOj48GhbOMzmh07Hm52",
            "10_nYmqE_qouGowWpiFuufo9kJhB3bRy4",
            "1SF2IqztyCnfg0IWjy63JhoAlt68pmFuE",
            "1YYSgath3gWEDpIQj2F34ejcPk4P2TlZj",
            "1lj6EZBKhGXTF8g_Qd8UqwOzk6--O5Zfh",
            "1tD2Ot8zxEesPHiYMK-_Sslpff7hN5Efa",
            "1P4svx0amM0JL7PywK_UvPsEQ5jIPqQ6T",
            "1-2R5Bwq-weYOzAADHjlQ0O7OlFJVr1Ej",
            "1sbgn6MAy8Zc2wyfFrn5Zc4sYNFfW7QNW",
            "1hzhv0Jh45fNtd_gVzo2TXncxw7LLDCTG",
            "1qP2KC1dkp0B0xeEm3oqbBnW85id81oOO",
            "10zQWCMbw3e2rd_CDY6xsqM7dM9yHxgxa",
            "1WIYBeHm5OSRsEXq3mF6djUzi9a9GOFEa",
            "15TYE9TlNSw98zoTj4pOtBHYkLPSy7FUJ",
            "1rpDcP9NbccqbeZzJXZUyGmO8Wq6808SJ",
            "1F9nXBWcSIphAgEoXaBr6DTWwkldcoRzz",
            "1jKIBt7n5F49vNJsW4IkJjJBVXciNg8_H",
            "1vDsQeob8m8nxOSXzKNk31roCahT4aJuE",
            "18OwL62Ced66DcYSRjObBNniXR5Yiv5fO",
            "17tHoeP-MGH5ka0_COcK3C5RBN_7xNaRl",
            "11G-Bjk-29w8XO5UuwRaknEwM3Kt3zexR",
            "1MS3FVa68Q4qKxHnU8lzK4PeC1hdyxDvH",
            "1i4cN2luLkKtSQ2wQqYcN3qBAJCSfkHQL",
            "1wsn99Iqn197x7R6gDUSDL2YGpNvvlUDs",
            "119y0bdWQJnbpl-HO-11g5LgxNqhMFEXT",
            "1YDgVH905u9Os5_QCCeh27Q1vroDNkFHf",
            "1b0JtixVXBxAk9hoD3Vhm6pgvevHm82g-",
            "1cym-WEPhRcZygDWSTXZT2lkFrubH9Ukx",
            "1fsGWOO9IfzuhKCMUw0jR3prybtQ5SeLn",
            "1fRs1cvn9A7vSKF5kR_iMBe7T-Wbnd3PM",
            "1I7UcstTEaSnj1nrmAZzjm9fNCHytNpwo",
            "1PsZTSJXYB0I73kwKx-jVDZ8jXKa4Dvul",
            "1mC02J4r8KE4mX08VoL2u29Qq-QX3VsnN",
            "12cPR7mBuS5CtghCdoXqPse1AyVJhkIvy",
            "1ci8blenFh7UgWbo_a5PTpzTNnIBkDDkY",
            "1tQwOFKSV2SafEa2ZmCf2XKMWWYbwHzb8",
            "1ipnMasYdjS1AOyudpYN_DfGm0eCZCjRL",
            "1I-eqLTb0OAMhSTN0hPCTyfZRL7_Gi2fh",
            "1Y1NsnAZlbx_QH0kAzJSbwtfQOwYeFqZm",
            "1J0w7rUBfg7qOUM7UMaqtCNBjZyT9c5XF",
            "1t1E4LxnV6iFREFGqJUmTlLRZwGKBoXmb",
            "1DBXkHFMNjothhmgl6ISStoTl1iqCHayc",
            "1aG1uf9fE-l_Qw1QzCSi61Xz8QC5fAF6C",
            "1l0S9VI-mHqPTsyuXI1X1rMASWHB99LjR",
            "1KivWJfJeKTG-6RVxnOt75ZDjImLPQE1S",
            "1aO1MIU8xnN7QvP8ZqBEsElwdhslom6Ss",
            "1QEESNmnLNTb8wqcKtf_Y9ZrpNx6ZTifj",
            "1txUG2FH4oJEtqwsvk-QhGDr0k7O9Y1cM",
            "1HYH2DgL5NgiH3eLk_sWd0MjgL8ba2o7m",
            "1MDFEqf-5tIW3mhCt1_2RewgPpnFjadHT",
            "1kJ-yvtRLsikGN2yq9poZBvDRcr2bwb4f",
            "1weWnvSKrcnVVRqszUedQp1957uP813lL",
            "1mLmSM6DyM4m1mm39u4BW8R-qvn6NgGBk",
            "14xOFZagtqu5J7DJolYXRDYh2xeh7SGBt",
            "1wHkHS_xSDmpjxwMplCoLTlNRWxUvUXTe",
            "1uKfyK_ALkPJk3XR8r_DnyNYd_nyrdwfQ",
            "19invcMJNkthRYVgLrjW3yzd23gLbU9br",
            "1o7gHFUH8pcJnDUmWt3_7dQvR8X9VbYWI",
            "1CHwS8ReNU8C-fRszo_daFI9VSFF_r8Jn",
            "1IH36sKvSoMrn0lzpqRXJRajfiIdqUdn6",
            "1-apSvHFwCFe17B70MjWJ4F07OkgEFOG-",
            "1sc1ptl42M1wn7JH7oaAE8qMAN8KMrcB8",
            "1ahMHXPf5SM0gOPLV_x8400t8bDSpDgRK",
            "16FX2DHLBpQeCI6Vy7DpgUnO5S8WFKTV3",
            "1I_8gJt9S31W6oiwbsfTbqK0bv4VyVaPH",
            "1HOxP5uxGQWVZEZh6p4N4I-qShBf9dZIS",
            "1155WAAJ94hKZWY57K2oqnEoKa0QtxaQg",
            "1LLwT-eBOnqEJCdpKSf-fDjBqJo40KPPs",
            "1pkvj8v6QSpTBtDALeqQIiU_0NnBhK_U1",
            "1_6vhCmHPpaQnosekw7_fuAFV08DwClYI",
            "1w61VJk61O7W8qVUGgcE1kOKJzjDYxkOs",
            "1F3qfD1ocQk8zxWSLSfm9MNNzN1xDH49E",
            "1QEWGmX2JZA3uakDTIEqZO7C-sIlnVcSH",
            "10pSvVmr28C_5g4OrYxkG0VeXf9Iw9pb9",
            "1oBIJ5ijQmkRxcdfsrxORM4dMMSs14XVk",
            "1K1QtV92vNC2AnIg2dGenP8WTNPx99uGE",
            "1AwcXXnESeE52K0AhmSqgTG4CTCkUs0SP",
            "1NvA9mKrXrx49DEZ9d7qpUmqQ7nofZqh8",
            "1iFiF_mtue1hx5ig9FBvGJUpZpLEF-UI0",
            "1KCTN7aKGoev63Ko3aoB8SbfUl-iSKIgf",
            "15kMOolf2PJRIr1BVb0blJsSZQLMsip1w",
            "1JyzlQjwlH9qDVfyNlOGQuFVDkab5hy91",
            "13PWwQyhv_ItQSLxgbb4ucQipIpA0RGAR",
            "1fdh6683RbBNcpPWEkxBHpWwId5oWIbYY",
            "10aucYk5mbrZXXNyiN5Oe6UYSjfPv1AuU",
            "1ziIyvjag2qjJtTsOQ4JmC81WON4Rm-1H",
            "17R2a31-8Gw3c1PZDdLO_HdiktLmNGRI4",
            "1NSBDC13Zz26-T9DFgh53L37gD8ScSuTl",
            "1yFplyWZm-nd-2y3_O9egFZ8_d_7zO7V2",
            "1_hUp6ZG1QD-gRCCSc6MQw3fwUhxFaxdX",
            "1Y6x1-z0xJBLvwkDE9NPp3OHKHKnW7ylN",
            "1IaNx5JgXlST1OQk4Vjp-whCWLsdNEGo9",
            "1XI17CzHJPAKplNHOjAM9AdxRdZC3EXeQ",
            "1t-ygbzYEghZTGcITwrthf7UvPEw0ec4H",
            "1YyhxCX-WHKdN5Mnz6R4kcFc9azc-kJmf",
            "1hPLMPHy-bR9ry9gFWoqWSHUEHh4Z6aPk",
            "1J-h4ZM2lBqinJsADzImCnZvKU-PL0SIA",
            "1cte3CeKUxyEfg09MoBhQd2-W6SBV1_f1",
            "1Mm1DQsxmfqi5jmdQrizRlmSwKn1-enx-",
            "1QzA3CtwRtgIXOKjjVbUYuKsP8qeRNclH",
            "1-HwRt2NnBRtGnunSKpAccVba745R4BH7",
            "1obnCShdTDNkJ9zXYxi0X2rM_Y0pdxnm0",
            "1003QZu-IqbZLBHCVVhpLiMQ9opP0c-KU",
            "18A2-mHJCJDTHcAx7VYDhf6mAVVbmoTky",
            "1SAk_pf3799-K_HARtRpQJkiyDeome3ha",
            "1iVIN_OT6Pqd9K9fiiqXBWALAoSZ1XAP0",
            "1-XEyJ-cl7FABTFcn718N_g_xTzUaT1hu",
            "13ja6r1FyQXPBrtuWL2OCXciKpYEN8sYM",
            "1zx9d7rgvXYdC332se8SSMIaWv7Ku40KS",
            "1SfBFoLibM2LI0G8WQ_aMwvj2dP7JKQHu",
            "1iQCinyf58xnH0JywbexKGIKzDnVv_HwB",
            "1m5S6_W4s45CBNqUAmpmRs11G0QlHyo6z",
            "16cI9oaGOOsvViQJ0ykYkvhIX7xDm_guM",
            "1hO9sBOvaCVvNMRbMql6gjDUDHq5aJi5C",
            "1j8Ib_1t4EofhNnkUxB1W_H_z5uCk1lNx",
            "1qI2NZ4nGnYXGyw4a9P41rwZ5qeHBpLju",
            "1Tl3T7W8AGcfzPgfH74NjXJvJ6UwWproD",
            "1Z8tNfVGK0OEEqnBiyPwyu2L0bByDiCEf",
            "13nZ9utpzpxHSpGgrZUdWOZZF8f38wedN",
            "1En1LSIDbvUlAEc4N97whvLmGEEA6ql6T",
            "1ku672XU_NyidtWxeHs_HOwYuSyAXMJbw",
            "1U0EGgEJRJyZXYv1nBGk3f1V_TUHKB4TJ",
            "1nNVPEbNUoFGYSqGMOjYQNl1FDGQk9iOe",
            "1cOYzbrC0bcZhSOWxcuM19d4dSrtk6kOv",
            "1abDv8Kmvy47TlQw9IESz07JBKRyj5QvB",
            "1gx2f7l9HDT7zShLep1po1A6aYc-91rmN",
            "1_zbbxnnu4ZQl64YnOlXt-YDBCp4df-p4",
            "1Hl56mh8X9Wk1_f9Orggtm5HRVyAudguR",
            "1hEauI9vpHgWIH5JbDMgLh92vuxGrxEKV",
            "1MVKHJU_rJ-YN5BOVk-ump3trFFojg8Zn",
            "14KA1p2fg-kw9VUqwqNP4iw9Ge28HVnP2",
            "1WsHNTUJLdYoKEWSOMhGAse-5nfSBF28h",
            "1YudUDd-ailKNYmeUnWWnNOzsz9ryCs3s",
            "1yq1zJ9M8W1PLRV-_mRAxM_ZGFjnn3FdS",
            "125nKaB3y_3fyl2RLXkZl6rIoDHUZyf4-",
            "1FbXCxBCQ9IqyPsyoSxiLATw7MBItv2BL",
            "1sS-kK0sbLwHKpPyYhT68oYETs-zHBCCE",
            "1TzNZvb7iSbItgBur_rvXk03Rp44JfbqI",
            "1SJJ8t3F1VzO2oCU9jnYawX5KfQamFvai",
            "1ZbjTxIw9Iygn6fu0mZ8f65XpeBn8uIb-",
            "125nKaB3y_3fyl2RLXkZl6rIoDHUZyf4-",
            "1tAZiftIdiMZKOw1OeTxwhmyl05HrfKHh",
            "1EimJ5SSpFDL5_V4cGY_R80C0mZN3_few",
            "1lGiugt9SF5ujWWZ5VqpIi4MDnpkZLpnZ",
            "1tAZiftIdiMZKOw1OeTxwhmyl05HrfKHh",
            "1EimJ5SSpFDL5_V4cGY_R80C0mZN3_few",
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/pukot" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: Pukot Kitchen</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/gureum" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: The Half-Moon View</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
