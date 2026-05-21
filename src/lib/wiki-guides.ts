export interface GuideLink {
  href: string;
  label: string;
}

export interface GuideFact {
  label: string;
  value: string;
  note: string;
}

export interface GuideSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: GuideLink[];
}

export interface GuideTable {
  id: string;
  title: string;
  intro?: string;
  headers: string[];
  rows: string[][];
}

export interface WikiGuide {
  path: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  badge: string;
  intro: string;
  quickAnswer: string;
  facts: GuideFact[];
  sections: GuideSection[];
  tables?: GuideTable[];
  howTo: {
    name: string;
    steps: string[];
  };
  itemList?: {
    name: string;
    items: string[];
  };
  faq: { q: string; a: string }[];
  nextSteps: GuideLink[];
}

export const WIKI_GUIDES = {
  leveling: {
    path: "/leveling",
    metaTitle: "Sailor Piece Leveling Guide - Fast Route to Max Level",
    metaDescription:
      "Fast Sailor Piece leveling route for Sea 1, Sea 2, boss farming, codes, level-gated rewards and the current 20,000 max level.",
    title: "Sailor Piece Leveling Guide",
    badge: "Level route",
    intro:
      "Use this page as the practical route for leveling faster: claim eligible codes, clear the right quests, rotate bosses when grinding slows down, and prepare for Sea 2 instead of wasting rerolls early.",
    quickAnswer:
      "The fastest leveling path is codes first, then quest chains until your damage is stable, then repeated boss and dungeon loops once normal mobs stop being efficient. The official Roblox game page currently lists Sailor Piece Max Level as 20,000.",
    facts: [
      {
        label: "Current max level",
        value: "20,000",
        note: "Shown on the official Roblox game page.",
      },
      {
        label: "Sea 1 milestone",
        value: "6,250",
        note: "Use this as the old Sea 1 completion target before late-game systems.",
      },
      {
        label: "Code priority",
        value: "Before grinding",
        note: "Some active rewards are level-gated, so filter by your current level first.",
      },
    ],
    sections: [
      {
        id: "route",
        title: "Fast Leveling Route",
        paragraphs: [
          "Start every session by checking active codes. Fresh milestone codes often give rerolls, gems or boosts that make the next bracket faster, and level-gated codes should be claimed as soon as you qualify.",
          "For early and mid game, follow the highest quest chain you can clear without dying. If a quest takes too long, step back one bracket, upgrade your fruit or sword, then return when your damage catches up.",
        ],
        bullets: [
          "Use mobility fruits or fast movement skills while island hopping.",
          "Upgrade a stable farming build before chasing rare PvP rolls.",
          "Move to boss loops once quest mobs stop giving efficient progress.",
        ],
        links: [
          { href: "/codes", label: "Open the level code filter" },
          { href: "/tier-list", label: "Compare build options" },
        ],
      },
      {
        id: "boss-loop",
        title: "When to Switch From Quests to Bosses",
        paragraphs: [
          "Bosses become better when your damage lets you clear them quickly and consistently. Open-world bosses can also drop rerolls, keys, accessories and build pieces, so they progress your account beyond raw EXP.",
          "If you are undergeared, do not burn rare keys on fights you cannot finish. Farm open-world bosses and quests first, then use keys when you can reliably meet the damage requirement for drops.",
        ],
        links: [
          { href: "/bosses", label: "Read the boss route" },
          { href: "/boss-keys", label: "Plan boss key spending" },
        ],
      },
      {
        id: "sea-2",
        title: "Sea 2 Preparation",
        paragraphs: [
          "Sea 2 is where leveling becomes more dependent on build quality. Before pushing deeper, lock in a usable race, fruit, sword, clan and trait instead of rerolling everything at once.",
          "Use the official game page and Discord for patch-sensitive unlock requirements. Community pages have shown older level-cap numbers, so this site treats the Roblox page as the current source of truth for max level.",
        ],
      },
    ],
    howTo: {
      name: "How to level faster in Sailor Piece",
      steps: [
        "Check active Sailor Piece codes and copy every code eligible for your level.",
        "Run the highest quest bracket you can clear quickly without frequent deaths.",
        "Upgrade one stable farming build before spending rerolls on experiments.",
        "Rotate open-world bosses when normal quest grinding slows down.",
        "Save boss keys for fights you can clear and qualify for drops from.",
      ],
    },
    itemList: {
      name: "Sailor Piece Leveling Priorities",
      items: [
        "Redeem eligible codes",
        "Clear highest efficient quest",
        "Upgrade fruit or sword damage",
        "Rotate open-world bosses",
        "Save keys for reliable clears",
      ],
    },
    faq: [
      {
        q: "What is the max level in Sailor Piece?",
        a: "The official Roblox game page currently lists Sailor Piece Max Level as 20,000.",
      },
      {
        q: "Should I farm bosses or quests to level faster?",
        a: "Use quests while they are fast. Switch to boss loops when you can clear bosses quickly and want rerolls, keys or accessories alongside EXP.",
      },
      {
        q: "Should beginners spend rerolls while leveling?",
        a: "Spend carefully. A stable A-tier build is usually better than gambling all rerolls before you know your late-game route.",
      },
    ],
    nextSteps: [
      { href: "/codes", label: "Filter active codes" },
      { href: "/bosses", label: "Choose boss route" },
      { href: "/guide", label: "Open wiki guide" },
    ],
  },
  bosses: {
    path: "/bosses",
    metaTitle: "Sailor Piece Bosses Guide - Routes, Drops & Key Bosses",
    metaDescription:
      "Sailor Piece bosses guide covering open-world bosses, world bosses, spawnable key bosses, dungeon bosses, drop rules and the best farming order.",
    title: "Sailor Piece Bosses Guide",
    badge: "Boss farming",
    intro:
      "Bosses are the bridge between leveling and real account progress. Use them for rerolls, dungeon keys, boss tickets, accessories, titles and rare build pieces once your damage is ready.",
    quickAnswer:
      "The safest boss route is open-world bosses first, then key bosses such as Saber, Qin Shi and Ichigo when you can clear them reliably, then world or dungeon bosses after your Sea 2 build is stable.",
    facts: [
      {
        label: "Main boss types",
        value: "5+",
        note: "Mob, open-world, spawnable, world, dungeon and event bosses.",
      },
      {
        label: "Drop eligibility",
        value: "Damage matters",
        note: "Community boss guides report that low contribution can miss rewards.",
      },
      {
        label: "Best early loop",
        value: "Open-world",
        note: "Farm frequent bosses before spending rare summoning items.",
      },
    ],
    sections: [
      {
        id: "types",
        title: "Boss Types",
        paragraphs: [
          "Sailor Piece has several boss buckets. Mob bosses are mostly EXP checks, open-world bosses appear on island timers, spawnable bosses require items, world bosses are higher-risk server events, and dungeon bosses are tied to dungeon or tower runs.",
          "Treat each bucket differently. A leveling character wants repeatable open-world fights; a late-game character wants bosses with specific drops that match their build target.",
        ],
        bullets: [
          "Mob bosses: good for early quest progress.",
          "Open-world bosses: useful for rerolls, keys and routine farming.",
          "Spawnable bosses: spend keys only when you can clear the fight.",
          "World and dungeon bosses: better after your damage and survival are stable.",
        ],
      },
      {
        id: "route",
        title: "Best Farming Order",
        paragraphs: [
          "For most players, the first efficient loop is a rotation of open-world bosses on islands you can already clear. This keeps downtime low and gives repeated chances at rerolls, keys and accessories.",
          "Once you have enough keys, start with the lowest-cost key boss before spending on expensive summons. This lets you convert keys into boss tickets and drops without risking your whole stockpile.",
        ],
        links: [
          { href: "/boss-keys", label: "Boss key guide" },
          { href: "/swords", label: "Sword guide" },
        ],
      },
      {
        id: "drops",
        title: "Drop Planning",
        paragraphs: [
          "Boss drops are where SEO pages often go stale, so the practical rule is to plan by item type instead of memorizing every percentage. Decide whether you are farming rerolls, keys, accessories, titles, dungeon access or a specific weapon.",
          "If your target is a rare drop, increase clear speed and luck before grinding for hours. Codes, race choices, runes, titles and accessories can all affect how many chances you get per session.",
        ],
        links: [
          { href: "/codes", label: "Check current rewards" },
          { href: "/traits", label: "Improve passive power" },
        ],
      },
    ],
    howTo: {
      name: "How to farm Sailor Piece bosses efficiently",
      steps: [
        "Pick a boss whose level and damage checks fit your current build.",
        "Farm repeatable open-world bosses before spending boss keys.",
        "Use codes and rerolls to stabilize fruit, sword, race, clan and trait power.",
        "Spend boss keys on the lowest-cost useful boss first.",
        "Track whether you need rerolls, tickets, accessories or a specific rare drop.",
      ],
    },
    itemList: {
      name: "Sailor Piece Boss Farm Checklist",
      items: [
        "Enough damage for drop credit",
        "Mobility to dodge large attacks",
        "Stable fruit or sword damage",
        "Boss keys saved for reliable clears",
        "Clear target drop before farming",
      ],
    },
    faq: [
      {
        q: "What boss should I farm first in Sailor Piece?",
        a: "Farm open-world bosses you can clear quickly before spending boss keys. They are better for learning patterns and building resources.",
      },
      {
        q: "Why did I beat a boss but get no drop?",
        a: "Boss drops usually depend on contribution and luck. If your damage share is too low, you may miss rewards even if the boss dies.",
      },
      {
        q: "Are boss keys the same as boss tickets?",
        a: "No. Boss keys are used to summon certain bosses. Boss tickets are rewards or currency you can spend after boss farming.",
      },
    ],
    nextSteps: [
      { href: "/boss-keys", label: "Farm boss keys" },
      { href: "/leveling", label: "Improve leveling route" },
      { href: "/tier-list", label: "Compare best builds" },
    ],
  },
  "boss-keys": {
    path: "/boss-keys",
    metaTitle: "Sailor Piece Boss Keys Guide - Get Keys, Farm Fast & Spend",
    metaDescription:
      "How to get Boss Keys in Sailor Piece from quests, chests, Merchant stock and Dungeon Shop, plus the best order to spend keys on Saber, Qin Shi and Ichigo.",
    title: "Sailor Piece Boss Keys Guide",
    badge: "Boss keys",
    intro:
      "Boss Keys are one of the easiest resources to waste. This guide explains every practical Boss Key source, the fastest repeatable farm loop, and when it is worth spending keys on Boss Island summons.",
    quickAnswer:
      "Get Boss Keys from repeatable quests, enemy chest drops, rotating Merchant stock and late-game Dungeon Shop routes. Farm quests and chests first, buy Merchant stock when it appears, and spend keys only when your build can clear Saber, Qin Shi or Ichigo reliably.",
    facts: [
      {
        label: "Key bosses",
        value: "1 / 3 / 5 keys",
        note: "These are the common planning costs for Saber, Qin Shi and Ichigo summons.",
      },
      {
        label: "Fast loop",
        value: "Quests + chests",
        note: "Repeatable quest routes give completion rewards and enemy chest chances at the same time.",
      },
      {
        label: "Late-game source",
        value: "Dungeon Shop",
        note: "Use this after dungeon progression is unlocked and Dungeon Tokens become farmable.",
      },
    ],
    sections: [
      {
        id: "sources",
        title: "How to Get Boss Keys",
        paragraphs: [
          "The reliable loop is repeatable quest farming plus chest drops from enemies. Quests can reward Boss Keys, while the enemies you kill during the route can drop chests that may contain more keys.",
          "Higher-rarity chests are better, so luck and kill speed both matter. A high-luck build sees better chest quality over a long session, while a high-damage build simply creates more chest rolls per hour.",
          "Boss Keys can also show up in rotating Merchant stock, and late-game players can convert dungeon progress through Dungeon Shop routes after unlocking the relevant dungeon progression.",
        ],
        bullets: [
          "Run repeatable Quest NPC missions in a bracket you clear quickly.",
          "Open every chest drop from enemies, especially rare or legendary chests.",
          "Check the Sailor Island Merchant whenever stock refreshes.",
          "Use Dungeon Shop options after Dungeon Island progression is unlocked.",
        ],
        links: [
          { href: "/leveling", label: "Level efficiently first" },
          { href: "/codes", label: "Claim rerolls and boosts" },
        ],
      },
      {
        id: "fast-loop",
        title: "Fastest Boss Key Farming Loop",
        paragraphs: [
          "The best practical loop is not one single source. Start with the highest repeatable quest route you can clear without downtime, kill every enemy on the route, open chest drops, then check Merchant stock when you return to Sailor Island.",
          "If your damage is low, improve your farming build before chasing keys for hours. If your chest drops feel weak, add luck through race, runes, clan levels, titles or other support before judging the route.",
        ],
        bullets: [
          "Low level: use quests because they progress EXP and key chances together.",
          "Mid game: add luck support and keep farming dense enemy routes.",
          "Late game: convert dungeon progress through the Dungeon Shop when the route is unlocked.",
        ],
        links: [
          { href: "/runes", label: "Use luck runes" },
          { href: "/bosses", label: "Plan boss routes" },
        ],
      },
      {
        id: "spending",
        title: "How to Spend Boss Keys",
        paragraphs: [
          "Use Boss Keys at the Boss Summoner route for specific bosses such as Saber, Qin Shi and Ichigo. Start with Saber if you are still testing your damage, then move to Qin Shi and Ichigo when your clear speed is stable.",
          "Before spending keys, make sure your fruit or sword can keep damage uptime, your movement can avoid boss attacks, and your account can qualify for rewards. Published cash and gem requirements can change by update, so check the in-game summon UI before spending a large stockpile.",
        ],
        links: [
          { href: "/bosses", label: "Pick the right boss" },
          { href: "/swords", label: "Improve weapon damage" },
        ],
      },
      {
        id: "mistakes",
        title: "Common Boss Key Mistakes",
        paragraphs: [
          "The most common mistake is spending keys as soon as you get them. Keys are valuable because they convert into targeted boss attempts, so a weak clear speed turns them into wasted time.",
          "Do not confuse Boss Keys with Dungeon Keys or Boss Tickets. These systems overlap in boss progression, but they are separate items with separate use cases.",
        ],
      },
    ],
    tables: [
      {
        id: "key-sources",
        title: "Boss Key Sources Compared",
        intro:
          "Use this table to choose the right source for your current progression instead of farming a slow route just because it can drop keys.",
        headers: ["Source", "Best for", "Requirement", "Reliability"],
        rows: [
          ["Quest NPC rewards", "Leveling while farming keys", "Repeatable quest bracket you can clear quickly", "Steady over time, but not guaranteed every completion"],
          ["Enemy chest drops", "Any farming route with dense mobs", "Kill enemies and open chest drops", "Better with higher luck and faster clear speed"],
          ["Sailor Island Merchant", "Buying keys when RNG stock appears", "Check rotating Merchant stock", "Great backup, but stock is not always available"],
          ["Dungeon Shop", "Late-game direct conversion", "Dungeon Island route and Dungeon Tokens", "Strong once unlocked, not a beginner source"],
        ],
      },
      {
        id: "spend-order",
        title: "Best Boss Key Spending Order",
        intro:
          "Treat these as planning costs and priority notes. Always verify the current in-game summon UI before spending keys, cash and gems after a major update.",
        headers: ["Boss", "Planning cost", "Why farm it", "Spend keys when"],
        rows: [
          ["Saber", "1 Boss Key plus cash and gems", "Early Boss Island test, Boss Tickets, Dungeon Key chance, Saber Armor and Excalibur route", "You can clear the fight without wasting the summon"],
          ["Qin Shi", "3 Boss Keys plus cash and gems", "Qin Shi Blindfold, Jade Tablet, Imperial Seal and title route", "Saber clears feel stable and your damage uptime is reliable"],
          ["Ichigo", "5 Boss Keys plus cash and gems", "Hollow Mask, Soul Fragment, Spiritual Core and Soul Reaper route", "Your build can handle longer, harder Boss Island fights"],
        ],
      },
    ],
    howTo: {
      name: "How to farm and spend Sailor Piece Boss Keys",
      steps: [
        "Run repeatable quests in the highest bracket you can clear quickly.",
        "Open enemy chests during the route and improve luck or kill speed when drops feel slow.",
        "Check Merchant stock whenever you return to Sailor Island.",
        "Use Dungeon Shop conversion after Dungeon Island progression is unlocked.",
        "Save keys until your build can clear the target summoned boss and qualify for drops.",
        "Spend keys on Saber first if you are testing damage, then move to Qin Shi and Ichigo.",
      ],
    },
    itemList: {
      name: "Sailor Piece Boss Key Sources",
      items: [
        "Quest NPC rewards",
        "Enemy chest drops",
        "Sailor Island Merchant",
        "Dungeon Shop progression",
      ],
    },
    faq: [
      {
        q: "How do I get Boss Keys in Sailor Piece?",
        a: "Farm repeatable quests, open enemy chests, check Merchant stock, and use Dungeon Shop options once your dungeon progression is unlocked.",
      },
      {
        q: "What are Boss Keys used for?",
        a: "Boss Keys are used to summon specific bosses, especially Boss Island fights such as Saber, Qin Shi and Ichigo.",
      },
      {
        q: "Should I spend Boss Keys right away?",
        a: "Usually no. Save keys until your build can clear the target boss reliably and qualify for rewards.",
      },
      {
        q: "What is the fastest way to farm Boss Keys?",
        a: "Use repeatable quests plus chest farming together. This route gives quest reward chances, enemy chest chances and EXP at the same time.",
      },
      {
        q: "Are Boss Keys affected by luck?",
        a: "Luck helps chest farming because better chest quality and more useful drops matter over long sessions. It does not replace kill speed, so balance both.",
      },
    ],
    nextSteps: [
      { href: "/bosses", label: "Choose boss targets" },
      { href: "/leveling", label: "Fix leveling route" },
      { href: "/codes", label: "Use current codes" },
    ],
  },
  runes: {
    path: "/runes",
    metaTitle: "Sailor Piece Runes Guide - Best Runes, Rune Dungeon & Secret Runes",
    metaDescription:
      "Best Sailor Piece runes for damage, luck and survival, with Rune Dungeon farming, Infinite Tower secret runes, Radiant Rune, Primordial Rune and rune leveling.",
    title: "Sailor Piece Runes Guide",
    badge: "Rune system",
    intro:
      "Runes are one of the strongest late-game passive systems because they can raise damage, survivability or luck without replacing your core fruit, sword, race or clan. Use this guide to decide which rune to equip, where to farm it, when to switch between damage and luck, and when Infinite Tower is worth the time.",
    quickAnswer:
      "Use damage runes for boss and raid clears, luck runes only after clears are already fast, and defensive runes when survival is the bottleneck. Rune Dungeon is the normal rune route. Radiant Rune and Primordial Rune are long-term Infinite Tower chase drops, not early progression requirements.",
    facts: [
      {
        label: "Current pool",
        value: "11 runes",
        note: "Current public rune lists track nine normal runes plus Radiant and Primordial secret runes.",
      },
      {
        label: "Rune level cap",
        value: "Level 60",
        note: "Rune level is tracked as shared rune progress, not only one duplicate-fed item.",
      },
      {
        label: "Secret pity",
        value: "6,000 / 7,500",
        note: "Radiant and Primordial pity routes are tracked through Infinite Tower floors.",
      },
      {
        label: "Tower access",
        value: "Level 8,500+",
        note: "Treat Infinite Tower rune farming as endgame content after your normal build can clear reliably.",
      },
    ],
    sections: [
      {
        id: "how-they-work",
        title: "How Runes Work",
        paragraphs: [
          "Runes are passive equipment pieces that modify your account power after your main build is already functional. The best rune is not always the rarest one; it is the rune that supports what you are farming right now.",
          "Damage runes speed up bosses, luck runes improve long farming sessions, and defensive runes help when you are pushing fights that would otherwise kill you. Most normal runes come from Rune Dungeon, while the two secret chase runes are tied to Infinite Tower.",
        ],
        bullets: [
          "Use Havoc, Wrath or another damage rune when the boss dies too slowly.",
          "Use Fortune or Radiant when you are farming keys, stones or rare drops.",
          "Use Guardian, Suppression or similar defensive runes when survival is the limiting factor.",
        ],
        links: [
          { href: "/bosses", label: "Plan boss farming" },
          { href: "/boss-keys", label: "Farm boss keys" },
        ],
      },
      {
        id: "unlock",
        title: "How to Unlock Rune Dungeon",
        paragraphs: [
          "Current public guides track Rune Dungeon as a Dungeon Island route that opens after dungeon progression, including Dungeon Key farming and the Dungeon Master quest line. Use this as a late-game system instead of a day-one beginner target.",
          "Before you spend a long session in Rune Dungeon, make sure your build clears the waves consistently. Later waves and harder difficulties are usually the better route because they create stronger rune drop chances than early easy waves.",
        ],
        bullets: [
          "Farm Dungeon Keys through boss routes first.",
          "Unlock the Dungeon Island and Dungeon Master route before planning rune sessions.",
          "Push harder difficulty only when your build clears waves without frequent failures.",
        ],
        links: [
          { href: "/bosses", label: "Farm Dungeon Keys" },
          { href: "/leveling", label: "Prepare your level route" },
        ],
      },
      {
        id: "farming",
        title: "Rune Farming Priority",
        paragraphs: [
          "The practical path is to farm Rune Dungeon until you have a usable rune for your goal, then keep farming to raise shared rune progress instead of swapping constantly. A mid-tier rune that supports your route can outperform a rare rune that does nothing for your current activity.",
          "Havoc is the strongest normal damage target in current public rankings, Fortune is the normal luck target, and Radiant or Primordial are secret endgame chases from Infinite Tower. Do not delay normal progression just because a secret rune is best in slot on paper.",
        ],
        bullets: [
          "First goal: get any useful damage rune so bosses and dungeon waves die faster.",
          "Second goal: farm enough duplicate rune progress to make the rune bonus meaningful.",
          "Third goal: add a luck rune only when clear speed is already stable.",
          "Final goal: chase Radiant or Primordial after your account can handle long tower sessions.",
        ],
        links: [
          { href: "/traits", label: "Match passive traits" },
          { href: "/swords", label: "Improve clear speed" },
        ],
      },
      {
        id: "damage-vs-luck",
        title: "Damage Rune or Luck Rune?",
        paragraphs: [
          "Most players should not start a farm session with luck if it makes each clear much slower. Rare-drop farming is a volume problem: more fast clears usually beat fewer slow clears with slightly higher luck.",
          "Switch to Fortune or Radiant when you already clear bosses, Rune Dungeon waves or tower floors quickly. If the route still feels slow, use Havoc, Wrath, Primordial or another damage rune until the loop becomes consistent.",
        ],
        bullets: [
          "Use damage for bosses, raids, Rune Dungeon pushes and early Infinite Tower attempts.",
          "Use luck for boss keys, accessories, bloodline stones and repeated rare-drop sessions.",
          "Use survival only when dying is the reason the route fails.",
        ],
        links: [
          { href: "/boss-keys", label: "Plan key farming" },
          { href: "/accessories", label: "Farm rare drops" },
        ],
      },
      {
        id: "leveling",
        title: "Rune Leveling",
        paragraphs: [
          "Rune value increases with repeated rune drops. Current community tracking treats Rune Level as shared progress up to Level 60, with each obtained rune adding progress toward stronger effects.",
          "Treat rune upgrades like accessory enchants: improve the best effect you actually use, then chase the next upgrade after your current setup is stable. If your rune progress feels stuck, verify the current upgrade rule in game before spending more time because rune XP behavior has confused players after update changes.",
        ],
        links: [
          { href: "/accessories", label: "Compare accessory upgrades" },
          { href: "/traits", label: "Check passive traits" },
        ],
      },
      {
        id: "infinite-tower",
        title: "Infinite Tower Secret Runes",
        paragraphs: [
          "Radiant Rune and Primordial Rune are the main secret rune goals. Radiant is the luck chase for drop farming, while Primordial is the pure damage chase for boss DPS and endgame clears.",
          "Infinite Tower is a long-session route with better odds deeper in the tower and a pity-style floor tracker in current public guides. Treat secret runes as long-term progression, not something every account should farm before its normal build is stable.",
        ],
        links: [
          { href: "/accessories", label: "Prepare endgame gear" },
          { href: "/bloodlines", label: "Improve late-game power" },
        ],
      },
      {
        id: "normal-vs-secret",
        title: "Normal Runes vs Secret Runes",
        paragraphs: [
          "Normal runes matter because they are the route most players can repeat. A leveled normal rune that fits your current route can produce more real progress than waiting for a secret rune drop you cannot farm consistently.",
          "Secret runes are the ceiling. Radiant is the long-term luck target, and Primordial is the long-term damage target. Use them when you get them, but build your account around reliable Rune Dungeon progress first.",
        ],
        bullets: [
          "Normal damage rune first if your boss clears are slow.",
          "Fortune before Radiant if you need a realistic luck setup now.",
          "Havoc or Wrath before Primordial if Infinite Tower is still inconsistent.",
        ],
        links: [
          { href: "/codes", label: "Claim current codes" },
          { href: "/tier-list/traits", label: "Compare trait support" },
        ],
      },
    ],
    tables: [
      {
        id: "rune-priority",
        title: "Best Sailor Piece Runes by Goal",
        intro:
          "The right rune depends on what you are doing. Damage is usually best for clears, luck is best after clears are already fast, and defense is only best when survival blocks progress.",
        headers: ["Goal", "Best targets", "Source route", "Use when"],
        rows: [
          ["Max damage", "Primordial Rune, Havoc Rune, Wrath Rune", "Infinite Tower for Primordial; Rune Dungeon for Havoc and Wrath", "Bosses, raids, tower pushes and any route where clear speed is the limit"],
          ["Luck farming", "Radiant Rune, Fortune Rune", "Infinite Tower for Radiant; Rune Dungeon for Fortune", "Boss Keys, Bloodline Stones, accessories and long rare-drop sessions"],
          ["Survival", "Guardian Rune, Suppression Rune", "Rune Dungeon", "You die before damage or luck has time to matter"],
          ["Bridge setup", "Destruction Rune or any strong current damage rune", "Rune Dungeon", "You do not have Havoc, Wrath, Radiant or Primordial yet"],
        ],
      },
      {
        id: "rune-sources",
        title: "Rune Sources and Progress",
        intro:
          "Use normal rune farming for stable account progress, then move into secret-rune farming when your late-game build can handle the route.",
        headers: ["System", "What it gives", "Important note", "Priority"],
        rows: [
          ["Rune Dungeon", "Most normal runes and shared rune progress", "Harder difficulties and later waves are the better target once your build can clear them", "Primary route for most players"],
          ["Infinite Tower", "Radiant Rune and Primordial Rune secret chase drops", "Higher floors and long pity-style progress matter more than short low-floor resets", "Endgame route"],
          ["Rune Level", "Stronger rune effects up to Level 60", "Current guides treat progress as shared across rune drops", "Keep farming after your first usable rune"],
          ["Luck support", "Better rare-drop sessions", "Use luck only after clear speed is already stable", "Switch by activity"],
        ],
      },
      {
        id: "rune-swap-plan",
        title: "Rune Swap Plan by Activity",
        intro:
          "Use this as the practical loadout rule before a long farm session. The right rune is the one that improves the route you are actually running.",
        headers: ["Activity", "Equip first", "Switch when", "Avoid"],
        rows: [
          ["Boss farming", "Primordial, Havoc or Wrath", "Switch to Radiant or Fortune only after boss clears are fast", "Starting with luck if it doubles clear time"],
          ["Rune Dungeon", "Damage or survival rune", "Use luck after waves are consistent on your chosen difficulty", "Pushing harder waves before your build is stable"],
          ["Infinite Tower", "Damage plus enough survival support", "Use Radiant for long rare-drop sessions if clear speed stays strong", "Short low-floor resets as the only plan"],
          ["Accessory farming", "Damage for slow bosses, luck for fast loops", "Swap by boss difficulty and drop target", "Keeping one rune equipped for every activity"],
          ["Leveling and progression", "Any useful damage rune", "Move to specialist runes after your core route is stable", "Ignoring fruits, swords, clans and traits"],
        ],
      },
    ],
    howTo: {
      name: "How to choose a Sailor Piece rune",
      steps: [
        "Decide whether your current route is blocked by damage, luck or survival.",
        "Redeem active codes and stabilize your fruit, sword, clan and trait before long rune sessions.",
        "Unlock Dungeon Island and farm Rune Dungeon for a usable normal rune before chasing secret drops.",
        "Equip damage for slow clears, luck for fast rare-drop loops or defense when deaths are the bottleneck.",
        "Keep farming runes to raise shared Rune Level instead of swapping randomly after every drop.",
        "Move to Infinite Tower secret rune goals after your build can handle long sessions consistently.",
        "Use Radiant for luck farming or Primordial for max damage if you eventually get a secret rune.",
      ],
    },
    itemList: {
      name: "Sailor Piece Rune Build Goals",
      items: [
        "Damage rune for boss clears",
        "Luck rune for rare drops",
        "Defense rune for hard fights",
        "Normal rune progress from Rune Dungeon",
        "Secret rune for long-term endgame",
      ],
    },
    faq: [
      {
        q: "What do runes do in Sailor Piece?",
        a: "Runes provide passive bonuses such as damage, survivability or luck, letting you tune your build for farming, bosses or endgame pushes.",
      },
      {
        q: "Where do I get runes in Sailor Piece?",
        a: "Current community tracking points to Rune Dungeon as the main source for normal runes and Infinite Tower as the secret-rune route.",
      },
      {
        q: "Should I use damage or luck runes?",
        a: "Use damage when clear speed is the problem. Use luck when you already clear quickly and are farming rare drops.",
      },
      {
        q: "What is the best damage rune in Sailor Piece?",
        a: "Primordial Rune is the current secret damage chase, while Havoc Rune is the strongest normal Rune Dungeon damage target in current public rankings.",
      },
      {
        q: "How do I level up runes?",
        a: "Current public guides treat Rune Level as shared progress from obtaining runes, with Level 60 as the tracked cap.",
      },
      {
        q: "What rune should I use for boss farming?",
        a: "Use Primordial if you have it. Otherwise use Havoc, Wrath or another damage rune until boss clears are fast enough to justify swapping into a luck rune.",
      },
      {
        q: "Is Radiant Rune better than Fortune Rune?",
        a: "Radiant is the stronger long-term luck target, but Fortune is the practical normal luck rune while you are still building toward Infinite Tower secret drops.",
      },
      {
        q: "When should I farm Infinite Tower for runes?",
        a: "Farm Infinite Tower after your account can clear long sessions reliably. If you still struggle with normal dungeon waves or bosses, build damage, survival and rune levels first.",
      },
    ],
    nextSteps: [
      { href: "/bosses", label: "Farm bosses faster" },
      { href: "/accessories", label: "Upgrade accessories" },
      { href: "/traits", label: "Tune passive traits" },
      { href: "/codes", label: "Claim current rewards" },
    ],
  },
  accessories: {
    path: "/accessories",
    metaTitle: "Sailor Piece Accessories Guide - Best Accessories & Enchants",
    metaDescription:
      "Sailor Piece accessories guide covering boss drops, best accessories, E0-E10 enchanting, damage, defense, damage reduction, luck farming and upgrade routes.",
    title: "Sailor Piece Accessories Guide",
    badge: "Accessory builds",
    intro:
      "Accessories are flexible power pieces because you can swap them by activity. The right accessory can make a boss route safer, a PvP setup stronger, or a farm loop faster, especially after enchant upgrades.",
    quickAnswer:
      "Farm accessories from bosses, equip the best one for your current goal, then enchant it before chasing a tiny drop-rate upgrade. Current public lists track one active accessory slot, E0-E10 enchanting, and top endgame targets such as Ice Queen Outfit, Moon Outfit, Atomic Outfit, Abyssal Outfit and Manipulator Outfit.",
    facts: [
      {
        label: "Equip rule",
        value: "One at a time",
        note: "Most current guides track one active accessory slot.",
      },
      {
        label: "Main source",
        value: "Boss drops",
        note: "Accessories are usually tied to specific boss routes.",
      },
      {
        label: "Upgrade route",
        value: "E0-E10",
        note: "Current accessory guides track enchanting up to E10.",
      },
    ],
    sections: [
      {
        id: "choosing",
        title: "How to Choose Accessories",
        paragraphs: [
          "Pick the accessory that solves your current bottleneck. If you die during bosses, defense and damage reduction matter more than raw damage. If bosses are safe but slow, damage becomes the priority.",
          "Do not judge accessories only by rarity. Drop source, enchant level, and your build goal matter just as much as the item name. A damage accessory is not automatically better than a defensive one if you lose the fight before your damage can matter.",
        ],
        bullets: [
          "Boss farming: prioritize defense, damage and consistent uptime.",
          "PvP: prioritize high all-around stats and damage reduction.",
          "Drop farming: stack luck through the whole build, not only accessories.",
        ],
        links: [
          { href: "/bosses", label: "Find boss routes" },
          { href: "/runes", label: "Add rune support" },
        ],
      },
      {
        id: "enchanting",
        title: "Accessory Enchanting",
        paragraphs: [
          "Current accessory guides track an enchant system that can raise accessory stats beyond base values, commonly from E0 to E10. That makes enchant planning important because an upgraded mid-tier accessory may outperform a rare item you have not improved yet.",
          "The simple rule is to enchant your current best usable piece before spending a full session chasing a low-rate upgrade. Later enchants can require extra material planning, so avoid spreading materials across accessories you rarely equip.",
        ],
        bullets: [
          "Enchant the accessory you use every session first.",
          "Avoid upgrading multiple sidegrade accessories at the same time.",
          "Recheck the current Enchanter NPC cost before pushing high enchant levels.",
        ],
      },
      {
        id: "farming",
        title: "Farming Route",
        paragraphs: [
          "Start with bosses you can clear quickly for early accessories, then move into harder boss routes when your damage and survival improve. If a target drop has a low rate, increase your clear speed first.",
          "Use codes, runes, traits and boss keys to improve the farming loop before committing to a long accessory grind. If the accessory is tied to a key boss, save enough keys for repeated attempts instead of spending your last key on one low-odds roll.",
        ],
        links: [
          { href: "/leveling", label: "Level first" },
          { href: "/boss-keys", label: "Spend keys well" },
        ],
      },
      {
        id: "top-targets",
        title: "Top Accessory Targets",
        paragraphs: [
          "Current public accessory lists repeatedly place the highest-stat outfits near the top: Ice Queen Outfit, Moon Outfit, Atomic Outfit, Abyssal Outfit, Manipulator Outfit, Maiden Outfit and other late-game boss or tower drops.",
          "These are not beginner goals. If your account cannot clear the route quickly, use an easier boss accessory, enchant it, and return when your runes, bloodline, sword or fruit are stronger.",
        ],
        links: [
          { href: "/runes", label: "Boost damage or luck" },
          { href: "/bloodlines", label: "Plan late-game rolls" },
        ],
      },
    ],
    tables: [
      {
        id: "accessory-goals",
        title: "Best Accessory Stats by Activity",
        intro:
          "Choose accessories by activity first. The same item is not best for every route because farming, bossing and PvP reward different stat mixes.",
        headers: ["Activity", "Stat priority", "Good targets", "Avoid"],
        rows: [
          ["Boss farming", "Defense, damage reduction, then damage", "Stable boss-drop outfits you can enchant", "Glass-cannon swaps that make clears fail"],
          ["Fast clears", "Damage, then enough defense to stay alive", "High-damage outfits from harder bosses or tower routes", "Low-damage defensive pieces when the boss is already safe"],
          ["Rare-drop farming", "Luck support across the full build plus enough damage", "Accessory plus Radiant/Fortune rune and title support", "Using luck so early that clear speed collapses"],
          ["PvP and hard endgame", "All-around stats and damage reduction", "Top Mythical outfits with strong enchants", "Unenchanted rare names with weaker real stats"],
        ],
      },
      {
        id: "top-accessories",
        title: "High-Value Accessory Targets",
        intro:
          "These are current public-list targets to recognize when planning routes. Exact rankings can move after updates, so prioritize the route you can clear repeatedly.",
        headers: ["Accessory", "Common route", "Why players chase it", "Planning note"],
        rows: [
          ["Ice Queen Outfit", "Ice Queen Boss", "Very high defense, damage and damage reduction profile", "Late-game target; do not chase before clear speed is stable"],
          ["Moon Outfit", "Moon Slayer Boss", "High all-around stats for hard boss routes", "Works best after you can farm the boss repeatedly"],
          ["Atomic Outfit", "Atomic Boss", "Strong damage-focused endgame outfit", "Good when clear speed is the bottleneck"],
          ["Abyssal Outfit", "Infinite Tower", "Tower-linked endgame accessory", "Pairs naturally with secret-rune progression"],
          ["Manipulator Outfit", "True Aizen Boss", "High-value late-game boss drop", "Treat as a long grind unless your route is already optimized"],
          ["Hollow Mask", "Ichigo Boss", "Boss Island accessory tied to key spending", "Save enough Boss Keys for repeated attempts"],
        ],
      },
      {
        id: "enchant-plan",
        title: "Accessory Enchant Plan",
        intro:
          "Enchanting makes accessories stronger over time. Use this as a simple upgrade rule when you are deciding whether to farm a new drop or improve the piece you already use.",
        headers: ["Stage", "What to do", "Why it matters", "Next step"],
        rows: [
          ["Fresh drop", "Equip it only if it helps your current activity", "A rare name is not useful if the stats do not solve your bottleneck", "Compare against your current enchanted accessory"],
          ["Early enchants", "Upgrade your most-used accessory first", "Small upgrades apply every session", "Stop if the cost blocks a bigger route unlock"],
          ["High enchants", "Push only accessories you expect to keep", "Later upgrade planning can consume more materials", "Farm duplicates or materials only for real keepers"],
          ["Replacement", "Swap when the new item beats your upgraded old item", "Unenchanted rare drops can underperform upgraded mid-tier gear", "Rebuild around your new stat profile"],
        ],
      },
    ],
    howTo: {
      name: "How to upgrade Sailor Piece accessories",
      steps: [
        "Pick the boss route that drops an accessory matching your goal.",
        "Farm a usable accessory before chasing best-in-slot drops.",
        "Enchant the accessory you use most often before upgrading sidegrades.",
        "Recheck your build goal before swapping to a new accessory.",
        "Only chase low-rate drops after your clear speed is stable.",
        "Save Boss Keys or route materials before farming key-gated accessory bosses.",
      ],
    },
    itemList: {
      name: "Sailor Piece Accessory Priorities",
      items: [
        "Defense for hard bosses",
        "Damage for faster clears",
        "Damage reduction for PvP and endgame fights",
        "Enchant level before rare-name chasing",
      ],
    },
    faq: [
      {
        q: "How do I get accessories in Sailor Piece?",
        a: "Most accessories are obtained from boss drops, with each important accessory tied to a specific boss or activity route.",
      },
      {
        q: "Should I enchant a mid-tier accessory?",
        a: "Yes if you use it every session. A well-enchanted useful accessory can be better than an unupgraded rare drop.",
      },
      {
        q: "What stats matter most on accessories?",
        a: "Damage, defense and damage reduction are the core stats. The right priority depends on whether you are farming, bossing or fighting players.",
      },
      {
        q: "What are the best accessories in Sailor Piece?",
        a: "Current public lists place late-game outfits such as Ice Queen Outfit, Moon Outfit, Atomic Outfit, Abyssal Outfit and Manipulator Outfit near the top, but the best choice depends on what boss or route you can farm reliably.",
      },
      {
        q: "How far can accessories be enchanted?",
        a: "Current accessory guides track enchants from E0 to E10. Verify the in-game Enchanter NPC before spending high-level materials after an update.",
      },
      {
        q: "Should I farm accessories or runes first?",
        a: "Farm whichever fixes your bottleneck. Use runes when you need broad damage, luck or survival support; farm accessories when a specific boss drop would directly improve your route.",
      },
    ],
    nextSteps: [
      { href: "/bosses", label: "Farm accessory bosses" },
      { href: "/runes", label: "Tune passive stats" },
      { href: "/tier-list", label: "Check build tier lists" },
    ],
  },
  specs: {
    path: "/specs",
    metaTitle: "Sailor Piece Specs Guide - Fighting Styles & Spec Passives",
    metaDescription:
      "Sailor Piece specs guide covering fighting styles, Spec Passives, Passive Shards, Judgement Island unlocks, sword synergy and late-game build choices.",
    title: "Sailor Piece Specs Guide",
    badge: "Specs and passives",
    intro:
      "Specs and Spec Passives are late-game build layers that matter most after your basic leveling setup is stable. They affect how your fighting style and sword scale in boss and endgame content.",
    quickAnswer:
      "Focus on a stable fighting style first, then unlock Spec Passives at Judgement Island when you meet the requirement. Current guides agree the Spec Passive system starts at level 10,000 and costs 5,000 Gems to unlock.",
    facts: [
      {
        label: "Unlock point",
        value: "Level 10,000",
        note: "Current Spec Passive guides list this as the unlock level.",
      },
      {
        label: "Unlock cost",
        value: "5,000 Gems",
        note: "Paid to the Spec Passive NPC at Judgement Island.",
      },
      {
        label: "Shard source",
        value: "After unlock",
        note: "Passive Shards start dropping after the system is enabled.",
      },
    ],
    sections: [
      {
        id: "specs-vs-passives",
        title: "Specs vs Spec Passives",
        paragraphs: [
          "A spec is your fighting style route. A Spec Passive is an extra passive layer that improves your selected spec and sword. It does not replace fruits, races, clans or traits.",
          "Because Spec Passives affect specs and swords, they are strongest when your build already uses those parts for real damage.",
        ],
        links: [
          { href: "/swords", label: "Improve sword setup" },
          { href: "/traits", label: "Compare passive traits" },
        ],
      },
      {
        id: "unlock",
        title: "How to Unlock Spec Passives",
        paragraphs: [
          "Current May 2026 guides list the unlock at Judgement Island through the Spec Passive NPC. The common requirements are level 10,000 and 5,000 Gems.",
          "After unlocking, Passive Shards become the roll currency. Do not plan around shard farming before the system is active on your account.",
        ],
      },
      {
        id: "farming",
        title: "Passive Shard Farming",
        paragraphs: [
          "Once unlocked, community guides report Passive Shards can drop from mobs or bosses, but the rate is low. The practical route is to farm dense mob areas or bosses you can clear quickly.",
          "Luck-supporting runes and faster clear speed matter because the system rewards many repeated chances rather than one difficult fight.",
        ],
        links: [
          { href: "/runes", label: "Add luck runes" },
          { href: "/leveling", label: "Reach unlock level" },
        ],
      },
    ],
    howTo: {
      name: "How to start Sailor Piece Spec Passives",
      steps: [
        "Reach the late-game level requirement for the Spec Passive NPC.",
        "Bring the required gems to Judgement Island.",
        "Unlock the Spec Passive system before farming Passive Shards.",
        "Farm dense mobs or easy bosses for repeated shard chances.",
        "Roll passives that match your spec and sword build.",
      ],
    },
    itemList: {
      name: "Sailor Piece Spec Passive Priorities",
      items: [
        "Reach level 10,000",
        "Save 5,000 Gems",
        "Unlock at Judgement Island",
        "Farm Passive Shards",
        "Roll for damage or farming passives",
      ],
    },
    faq: [
      {
        q: "How do I unlock Spec Passives in Sailor Piece?",
        a: "Current guides list the unlock at Judgement Island after reaching level 10,000 and paying 5,000 Gems to the Spec Passive NPC.",
      },
      {
        q: "Do Spec Passives affect fruits?",
        a: "Current guides say Spec Passives affect specs and swords, not fruits, so fruit-focused builds should not overvalue them too early.",
      },
      {
        q: "How do I farm Passive Shards?",
        a: "Unlock the system first, then farm mobs or bosses repeatedly. Dense routes and luck support help because the drop rate is low.",
      },
    ],
    nextSteps: [
      { href: "/leveling", label: "Reach unlock level" },
      { href: "/runes", label: "Improve shard farming" },
      { href: "/swords", label: "Pair with swords" },
    ],
  },
  bloodlines: {
    path: "/bloodlines",
    metaTitle: "Sailor Piece Bloodlines Guide - Stones, Best Rolls & Sea 2",
    metaDescription:
      "Sailor Piece bloodlines guide covering Bloodline Stones, Sea 2 farming, top bloodlines, pity planning and reroll mistakes.",
    title: "Sailor Piece Bloodlines Guide",
    badge: "Bloodlines",
    intro:
      "Bloodlines are a Sea 2 progression layer that can add major damage, luck, HP, lifesteal or weapon-specific bonuses. They are powerful, but expensive to chase without a plan.",
    quickAnswer:
      "Farm Bloodline Stones from Sea 2 routes, keep strong damage or luck rolls, and do not replace a top bloodline unless a patch clearly changes the meta. Current May 2026 guides consistently treat Primordial and Astral as top targets.",
    facts: [
      {
        label: "Main currency",
        value: "Bloodline Stone",
        note: "Used to roll or reroll bloodlines.",
      },
      {
        label: "Progression layer",
        value: "Sea 2",
        note: "Current guides describe bloodlines as a Sea 2 system.",
      },
      {
        label: "Top targets",
        value: "Primordial / Astral",
        note: "Commonly ranked at the top of May 2026 bloodline lists.",
      },
    ],
    sections: [
      {
        id: "how-they-work",
        title: "How Bloodlines Work",
        paragraphs: [
          "Bloodlines are rolled with Bloodline Stones and can change your account's stat profile. The strongest rolls usually combine damage with survival, luck or weapon scaling.",
          "Because bloodlines are expensive to chase, treat them as a late-game optimization layer. A good roll that matches your build is better than endless rerolling for a name you cannot use yet.",
        ],
      },
      {
        id: "stones",
        title: "How to Farm Bloodline Stones",
        paragraphs: [
          "Current guide tracking points to Sea 2 NPC bosses and Sea Beast routes as Bloodline Stone sources. This makes Sea 2 readiness important before you commit to a reroll session.",
          "Use luck support and fast clears before farming stones. A better rune, accessory or boss route can improve the number of roll chances you see per hour.",
        ],
        links: [
          { href: "/runes", label: "Use luck runes" },
          { href: "/bosses", label: "Farm Sea 2 bosses" },
        ],
      },
      {
        id: "rerolling",
        title: "Reroll Strategy",
        paragraphs: [
          "Keep top-tier rolls that improve both farming and bossing. Primordial and Astral are repeatedly ranked near the top because they combine major damage with other useful stats.",
          "If an update adds or changes a bloodline, wait for multiple source checks before burning your full stone stockpile. Bloodline lists have changed quickly during Sea 2 and Anti-Magic updates.",
        ],
        links: [
          { href: "/codes", label: "Check fresh rewards" },
          { href: "/specs", label: "Plan spec synergy" },
        ],
      },
    ],
    howTo: {
      name: "How to roll Sailor Piece bloodlines safely",
      steps: [
        "Reach Sea 2 progression where Bloodline Stones become farmable.",
        "Farm Sea 2 bosses or Sea Beast routes for stones.",
        "Decide whether your build needs damage, luck, HP, lifesteal or sword scaling.",
        "Keep strong top-tier rolls instead of chasing every new update name.",
        "Wait for fresh source checks before rerolling after a balance patch.",
      ],
    },
    itemList: {
      name: "Sailor Piece Bloodline Reroll Checklist",
      items: [
        "Enough Bloodline Stones",
        "Clear target stat profile",
        "Luck support active",
        "Sea 2 farming route ready",
        "Patch notes checked",
      ],
    },
    faq: [
      {
        q: "What is the best bloodline in Sailor Piece?",
        a: "Current May 2026 guides consistently rank Primordial and Astral near the top, with exact order depending on whether you value all-around power, sword scaling or lifesteal.",
      },
      {
        q: "How do I get Bloodline Stones?",
        a: "Current guides point to Sea 2 NPC bosses and Sea Beast routes as Bloodline Stone sources.",
      },
      {
        q: "Should I reroll a good bloodline?",
        a: "Usually no. Keep any strong roll that matches your build until a new patch is confirmed by multiple sources.",
      },
    ],
    nextSteps: [
      { href: "/bosses", label: "Farm stone sources" },
      { href: "/runes", label: "Improve luck setup" },
      { href: "/specs", label: "Plan spec synergy" },
    ],
  },
} satisfies Record<string, WikiGuide>;
