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
  runes: {
    path: "/runes",
    metaTitle: "Sailor Piece Runes Guide - Best Runes, Sources & Farming",
    metaDescription:
      "Sailor Piece runes guide covering Rune Dungeon, Infinite Tower secret runes, luck and damage builds, rune leveling and farming priorities.",
    title: "Sailor Piece Runes Guide",
    badge: "Rune system",
    intro:
      "Runes are one of the strongest late-game passive systems because they can raise damage, survivability or luck without replacing your core fruit, sword, race or clan.",
    quickAnswer:
      "Use damage runes for boss and raid clears, luck runes while farming drops, and secret runes only as a long-term chase. Current community tracking points to Rune Dungeon as the main source and Infinite Tower as the secret-rune route.",
    facts: [
      {
        label: "Main source",
        value: "Rune Dungeon",
        note: "Most non-secret runes are tracked through Rune Dungeon farming.",
      },
      {
        label: "Secret source",
        value: "Infinite Tower",
        note: "Secret rune routes are tied to deeper tower progression.",
      },
      {
        label: "Best use",
        value: "Swap by goal",
        note: "Damage for clears, luck for drops, defense for hard bosses.",
      },
    ],
    sections: [
      {
        id: "how-they-work",
        title: "How Runes Work",
        paragraphs: [
          "Runes are passive equipment pieces that modify your account power after your main build is already functional. The best rune is not always the rarest one; it is the rune that supports what you are farming right now.",
          "Damage runes speed up bosses, luck runes improve long farming sessions, and defensive runes help when you are pushing fights that would otherwise kill you.",
        ],
        bullets: [
          "Use damage runes when the boss dies too slowly.",
          "Use luck runes when you are farming keys, stones or rare drops.",
          "Use defensive runes when survival is the limiting factor.",
        ],
        links: [
          { href: "/bosses", label: "Plan boss farming" },
          { href: "/boss-keys", label: "Farm boss keys" },
        ],
      },
      {
        id: "farming",
        title: "Rune Farming Priority",
        paragraphs: [
          "The practical path is to farm Rune Dungeon until you have a usable rune for your goal, then level that rune instead of swapping constantly. A mid-tier rune that supports your route can outperform a rare rune that does nothing for your current activity.",
          "Secret runes are long-term goals. Do not delay normal progression just because a secret rune is best in slot on paper.",
        ],
      },
      {
        id: "leveling",
        title: "Rune Leveling",
        paragraphs: [
          "Rune value increases with repeated farming and leveling. Treat rune upgrades like accessory enchants: improve the best piece you actually use, then chase the next upgrade after your current setup is stable.",
          "If your rune progress feels stuck, verify the current upgrade rule in game before spending more time. Recent community posts show players still asking about rune XP behavior after update changes.",
        ],
        links: [
          { href: "/accessories", label: "Compare accessory upgrades" },
          { href: "/traits", label: "Check passive traits" },
        ],
      },
    ],
    howTo: {
      name: "How to choose a Sailor Piece rune",
      steps: [
        "Decide whether your current goal is damage, luck or survival.",
        "Farm Rune Dungeon for a usable rune before chasing secret drops.",
        "Equip the rune that improves your current activity.",
        "Level the rune you actually use instead of swapping constantly.",
        "Move to Infinite Tower secret rune goals after your build is stable.",
      ],
    },
    itemList: {
      name: "Sailor Piece Rune Build Goals",
      items: [
        "Damage rune for boss clears",
        "Luck rune for rare drops",
        "Defense rune for hard fights",
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
    ],
    nextSteps: [
      { href: "/bosses", label: "Farm bosses faster" },
      { href: "/accessories", label: "Upgrade accessories" },
      { href: "/codes", label: "Claim current rewards" },
    ],
  },
  accessories: {
    path: "/accessories",
    metaTitle: "Sailor Piece Accessories Guide - Best Accessories & Enchants",
    metaDescription:
      "Sailor Piece accessories guide covering boss drops, one-slot accessory builds, enchanting, damage and defense priorities, and farming routes.",
    title: "Sailor Piece Accessories Guide",
    badge: "Accessory builds",
    intro:
      "Accessories are flexible power pieces because you can swap them by activity. The right accessory can make a boss route safer, a PvP setup stronger, or a farm loop faster.",
    quickAnswer:
      "Farm accessories from bosses, equip the best one for your current goal, then enchant it before chasing a tiny drop-rate upgrade. A fully upgraded useful accessory can beat an unenchanted rare one for day-to-day farming.",
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
        value: "Enchant",
        note: "Enchanting raises the value of the accessory you already use.",
      },
    ],
    sections: [
      {
        id: "choosing",
        title: "How to Choose Accessories",
        paragraphs: [
          "Pick the accessory that solves your current bottleneck. If you die during bosses, defense and damage reduction matter more than raw damage. If bosses are safe but slow, damage becomes the priority.",
          "Do not judge accessories only by rarity. Drop source, enchant level, and your build goal matter just as much as the item name.",
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
          "Current accessory guides track an enchant system that can raise accessory stats beyond base values. That makes enchant planning important because an upgraded mid-tier accessory may outperform a rare item you have not improved yet.",
          "The simple rule is to enchant your current best usable piece before spending a full session chasing a low-rate upgrade.",
        ],
      },
      {
        id: "farming",
        title: "Farming Route",
        paragraphs: [
          "Start with bosses you can clear quickly for early accessories, then move into harder boss routes when your damage and survival improve. If a target drop has a low rate, increase your clear speed first.",
          "Use codes, runes, traits and boss keys to improve the farming loop before committing to a long accessory grind.",
        ],
        links: [
          { href: "/leveling", label: "Level first" },
          { href: "/boss-keys", label: "Spend keys well" },
        ],
      },
    ],
    howTo: {
      name: "How to upgrade Sailor Piece accessories",
      steps: [
        "Pick the boss route that drops an accessory matching your goal.",
        "Farm a usable accessory before chasing best-in-slot drops.",
        "Enchant the accessory you use most often.",
        "Recheck your build goal before swapping to a new accessory.",
        "Only chase low-rate drops after your clear speed is stable.",
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
