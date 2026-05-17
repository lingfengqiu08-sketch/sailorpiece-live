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
    metaTitle: "Sailor Piece Boss Key Guide - How to Get & Spend Keys",
    metaDescription:
      "How to get Boss Keys in Sailor Piece from quests, chests, Merchant stock and Dungeon Shop, plus how to spend keys on Saber, Qin Shi and Ichigo.",
    title: "Sailor Piece Boss Key Guide",
    badge: "Boss keys",
    intro:
      "Boss Keys are one of the easiest resources to waste. This guide explains where they come from, what they unlock, and when it is worth spending them on Boss Island summons.",
    quickAnswer:
      "Get Boss Keys from repeatable quests, enemy chest drops, rotating Merchant stock and late-game Dungeon Shop routes. Spend them only when your build can clear the summoned boss and earn drops.",
    facts: [
      {
        label: "Key bosses",
        value: "Saber, Qin Shi, Ichigo",
        note: "These are the main Boss Island summons tied to Boss Keys.",
      },
      {
        label: "Fastest safe source",
        value: "Quests + chests",
        note: "Repeatable fights give both quest reward and chest chances.",
      },
      {
        label: "Not the same as",
        value: "Boss Tickets",
        note: "Keys start fights; tickets are earned and spent separately.",
      },
    ],
    sections: [
      {
        id: "sources",
        title: "How to Get Boss Keys",
        paragraphs: [
          "The reliable loop is repeatable quest farming plus chest drops from enemies. Higher-rarity chests are better, so any build improvement that increases your luck or kill speed improves the key farm over time.",
          "Boss Keys can also show up in rotating Merchant stock, and late-game players can use Dungeon Shop routes after unlocking the relevant dungeon progression.",
        ],
        bullets: [
          "Complete repeatable Quest NPC missions.",
          "Open enemy chest drops while farming.",
          "Check the Sailor Island Merchant when stock refreshes.",
          "Use Dungeon Shop options after dungeon progression is unlocked.",
        ],
        links: [
          { href: "/leveling", label: "Level efficiently first" },
          { href: "/codes", label: "Claim rerolls and boosts" },
        ],
      },
      {
        id: "spending",
        title: "How to Spend Boss Keys",
        paragraphs: [
          "Use Boss Keys at the Boss Summoner route for specific bosses such as Saber, Qin Shi and Ichigo. Start with the cheaper fight if you are still testing your damage, because expensive summons punish failed clears.",
          "Before spending keys, make sure your fruit or sword can keep damage uptime, your movement can avoid boss attacks, and your account can qualify for rewards.",
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
    howTo: {
      name: "How to farm and spend Sailor Piece Boss Keys",
      steps: [
        "Run repeatable quests in the highest bracket you can clear quickly.",
        "Open enemy chests and improve luck or kill speed when possible.",
        "Check Merchant stock when you return to Sailor Island.",
        "Save keys until your build can clear the target summoned boss.",
        "Spend keys on the lowest-cost useful boss before expensive summons.",
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
    ],
    nextSteps: [
      { href: "/bosses", label: "Choose boss targets" },
      { href: "/leveling", label: "Fix leveling route" },
      { href: "/codes", label: "Use current codes" },
    ],
  },
} satisfies Record<string, WikiGuide>;
