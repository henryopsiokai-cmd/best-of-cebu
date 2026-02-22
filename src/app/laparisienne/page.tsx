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
        title="French Soul in the Heart of the Queen City"
        subtitle="Exploring the disarming charm and cinematic romance of La Parisienne Cebu, where Gorordo Avenue fades into a Parisian dream."
        author="Criste Joy"
        publishedAt="February 2026"
      />

      <article className="max-w-4xl mx-auto px-6 pb-24">
        <DropCap>
          There is a specific moment when you arrive at La Parisienne Cebu where the world simply shifts. Located at 371 Gorordo Avenue in the Lahug district, the establishment sits right along the highway, making it remarkably easy to reach by Grab or taxi. However, the proximity to the busy road is forgotten the second you step inside. The transition is immediate and profound. You leave behind the heat and the humidity of the city and enter a space that feels like a romantic escape from a classic film. It is a place designed for soft feelings and slow conversations.
        </DropCap>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-2xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1uHOgSLbHReFbbDDm9FXxdhHYl9FcRPQW&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1uHOgSLbHReFbbDDm9FXxdhHYl9FcRPQW" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
              La Parisienne Interior • Cebu City
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">A Surprising Scale of Romance</H2>
          <Paragraph>
            The first impression of La Parisienne is often one of scale. From the street, it looks like a charming bistro, but once you begin to explore, you realize the space is vast. It comfortably seats well over a hundred people, and on peak nights, the capacity feels like it could easily double when you account for the various indoor and outdoor zones. There is a sense of discovery as you move through the restaurant, which features a main dining room, a wide outdoor area, and an expansive rooftop.
          </Paragraph>
          <Paragraph>
            The design is a clever blend of a high-end bar and a cozy family home. One of the most striking visual elements is the way they have utilized the walls to store wine. Bottles are lined up in a way that serves as both a design feature and a practical use of space. It is a smart choice that adds to the European bistro aesthetic while subtly reminding guests that there is always another bottle to be shared. The seating throughout the venue is notably comfortable, favoring soft chairs that invite you to sit and linger far longer than you might have originally planned.
          </Paragraph>
          <Paragraph>
            The rooftop is where the venue really leans into its namesake. There is a miniature Eiffel Tower on the roof that manages to be both playful and cinematic. Beneath this landmark is a dedicated seat for two, a perfect spot for those seeking the ultimate date night vantage point. The rest of the rooftop is arranged for groups, all set against a backdrop of nonstop love songs that play throughout the venue. It is an unapologetically romantic atmosphere.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="La Parisienne Setting"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1X7hRsNRM-WVY7ka6mfKVb-EZD3NvV_u8&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Pastry Detail"
              />
            </div>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative group border">
              <img 
                src="https://drive.google.com/thumbnail?id=1KMv1w73XVTR8qV6uIo-P2cBBqaNj5rKS&sz=w1000" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Dining Detail"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">The Art of the Reset</H2>
          <Paragraph>
            There is a unique quality to La Parisienne that suggests it is not just for couples. While the energy is undeniably romantic, it feels more like a celebration of love in its broadest sense. If you visit alone, as I did, you do not feel out of place. Instead, the music and the soft lighting provide a kind of "romantic reset." It is a space where you can be alone with your thoughts and still feel comforted by the atmosphere. It reminds you that a quiet moment of self-care is just as valuable as a shared dinner.
          </Paragraph>
          <Paragraph>
            Even small details contribute to this feeling of being in another world. Outside in the garden area, there are koi fish that are remarkably healthy and large, some even bigger than a human hand. Seeing them swim in their peaceful pond adds a layer of tranquility to the experience. It shows a level of care that extends beyond the kitchen and into the living environment of the cafe.
          </Paragraph>
          <Paragraph>
            The whimsy of the design continues even in the most functional areas. The bathroom door is disguised as a bookshelf, a playful touch that makes you smile when you finally realize where it is. Once inside, the facilities are some of the cleanest and most spacious I have encountered in the city. It is a rare restaurant that puts as much thought into the hidden doors as they do into the main dining room.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <PullQuote attribution="Criste Joy">
            In the soft glow of the bistro’s lights, you realize that some places aren’t just about the food, they are about the way they make you feel when the rest of the world is too loud.
          </PullQuote>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Culinary Highlights: Gelato and Comfort</H2>
          <Paragraph>
            While many people visit for the ambiance, the menu offers some genuine highlights. The Dark Chocolate Gelato (₱175) is exceptional. The consistency is incredibly creamy and smooth, suggesting a kitchen that takes the time to master the traditional methods of gelato making. It is easily one of the best ice creams available in Cebu. Sitting there with a scoop of dark chocolate as a love song plays in the background is a simple, perfect moment that makes life feel good again.
          </Paragraph>
          <Paragraph>
            For a more substantial meal, the Spaghetti Meatballs (₱450) is a reliable choice. The meatballs are flavorful, and the sauce is expertly balanced to suit the local palate. It is the kind of dish that feels familiar and comforting, which fits perfectly with the homey vibe of the restaurant. The food arrives quickly, usually within five to ten minutes, allowing you more time to soak in the surroundings.
          </Paragraph>
          <Paragraph>
            There are areas for improvement, particularly regarding the service at the counter. The staff can sometimes be distracted by multiple tasks when customers are waiting, which can be a minor point of friction in an otherwise seamless experience. Additionally, the Wi-Fi is not free; it operates on a "PisoNet" system where you insert coins for access. While this is common in the Philippines, a more integrated system might be better for those who wish to work for longer periods in such a comfortable setting.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 aspect-video bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border group relative shadow-xl">
             <video 
              className="w-full h-full object-cover"
              controls
              poster="https://drive.google.com/thumbnail?id=1OgAhoB4FHDeOo76323EkliXG0L10NUNU&sz=w1000"
            >
              <source src="https://drive.google.com/uc?export=download&id=1OgAhoB4FHDeOo76323EkliXG0L10NUNU" type="video/mp4" />
            </video>
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] uppercase tracking-widest px-2 py-1">
              Atmospheric View
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <H2 className="italic border-b-2 border-stone-900 inline-block pb-2 mb-8 uppercase text-sm tracking-widest">Practical Information</H2>
          <Paragraph>
            La Parisienne Cebu is open daily, with hours extending until 1:00 AM on weekdays and 2:00 AM on weekends. This makes it a great late-night destination for those who aren't ready for the evening to end. Parking is available, though it can become limited during the popular evening hours. If you are looking for a specific "main character" seat, it is best to arrive around 5:00 PM before the dinner crowd takes over.
          </Paragraph>
          <Paragraph>
            Whether you are visiting for a first date, a long talk with friends, or a solo contemplation of life, this little corner of Lahug offers a sanctuary that is hard to find elsewhere. It is a place that reminds you to love "love" again, starting with yourself.
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Location & Details</h3>
              <p className="text-sm text-stone-600 italic">371 Gorordo Ave, Lahug, Cebu City 6000. Located by the highway, near UP Cebu. Easy Grab drop-off.</p>
              <p className="text-sm text-stone-600 mt-2">Mon–Thu: 9:00 AM – 1:00 AM. Fri–Sun: 9:00 AM – 2:00 AM. WiFi: PisoNet. Parking: Available.</p>
              <p className="text-sm text-stone-600 mt-2">IG: @laparisiennecebu • FB: La Parisienne CEBU</p>
            </div>
            <div className="p-8 bg-stone-50 border shadow-sm">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">The Verdict</h3>
              <p className="text-sm text-stone-600 italic">8.7/10. An essential romantic escape in Cebu City. The dark chocolate gelato is world-class, the bookshelf bathroom is a delight, and the atmosphere is thick with cinematic charm. A few service improvements would make it flawless, but it remains a must-visit for anyone who believes in the art of the slow conversation.</p>
            </div>
          </div>
        </AnimatedSection>

        <Gallery 
          images={[
            "1s9UsQdGu2CLUXCyviqMMtVFstxzWCT5m",
            "1X7hRsNRM-WVY7ka6mfKVb-EZD3NvV_u8",
            "1KMv1w73XVTR8qV6uIo-P2cBBqaNj5rKS",
            "1T-qeXsKy8RXevtPXRLsfdx1O_EJiRJn9",
            "1UTIHUCYxu7s9NHHYbWN5DrV2ohkrPdbG",
            "1rmzukoVjgV_NkpHXzn54DEG6gUMse4uo",
            "1oS8PRE59vv7TIXXgLF907zZxgeAoIQyU",
            "1aIIzg46iygKp28fWrVvfNcNYKecETyU0",
            "1LPulHkltrPkNeVa-SNiGuEJ9as2W2iXg",
            "1u2vcC4Ztz9gY9vh70QBbqr_gB5Br1dC-",
            "1yeMeGqljlpM4__xgkFg5IdURcoLS_esm",
            "1PuCYx4GtHBt7wwKXWpEIC3hkQNnbCP4X"
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
