'use client';
import Link from "next/link";
import React from 'react';
import { ArticleHeader } from '../../components/editorial/ArticleHeader';
import { H2, Paragraph } from '../../components/editorial/Typography';
import { PullQuote } from '../../components/editorial/PullQuote';
import { DropCap } from '../../components/editorial/DropCap';
import { AnimatedSection } from '../../components/editorial/AnimatedSection';
import { Gallery } from '../../components/editorial/Gallery';

export default function TableaArticle() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-serif">
      <ArticleHeader
        category="Cacao Traditions"
        title="The Cacao Ritual"
        subtitle="A grounded Cebu visit to JY Square where Filipino cacao tradition still leads the menu."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          I visited Tabléa Chocolate Cafe on February 12, 2026, at the ground floor of JY Square on Salinas Drive, just near McDonald&apos;s. The space is small, quiet, and business like, so it feels less like a trendy cafe and more like a practical stop for people who want to sit down and focus. I came for one reason: to see if their traditional sikwate still delivers the kind of Filipino cacao experience people talk about.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative">
             <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/3DJPA5N3Su8"
              title="Best of Cebu video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              Tablea Chocolate Cafe: The Cacao Ritual
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Sikwate Standard</H2>
          <Paragraph>
            I ordered the Special Set for ₱175, which includes sikwate, fresh mango, and puto maya. As a value order, it is worth trying because you get a full snapshot of their traditional pairing in one tray. The mango leaned sour on this visit, and the puto maya was served warm but not fresh enough to hold its best texture.
          </Paragraph>
          <Paragraph>
            The sikwate carried the whole set. It was thick, deep, and balanced, and easily the best tableya based drink I have had in Cebu so far. This is where Tabléa stands out. In a city crowded with coffee concepts, it still centers Filipino cacao without apology and does it with real quality in the cup.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
            {[
              "1s1Y4nFqAzq3Wo1F4rNQuWOi3OH7hD5CQ",
              "10mspYEJA01lZ_CCnYSJsb5e-GJm_kjF0",
              "1Ro_bw6TN80T69Yy4QBFlOTfSHge7V5hC",
              "1r_gI840N2MhUUhcJrznD_79B8dC-xjUj"
            ].map((id, i) => (
              <div key={id} className="aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden relative group border border-stone-200 shadow-sm">
                <img 
                  src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={`Tablea Gallery ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote>
            I took so many photos of the counter and the food that people started staring, but preserving this kind of Filipino cacao story is worth the awkward moment.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Quiet Craft</H2>
          <Paragraph>
            Service was fast from the start. Seating was immediate, and the order arrived in about five minutes. Staff friendliness was around 3 out of 5, but attentiveness was lower at 1 out of 5, especially for follow through after the food landed. The team was accommodating for photos, though, which made content capture easy.
          </Paragraph>
          <Paragraph>
            The room fits around 15 people, with air conditioning and a conversational noise level that works for work sessions and short meetings. There is no WiFi and no background music, and the layout plus chairs could still be improved. Even with those gaps, I would still come back for the sikwate alone. If you are visiting for the first time, focus on the counter and food details because that is where the Filipino tradition is most visible.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location &amp; Details</h3>
              <p className="text-sm text-stone-600 italic">Ground Floor, JY Square, Salinas Drive, Cebu City 6000 • Open daily 8:00 AM to 8:00 PM, except holidays • Parking available • Easy taxi access near the main road • Near McDonald&apos;s.</p>
              <p className="text-sm text-stone-600 mt-2">Best for work from cafe sessions and meetings • Seating about 15 • Air conditioned • WiFi: none • Noise level: conversational • Cleanliness: 3/5.</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">★★★☆☆ (7/10) • Best order: Special Set (₱175), mainly for the sikwate • Sikwate: standout • Mango: a bit sour • Puto Maya: weakest item • Main improvements needed: table layout, better chairs, WiFi, and background music.</p>
              <p className="text-sm text-stone-600 mt-2">Contact: 0968-694-4871 • Instagram: tableachocolateph • Facebook: Tablea Chocolate.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1fsJMtwEey46O4myk9SWLjGm9O7JMzsn_",
            "1715mP2Ww8rdt8y5-9uaKz0n7507DXo9x",
            "1Eeu6VRXBKnN1W_ZVfvak0qhIf0A_W-_B",
            "1Mtc0-1K9WBbTdpn1JCnSZU2FGnbir8Zj",
            "1ukehpwjCxVBN3zSks2285Ht2V7ZJlsxf",
            "1Tk0nXnJrD_fbgTx0gFkEb0c6PrvJgl0g",
            "1NICjV5eSCq7nTZf7HWEwKGBGANdfFueC",
            "1QwYKps3yP0TSyUgwVrFI068P9hdRy8z1",
            "118UuHzobTogpxk7ERb3DGQDsXxQnV3Ic",
            "1IvEN-zK5WcSvW5HkhM3snhC4wAkSkUav",
            "1xx6hRuhRtO9dF7BAzK97XJ7ZvFMfMYQx",
            "1le4A5MTFlBlnUm1BWBD1cBNMR2xCu3_-",
            "10KgKE9c90BhOyWNYEm5zge-90rlGVc62",
            "1v4d4vgTsj44u6yf-58bY20DL4Zp8_bQa",
            "1_BheAO2hZMOKIxaVCejQSDRO6-2Z_Lb-",
            "1xr3cGenzj-k9LFvkJOZ63D4bR8GkcazJ",
            "1Q_flbvyFz7W3ivp81i5U-lBZTMTKUMWO",
            "1-3pxU7WhIu0kgCFTVAfOxspZMYW6Muo4",
            "16ZxMDOgOBfHlQ-A5jNgc694topYEg6i_",
            "1xCrz81YmcvK37FpNLZOaUR4-Dfe0UWdA",
            "1iImIfwazKtXZPinAVKnmOZsOUL9zkTj7",
            "1nhmfoUUWTu-vE6_s-U_c7SrOMPFDx9MP",
            "1r6al-0WdhgLdCHXLHnM2PwuDuQ-6bO0z",
            "1cf-wmFR_jwIeeTFS1ev5dsVlDC0KbQXm",
            "1_BrZfqsXuCGxfwJw2C8VepTkedl6MbYz",
            "1puLkmoFk-bF0JllFlgIk_oNzuyeLwjd5",
            "1XyOkSKCBuL9kvF4ONtKCYA769FHKGrPY",
            "19F7yrkIVaIKFjbA9x0kmylmcWk5e2C4N",
            "17kbNnAo3N5TWPlqw_IVdj5jMhjUixSs8",
            "1fr_XTpuN_8Vvx9G5bwhUZyQ_kWQPx1r7",
            "1_jZYZwOdCPauU_IIULUV-dYwySW6KQnD",
            "14AqS89CqJrGGtcHXo2UIhw6J08FAxFqQ",
            "1O1nP77Xj08SO3z6vVAByrzTCOjtDU78H",
            "1TpA4KivFJq6RWZzN2Frys5lbzPLVMEbj",
            "1Gs36p4vg1QFMH8d3kDCRou9zj3o4_bkx",
            "1f8dDbxucQwc-ITccvqJW4pd6z40hMS3q",
            "1Kh8gNrO62yjN8AcH4GjgZUIcmKCrYHiG",
            "1pBbKbqXa4tFqXLiNCR3AZShI5DjZdDrX",
            "1TMXCgeQXF8p3xXyi5toDKwyG-10ZcLbl",
            "1VBNoSumFaq1Hzy2uhIvEUwdCsSTuh-Fq",
            "1fjJD2Qg2vwlbY4g0Fj1ycaf0GO0ICw2l",
            "1JI9U2XGTsA_-h6Z9hbGbqUvGBYrKEZ0V",
            "1wvIj3Ff8x8oMhBzY4iZk7aLmw9Khg7HK",
            "1nClThYiMcxMonZOqpIjr2Um0sDArLt75",
            "1KIo_yU_WVMiqkrEMlS7GN4ODKuY4tTKu",
            "150iml7zlu4N5tVNEGJlfhkF5gRdsIT8C",
            "1eZSZm_DGXKl6neaTEnvvG-YBa7daR6pL",
            "10vRKp7ulbgLl8nKNeKAb9JfuGESFcnjO",
            "12FJVRtOZMSB-XpUbFOI-5AxS6OrLYPfg",
            "1VgZlrGuKjbuXnKNBq5jl8myyOqym-t6S",
            "1-RJJ-5ITWn9We5i2in21MVTQzT2ET80R",
            "1B-aPVeJB0qnqbVGVr68nlX9VpRGkIF8S",
            "1tRT7GucTbhIhE80Ncq0b3i43tmfmtZyn",
            "1xPbkT3shYFylinRuoXkhUxXnG-pXypKW",
            "1UMqe_Ktnb3dqbBoLAeI8och5fjSirLVv",
            "1JJ4HsCFrqyH1K7SCC7n2S6MBYPQ7-dl-",
            "17RpG-LNmRAAG9cnhIVT0CklTlSuotfCn",
            "1_r0SLsgKfFmaNFQt0JTfI_i6Yq6ZpRHg",
            "1CqQXCGy_spj-ADytP45-zcFY3jIg-8Zk",
            "17S1sWWVkR-UTzKK_jniLXSADYG6jMyax",
            "1PHGSgNPflEDAHRjWtJnrUqGRxPYUM506",
            "12BnSgvdfQNMr6xvjc5uRyILCZscnrBPb",
            "1x4pdBJTGnBVUQJXDINv6KOJhQpijMI5c",
            "1K4K79tLE1JobBSKC4PDyd9aWZfvEMfXk",
            "1kfRRC40uBX_RPXpG-A7GxCLspRg8qjpA",
            "19l5BtvDAvGRZO9BpFk5c3bvlntc3bVHD",
            "1QOivV9pmvfNG42w_j0fi7n7aVwCgj1JM",
            "1xL-2jeIZ6EYVyttWh-_DEThd7Q_vvOfb",
            "1SiAiMiQyGQFUcpXGjFyPhMLXtYy91YFf",
            "1AldLe1FhdV6kFqYTs1j_tg_OT5sT6F81",
            "1bM62ejRYOH_TGo9vImocRTjjU-QTHLxE",
            "1I6I-hH4AXxnkHhmUslwTK0sAelvQCebA",
            "1IyjkHx4tf3f_FAnPUFaCprRTcSc7qEMl",
            "1eXd2gcBg4c0bB1vbUCl1Vdz_03sUmyKq",
            "1Euv_ZHGLnuaJCUH5I-3tprvQmD1cn3mA",
            "1EWZldBCjr35yGTeO3g3N-3Ase1ZbkQpj",
            "1Eo8ImjO2q8UxRY3Srnk5TpVj8G6Fygbt",
            "1C3pvUZnQcTpEU_BzM6Ua9UL2zgM3MkY5",
            "1B5sHGHmvt5twW_PNHWmMQ2pxzLMy1B22",
            "105XEt7XfR9zDll5qktbVSXSKA8p20bMx",
            "17-EreIvzcMBtUa9uMYjtx762knCqZEij",
            "1gQ1OxDMePUVoO1VrH9sgv5tEFysXgoUt",
            "1db58wNYtbnlSqJ1KohuLBdOsbnhKqJgz",
            "1JfKf3PYC6TPtCEiCju0k7gnvrRgS_fh6",
            "1b7gTIifiCIyKqeGjucc-92I1A1BpCY8H",
            "1KyFkydX9hTPF1p72RoaWSqPatBd2-2JC",
            "1uuCCz_W0XbFlWcs4AKvPk4GYWzeH3qVA",
            "1_eGwknzg8qYqo0b9ehHLAm3MpLavpAX2",
            "1l_w8KWFVIS1MJ7oxM1RNIAGtBfuYo57p",
            "1llhuTcLOb5oObz4MjzfDIKJ3VCQ5lanM",
            "1ivFQh-jTTV4AV7zwH6XCQE3duo58iYCO",
            "1aBCONrAl2aBNrO4eMuaJ1c1J9xVRzE_6",
            "1jXNEnB_UgkscE-NZ4TLCx3zwEt2ftWSZ",
            "1bvQUzGMIwGvOo-gdYzlHfW7s1IKBJNv2",
            "1pnWWu6f4yETtq89MGf-HoDTuiho2-ZSm",
            "1utHXa7M1PlzKE5o4m0VDz9XNmAcVF0vZ",
            "16g5Uuchcz6tBUavUllk-E5tXxPJbTRF3",
            "1QR17Z40EglvnpTO-5qO2DDCRDphV2lMP",
            "1zhdefnjcWFjyNLkEvRreeZxpsc3pLV-C",
            "1GyCbGmJh9V_qSTxtL6sXvNxhx7JT5Pwn",
            "1d69nDmLD2Qh6hi021GuT7-9bV6SI_F9d",
            "1LIZlMzi-ytvwuPhzgSlKDzblSUEgb_qs",
            "1-KejcmefUtdqPIebB6jCfH8qtfUpnWRT",
            "1bUUrr7IGEmBfQApekx7ZPNJjrwo8msUQ",
            "1F8GdX4Vu-Y6ULOGaJp_OdNbTXEcCFV-R",
            "17T1o5iyWKQz_QOLArPKo3IyjY_p1SsRq",
            "1lp8HrPjLxdjmlzoIRR6MbaZBsmjjxxKa",
            "15VBeWiS3k6jJ5EZd-ZUOzbNEBSuSs_0a",
            "1pwoJo4eSzXRaVo5w02uZlDORATEWy-Om",
            "1dwt8jNeGcTkIq0KbkEyKwNGsgbCya1dG",
            "11rPULuWV_sH2nCQ0Q1cwOgsQfmCxT5HW",
            "1C40VYr0NIE1h7mAr6rviEuokPgu125Sy",
            "1TurP-AA0UVK2nNdxB3qo2KcQWcMfUZkd",
            "1gXJxV4XoPi_gnBwxRwE7RGJT1agCTiG5",
            "18NiBcFH1qWFqdz6ALr9CxIlqYnj6oaIZ",
            "1EIJDiPv4c--KZryl8HoF4ec81urOa3Wv",
            "10rS_1KUUKGxYgQpaHm5wlxpE2Gcay-Oy",
            "1XR6_rFPWDft1ucyWAWQHJpdYOEXagM-K",
            "1FApRhDd3czcv0rtrtViqa3dUBTYQIusA",
            "1ylGRYVVfxiXXfa90vkOac-znd8jTpI8W",
            "1p5J9OgPbADHsZW2gWEAqahapKpLgsm5Z",
            "1UcYc0MPvMMxLiixxLrwR2J-ZouSd1xma",
            "1gtaWN3EH1XHEdO8qU94XG_osAdaRvUH8",
            "14FL7bVrzmQ7Ip2VtkOoic5rtii-9ffbE",
            "1n__O1MXCk02cLBdfzYuz0zxeVvSNavxF",
            "1w14YUm96hai-l7KIIKFXVHy2lch9B8w5",
            "1fW18fCx6_y02Y122KFObUNvYbPeZiEuU",
            "1fijPeemSY6lSfvrBS0Xqm2ssh0UGZ1Sc",
            "1Yl4Ur3-_Xx3UBg4fSRgongDnx0rAHipD",
            "1JA3CzGKZ24-LGa_ygZKZGes0J0aOUeMK",
            "1YCXMF8pNgRHEAi0QEbsDP7ZYYm2yKInt",
            "1xEN5ni3ArEiDkhklKV96fiyZ7ibyWYhz",
            "1gEYtleLBfhEpaMbJsrggoRzVLCIBv2N9",
            "100S1E_boCSttlxrD70ScKysWliUvV7qc",
            "1XyFwuzaoRN2fsbKU3A2r2IrklJoHPCB2",
            "14_5-rxIe16nVX5SobprH0c2yidEd_kym",
            "1MO9WVW5Jkupf35v8oe8prt8im3fghHS8",
            "1B48jd3plC1Snfelwx3ThfAGXGkcFNUkX",
            "12UopobVvcklRQjGtKbnw2jQkBrMXPAn8",
            "10Myw_AM6PEwITXgJDKvJKxye6UCzzra_",
            "1s1Y4nFqAzq3Wo1F4rNQuWOi3OH7hD5CQ",
            "10BS_e-dnXHHWj9CERdhn0p8M5wSBCEzG",
            "1dh4PsVzk6Xr2qn4azEi6Y2Is7ugHLqNp",
            "1pftdyDaJ9JnsfU4piBpV0wQtgyneUFmH",
            "18RGLMtN0uKZ_AAbzp8ZNeSZEnLB5rPhl",
            "1wA-yxPkU9xNUqKUymqJhuDQQk2hWISKq",
            "1G50lscbsuvzBeiWJP0Z2aCTHdHppINxz",
            "1ojgKtXvgLJNgCn1hb00lvPzgGzXJhq-I",
            "1GqNJnlnKVtD3aYjeo78VyZKVxmOJ80Pr",
            "1r_gI840N2MhUUhcJrznD_79B8dC-xjUj",
            "1Ro_bw6TN80T69Yy4QBFlOTfSHge7V5hC",
            "10mspYEJA01lZ_CCnYSJsb5e-GJm_kjF0",
            "179xwRY99lP0P_plcYMz0B_vqvGtAH8ZG",
            "1WQF30BTW-cEHjWcpH1zM1rAdikT2rCza",
            "1_ULmCW5p3TJqIIRiyK0CZQWLfzZKaKut",
            "1KdXo7xL2gkgtDTp9VyYEITBBnPjiLH8_",
            "1QXIMoJDaAlXvYYPj7z4QBmvSocYDgrc4",
          ]} 
        />
      </article>

      <footer className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Best of Cebu</h3>
          </div>
          <nav className="flex space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
            <Link href="/gureum" className="hover:text-amber-500 transition-colors text-stone-400 italic">Previous: The Half-Moon View</Link>
            <Link href="/" className="hover:text-amber-500 transition-colors">Back to Issues</Link>
            <Link href="/amato" className="hover:text-amber-500 transition-colors text-stone-400 italic">Next: Amato</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
