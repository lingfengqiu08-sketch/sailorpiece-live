import { type TabKey } from "@/lib/tier-list";

export type GuideCategory = Exclude<TabKey, "races">;

export interface CategoryGuide {
  metaTitle: string;
  metaDescription: string;
  title: string;
  badge: string;
  intro: string;
  chooseTitle: string;
  chooseTips: string[];
  farmingTitle: string;
  farmingTips: string[];
  sections?: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  tables?: {
    id: string;
    title: string;
    intro?: string;
    headers: string[];
    rows: string[][];
  }[];
  howTo: {
    name: string;
    steps: string[];
  };
  faq: { q: string; a: string }[];
}

export const CATEGORY_GUIDES: Record<GuideCategory, CategoryGuide> = {
  fruits: {
    metaTitle: "Sailor Piece Fruits Guide — Best Devil Fruits & Tier List",
    metaDescription:
      "Best Sailor Piece fruits ranked for mobility, farming, bosses and Sea 2 progression, with Light, Quake, Flame, Bomb and Invisible explained.",
    title: "Sailor Piece Fruits Guide",
    badge: "Devil fruit guide",
    intro:
      "Devil fruits shape your mobility, farming speed and boss damage. The safest route is to keep a strong AoE or mobility fruit while you stack codes, rerolls and better swords.",
    chooseTitle: "How to choose a fruit",
    chooseTips: [
      "Prioritize mobility if you are still moving between islands and quests.",
      "Use AoE damage for farming waves, raid bosses and Sea 2 progression.",
      "Do not reroll a strong fruit until you have enough backup gems or rerolls from codes.",
    ],
    farmingTitle: "Best current fruit picks",
    farmingTips: [
      "Light is the strongest all-around pick because flight and ranged beams solve travel and combat at once.",
      "Quake is the best mob-clear fruit when you care more about AoE damage than movement.",
      "Flame and Bomb are acceptable early-mid game options, while Invisible is mainly utility.",
    ],
    howTo: {
      name: "How to pick a Sailor Piece devil fruit",
      steps: [
        "Check your current island and level bracket.",
        "Use the fruit tier list to compare mobility, AoE and boss damage.",
        "Redeem active codes before spending rerolls or gems.",
        "Keep Light or Quake if you already own either S-tier fruit.",
      ],
    },
    faq: [
      {
        q: "What is the best fruit in Sailor Piece?",
        a: "Light is the best all-around fruit because it combines flight with ranged damage. Quake is the best AoE farming fruit.",
      },
      {
        q: "How do fruits spawn in Sailor Piece?",
        a: "Fruits spawn under trees on a timer and despawn after a short window. You can also buy fruits from dealer NPCs or earn them from bosses.",
      },
      {
        q: "Should beginners reroll fruits?",
        a: "Only reroll if your current fruit has weak damage and you have spare gems or rerolls. Codes are the safest way to stockpile resources first.",
      },
    ],
  },
  swords: {
    metaTitle: "Sailor Piece Swords Guide — Best Swords & Tier List",
    metaDescription:
      "Best Sailor Piece swords ranked for raids, PvP, boss damage and progression, including Shadow Monarch, Rimuru, True Manipulator and Yamato.",
    title: "Sailor Piece Swords Guide",
    badge: "Sword guide",
    intro:
      "Swords decide a large part of your raid damage and PvP pressure. The strongest picks combine high damage, control, iframes or strong synergy with races and clans.",
    chooseTitle: "How to choose a sword",
    chooseTips: [
      "Use S-tier swords for raids and late Sea 2 bosses when possible.",
      "Pair sword-focused races like SwordBlessed with high-DPS swords.",
      "Keep a reliable mid-game sword until you can farm or roll one of the top endgame options.",
    ],
    farmingTitle: "Best current sword picks",
    farmingTips: [
      "Shadow Monarch and Rimuru are the safest top choices for endgame damage.",
      "True Manipulator, Yamato and Sin of Pride are strong when you need control or burst.",
      "Starter swords like Katana, Dark Blade and Saber should be replaced quickly.",
    ],
    howTo: {
      name: "How to pick a Sailor Piece sword",
      steps: [
        "Check whether your build is PvE, raid, boss melt or PvP focused.",
        "Compare S and A tier swords against your current race and clan.",
        "Use codes to gather rerolls and resources before chasing endgame swords.",
        "Replace starter swords once you have a stable farming route.",
      ],
    },
    faq: [
      {
        q: "What is the best sword in Sailor Piece?",
        a: "Shadow Monarch and Rimuru currently lead the sword tier list for endgame DPS and raids.",
      },
      {
        q: "Are swords better than fruits in Sailor Piece?",
        a: "They solve different problems. Fruits help with mobility and AoE farming, while swords often carry boss damage and PvP pressure.",
      },
      {
        q: "Which race is best for sword builds?",
        a: "SwordBlessed is the most direct race pairing for sword mains, while Shadowborn and Shinigami can work for specific builds.",
      },
    ],
  },
  clans: {
    metaTitle: "Sailor Piece Clans Guide - Best Clans, Tier List & Rerolls",
    metaDescription:
      "Best Sailor Piece clans ranked for PvP, raids, boss melt, sword builds and reroll planning, including Upper, Eminence, Espada, Voldigoat, Alter and Devil.",
    title: "Sailor Piece Clans Guide",
    badge: "Clan guide",
    intro:
      "Clans are build multipliers. A strong clan can push a good fruit, sword, race or trait into an endgame-ready setup, but the best clan depends on whether you are farming bosses, pushing raids, playing PvP or building around a specific sword.",
    chooseTitle: "How to choose a clan",
    chooseTips: [
      "Pick damage-scaling clans if your main goal is raids and bosses.",
      "Choose control or survivability clans for PvP-focused builds.",
      "Avoid spending rerolls casually; clan rerolls are most valuable after your race and weapon plan is clear.",
    ],
    farmingTitle: "Best current clan picks",
    farmingTips: [
      "Upper is the strongest general clan in the current source consensus.",
      "Eminence is the best raw damage option for aggressive builds.",
      "Espada, Voldigoat, Alter, Frostbane Clan and Devil all have strong specialist uses.",
    ],
    sections: [
      {
        id: "reroll-strategy",
        title: "Clan Reroll Strategy",
        paragraphs: [
          "The biggest mistake is rerolling a useful A-tier clan before your race, sword, fruit and trait are stable. Clans multiply a build, so the same clan can feel weak on a bad setup and excellent after your weapon or race catches up.",
          "Use codes and daily farming to build a reroll buffer first. If you only have a few attempts, keep strong A-tier clans such as Mugetsu, Yamato or Monarch until you know exactly which S-tier clan your build needs.",
        ],
        bullets: [
          "Keep S-tier clans unless a patch clearly changes their role.",
          "Keep A-tier clans while leveling, farming or preparing Sea 2 resources.",
          "Only chase a named S-tier clan when your target build is already planned.",
        ],
      },
      {
        id: "synergy",
        title: "Best Clan Synergies",
        paragraphs: [
          "Clans should be selected around the activity that currently blocks progress. Eminence and Voldigoat help when damage is the bottleneck, Espada and Frostbane Clan help when control matters, and Devil works best when the rest of your build already supports dark or Shadowborn-style damage.",
          "For sword-heavy routes, Monarch and Frostbane Clan are easier to justify because their value rises when paired with Shadow Monarch, Ice Queen or other control-heavy weapons. For general progression, Upper is safer because it does not force one narrow playstyle.",
        ],
        bullets: [
          "Damage routes: Upper, Eminence, Voldigoat, Devil.",
          "PvP routes: Upper, Espada, Frostbane Clan, Alter.",
          "Sword routes: Monarch, Frostbane Clan, Devil when the weapon plan matches.",
          "Beginner routes: keep strong A-tier clans until codes and farming give more rerolls.",
        ],
      },
    ],
    tables: [
      {
        id: "best-clans-by-goal",
        title: "Best Sailor Piece Clans by Goal",
        intro:
          "Use this table before spending rerolls. The strongest clan for PvP is not always the best clan for boss farming or leveling.",
        headers: ["Goal", "Best clans", "Why", "Reroll advice"],
        rows: [
          ["General endgame", "Upper, Alter", "Strong across raids, PvP and boss routes without forcing one narrow build.", "Worth chasing after your core build is stable."],
          ["Raw damage", "Eminence, Voldigoat, Devil", "These clans push burst or single-target damage when clear speed is the problem.", "Chase only if you already have a damage-focused fruit, sword or trait."],
          ["PvP and control", "Espada, Frostbane Clan, Alter", "Control, survivability and crowd control matter more than pure paper DPS.", "Keep if PvP is your main mode; do not reroll casually."],
          ["Sword synergy", "Monarch, Frostbane Clan, Devil", "These become stronger when paired with Shadow Monarch, Ice Queen or dark/sword routes.", "Keep if your weapon plan matches, even if the clan is not top general rank."],
          ["Progression safety", "Mugetsu, Yamato, Monarch", "Strong enough to carry leveling and resource farming before full endgame rerolls.", "Do not reroll until you have a clear S-tier target and enough attempts."],
        ],
      },
      {
        id: "top-clans-compared",
        title: "Top Clans Compared",
        intro:
          "These notes explain why the current S-tier clans are useful, not just where they rank.",
        headers: ["Clan", "Main role", "Best pairing", "Keep or reroll"],
        rows: [
          ["Upper", "All-around endgame power", "Any high-tier race, sword or fruit setup", "Keep. This is the safest general S-tier clan."],
          ["Eminence", "Raw damage scaling", "Burst damage builds and boss melt routes", "Keep if you care about raids or damage checks."],
          ["Espada", "PvP control and survival", "PvP traits, control swords and mobile races", "Keep for PvP; less mandatory for pure farming."],
          ["Voldigoat", "Single-target boss melt", "Boss routes, raid damage and high uptime weapons", "Keep if boss farming is your main goal."],
          ["Alter", "Flexible late-game setup", "Hybrid PvE/PvP builds", "Keep unless a future patch clearly weakens it."],
          ["Frostbane Clan", "Control and freeze synergy", "Ice Queen sword or other control-heavy builds", "Keep if you use freeze/control routes."],
          ["Devil", "Dark damage synergy", "Shadowborn race, dark builds and aggressive routes", "Keep when the rest of the build supports it."],
        ],
      },
    ],
    howTo: {
      name: "How to pick a Sailor Piece clan",
      steps: [
        "Decide whether your build is focused on PvP, raids, farming or boss damage.",
        "Check the clan tier list and the goal table before spending rerolls.",
        "Pair your clan with a matching sword, race and trait.",
        "Keep strong A-tier clans until you have enough rerolls for a real S-tier chase.",
        "Keep S-tier clans unless a major balance patch changes the meta.",
      ],
    },
    faq: [
      {
        q: "What is the best clan in Sailor Piece?",
        a: "Upper is the best general clan, while Eminence is the clearest damage-scaling pick.",
      },
      {
        q: "Are clans important for beginners?",
        a: "Beginners can progress without a perfect clan, but rerolling into a strong clan matters more once raids, Sea 2 and PvP become your focus.",
      },
      {
        q: "Should I reroll an A-tier clan?",
        a: "Usually no. Keep A-tier clans until you have enough rerolls and a clear target build.",
      },
      {
        q: "What clan should I use for boss farming?",
        a: "Upper is the safest all-around answer, while Eminence and Voldigoat are better when your main problem is single-target damage.",
      },
      {
        q: "What clan is best for PvP?",
        a: "Upper is still the safest general pick, but Espada, Frostbane Clan and Alter are stronger when you need control, survival or PvP-specific pressure.",
      },
      {
        q: "Which clan works best with sword builds?",
        a: "Monarch, Frostbane Clan and Devil are the easiest clans to justify for sword-focused routes when the weapon plan matches their strengths.",
      },
    ],
  },
  haki: {
    metaTitle: "Sailor Piece Haki Guide — Best Haki & Unlock Priority",
    metaDescription:
      "Sailor Piece haki guide covering Armament, Observation and Conqueror Haki, with best uses for PvP, bosses, defense and Sea 2 progression.",
    title: "Sailor Piece Haki Guide",
    badge: "Haki guide",
    intro:
      "Haki gives your build defensive layers, tracking, dodge utility and PvP pressure. It matters most once bosses hit harder and players start optimizing race and clan combos.",
    chooseTitle: "Haki unlock priority",
    chooseTips: [
      "Armament is the safest priority because it improves defense and damage.",
      "Observation is valuable for PvP dodge windows and tracking mobile enemies.",
      "Conqueror is the strongest PvP option, but it is more limited by race, clan or quest requirements.",
    ],
    farmingTitle: "Best current haki picks",
    farmingTips: [
      "Conqueror Haki is S tier for PvP intimidation and AoE stun pressure.",
      "Armament Haki is S tier for bosses because defense and damage are always useful.",
      "Observation Haki is A tier utility for tracking and dodge-focused fights.",
    ],
    howTo: {
      name: "How to prioritize Sailor Piece haki",
      steps: [
        "Unlock Armament first if your build is struggling with bosses.",
        "Add Observation when PvP or fast enemies become a problem.",
        "Chase Conqueror only after your race, clan and quest path support it.",
        "Use the haki tier list to match your PvE or PvP goal.",
      ],
    },
    faq: [
      {
        q: "What is the best haki in Sailor Piece?",
        a: "Conqueror Haki is the best PvP option. Armament Haki is the safest general PvE and boss option.",
      },
      {
        q: "How do I unlock haki in Sailor Piece?",
        a: "Armament and Observation are tied to trainer or boss progression, while Conqueror is rarer and depends on specific progression conditions.",
      },
      {
        q: "Is Observation Haki worth it?",
        a: "Yes for PvP and mobile fights. It is less important than Armament for early boss progression, but still strong utility.",
      },
    ],
  },
  traits: {
    metaTitle: "Sailor Piece Traits Guide — Best Traits & Tier List",
    metaDescription:
      "Best Sailor Piece traits ranked for damage, survivability, PvP, burst windows and endgame scaling, including Infinity, Transcendent and Malevolent.",
    title: "Sailor Piece Traits Guide",
    badge: "Trait guide",
    intro:
      "Traits are passive power. The best traits improve damage, survival or burst windows without forcing you into one narrow race, fruit or sword setup.",
    chooseTitle: "How to choose a trait",
    chooseTips: [
      "Prioritize all-around multipliers if you change builds often.",
      "Choose damage traits for raids and boss melt, and defensive traits for PvP.",
      "Do not chase perfect traits before your race, clan and weapon setup is stable.",
    ],
    farmingTitle: "Best current trait picks",
    farmingTips: [
      "Infinity, Transcendent and Malevolent are the cleanest S-tier picks.",
      "Overlord, Celestial, Cataclysm, Singularity and Emperor are also strong endgame options.",
      "Basic traits like Tough, Strong, Agile and Balanced are temporary and should be upgraded.",
    ],
    howTo: {
      name: "How to pick a Sailor Piece trait",
      steps: [
        "Decide whether your build needs damage, speed, defense or PvP control.",
        "Compare S and A tier traits before spending passive shards.",
        "Keep strong all-around traits if your build is still changing.",
        "Reroll low-tier starter traits once you have enough resources from codes and farming.",
      ],
    },
    faq: [
      {
        q: "What is the best trait in Sailor Piece?",
        a: "Infinity is the safest best all-around trait, while Transcendent and Malevolent are also S-tier endgame choices.",
      },
      {
        q: "Are traits more important than clans?",
        a: "Traits are passive and always useful, but clans can define a build. The best setup needs both to match your race, fruit and sword.",
      },
      {
        q: "When should I reroll traits?",
        a: "Reroll once your core build is stable and you have spare passive shards or rerolls from codes.",
      },
    ],
  },
};
