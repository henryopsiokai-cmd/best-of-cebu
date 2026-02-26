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
        title="Tamp Cafe: Effortless Elegance in Every Bite"
        subtitle="Inside the crowded, kind-hearted, cake-for-a-peso phenomenon at Paseo Arcenas — and the tiny fish pond that made a grown woman blush."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          It was 7:00 PM on a Wednesday evening, and the rest of Paseo Arcenas Mall in Banawa was doing what midweek malls do — operating at a polite murmur, half the shutters down, security guards making languid rounds past empty food courts. And then there was Tamp Cafe &amp; Co., blazing with light and noise and the unmistakable energy of a place that doesn't need the mall to bring it customers. Every table was occupied. Conversations overlapped in cheerful layers. Plates clattered. Laughter erupted from a corner table where a family was sharing what appeared to be their third round of dessert. I walked in expecting a quiet weeknight cafe experience and instead found myself inside the most popular restaurant in a mall that seemed to have forgotten it was Wednesday. Tamp didn't get the memo. Tamp doesn't care about memos.
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
            Let me start with the promotion, because the promotion is the thing that turns a good cafe into a local institution, and Tamp's version is nothing short of brilliant. The deal is this: order one meal and one drink, and you can add a generously sized slice of cake to your bill for exactly one peso. One. Peso. Not a sad, token sliver designed to technically fulfill a promise while leaving you unsatisfied. A real slice — "double the usual serving," by my estimation — of properly made, ingredient-rich cake.
          </Paragraph>
          <Paragraph>
            I chose the Yema Cake, and it arrived like a small vindication of the entire concept. Rich, creamy, sweet in the way that good yema should be — where the sweetness comes from real ingredients rather than sugar volume — and presented in a portion that would cost ₱150 to ₱200 at any other cafe in the city. Here, it cost me ₱1, and it was accompanied by zero compromise. The cake didn't taste like a loss leader. It tasted like a gift. I would rate it 7.5 out of 10 as a standalone dessert, which is remarkable for something that is, essentially, free. The promotion is not a gimmick; it is a customer loyalty strategy dressed in generosity, and it works because the execution is genuine. You leave Tamp feeling like you got away with something, and that feeling — that tiny burst of delight — is what brings you back.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1FSLuFuIQan4A0cb77gn12Tv9TUmlSinn&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Interior"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1X6zdvfRm8JCEwyL-3aV9kbxN7eAdw55t&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1nun4LORx-YOZOXL9J3nvIhhafIDE9rGd&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tamp Food"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Beef Stroganoff Question</H2>
          <Paragraph>
            The Beef Stroganoff (₱395) is the kind of dish that demands a conversation about expectations versus reality. On paper, it is a Western comfort classic: slow-cooked beef in a creamy sauce served over rice. On the plate, it is something more specific and more interesting. The beef — and this is the part that stops you mid-bite — was extraordinarily tender. Not "good for a mall cafe" tender. Not "adequate" tender. Genuinely, fall-apart, melt-on-your-tongue tender, the kind of texture that suggests hours of slow cooking and a kitchen that understands that the difference between ordinary and exceptional often comes down to time and patience.
          </Paragraph>
          <Paragraph>
            The creamy white sauce was rich and distinctive, carrying a flavor profile that I can only describe as "uniquely comforting" — it doesn't taste like any stroganoff template I've had before, which is a compliment. The gravy and the meat form a partnership where each elevates the other. Where the dish falters is in its supporting cast. The rice was passable — not exactly garlic rice, but with garlic in it, occupying an ambiguous middle ground. The lettuce side was fresh and smelled good, brightened by a squeeze of lemon, but it felt sparse relative to the richness of the beef. The portion of meat itself is not large, which means you finish it wishing for more and left looking at a plate with too much empty space where more beef should have been. It is the kind of dish that is 90% perfect and 10% frustrating, and the frustration comes exclusively from wanting more of the best part.
          </Paragraph>
          <Paragraph>
            The Iced Pistachio Latte (₱275) was a worthy companion. The pistachio aroma hit immediately — genuine and nutty, not the artificial, syrupy pistachio flavor that lesser cafes use — and the taste followed through with a pleasant, grounded nuttiness. The only critique is the texture: lighter than expected, thinner than the aroma promised. It is a drink for pistachio lovers who prefer subtlety over richness, and at ₱275 in a city where specialty lattes routinely exceed ₱300, it represents good value. Tamp's Facebook page — where the cafe boasts nearly 30,000 followers and 8,785 check-ins — confirms that the Beef Stroganoff and their Chicken Parmigiana are perennial favorites, and online reviewers frequently use the word "reasonable" to describe the pricing, which in the context of Cebu dining is high praise.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            At Tamp, the elegance is in the details — from the nuttiness of the Iced Pistachio Latte to the tiny, thriving ecosystem of the fish pond at the counter. And then there's the supervisor, whose warmth made me genuinely shy.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Supervisor, the Fish, and Other Small Miracles</H2>
          <Paragraph>
            Let me tell you about the supervisor, because the supervisor is a significant part of why this visit felt different from a standard cafe review. She was warm in a way that transcended professional friendliness. Not performative. Not scripted. She listened — actually listened — when I asked about the business, asked questions back, clarified things I was unsure about, and stayed engaged throughout our conversation with the kind of attentiveness that makes you feel noticed as an individual rather than processed as a customer. I'll be honest: I got butterflies. I felt shy. It is a deeply unusual emotional response to have inside a cafe in a Banawa strip mall, and the fact that it happened at all speaks to a quality of human connection that no amount of interior design can manufacture.
          </Paragraph>
          <Paragraph>
            She was also honest about the limits of her authority. When I mentioned Best of Cebu and explained what we do — a new lifestyle platform covering the best spots in the city — the staff didn't brush it off. They asked questions. They showed genuine curiosity. They took my number so that an office worker could follow up. But the supervisor was transparent that she couldn't do a full interview without permission from the owner, who wasn't present, and that professional restraint — that willingness to be interested without overstepping — made the interaction feel respectful rather than transactional. It is the kind of service moment that transforms a restaurant visit from a meal into a memory.
          </Paragraph>
          <Paragraph>
            And then there is the fish pond. I need to talk about the fish pond. Near the counter, on one of the tables, there sits a small, living ecosystem: a miniature pond with stones, leaves, plants, and — swimming among them — small, colorful fish with orange and blue tones, accompanied by snails. It is not a grand design statement. It is not a water feature engineered by an interior architect. It is a tiny, delightful world, and it stopped me in my tracks. I love fish, and seeing them there — alive, colorful, paddling around their miniature universe inside a cafe — made me genuinely happy. It is the kind of detail that you tell your friends about even if the food doesn't come up in conversation. It adds personality, it adds charm, and it makes Tamp feel like a place that cares about joy in its smallest forms.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Tamp Empire</H2>
          <Paragraph>
            It is worth noting that Tamp Cafe &amp; Co. is not a single location but a growing Cebu brand with four branches: this Paseo Arcenas Banawa location, plus outlets at Tsai Hotel Lahug, Banilad Town Center, and Kasambagan on Pres. Aguinaldo Street. Their tagline — "It's #AlwaysASpecialMomentAtTampCafe" — is the kind of aspirational branding that usually invites skepticism, but after spending an evening at the Banawa branch, I find it difficult to argue with. The consistency across reviews is striking: "one of my fave restos in Cebu," "prices are reasonable, big serving sizes," "the staff are accommodating." On Restaurant Guru, the reviews cluster around phrases like "outstanding" service and food that is "very good." This is not a cafe riding on novelty or Instagram aesthetics. It is a cafe built on repetition — doing the same things well, every day, for every customer.
          </Paragraph>
          <Paragraph>
            The Paseo Arcenas location specifically benefits from its position within one of Cebu's rising commercial neighborhoods. Paseo Arcenas is a curated estate development along R. Duterte Street in Banawa, home to a supermarket, a salon, and a lineup of restaurants spanning Japanese, Thai, and Korean cuisines. It attracts a mix of residents from the adjacent Arcenas estate and diners from across the city, creating an audience that is both local and aspirational. Tamp fits this ecosystem perfectly — accessible enough for a family dinner, refined enough for a date, and consistent enough for a weekly habit.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Honest Tradeoffs</H2>
          <Paragraph>
            Tamp's limitations are real and worth naming. There is no WiFi, which means this is not a work cafe. There is no background music, which means the ambiance is generated entirely by the patrons — lively and warm when the crowd is in, but potentially too quiet during off-hours. The space seats approximately forty to sixty people but feels like it needs more room; on a busy evening, the energy is charming but the physical space is tight. The chairs are comfortable but the layout feels squeezed, and expansion would improve the experience considerably.
          </Paragraph>
          <Paragraph>
            The bathroom is decent — a 3 out of 5 — which is acceptable but not remarkable. And the food, while genuinely good, has that lingering balance issue: main dishes that shine surrounded by sides that feel like afterthoughts. The beef stroganoff would be a 10 if the plate geometry matched the quality of the star ingredient. As it stands, you leave satisfied by the beef and mildly disappointed by everything around it.
          </Paragraph>
          <Paragraph>
            But these are the tradeoffs of a place that has prioritized the right things. Tamp chose warmth over technology (no WiFi, but staff who remember your face). It chose generosity over margin (₱1 cake that tastes like ₱150). It chose charm over scale (a fish pond instead of a second seating area). These are not accidental omissions; they are design choices, and they produce a specific kind of experience — one oriented around eating, talking, and being present with the people at your table rather than the device in your pocket.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Takeaway</H2>
          <Paragraph>
            Tamp Cafe &amp; Co. at Paseo Arcenas is a masterclass in what happens when a restaurant decides to be excellent at a few things rather than adequate at everything. The beef stroganoff is world-class. The promo cake is an act of genuine generosity. The staff — particularly that supervisor whose warmth could power a small generator — represent a standard of service that most Cebu cafes should study and learn from. And the fish pond, that ridiculous, wonderful, completely unnecessary fish pond, is the detail that I will remember long after the taste of pistachio fades.
          </Paragraph>
          <Paragraph>
            Is it perfect? No. It needs more space. It needs better sides. It could use WiFi and a playlist. But perfection isn't the point. The point is that Tamp does the important things — the food, the service, the feeling — at a level that most of its competitors don't reach, and it does them with a consistency that has earned it nearly 30,000 Facebook followers and a reputation as one of Banawa's essential dining destinations. Open daily from 7:30 AM to 10:00 PM, positioned beside the main highway for easy Grab access, and backed by that ₱1 cake promotion that will make you feel like you've discovered a cheat code for happiness — Tamp is not just a cafe. It is an argument that elegance and affordability are not mutually exclusive.
          </Paragraph>
          <Paragraph>
            My overall rating: 8 out of 10. Go for the stroganoff. Stay for the service. Leave smiling because of a one-peso cake and a fish named Something-in-Orange.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Contact</h3>
              <p className="text-sm text-stone-600 italic">Unit 47-48, Paseo Arcenas Mall, Banawa, Cebu City. On the main highway — easy Grab/taxi access. Parking available in Paseo Arcenas lot.</p>
              <p className="text-sm text-stone-600 mt-2">Open Daily 7:30 AM – 10:00 PM. No WiFi. ₱1 Promo Cake with Meal + Drink.</p>
              <p className="text-sm text-stone-600 mt-2">4 branches citywide: Paseo Banawa, Tsai Hotel Lahug, Banilad Town Center, Kasambagan. IG: @tampcafecebu • FB: Tamp Cafe &amp; Co.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8/10. A masterclass in consistency, generosity, and modern cafe culture. The ₱1 promo cake is the best deal in Cebu dining. The beef stroganoff is genuinely excellent. The service will make you feel things. And the fish pond — trust me on the fish pond.</p>
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
            "1nun4LORx-YOZOXL9J3nvIhhafIDE9rGd",
            "1FbXCxBCQ9IqyPsyoSxiLATw7MBItv2BL",
            "1sS-kK0sbLwHKpPyYhT68oYETs-zHBCCE",
            "1TzNZvb7iSbItgBur_rvXk03Rp44JfbqI",
            "1SJJ8t3F1VzO2oCU9jnYawX5KfQamFvai",
            "1ZbjTxIw9Iygn6fu0mZ8f65XpeBn8uIb-",
            "125nKaB3y_3fyl2RLXkZl6rIoDHUZyf4-",
            "1tAZiftIdiMZKOw1OeTxwhmyl05HrfKHh",
            "1EimJ5SSpFDL5_V4cGY_R80C0mZN3_few",
            "1lGiugt9SF5ujWWZ5VqpIi4MDnpkZLpnZ",
            "1X6zdvfRm8JCEwyL-3aV9kbxN7eAdw55t",
            "1FSLuFuIQan4A0cb77gn12Tv9TUmlSinn",
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
