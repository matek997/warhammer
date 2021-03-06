import { IProfession } from '../models/IProfession';
import { Professions } from './Professions';

type ProfDefsType = {
	[index in Professions]: IProfession;
};
/**
 * big thanks to guys at
 * @link http://bindslet.dk/rpg/whfrpcareers.html
 * this data is their work
 */
export const ProfDefs: ProfDefsType = {
	"ABBOT": {
		"id": "ABBOT",
		"label": "Abbot",
		"description": "The eldest and wisest of monks eventually rise to become the leaders of their monasteries. Worshippers sometimes seek these abbots out to gain their advice on matters of faith or to gain greater understanding about the religious world, while priests and initiates answer to them in all things. Most abbots choose to remain secluded in their monasteries until death takes them, but some venture out into the wider world once again. Few abbots deign to get involved in temple politics, preferring the solitude of their own world or their journeys to the machinations of their cult. For this reason an abbot is rarely the head of a mendicant order, leaving the organisation and politicking to a high priest.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 10,
			"T": 10,
			"Ag": 10,
			"Int": 30,
			"WP": 25,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"HIGH_PRIEST",
			"MONK",
			"SCHOLAR"
		],
		"advanceTo": [
			"HIGH_PRIEST",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			}
		],
		"talents": [
			"Master Orator",
			"Savvy",
			"Strong-Minded"
		],
		"trappings": [
			"Prayer Book",
			"Religious Relic",
			"Robes",
			"Writing Kit"
		],
		"notes": "",
		"source": "TOS",
		"numberOfSkills": 12,
		"numberOfTalents": 3,
		"numberOfAdvances": 29
	},
	"ADMIRAL": {
		"id": "ADMIRAL",
		"label": "Admiral",
		"description": "Commanding a fleet of ships, Admirals are the true lords of the sea. While most are employed by one of the navies of the Old World, some Admirals are pirates commanding a flotilla of bloodthirsty marauders. Many Sea Captains envy their position, so Admirals must be quick-witted and charismatic to see off attacks; after all, once at sea, almost anything can happen, and only the survivors can tell the tale. Because of this, many Admirals are paranoid individuals who are jealous of their power, and most are quick to end any imagined mutiny with their loyal Marines or Pirates.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 20,
			"S": 15,
			"T": 15,
			"Ag": 15,
			"Int": 30,
			"WP": 30,
			"Fel": 35
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"NOBLE_LORD",
			"SEA_CAPTAIN"
		],
		"advanceTo": [
			"AMBASSADOR",
			"EXPLORER",
			"GUILD_MASTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DODGE_BLOW"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SAIL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Etiquette or Seasonsed Traveller",
			"Linguistics",
			"Master Orater",
			"Public Speaking or Savvy"
		],
		"trappings": [
			"Admiral’s Whistle",
			"Bicorn or Tricorn",
			"Squadron of ships",
			"Telescope"
		],
		"notes": "",
		"source": "SoE",
		"numberOfSkills": 11,
		"numberOfTalents": 4,
		"numberOfAdvances": 44
	},
	"AGENT_OF_THE_SHROUD": {
		"id": "AGENT_OF_THE_SHROUD",
		"label": "Agent of the Shroud",
		"description": "The splinter order of Morrites, known as the Fellowship of the Shroud, takes a much more active view of their duties to Morr than the mainstream cult. Its members include warriors, priests, and Vampire hunters, but in many situations, a far subtler hand is needed, and such are the abilities of the Agents of the Shroud. These scholarly types are trained in careful observation, medical examination, and logical deduction, so they may identify Vampire or Undead activity without being detected. Some of them turn their results over to more martially skilled members of their cult, but they are quite capable of enacting their own justice and putting an end to those the Fellowship call “the Enemies of Life.”.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 20,
			"Int": 20,
			"WP": 30,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BARBER_SURGEON",
			"FIELDWARDEN",
			"INITIATE",
			"SCHOLAR",
			"STUDENT",
			"TOMB_ROBBER",
			"VAMPIRE_HUNTER"
		],
		"advanceTo": [
			"KILLER_OF_THE_DEAD",
			"PRIEST",
			"SCHOLAR",
			"SPY",
			"VAMPIRE_HUNTER",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "THEOLOGY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "ANY_ONE"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Coolheaded or Stout-Hearted",
			"Keen Senses or Sixth Sense",
			"Savvy or Suave",
			"Schemer"
		],
		"trappings": [
			"Medium Armour (Leather Jack,  Mail Shirt)",
			"Best Hand Weapon",
			"4 Stakes",
			"a braided rope of Garlic",
			"Religious Symbol"
		],
		"notes": "",
		"source": "NDM",
		"numberOfSkills": 15,
		"numberOfTalents": 4,
		"numberOfAdvances": 30
	},
	"AGITATOR": {
		"id": "AGITATOR",
		"label": "Agitator",
		"description": "For the most part, the people of the Empire have little say in politics. ...",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 0,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BURGHER",
			"CAPTAIN",
			"HERALD",
			"HIGHWAYMAN",
			"SCRIBE",
			"SERVANT",
			"STUDENT",
			"ZEALOT"
		],
		"advanceTo": [
			"CHARLATAN",
			"DEMAGOGUE",
			"OUTLAW",
			"POLITICIAN",
			"ROGUE",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "LAW"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Coolheaded or Street Fighting",
			"Flee!",
			"Public Speaking"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"One set of Good Craftsmenship Clothes",
			"2d10 leaflets for various causes"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"AMBASSADOR": {
		"id": "AMBASSADOR",
		"label": "Ambassador",
		"description": "Granted the right to speak on behalf of their sovereign, ambassadors can wield much power in the various national and provincial capitals of the Old World. In Kislev, ambassadors work tirelessly from their well-guarded embassies, keen to do whatever is necessary to catch the Ice Queen’s eye. While some ambassadors are chosen for their exquisite tastes and ability to spoil rivals and allies alike with carefully chosen words and gifts, others may be selected for their sharp minds, understanding of intelligence networks, or undeniable charisma. Whatever their individual strengths, all ambassadors are of noble birth, for the Tzarina would never deign to meet a foreign peasant.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 10,
			"Ag": 10,
			"Int": 30,
			"WP": 30,
			"Fel": 40
		},
		"secondaryProfile": {
			"A": 0,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAPTAIN",
			"HIGH_PRIEST",
			"ICE_WITCH",
			"NOBLE_LORD",
			"WIZARD_LORD"
		],
		"advanceTo": [
			"CAPTAIN",
			"MERCHANT",
			"NOBLE_LORD",
			"POLITICIAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "GENEALOGY_HERALDRY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "BLATHER"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "ACTOR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			}
		],
		"talents": [
			"Dealmaker or Schemer",
			"Etiquette",
			"Linguistics or Suave",
			"Master Orator or Savvy",
			"Public Speaking"
		],
		"trappings": [
			"several sets of superior noble’s garb",
			"valuable jewellery",
			"a contingent of guards (no fewer than six)",
			"coin,  jewellery,  art objects,  property,  and so on worth no less than 1, 000 gc"
		],
		"notes": "You must be of noble birth (i.e. complete the Noble Career) and be appointed by a government.",
		"source": "RotIQ",
		"numberOfSkills": 11,
		"numberOfTalents": 5,
		"numberOfAdvances": 35
	},
	"ANCHORITE": {
		"id": "ANCHORITE",
		"label": "Anchorite",
		"description": "Some people feel that they can only follow their own mystical leanings alone, away from the distractions of civilisation, conversation, and soap. These individuals become Anchorites, staking claim to a cave, or the top of a pillar of rock, somewhere in the Borderlands. They have few or no possessions, so bandits rarely bother them. Greenskins and other monsters are still likely to kill them if they can catch them, so Anchorites learn how to hide and run away.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 5,
			"S": 5,
			"T": 10,
			"Ag": 10,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"BADLANDER",
			"MYSTIC",
			"OUTLAW",
			"SWAMP_SKIMMER",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Flee!",
			"Hardy",
			"Resistance to Poison",
			"Rover",
			"Stout-hearted"
		],
		"trappings": [
			"None"
		],
		"notes": "",
		"source": "RC",
		"numberOfSkills": 5,
		"numberOfTalents": 5,
		"numberOfAdvances": 10
	},
	"ANIMAL_TRAINER": {
		"id": "ANIMAL_TRAINER",
		"label": "Animal Trainer",
		"description": "Animal trainers breed and train animals for transport, hunting or entertainment. Their most common job is breeding riding horses and destriers for the horse markets, but animal trainers are also skilled dog and bird handlers that accompany nobles’ hunting parties. Carnivals employ animal trainers as ringmasters to delight the masses with dancing bears and prancing ponies. Animal trainers can also serve the role of beast handlers in pit fighting arenas, though little effort is expended training the ornery fighting animals that were originally captured in the wild. Though Kislevite bear tamers are famous for their ability to train wild bears, most trained animals are born in captivity.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 10,
			"WP": 10,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BEAR_TAMER",
			"ENTERTAINER",
			"FARMER",
			"HUNTER",
			"MULESKINNER",
			"PEASANT",
			"RAT_CATCHER"
		],
		"advanceTo": [
			"BEAR_TAMER",
			"ENTERTAINER",
			"HUNTER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM_ANIMAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "COMPOSITE",
						"operator": "OR",
						"list": [
							{
								"type": "VARIABLE",
								"targetEnum": "AcademicKnowledge",
								"key": "AVIARIST"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "AcademicKnowledge",
								"key": "HORSE_TRADER"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "AcademicKnowledge",
								"key": "KENNEL_MASTER"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "AcademicKnowledge",
								"key": "STABLEMAN"
							}
						]
					}
				],
				"operator": "AND"
			}
		],
		"talents": [
			"Etiquette or Wrestling",
			"Specialist Weapon (Entangling)",
			"Strike to Stun"
		],
		"trappings": [
			"Collar with 10 Feet of Rope or Chain",
			"Light Armour (Leather Jack)",
			"Net",
			"Thick Gloves",
			"Whip"
		],
		"notes": "",
		"source": "CC",
		"numberOfSkills": 12,
		"numberOfTalents": 3,
		"numberOfAdvances": 22
	},
	"ANOINTED_PRIEST": {
		"id": "ANOINTED_PRIEST",
		"label": "Anointed Priest",
		"description": "A priest who has consistently upheld the tenets of his church is chosen by his God to take on greater power and responsibility. Anointed Priests are gifted with the Divine Lore of the deity they serve and consequently, they’re expected to take on challenges suitable to their new blessings. They often have all the attributes that their God admires, acting as beacons of faith to others in the Old World. Anointed Priests are greatly trusted by the common folk, who will often listen to them over both Nobles and Politicians, granting them a great deal of temporal power to complement the spiritual.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 15,
			"S": 10,
			"T": 10,
			"Ag": 10,
			"Int": 15,
			"WP": 25,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 1,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"PRIEST"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"EXORCIST",
			"FLAGELLANT",
			"HIGH_PRIEST",
			"SCHOLAR",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Aethyric Attunement or Meditiation",
			"Armoured Casting or Fast Hands",
			"Divine Lore (ant one)",
			"Lesser Magic (any two)",
			"Seasoned Traveller or Strike Mighty Blow"
		],
		"trappings": [
			"Noble's Garb"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 11,
		"numberOfTalents": 5,
		"numberOfAdvances": 32
	},
	"APOTHECARY": {
		"id": "APOTHECARY",
		"label": "Apothecary",
		"description": "While physicians prescribe cures for their patients’ various ills, it is the apothecary who actually makes the medicine. Specialists in minerals, chemicals, and salts derived from organic matter, the apothecary mixes powders to be taken with wine, unguents to apply to infected areas, and medicinal incenses to drive away unhealthy vapours. Guild law allows them to prescribe for minor ailments, such as a cold or stomach-ache, but few do since many physicians are resentful of the competition. While some apothecaries move on to higher careers in medicine or academia, others turn their knowledge to personal greed or succumb to a desire to harm others. Some apothecaries have been known to feed their clients drugs disguised as medicine, forcing them to come back and pay higher prices to feed their addiction, while others sell their services as poisoners, splitting the profits with an aggrieved widow or heir.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 5,
			"Ag": 5,
			"Int": 10,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"APPRENTICE_WIZARD",
			"BARBER_SURGEON",
			"HEDGE_WIZARD",
			"STUDENT"
		],
		"advanceTo": [
			"APPRENTICE_WIZARD",
			"ARTISAN",
			"BARBER_SURGEON",
			"EMBALMER",
			"GRAVE_ROBBER",
			"MERCHANT",
			"PHYSICIAN",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "SCIENCE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PREPARE_POISON"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "APOTHECARY"
			}
		],
		"talents": [
			"Etiquette or Resistance to Poison",
			"Suave or Very Resilient"
		],
		"trappings": [
			"  Healing Draught",
			"Light Armour (Leather Jerkin)",
			"Trade Tools (Apothecary’s Kit)"
		],
		"notes": "",
		"source": "SH",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"APPRENTICE_RUNESMITH": {
		"id": "APPRENTICE_RUNESMITH",
		"label": "Apprentice Runesmith",
		"description": "The Runesmiths are effectively a clan containing a few ancient families who have passed down the knowledge and skills of Runesmithing over the generations. Each Master Runesmith teaches the fundamentals of fire and forge to young members of his family, selecting the most talented to become Apprentice Runesmiths. While selection is a great honour, it means long years of study and service to his master in the creation of more complicated runes. Runesmiths rarely write down the secrets of their craft and even when they do, the knowledge is buried beneath riddles and puzzles. Apprentices must be patient, clever, and perceptive to rise in status. During this time Apprentice Runesmiths often leave the service of their mentor to gather ingredients, tools, and supplies for the forging of new runes.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 0,
			"Ag": 0,
			"Int": 10,
			"WP": 15,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 1,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ARTISAN",
			"RUNEBEARER",
			"SCRIBE",
			"STUDENT"
		],
		"advanceTo": [
			"JOURNEYMAN_RUNESMITH",
			"RUNEBEARER",
			"SCHOLAR",
			"SCRIBE",
			"SHIELDBREAKER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "RUNES"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RUNECRAFT"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "ARCANE_DWARF"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "SMITH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "ARMOURER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "WEAPONSMITH"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Rune (any two with an Inscription Number of 10 or less)"
		],
		"trappings": [
			"Medium Armour (Leather Jack, Mail Shirt)",
			"Trade Tools (Runesmith)"
		],
		"notes": "Only Dwarfs can enter this career.",
		"source": "WoS",
		"numberOfSkills": 8,
		"numberOfTalents": 1,
		"numberOfAdvances": 10
	},
	"APPRENTICE_WITCH": {
		"id": "APPRENTICE_WITCH",
		"label": "Apprentice Witch",
		"description": "Every year, ice witches emerge from the frozen oblast to assess shivering Gospodar girls. The rare girl demonstrating magical talent is taken away and is unlikely to see her family again. Barely old enough to be called women, these apprentices-to-be are led into the depths of Kislev’s cruel winter, and there, they are taught the ways of the Khan-Queens of old. Those who survive (and many do not) are forever changed: they are cold, aloof, mature well beyond their years, and very aware of their insignificance beside the might of the Ancient Widow’s glacial heart. Eventually, these successful apprentices will be released from their mistresses and allowed to venture forth as “maidens of the ice.”.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 10,
			"Ag": 5,
			"Int": 10,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 1,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"ICE_MAIDEN",
			"INITIATE",
			"WITCH"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "MAGIC"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "KISLEV"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "KISLEVITE"
			}
		],
		"talents": [
			"Aethyric Attunement or Lesser Magic (any one)",
			"Hardy or Very Resilient",
			"Petty Magic (Ice)"
		],
		"trappings": [
			"sturdy suit of winter clothing",
			"a pack or sling bag",
			"a flask of kvas",
			"few days of rations."
		],
		"notes": "You must be female to enter this career.",
		"source": "RotIQ",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"APPRENTICE_WIZARD": {
		"id": "APPRENTICE_WIZARD",
		"label": "Apprentice Wizard",
		"description": "Humans born with magical talents are dangerous and feared individuals.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 15,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 1,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "MAGIC"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			}
		],
		"talents": [
			"Aethyric Attunement or Fast Hands",
			"Petty Magic (Arcane)",
			"Savvy or Very Resilient"
		],
		"trappings": [
			"Quarter Staff",
			"Backpack",
			"Printed Book"
		],
		"notes": "If you want to be able to cast spells right away, you should increase your Magic Characteristic with your free advance during character creation.",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"ARTILLERIST": {
		"id": "ARTILLERIST",
		"label": "Artillerist",
		"description": "The Artillerist is skilled at operating all manner of siege weapons, from the ballista to the trebuchet, and even gunpowder devices like the cannon, mortar and Hellblaster Volley Gun of the Imperial arsenal. Field repairs are often necessary when a wheel breaks or a gun carriage cracks, and a smart Artillerist quickly learns how to make  temporary repairs to ensure minimal interruption in firing rate. Artillerists rely on teamwork and command groups of Engineers to operate their weapons  effectively. They are rarely found outside of a large army.  Part engineer, part soldier, and all target, Artillerists must learn to take care of themselves on the battlefield. Generally they are far enough behind the battle lines to be out of danger, but the effectiveness of their weaponry makes them favourite targets for enemy missile fire, flying creatures, and magical attacks. Also, moving the various engines around is hard work under the best of conditions; over muddy, rutted, rock-strewn battlefields it can be an endurance test with lives hanging in the balance. The career of an Artillerist is not all glory, as is frequently supposed.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 25,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 30,
			"WP": 15,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ENGINEER",
			"SERGEANT"
		],
		"advanceTo": [
			"ARTISAN",
			"CAPTAIN",
			"GUILD_MASTER",
			"MERCENARY",
			"VETERAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ENGINEERING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "SCIENCE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "GUNSMITH"
			}
		],
		"talents": [
			"Coolheaded",
			"Marksman",
			"Mighty Shot",
			"Rapid Reload",
			"Sharpshooter",
			"Specialist Weapon Group (Engineering or Gunpowder)",
			"Sure Shot"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Firearm with ammunition and powder for 10 shots",
			"Engineer’s Kit",
			"Telescope"
		],
		"notes": "",
		"source": "WC",
		"numberOfSkills": 7,
		"numberOfTalents": 7,
		"numberOfAdvances": 29
	},
	"ARTISAN": {
		"id": "ARTISAN",
		"label": "Artisan",
		"description": "Artisans are skilled craftsmen and masters of their trades. Most commonly found in towns and cities, Artisans are organized into a bewildering variety of guilds. The best craftsmen are attracted to the largest cities, such as Altdorf, Marienburg and Nuln. There they can command high prices from the richest clientele, or work with Merchants who can sell their goods in more distant locales. Some Artisans are so famous that even Nobles must put their names on waiting lists, for to have the work of a renowned master is sign of status. The masterwork of an Artisan is truly something to behold.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 10,
			"T": 10,
			"Ag": 20,
			"Int": 10,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ENGINEER",
			"MILITIAMAN",
			"NAVIGATOR",
			"TRADESMAN"
		],
		"advanceTo": [
			"APPRENTICE_RUNESMITH",
			"DEMAGOGUE",
			"ENGINEER",
			"GUILD_MASTER",
			"MERCHANT",
			"MILITIAMAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KHAZALID"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY_THREE"
			}
		],
		"talents": [
			"Artistic or Etiquette"
		],
		"trappings": [
			"Trade Tools (according to Trade)",
			"15 gc"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 1,
		"numberOfAdvances": 17
	},
	"ASSASSIN": {
		"id": "ASSASSIN",
		"label": "Assassin",
		"description": "Killing for money is not unusual in the Old World. Soldiers and Mercenaries do it every day. Few sell swords achieve the Assassin’s level of lethality, however. These hired killers are expertly trained and deadly with a variety of weapons. Many also master the poisoner’s art. The best Assassins can dispatch their targets in a matter of seconds, leaving behind no evidence of their presence. Their services are much sought after by political and even religious bodies. Few Assassins care where the commissions come from. They only want a challenging mission and a fat purse for their fee. While most Assassins are loners, a rare few have organized into guilds.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 25,
			"S": 10,
			"T": 10,
			"Ag": 30,
			"Int": 20,
			"WP": 10,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 2,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CHAMPION",
			"DUELLIST",
			"JUDICIAL_CHAMPION",
			"OUTLAW_CHIEF",
			"SPY",
			"TARGETEER"
		],
		"advanceTo": [
			"CHAMPION",
			"OUTLAW_CHIEF",
			"ROGUE",
			"SERGEANT",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PREPARE_POISON"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "THIEF"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Quick Draw",
			"Lightning Parry",
			"Sharpshooter",
			"Specialist Weapon Group (Entangling)",
			"Specialist Weapon Group (Parrying)",
			"Specialist Weapon Group (Throwing)",
			"Street Fighting",
			"Streetwise",
			"Swashbuckler"
		],
		"trappings": [
			"Net",
			"4 Throwing Knives",
			"Grappling Hook",
			"10 yards of Rope",
			"1 dose on Poison (any)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 9,
		"numberOfAdvances": 36
	},
	"ASTROLOGER": {
		"id": "ASTROLOGER",
		"label": "Astrologer",
		"description": "The future is a frightening thing for many people: war, the threat of chaos, disease, financial ruin, and betrayal – there is so much to worry about. People have many questions about the future, and the astrologer is there to supply the answers, whether or not she knows what she is talking about. Surrounded by star charts and arcane equipment, the astrologer seeks answers by charting the motions and relative positions of the planets in the heavens. Some are genuinely talented and try to do their best, while others are little better than fakers who tell their clients whatever they want to hear. Nobles and other powerful people are suspicious of those who can tell their future and zealously guard the time of their births. To cast the horoscope of a ruler without permission is considered treason, and many an astrologer has had to make a hasty exit after just trying to satisfy their curiosity.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 25,
			"WP": 20,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"APOTHECARY",
			"APPRENTICE_WIZARD",
			"CHARLATAN",
			"DILETTANTE",
			"JOURNEYMAN_WIZARD",
			"MASTER_WIZARD",
			"NAVIGATOR",
			"NOBLE",
			"PHYSICIAN",
			"SCHOLAR",
			"STUDENT"
		],
		"advanceTo": [
			"APPRENTICE_WIZARD",
			"CHARLATAN",
			"EXPLORER",
			"NAVIGATOR",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ASTRONOMY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "SCIENCE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "ESTALIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "STORYTELLER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "ASTROLOGER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Etiquette or Flee!",
			"Luck or Super Numerate"
		],
		"trappings": [
			"Book of Star Charts",
			"Telescope",
			"Trade Tools (Astrologer’s Kit)",
			"Writing Kit"
		],
		"notes": "",
		"source": "SH",
		"numberOfSkills": 19,
		"numberOfTalents": 2,
		"numberOfAdvances": 22
	},
	"ATAMAN": {
		"id": "ATAMAN",
		"label": "Ataman",
		"description": "Most oblast communities are led by atamans (female: atamankas). Gospodar atamans are normally druzhina whose families have ruled locally for generations. By comparison, most Ungols elect their atamans or select them according to obscure (often martial) traditions, for most of their noble bloodlines were wiped out by the Gospodars long ago. Atamans bear great responsibilities, for all important local matters are decided by them, especially those concerning security and law. Further, if there are no local priests, atamans also take on the responsibility for the spiritual wellbeing of their people, leading religious rites and ceremonies.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 15,
			"Ag": 5,
			"Int": 30,
			"WP": 20,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAPTAIN",
			"HORSE_MASTER",
			"NOBLE",
			"VETERAN"
		],
		"advanceTo": [
			"POLITICIAN",
			"PRIEST",
			"NOBLE_LORD"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "COMPOSITE",
						"operator": "OR",
						"list": [
							{
								"type": "VARIABLE",
								"targetEnum": "AcademicKnowledge",
								"key": "HISTORY"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "AcademicKnowledge",
								"key": "LAW"
							}
						]
					},
					{
						"type": "COMPOSITE",
						"operator": "OR",
						"list": [
							{
								"type": "VARIABLE",
								"targetEnum": "AcademicKnowledge",
								"key": "STRATEGY_TACTICS"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "AcademicKnowledge",
								"key": "THEOLOGY"
							}
						]
					}
				],
				"operator": "AND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TROLL_COUNTRY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "KISLEVITE"
			}
		],
		"talents": [
			"Coolheaded or Suave",
			"Public Speaking"
		],
		"trappings": [
			"Ceremonial mace (Superior Hand Weapon) recognised as a symbol of authority throughout Kislev."
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 28
	},
	"BADLANDER": {
		"id": "BADLANDER",
		"label": "Badlander",
		"description": "Badlanders, as the name suggests, live in the badlands of the Border Princes. These areas are often mazes of broken rock, containing little water and less life, and what life is present is unpalatable at best and hostile at worst. They have to travel constantly around the area to find food and water, which also makes it relatively easy for them to hide. A surprisingly high proportion of Badlanders have previous careers from which they are hiding; those who don’t tend to dream of doing something worth hiding from.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 10,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANCHORITE",
			"PEASANT",
			"VAGABOND"
		],
		"advanceTo": [
			"CAT_BURGLAR",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Orientation",
			"Sixth Sense"
		],
		"trappings": [
			"Climbing Equipment"
		],
		"notes": "",
		"source": "RC",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"BADLANDS_RANGER": {
		"id": "BADLANDS_RANGER",
		"label": "Badlands Ranger",
		"description": "The Badlands Ranger is an experienced individual familiar with the hazards of the area and able to lead others safely through them. A trustworthy Badlands Ranger is worth a great deal of money, and they charge a great deal of money to those who want their services. Threatening them rarely works because they can survive almost any situation in the region. They will simply leave their obnoxious employers to die.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 20,
			"Ag": 25,
			"Int": 20,
			"WP": 20,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 7,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"EXPLORER",
			"OUTLAW_CHIEF",
			"SCOUT"
		],
		"advanceTo": [
			"CAPTAIN",
			"EXPLORER",
			"OUTLAW_CHIEF"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BORDER_PRINCES"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "RANGER_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "SCOUT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SET_TRAP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Flee!",
			"Orientation",
			"Rover",
			"Sixth Sense",
			"Very Resilient"
		],
		"trappings": [
			"Medium Armour (Mail Shirt and Leather Jack)",
			"10 yards of Rope"
		],
		"notes": "",
		"source": "RC",
		"numberOfSkills": 13,
		"numberOfTalents": 5,
		"numberOfAdvances": 35
	},
	"BAILIFF": {
		"id": "BAILIFF",
		"label": "Bailiff",
		"description": "Bailiffs are manorial officials in the service of Noble Lord.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 0,
			"Ag": 0,
			"Int": 10,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "COMMAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			}
		],
		"talents": [
			"Etiquette or Super Numerate",
			"Public Speaking"
		],
		"trappings": [
			"Light Armour (Leather Jack and Leather Skullcap)",
			"Riding Horse with Saddle and Harness",
			"One Set of Good Craftmanship Clothing"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"BARBER_SURGEON": {
		"id": "BARBER_SURGEON",
		"label": "Barber-Surgeon",
		"description": "Barber-Surgeons provide painful but effective healing to the common folk of the Empire. They are not as learned as Physicians, which is why Physicians maintain a separate guild, but they know quite a lot about anatomy. While they do cut hair and shave, they are more noted for their bleedings, surgeries, and amputations. Barber-Surgeons carry a variety of razor-sharp blades, from small scalpels to enormous bone saws. They have even more sinister looking tools for the most hated of their avocations: dentistry. Many large ships have a dedicated Barber-Surgeon as part of the crew, they are also common in towns and cities.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "REIKSPIEL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "APOTHECARY"
			}
		],
		"talents": [
			"Resistance to Disease or Savvy",
			"Suave or Very Resilient",
			"Surgery"
		],
		"trappings": [
			"Trade Tools (Barber-Surgeon)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"BATTLE_PILGRIM": {
		"id": "BATTLE_PILGRIM",
		"label": "Battle Pilgrim",
		"description": "Battle Pilgrims are Grail Pilgrims who have survived following their Grail Knight for some time. As a result, they have become competent fighters. In most cases, they have also become even more fervent admirers of their Grail Knight and worshippers of the Lady of the Lake, having seen what the flower of Bretonnian chivalry is truly capable of. Battle Pilgrims are the effective leaders of groups of Grail Pilgrims, as the Grail Knight never condescends to give orders to peasant rabble. Some Grail Pilgrims resent taking orders from someone no better than they, so Battle Pilgrims often have to impose order by force. Wiser Grail Pilgrims note that their chances of survival are greatly increased by doing as the Battle Pilgrims say.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 10,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"GRAIL_PILGRIM"
		],
		"advanceTo": [
			"FACELESS",
			"SERGEANT",
			"VAGABOND",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BRETONNIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Flee!",
			"Hardy",
			"Public Speaking",
			"Stout-hearted",
			"Strike to Stun",
			"Strong-minded",
			"Very Resilient",
			"Very Strong"
		],
		"trappings": [
			"Halberd",
			"Bow and 20 Arrows",
			"Medium Armour (Full Mail Armour)"
		],
		"notes": "Women may only become Battle Pilgrims if they are disguised as men, nobles only if they are disguised as peasants.",
		"source": "KotG",
		"numberOfSkills": 8,
		"numberOfTalents": 8,
		"numberOfAdvances": 26
	},
	"BEAR_TAMER": {
		"id": "BEAR_TAMER",
		"label": "Bear Tamer",
		"description": "The bear is sacred in Kislev. It features in the myths and legends of both tribes and is venerated by the powerful Cult of Ursun. Bears are perceived as living embodiments of the land’s enduring might and strength, and the struggles all Kislevites must endure. Therefore, boyars often recruit bear tamers to support their armed forces, keeping bears as inspiring mascots and sometimes for use in war. As Kislevites gather in great numbers to see bears, bear trainers are also common in Kislev’s famous circuses and on the streets during festival time, where they dance or show-wrestle for coin.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 10,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ENTERTAINER"
		],
		"advanceTo": [
			"ANIMAL_TRAINER",
			"ENTERTAINER",
			"PIT_FIGHTER",
			"SOLDIER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM_ANIMAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "ANY_ONE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "KISLEVITE"
			}
		],
		"talents": [
			"Coolheaded or Very Strong",
			"Lightning Reflexes or Public Speaking",
			"Very Resilient or Wrestling"
		],
		"trappings": [
			"leather jacks",
			"a collar and chain",
			"a whip or goad",
			"a bear"
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 6,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"BLACK_GUARD": {
		"id": "BLACK_GUARD",
		"label": "Black Guard",
		"description": "Whilst the cult of Morr has few, if any, official templars, they do have the Black Guard. These universally dour and serious warriors have an even more serious responsibility: to guard both the living and the dead from the endless malice of the Undead and those who would raise them. For the most part, they are a defensive order, protecting the great temples and graveyards of the Empire and the dignitaries of the cult, only riding to war in exceptional circumstances, such as during a crusade against the Vampire counts. Unlike most knights, they are trained in the use of ranged weapons to prevent their enemies from bringing their strength to bear in close quarters. This, along with their foreboding black obsidian armour and their strict vow of silence when on duty, means they are shunned by most other knightly orders, but such is the price of duty.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 15,
			"S": 10,
			"T": 15,
			"Ag": 15,
			"Int": 5,
			"WP": 20,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KNIGHT",
			"PRIEST",
			"SERGEANT",
			"SQUIRE",
			"VAMPIRE_HUNTER",
			"WITCH_HUNTER"
		],
		"advanceTo": [
			"CAPTAIN",
			"CHAMPION",
			"PRIEST",
			"KNIGHT_OF_THE_INNER_CIRCLE",
			"KNIGHT_OF_THE_RAVEN",
			"VAMPIRE_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "THEOLOGY"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Menacing",
			"Mighty Shot or Strike Mighty Blow",
			"Sharpshooter or Sure Shot",
			"Specialist Weapon Group (Cavalry,  Crossbow or Longbow,  Two-handed)",
			"Stout-Hearted"
		],
		"trappings": [
			"Blessed Water",
			"Crossbow or Longbow",
			"Lance",
			"Destrier with Saddle and Harness",
			"Heavy Armour (Full Plate)",
			"Medallion of the Raven"
		],
		"notes": "",
		"source": "NDM",
		"numberOfSkills": 7,
		"numberOfTalents": 5,
		"numberOfAdvances": 26
	},
	"BOATMAN": {
		"id": "BOATMAN",
		"label": "Boatman",
		"description": "The rivers of the Empire are vital arteries of communication and commerce. They provide speedy transportation and link most of the major cities of the realm. ...",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FERRYMAN",
			"SMUGGLER"
		],
		"advanceTo": [
			"FISHERMAN",
			"MARINE",
			"NAVIGATOR",
			"SEAMAN",
			"SMUGGLER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SAIL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "RANGER_TONGUE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Orientation",
			"Seasoned Traveller"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Row Boat"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"BODYGUARD": {
		"id": "BODYGUARD",
		"label": "Bodyguard",
		"description": "Old Worlders claim Altdorf merchants are so dishonest they can’t even trust themselves with their own lives – thus they pay Bodyguards to look after their assets. The Old World is, of course, a dangerous place and its cities are no exception. It’s all too easy to end up with a knife in the back on the crowded streets of a major metropolis like Nuln or Middenheim. The rich and powerful use Bodyguards to protect themselves from thieves and common riffraff. While many look like the thugs they are, others are gussied up in the livery of the Noble or Merchant House they serve. Some of the groups are so big that they are practically private armies.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ESTALIAN_DIESTRO",
			"JAILER",
			"MERCENARY",
			"THUG"
		],
		"advanceTo": [
			"BAILIFF",
			"BOUNTY_HUNTER",
			"INTERROGATOR",
			"JAILER",
			"MERCENARY",
			"PROTAGONIST",
			"RACKETEER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Disarm or Quick Draw",
			"Specialist Weapon Group (Parrying)",
			" Specialist Weapon Group (Throwing)",
			"Street Fighting",
			"Strike to Stun",
			"Very Strong or Very Resilient"
		],
		"trappings": [
			"Buckler",
			"Knuckle-dusters",
			"A Pair of Throwing Axes or Throwing Knives",
			"Light Armour (Leather Jack)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 4,
		"numberOfTalents": 6,
		"numberOfAdvances": 9
	},
	"BONDSMAN": {
		"id": "BONDSMAN",
		"label": "Bondsman",
		"description": "The Bondsman is a warrior in service to a particular Jarl. He is expected to live in the Jarl’s Hall, share the Jarl’s food, and be steadfastly loyal. In exchange for his pledge of loyalty, the Jarl rewards service with gifts, such as weapons and armour, and to the very best, land and title. The worth of the gift is never measured in actual value, but rather the prestige it bestows on the Bondsman. It’s important to remember such gifts do not make the Bondsman a mercenary; rather, it is a reward for constant and loyal service.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"MERCENARY",
			"PIT_FIGHTER"
		],
		"advanceTo": [
			"BODYGUARD",
			"FREEHOLDER",
			"MARAUDER",
			"MERCENARY",
			"REAVER",
			"SKALD",
			"VETERAN",
			"WARLEADER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			}
		],
		"talents": [
			"Coolheaded or Savvy",
			"Menacing",
			"Quick Draw or Specialist Weapon Group (Two-handed)",
			"Stout-hearted",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Hand Weapon and Shield or Great Weapon",
			"Medium Armour (Full Leather and Mail Shirt)",
			"Skin of Ale",
			"three Gifts (each worth 1d10/2 gc)"
		],
		"notes": "",
		"source": "ToC",
		"numberOfSkills": 4,
		"numberOfTalents": 5,
		"numberOfAdvances": 10
	},
	"BONEPICKER": {
		"id": "BONEPICKER",
		"label": "Bonepicker",
		"description": "Bone Pickers are scavengers, scraping a living together off the refuse of others. They lead their carts through villages and towns, collecting old bones, rags, and other junk and disposing of it in return for a few pennies or a small item in trade. Sometimes known as rag and bone men or rag pickers, they are a common sight in the Empire’s cities, which generate large amounts of waste. Since many goods pass through their hands, Bone Pickers are also petty traders. What is trash to a wealthy Burgher is treasure to a poor Peasant.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"PEASANT",
			"RAT_CATCHER",
			"VAGABOND"
		],
		"advanceTo": [
			"CAMP_FOLLOWER",
			"CAT_BURGLAR",
			"FENCE",
			"GRAVE_ROBBER",
			"SMUGGLER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Coolheaded or Streetwise",
			"Hardy or Resistance to Disease"
		],
		"trappings": [
			"Cart",
			"3 Sacks"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"BORDER_COURTIER": {
		"id": "BORDER_COURTIER",
		"label": "Border Courtier",
		"description": "Life in the courts of the Border Princes tends to be a bit more literal than in more civilised lands. Smearing an opponent involves physical mud, backstabbing involves a knife, and the losers in political contests really are gutted. Courtiers in the area thus tend to be a bit more physical than those in other regions.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 5,
			"S": 10,
			"T": 15,
			"Ag": 15,
			"Int": 20,
			"WP": 20,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAPTAIN",
			"COURTIER",
			"NOBLE",
			"OUTLAW_CHIEF",
			"POLITICIAN",
			"SERGEANT"
		],
		"advanceTo": [
			"ASSASSIN",
			"CAPTAIN",
			"COURTIER",
			"NOBLE_LORD",
			"SPY"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BORDER_PRINCES"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PREPARE_POISON"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY"
			}
		],
		"talents": [
			"Resistance to Poison",
			"Schemer",
			"Street Fighting",
			"Strike to Injure",
			"Suave",
			"Very Resilient"
		],
		"trappings": [
			"Medium Armour (Chain Shirt and Leather Jack)",
			"two Sets of Noble’s Garb",
			"one Dose of Poison (any type)"
		],
		"notes": "",
		"source": "RC",
		"numberOfSkills": 11,
		"numberOfTalents": 6,
		"numberOfAdvances": 26
	},
	"BOUNTY_HUNTER": {
		"id": "BOUNTY_HUNTER",
		"label": "Bounty Hunter",
		"description": "Hunters live by tracking down wanted criminals, bandits, and fugitives and bringing them to justice. The lone Bounty Hunter can go places that ungainly military units cannot, which makes such men a useful adjunct to the watch and militia. Local rulers, guilds, and councils pay the bounties. They may find Bounty Hunters distasteful, but they are an effective counter to brigands, Goblin bands, and the like.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 5,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BODYGUARD",
			"FIELDWARDEN",
			"HUNTER",
			"KISLEVITE_KOSSAR",
			"MERCENARY",
			"PIT_FIGHTER"
		],
		"advanceTo": [
			"MERCENARY",
			"PROTAGONIST",
			"SCOUT",
			"TARGETEER",
			"VAMPIRE_HUNTER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Marksman or Strike to Stun",
			"Rover",
			"Specialist Weapon Group (Entangling)",
			"Sharpshooter or Strike Mighty Blow"
		],
		"trappings": [
			"Crossbow with 10 bolts",
			"Net",
			"Light Armour (Leather Jerkin and Leather Skullcap)",
			"Manacles",
			"10 Yards of Rope"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 4,
		"numberOfAdvances": 9
	},
	"BURGHER": {
		"id": "BURGHER",
		"label": "Burgher",
		"description": "As cities have become more and more important to the Empire, a new class of citizen has emerged: the Burgher. Burghers – or their ancestors – clawed their way up from the peasantry and made new lives for themselves in the cities. Now they are the glue that holds urban society together. Burghers are shop owners, petty merchants, excisemen, traders, and local officials. They are neither as despised as the peasantry nor as exalted as the nobility. While they suffer the most from plague, living in tightly packed neighbourhoods as they do, they would not leave the city for a life of hard toil in the country. In their minds, cities breed opportunity, not just disease.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"INNKEEPER",
			"SERVANT"
		],
		"advanceTo": [
			"AGITATOR",
			"FENCE",
			"INNKEEPER",
			"MERCHANT",
			"MILITIAMAN",
			"TRADESMAN",
			"VALET"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Dealmaker",
			"Savvy or Suave"
		],
		"trappings": [
			"Abacus",
			"Lantern",
			"One Set of Good Clothing"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 8
	},
	"CADET": {
		"id": "CADET",
		"label": "Cadet",
		"description": "Cadets are officers-in-training. They may attend formal schools like the Aquila Academies or they may receive direct tutelage from officers in the field. Although cadets do learn to fight, the focus of their training is leadership. Some come from noble families, but this is by no means a given. Those who earned a place with battlefield exploits are more respected because they have lived war, not just read about it in books.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ESTALIAN_DIESTRO",
			"MERCENARY",
			"MILITIAMAN",
			"NOBLE",
			"ROADWARDEN",
			"SOLDIER",
			"SQUIRE",
			"STUDENT"
		],
		"advanceTo": [
			"HERALD",
			"MERCENARY",
			"PISTOLIER",
			"SERGEANT",
			"SQUIRE",
			"STUDENT"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "REIKSPIEL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Disarm",
			"Savvy or Warrior Born",
			"Specialist Weapon Group (Fencing)"
		],
		"trappings": [
			"Foil or Rapier",
			"Light Armour (Full Leather Armour)",
			"Shield",
			" Uniform (Cadet)"
		],
		"notes": "If you are rolling randomly for your Starting Career, you can substitute Cadet for Soldier or Student with your GM’s permission.",
		"source": "SoE",
		"numberOfSkills": 9,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"CAMP_FOLLOWER": {
		"id": "CAMP_FOLLOWER",
		"label": "Camp Follower",
		"description": "In the Empire, armies are always on the move. Forces range from local militia units scouring the forest  for bandits to the full armed might of the Emperor taking the field against greenskins or the forces of Chaos.  No army travels alone. A caravan of Camp Followers always trails behind. They include petty traders looking  to make extra money, war widows trying to make a wage cooking or sewing, and corpse looters hoping to  scavenge battlefields. While scorned by the Noble leaders of many armies, Camp Followers provide key  support for troops in the field. ",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"SERVANT"
		],
		"advanceTo": [
			"CHARCOAL_BURNER",
			"CHARLATAN",
			"SERVANT",
			"SMUGGLER",
			"SPY",
			"TRADESMAN",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "ARMOURER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "BOWYER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "CARTOGRAPHER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "COOK"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "GUNSMITH"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "MERCHANT"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "SMITH"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "TAILOR"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "WEAPONSMITH"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			}
		],
		"talents": [
			"Dealmaker or Street Fighter",
			"Flee!",
			"Hardy or Suave",
			"Resistance to Disease or Seasoned Traveller"
		],
		"trappings": [
			"Lucky Charm or Trade Tools",
			"Pouch",
			"Tent"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 4,
		"numberOfAdvances": 9
	},
	"CANTOR": {
		"id": "CANTOR",
		"label": "Cantor",
		"description": "Cantors are talented singers who have devoted themselves to performing in temple choirs and during rituals. Cantors are responsible for leading choirs during services as well as for instructing individual choristers. Some cantors are also skilled musicians and write new hymns in praise of their Gods. As well as singing hymns, many cantors are skilled at performing incantations and rhythmic chanting that aids priests in performing divine rituals, and for the most potent of rituals a high priest may request the presence of many cantors. The common symbol of office for a cantor is a short staff used to strike the ground (or out of tune choristers, if necessary) to keep tune with the music when leading a choir. A skilful cantor can easily enhance the reputation of a temple and its priests.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"ENTERTAINER",
			"HIGH_PRIEST",
			"INITIATE",
			"MINSTREL",
			"MONK",
			"PRIEST"
		],
		"advanceTo": [
			"CATECHIST",
			"ENTERTAINER",
			"INITIATE",
			"PRIEST",
			"MINSTREL",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "MUSICIAN"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "SINGER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Incantation"
		],
		"trappings": [
			"Chorister’s Robe",
			"Hymn Book",
			"Staf"
		],
		"notes": "",
		"source": "ToS",
		"numberOfSkills": 8,
		"numberOfTalents": 1,
		"numberOfAdvances": 8
	},
	"CAPTAIN": {
		"id": "CAPTAIN",
		"label": "Captain",
		"description": "Captains are the war leaders of the strife-wracked Old World. They command Soldiers, Militiamen, Mercenaries and even Roadwardens, on bloody battlefields and corpse-strewn streets in the endless military campaigns of the Empire and beyond. Most Captains are tough professional Soldiers who have survived dozens of fierce battles to get where they are. It’s no surprise then that they resent having to serve under inexperienced Nobles, an all too common occurrence. Captains tend to respect experience and ability over birth and social position. They know what counts on the battlefield.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 30,
			"BS": 20,
			"S": 20,
			"T": 20,
			"Ag": 20,
			"Int": 15,
			"WP": 15,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 2,
			"W": 7,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"EXPLORER",
			"GHOST_STRIDER",
			"KNIGHT",
			"KNIGHT_OF_THE_INNER_CIRCLE",
			"NOBLE_LORD",
			"OUTLAW_CHIEF",
			"WITCH_HUNTER"
		],
		"advanceTo": [
			"AGITATOR",
			"EXPLORER",
			"MERCHANT",
			"OUTLAW_CHIEF",
			"POLITICIAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Disarm or Quick Draw",
			"Lightning Parry",
			"Specialist Weapon (Cavalry or Two-handed WEapon)",
			"Specialist Weapon (Flail or Parrying)"
		],
		"trappings": [
			"Flail or Sword-breaker",
			"Lance or Great Weapon",
			"Medium Armour (Full Mail Armour)",
			"Shield",
			"Destrier with Saddle and Harness",
			"Unit of Troops"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 10,
		"numberOfTalents": 4,
		"numberOfAdvances": 42
	},
	"CARCASSONNE_SHEPHERD": {
		"id": "CARCASSONNE_SHEPHERD",
		"label": "Carcassonne Shepherd",
		"description": "The shepherds of Carcassonne are the dukedom’s first line of defence against the Orc raiders who infest the mountains. They often work alone, though a new recruit may be paired with an older individual. Obviously, a single Human, no matter how well trained, cannot expect to take on an entire Orc war-band, so the Shepherds are trained to gather information, slow the band down, and report its location to the local nobility.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"GRAIL_PILGRIM",
			"HUNTER",
			"OUTLAW",
			"OUTRIDER",
			"PEASANT",
			"WOODSMAN",
			"VAGABOND"
		],
		"advanceTo": [
			"GRAIL_PILGRIM",
			"HERRIMAULT",
			"OUTLAW",
			"SCOUT",
			"VAGABOND",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "SCOUT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SET_TRAP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Flee!",
			"Fleet-footed",
			"Rover",
			"Sharpshooter"
		],
		"trappings": [
			"Bow with 10 Arrows",
			"Bretonnian Blue Sheepdog (optional)",
			"Light Armour (Leather Jerkin)",
			"Shepherd’s Crook (treat as Quarter staff)",
			"Herd of Sheep or Cute Little Lamb"
		],
		"notes": "",
		"source": "KotG",
		"numberOfSkills": 8,
		"numberOfTalents": 4,
		"numberOfAdvances": 9
	},
	"CARTOGRAPHER": {
		"id": "CARTOGRAPHER",
		"label": "Cartographer",
		"description": "Cartographers chart the lay of the land for rich patrons, hardy explorers, and collectors. They accompany expeditions into the wild but also transpose the shoddy work of others into a more readable form. Maps in the Old World are notoriously unreliable – whether they are surveys of local trails, ambitious region wide guides, or the mainly fictional representations of the Old World itself. Yet the services of Cartographers are still in great demand.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 0,
			"T": 5,
			"Ag": 5,
			"Int": 10,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"COACHMAN",
			"MESSENGER",
			"NAVIGATOR",
			"SCOUT",
			"SCRIBE",
			"STUDENT",
			"TRADESMAN"
		],
		"advanceTo": [
			"ARTISAN",
			"EXPLORER",
			"FORGER",
			"NAVIGATOR",
			"SCHOLAR",
			"SCRIBE",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "GEOGRAPHY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "CARTOGRAPHER"
			}
		],
		"talents": [
			"Excellent Vision",
			"Orientation",
			"Seasoned Traveller or Super Numerate"
		],
		"trappings": [
			"Writing Kit",
			"Pony with saddle & harness",
			"1d10 map cases"
		],
		"notes": "",
		"source": "CC",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"CAT_BURGLAR": {
		"id": "CAT_BURGLAR",
		"label": "Cat Burglar",
		"description": "Cat Burglars see themselves as a cut above the common thieves and footpads. They leave the slitting of both purses and throats to the gutter scum, preferring to steal with more finesse. The Cat Burglar’s art requires observation, planning, and impeccable timing. A well-executed theft may not even be detected for months, by which time the Cat Burglar is far away. Most Cat Burglars are members of a Thieves’ Guild, though some defy the odds and go it alone. Such lone wolves must elude both the law and the guild; a dangerous game to be sure.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 5,
			"Ag": 25,
			"Int": 10,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CHARLATAN",
			"RAT_CATCHER",
			"THIEF"
		],
		"advanceTo": [
			"CRIME_LORD",
			"FENCE",
			"MASTER_THIEF",
			"RACKETEER",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PICK_LOCK"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "THIEVES_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "THIEF"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Alley Cat",
			"Street Fighting",
			"Streetwise",
			"Trapfinder"
		],
		"trappings": [
			"Grappling Hook",
			"Lock Picks",
			"10 Yards of Rope"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 11,
		"numberOfTalents": 4,
		"numberOfAdvances": 19
	},
	"CATECHIST": {
		"id": "CATECHIST",
		"label": "Catechist",
		"description": "The Catechist is a religious teacher versed in the study of holy scripture and stricture who teaches the finer points of both to any who wish to listen (or are forced to listen). They are rarely as open-minded or clever as scholars, favouring tradition over progress and learning by rote over true understanding. A Catechist is usually responsible for the religious education of a temple’s initiates, even if they themselves are merely lay members. Not all Catechists are religious in nature – some concentrate on studying the arcane but lack the talents to become a wizard, instead teaching theory to apprentices at one of the Colleges of Magic.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 20,
			"WP": 15,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"DILETTANTE",
			"FRIAR",
			"PRIEST",
			"SCHOLAR",
			"SCRIBE",
			"STUDENT",
			"ZEALOT"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"FRIAR",
			"INITIATE",
			"SCHOLAR",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			}
		],
		"talents": [
			"Public Speaking"
		],
		"trappings": [
			"Prayer Book",
			"Writing Kit"
		],
		"notes": "",
		"source": "ToS",
		"numberOfSkills": 6,
		"numberOfTalents": 1,
		"numberOfAdvances": 17
	},
	"CENOBITE": {
		"id": "CENOBITE",
		"label": "Cenobite",
		"description": "Cenobites live in communities, generally called monasteries, and follow the advice of a leader. The leader is often charismatic but often equally insane. At the very least, they are fanatical followers of a very personal vision of the truth (the con-artists do not set up in the Borderlands). Most Cenobites are Human; members of other races rarely show much interest, though most monasteries would admit them if they asked. Unwanted children are sometimes left on the doorsteps of monasteries. These children are taken in; those who do not run away are accepted as Cenobites. Most run away.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 0,
			"Int": 5,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"MYSTIC",
			"OUTLAW",
			"SERVANT",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BORDER_PRINCES"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Hardy",
			"Resistance to Poison",
			"Stout-hearted",
			"Strong-minded"
		],
		"trappings": [
			"Filthy Loincloth and Tunic"
		],
		"notes": "It is possible for those who seek to purify mind and body to volunteer to become cenobites, even though most are raised in the role. With GM approval, the cenobite career may be entered from apprentice wizard, initiate, grave robber, or zealot.",
		"source": "RC",
		"numberOfSkills": 6,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"CHAMPION": {
		"id": "CHAMPION",
		"label": "Champion",
		"description": "Champions are warriors who dedicate their lives to martial combat, excelling as no others on the field of battle. They are not leaders of men, bu as individual combatants they are peerless. They live for the moment when their skills are tested to the utmost, for only then do they truly know just how good they are.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 40,
			"BS": 40,
			"S": 25,
			"T": 25,
			"Ag": 30,
			"Int": 0,
			"WP": 20,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 2,
			"W": 8,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Fleet Footed or Lightning Reflexes",
			"Lightning Parry",
			"Master Gunner",
			"Might Shot",
			"Quick Draw",
			"Rapid Reload",
			"Specialist Weapon Group (any three)",
			"Wrestling"
		],
		"trappings": [
			"Any Six Weapon (all of Best Craftmanship)",
			"Medium Armour (Mail Shirt and Leather Jack)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 4,
		"numberOfTalents": 8,
		"numberOfAdvances": 46
	},
	"CHARCOAL_BURNER": {
		"id": "CHARCOAL_BURNER",
		"label": "Charcoal-Burner",
		"description": "Charcoal-Burners can be found in every village in the Empire. They burn wood to create charcoal, an important fuel for the winter months. Since their work is both dirty and potentially dangerous, they work outside their villages. The outskirts of the forest are best, as wood is easily accessible. This proximity to the forest also makes charcoal-burning dangerous work, since isolated parties of such men are easy prey for the malign creatures of the wood. A CharcoalBurner camp always has weapons handy, even if they are nothing more than clubs cut from the nearby trees.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 5,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAMP_FOLLOWER",
			"HUNTER",
			"MINER",
			"PEASANT"
		],
		"advanceTo": [
			"HUNTER",
			"MINER",
			"SCOUT",
			"VAGABOND",
			"WOODSMAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONCEALMENT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "RANGER"
			}
		],
		"talents": [
			"Flee!",
			"Savvy or Very Strong"
		],
		"trappings": [
			"3 Torches",
			"Tinderbox",
			"Hand Weapon (Hatchet)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"CHARLATAN": {
		"id": "CHARLATAN",
		"label": "Charlatan",
		"description": "Charlatans are tricksters extraordinaire, cunning liars who can convince people of almost anything. With their glib tongues and ready wits they bilk the gullible out of their fortunes and escape with both the money and their lives. For a Charlatan, lying is like breathing. Common Charlatans are content to sell worthless miracle cures and trinkets that will supposedly ward off black magic whereas more skilled ones fake being other professions to collect consultation fees and sell off property that they don’t own. Legendary Charlatans run con schemes that try to take Nobles and rich Merchants for all they’re worth.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 10,
			"Ag": 15,
			"Int": 15,
			"WP": 15,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"CAMP_FOLLOWER",
			"COURTIER",
			"ENTERTAINER",
			"ENVOY",
			"FENCE",
			"HEDGE_WIZARD",
			"JOURNEYMAN_WIZARD",
			"MINSTREL",
			"ROGUE",
			"SMUGGLER",
			"THIEF"
		],
		"advanceTo": [
			"ASTROLOGER",
			"CAT_BURGLAR",
			"DEMAGOGUE",
			"OUTLAW",
			"POLITICIAN",
			"SPY"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONNIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "THIEVES_TONGUE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Flee!",
			"Mimic",
			"Public Speaking",
			"Schemer or Streetwise",
			"Seasoned Traveller"
		],
		"trappings": [
			"6 sets of Common Clothes",
			"4 sets of Best Craftsmenship Clothes",
			"Forged Documents",
			"4 bottles of various coloured water",
			"4 bottles of variously coloured powder"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 5,
		"numberOfAdvances": 25
	},
	"CHEKIST": {
		"id": "CHEKIST",
		"label": "Chekist",
		"description": "The principal goal of the chekist – the Ice Queen’s secret police – is to ensure the personal and political security of the Tzarina and her family. This task is performed by any means possible, regardless of local laws; after all, in Kislev, what the chekist deems as law, is law. Their techniques employed to investigate the various Chaos cults, revolutionaries, criminals, hostile organisations, spies, and manifold other “threats” are often brutal, leaving the chekist with an ugly reputation. Their headquarters squat in Kislev city, but rumours suggest they have offices throughout the Ancient Widow’s land, all siphoning information back to the capital. Some suggest the chekist even have agents in the Empire and beyond, each monitoring the activities of foreign threats to the Ice Queen and her rule; but this, of course, is denied.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 5,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"PROTAGONIST",
			"STRELTSI",
			"THUG",
			"WATCHMAN"
		],
		"advanceTo": [
			"JAILER",
			"INTERROGATOR",
			"MERCENARY",
			"RACKETEER",
			"SERGEANT",
			"SOLDIER",
			"SPY",
			"VETERAN",
			"WATCHMAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW_OR_INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "KISLEV"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DODGE_BLOW"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SHADOWING"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Disarm or Specialist Weapon Group (Gunpowder)",
			"Menacing",
			"Strike Mighty Blow or Strike to Stun"
		],
		"trappings": [
			"leather jacks and leggings",
			"helmet",
			"Hand Weapon",
			"Kislevite horse",
			"saddle",
			"harness",
			"and saddlebags"
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"CHIMNEYSWEEP": {
		"id": "CHIMNEYSWEEP",
		"label": "Chimneysweep",
		"description": "In towns and cities throughout the Empire, households that can afford to do so burn charcoal to ward off the chill of winter. Many industries also make extensive use of charcoal, in particular the forges of Nuln. Heavy use clogs chimneys with soot, resulting in an increased demand for chimney sweeps. A good many of these workers are children, but many are halflings and particularly thin men. Working on the rooftops, they scrub out the chimneys to clear blockages – usually soot, but sometimes, far stranger things.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CHARCOAL_BURNER",
			"MINER",
			"PEASANT",
			"ROGUE",
			"THIEF"
		],
		"advanceTo": [
			"CAT_BURGLAR",
			"MERCENARY",
			"MILITIAMAN",
			"PROTAGONIST",
			"RAT_CATCHER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Contortionist or Very Strong",
			"Streetwise"
		],
		"trappings": [
			"Brush",
			"Grappling Hook",
			"10 Yards of Rope"
		],
		"notes": "",
		"source": "FoN",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 8
	},
	"CLOAKED_BROTHER": {
		"id": "CLOAKED_BROTHER",
		"label": "Cloaked Brother",
		"description": "Cloaked Brothers are hidden agents loosely affiliated with Sigmar’s Witch Hunters. Though not a true branch of the Templars, they often have cause to join forces with their, sometimes overzealous, brethren. However, they are just as likely to double cross them as they are with any organisation they deal with. Cloaked Brothers are masters of information. They infiltrate organisations to learn what they can, reporting their findings to their superiors – though who exactly “they” are is unknown. This organisation draws from a vast array of talent, from ex-Witch Hunters to Mutants.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 10,
			"S": 15,
			"T": 15,
			"Ag": 25,
			"Int": 30,
			"WP": 25,
			"Fel": 30
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ASSASSIN",
			"COURTIER",
			"CRIME_LORD",
			"DEMAGOGUE",
			"FRIAR",
			"MASTER_THIEF",
			"POLITICIAN",
			"SCOUT",
			"SPY",
			"VETERAN",
			"WITCH_HUNTER"
		],
		"advanceTo": [
			"ASSASSIN",
			"CHARLATAN",
			"CRIME_LORD",
			"DEMAGOGUE",
			"MASTER_THIEF",
			"POLITICIAN",
			"SCOUT",
			"SPY",
			"VETERAN",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_FOUR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Acute Hearing",
			"Alley Cat",
			"Coolheaded",
			"Linguistics or Mimic",
			"Savvy or Suave",
			"Schemer",
			"Streetwise"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Hand Weapon",
			"Garrotte",
			"Cloak",
			"Good Craftsmanship Disguise Kit",
			"three sets of Good Clothing",
			"one Dose of Poison"
		],
		"notes": "See Old World Armoury page 31 for details on Garotte.",
		"source": "ToC",
		"numberOfSkills": 13,
		"numberOfTalents": 7,
		"numberOfAdvances": 40
	},
	"COACHMAN": {
		"id": "COACHMAN",
		"label": "Coachman",
		"description": "While the Empire is a mighty nation, its lands are far from safe. Large stretches of it have never been pacified or cultivated. A precarious system of roads connects the villages, towns, and cities, and it is here that the Coachmen earn their pay, working for one of the many Imperially chartered coaching companies. The roads are frequently in ill repair or plagued by Goblins, Beastmen, and brigands. Nonetheless, the Coachmen risk life and limb to bring passengers and cargo safely through the hazards of the Imperial roadways. Each day is a race to reach the next settlement or coaching inn before sunset. No one wants to be on the road in the dark of the night, especially when the Chaos moon is in the sky.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"OUTRIDER",
			"MESSENGER"
		],
		"advanceTo": [
			"HIGHWAYMAN",
			"OUTLAW",
			"ROADWARDEN",
			"SCOUT",
			"SMUGGLER",
			"TOLL_KEEPER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "RANGER"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Quick Draw or Seasoned Traveller",
			"Specialist Weapon Group (Gunpowder)"
		],
		"trappings": [
			"Blunderbuss with powder/ammunition enough for 10 shots",
			"Medium Armour (Mail Shirt and Leather Jack)",
			"Instruments (Coach Horn)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"COURTIER": {
		"id": "COURTIER",
		"label": "Courtier",
		"description": "Courtiers surround the nobility at court, fawning over lieges and ladies in the hopes of getting ahead. They range from sycophants who desperately wish to please, to cunning schemers who seek the keys to wealth and prestige. Courtiers are frequently well-read and skilled public speakers, as they are often called upon to offer erudite opinions on a variety of subjects to their Noble patrons. No Courtier, no matter how clever, is ever fully secure in his position, as there is always another who desperately wants it and is willing to do nearly anything to get it. Female Courtiers are usually known as ladies-in-waiting.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 20,
			"WP": 20,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"DILETTANTE",
			"NOBLE",
			"HERALD",
			"PISTOLIER",
			"POLITICIAN"
		],
		"advanceTo": [
			"CHARLATAN",
			"DUELLIST",
			"NOBLE_LORD",
			"POLITICIAN",
			"STEWARD",
			"SPY"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "THE_ARTS"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "COMMAND"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "ANY_ONE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONNIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Dealmaker or Etiquette",
			"Public Speaking",
			"Savvy or Suave",
			"Schemer or Specialist  Weapon Group (Fencing)"
		],
		"trappings": [
			"4 Sets of Noble’s Garb",
			"100 gc",
			"Valet"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 4,
		"numberOfAdvances": 20
	},
	"CRIME_LORD": {
		"id": "CRIME_LORD",
		"label": "Crime Lord",
		"description": "Most cities of the Old World have one or more organized criminal organisations, such as Thieves’ or Assassins’ Guilds. Crime Lords are the leaders of these groups and they are powerful and dangerous folk. To be counted among their ranks one must be clever, ambitious and completely ruthless. Most claw their way up from the bottom, learning every dirty trick in the book as they ascend to power. Crime Lords can seldom afford the luxury of trust. They are experts at evaluating both people and situations to seek whatever advantage they can. Many Crime Lords become involved in local politics to further their power.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 15,
			"T": 15,
			"Ag": 20,
			"Int": 25,
			"WP": 20,
			"Fel": 30
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAT_BURGLAR",
			"DEMAGOGUE",
			"FENCE",
			"GUILD_MASTER",
			"MASTER_THIEF",
			"OUTLAW_CHIEF",
			"POLITICIAN",
			"STEWARD"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"MASTER_THIEF",
			"OUTLAW_CHIEF",
			"POLITICIAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "THIEVES_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "THIEF"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Dealmaker or Schemer",
			"Menacing",
			"Public Speaking",
			"Resistance to Poison",
			"Sixth Sense",
			"Specialist Weapon Group (Crossbow or Parrying)",
			"Streetwise"
		],
		"trappings": [
			"Crossbow pistol with 10 bolts or Sword-breaker",
			"One set of Best Craftsmenship Clothing",
			"Antitoxin Kit",
			"100 gc",
			"Criminal Organisation"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 7,
		"numberOfAdvances": 40
	},
	"CRUSADER": {
		"id": "CRUSADER",
		"label": "Crusader",
		"description": "It is perhaps the greatest deed a templar can perform to go to war in the name of the Gods. In ages past, especially during the crusades against Araby, it was unusual for a knight to not go on crusade with his order. But in more recent times crusades are far less common, especially on such a scale.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 30,
			"BS": 10,
			"S": 20,
			"T": 20,
			"Ag": 20,
			"Int": 20,
			"WP": 25,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 2,
			"W": 8,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KNIGHT",
			"NOBLE_LORD",
			"SERGEANT",
			"VETERAN"
		],
		"advanceTo": [
			"CAPTAIN",
			"JUDICIAL_CHAMPION",
			"EXPLORER",
			"INITIATE",
			"KNIGHT_OF_THE_INNER_CIRCLE",
			"NOBLE_LORD",
			"VETERAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "HISTORY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ARABYAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Orientation or Linguistics",
			"Seasoned Traveller",
			"Specialist Weapon Group (Parrying)",
			"Stout-hearted",
			"Strike to Injure",
			"Strike to Stun"
		],
		"trappings": [
			"Heavy Armour (Best Craftsmanship Full Plate Armour)",
			"Maps (depicting the route of either a pilgrimage or crusade)",
			"Religious Symbol"
		],
		"notes": "",
		"source": "ToS",
		"numberOfSkills": 9,
		"numberOfTalents": 6,
		"numberOfAdvances": 42
	},
	"CULT_ATTENDANT": {
		"id": "CULT_ATTENDANT",
		"label": "Cult Attendant",
		"description": "A cult attendant is an assistant to a cult’s priests, entrusted with organising all of the mundane details involved in the running of a temple. Cult attendants are concerned with the logistical side of a cult, organising orders of service, coordinating the activities of the clergy and the laity, and ensuring that rituals and prayers proceed as smoothly as possible. A cult attendant rules behind the scenes of a temple, and many pride themselves on remaining as inconspicuous as possible.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 5,
			"Ag": 0,
			"Int": 20,
			"WP": 15,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"COURTIER",
			"INITIATE",
			"MESSENGER",
			"PRIEST",
			"VALET"
		],
		"advanceTo": [
			"POLITICIAN",
			"PRIEST",
			"SQUIRE",
			"STEWARD"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			}
		],
		"talents": [
			"Dealmaker",
			"Public Speaking"
		],
		"trappings": [
			"Robes"
		],
		"notes": "",
		"source": "ToS",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 19
	},
	"DAEMON_SLAYER": {
		"id": "DAEMON_SLAYER",
		"label": "Daemon Slayer",
		"description": "In every generation there are one or two Slayers who cannot seem to find the death they crave. At every turn, destiny cheats them or perhaps, drives them forward, and as the long years pass, they grow more and more fierce, determined to find the mighty doom that awaits them. When neither Trolls nor Giants can fell a Slayer, he takes on the mightiest foes of all: the Daemons of Chaos. Daemon Slayers are frightening individuals. They are barely sane at best, the shame of their continuing survival weighing ever on their thoughts, yet they’re also among the greatest warriors that the Old World has ever known.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 40,
			"BS": 0,
			"S": 30,
			"T": 30,
			"Ag": 20,
			"Int": 0,
			"WP": 30,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 2,
			"W": 8,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"GIANT_SLAYER"
		],
		"advanceTo": [],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			}
		],
		"talents": [
			" Lightning Parry",
			"Unsettling"
		],
		"trappings": [
			"Great Weapon"
		],
		"notes": "Only Dwarfs can enter this career. You must have slain a Daemon of note to enter this career. ",
		"source": "WHFR",
		"numberOfSkills": 5,
		"numberOfTalents": 2,
		"numberOfAdvances": 40
	},
	"DEEPWATCHER": {
		"id": "DEEPWATCHER",
		"label": "Deepwatcher",
		"description": "The Deepwatch is made up of those too caught-up in the tales of adventure and glory to pay heed to the inherent dangers, or those too desperate to care. The Deepwatch are in essence a guild of professional adventurers, with groups dispatched into the tunnels beneath the city to keep them clear from monsters and stop any creatures from reaching the city. It’s a dangerous job, all right, but somebody has to do it.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"ENGINEER",
			"EXPLORER",
			"MERCENARY",
			"SERGEANT",
			"SMUGGLER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Evaluate",
			"Orientation",
			"Resistance to Disease",
			"Resistance to Poison",
			"Tunnel Rat"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Lantern",
			"Lamp Oil",
			"10 Yards of Rope"
		],
		"notes": "",
		"source": "WC",
		"numberOfSkills": 6,
		"numberOfTalents": 5,
		"numberOfAdvances": 9
	},
	"DEMAGOGUE": {
		"id": "DEMAGOGUE",
		"label": "Demagogue",
		"description": "Demagogues are the most popular Agitators, public speakers so gifted that they can move countries with their persuasive words. They are always counted among the leaders of whatever cause they choose to champion. Those in power view Demagogues with a great deal of suspicion, as they are far too capable of stirring up dissent or sowing mistrust against the government or the church. If they can be properly directed however, they’re also very useful for rallying the people against Chaos and other threats. Thus the authorities treat popular Demagogues with caution and sometimes even favour.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 0,
			"T": 10,
			"Ag": 15,
			"Int": 20,
			"WP": 15,
			"Fel": 30
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"ANOINTED_PRIEST",
			"ARTISAN",
			"CHARLATAN",
			"CRIME_LORD",
			"FLAGELLANT",
			"FRIAR",
			"INITIATE",
			"MINSTREL",
			"OUTLAW",
			"OUTLAW_CHIEF",
			"POLITICIAN",
			"ROGUE",
			"VAMPIRE_HUNTER",
			"WITCH_HUNTER"
		],
		"advanceTo": [
			"CRIME_LORD",
			"FRIAR",
			"MERCENARY",
			"OUTLAW_CHIEF",
			"POLITICIAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "HISTORY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Etiquette or Streetwise",
			"Master Orator",
			"Public Speaking",
			"Street Fighting"
		],
		"trappings": [
			"Light Armour (Leather Jack and Leather Skullcap)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 4,
		"numberOfAdvances": 27
	},
	"DILETTANTE": {
		"id": "DILETTANTE",
		"label": "Dilettante",
		"description": "Dilettantes like to think of themselves as scholars, and, indeed, they may pass as scholars among most folk; they read and write, for a start. However, they often lack the discipline or passion that leads true scholars to focus on one task and become truly skilled at that, rather spreading their efforts across many. Most dilettantes are from wealthy backgrounds; the poor find that imminent starvation focuses the mind wonderfully.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 5,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"APPRENTICE_WIZARD",
			"ASTROLOGER",
			"BARBER_SURGEON",
			"CATECHIST",
			"CHARLATAN",
			"COURTIER",
			"INITIATE",
			"NAVIGATOR",
			"RACONTEUR",
			"STUDENT",
			"TOMB_ROBBER",
			"TRADESMAN",
			"VERENEAN_INVESTIGATOR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "ANY_ONE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "ANY_ONE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "ARTIST"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "CALLIGRAPHER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "CARTOGRAPHER"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Etiquette"
		],
		"trappings": [
			"3 books",
			"craft tools",
			"writing kit"
		],
		"notes": "A Dilettante may not, in this career, buy a skill he already possesses, and thus may not gain any Skill Mastery bonuses. He does not lose any he already has.",
		"source": "CC",
		"numberOfSkills": 12,
		"numberOfTalents": 1,
		"numberOfAdvances": 10
	},
	"DROVER": {
		"id": "DROVER",
		"label": "Drover",
		"description": "Great herds of domesticated animals endlessly cross the wind-swept oblast, escorted from pasture to market, from market to customer. The tireless drovers overseeing these transfers can travel many hundred of miles with their herds, and some even visit distant markets in Ostermark or Ostland. Most drovers employ vicious dogs to help direct and guard the herds, and the distinctive barks and whistles used to control these hounds are a familiar sound on the oblast. In the civilised south there are regular competitions between drovers to see who can best herd animals with their dogs, and the winner is guaranteed the most lucrative contracts.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 10,
			"T": 5,
			"Ag": 10,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"COACHMAN",
			"MESSENGER",
			"OUTRIDER",
			"STEPPES_NOMAD"
		],
		"advanceTo": [
			"HIGHWAYMAN",
			"HORSE_COPER",
			"HORSE_MASTER",
			"MESSENGER",
			"OUTLAW",
			"OUTRIDER",
			"ROADWARDEN",
			"SCOUT"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_TRAINING"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TROLL_COUNTRY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "UNGOL"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Orientation",
			"Rover or Seasoned Traveller",
			"Specialist Weapon Group (Entangling)"
		],
		"trappings": [
			"herd dog",
			"Kislevite horse",
			"saddle and harness",
			"lasso",
			"several days of rations",
			"skins for water or kvas",
			"yurta for shelter",
			"leather jack and leggings"
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 9,
		"numberOfTalents": 3,
		"numberOfAdvances": 11
	},
	"DUELLIST": {
		"id": "DUELLIST",
		"label": "Duellist",
		"description": "A complex legal system of formal duels was established throughout the Empire ages ago. Duellists are specialists in the lethal application of sword and pistol, hiring themselves out to safeguard the honour of others, though many of their kind come from the ranks of younger Nobles who duel for their own purposes. Duellists come in two varieties: happy-go-lucky devil-may-care swashbucklers who regard their exploits as a continuous adventure, and deadly serious fighters who wear their honour on their sleeves and are very quick to take offence at slights, imagined or otherwise.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 20,
			"Ag": 20,
			"Int": 15,
			"WP": 15,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"COURTIER",
			"ESTALIAN_DIESTRO",
			"HIGHWAYMAN",
			"PISTOLIER",
			"PROTAGONIST",
			"SERGEANT",
			"TARGETEER"
		],
		"advanceTo": [
			"ASSASSIN",
			"CHAMPION",
			"HIGHWAYMAN",
			"ROGUE",
			"SERGEANT"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			}
		],
		"talents": [
			"Ambidextrous or Disarm",
			"Etiquette",
			"Master Gunner",
			"Mighty Shot",
			"Quick Draw",
			"Sharpshooter",
			"Specialist Weapon Group (Fencing)",
			"Specialist Weapon Group (Gunpowder)",
			"Specialist Weapon Group (Parrying)",
			"Strike Mighty Blow",
			"Strike to Injure",
			"Swashbuckler"
		],
		"trappings": [
			"Main Gauche",
			"Pistol with Powder and Ammunition for 10 Shots",
			"Rapier"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 12,
		"numberOfAdvances": 31
	},
	"DUNG_COLLECTOR": {
		"id": "DUNG_COLLECTOR",
		"label": "Dung Collector",
		"description": "Ensuring the streets are clean, these brave workers walk the alleys and thoroughfares with shovel and sturdy fortitude, pushing the worst of the offal out of the way to allow people to walk. Some are enterprising businessmen working the districts who can afford them, whilst others work for the city, patrolling the districts of those who pay them. While certainly not glorious, dung collectors often make do by selling dried dung as cheap fuel through the winters.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAMP_FOLLOWER",
			"PEASANT",
			"RAT_CATCHER",
			"VAGABOND"
		],
		"advanceTo": [
			"GRAVE_ROBBER",
			"RAT_CATCHER",
			"SEWER_JACK",
			"THUG"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Coolheaded",
			"Fearless or Resistance to Disease"
		],
		"trappings": [
			"Cart",
			"Shovel",
			"Bag of Maggots",
			"Dung"
		],
		"notes": "",
		"source": "FoN",
		"numberOfSkills": 7,
		"numberOfTalents": 2,
		"numberOfAdvances": 8
	},
	"EMBALMER": {
		"id": "EMBALMER",
		"label": "Embalmer",
		"description": "Not everyone wishes to be interred in Morr’s Gardens. Some prefer a more preserving process after their death, for themselves or their animal companions, and they turn to the embalmers. These masters of pickling, preservation, and taxidermy are not just a fad of the wealthy. The individuals increasingly have a hand in the growing field of medicine, and money can be made hand over fist in selling their curios to customers with a particular purpose in mind. Many priests of Morr (and much of the general population) consider cutting bits off people and putting them in jars to be an assault on both the body and spirit of the deceased, and Witch Hunters are well aware of how easily such merchants turn to the dark arts. As such, many embalmers choose to hide their Human exhibits behind their animal displays or their surgery services until the day scientists of their calibre are finally given the respect and recognition they deserve.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 0,
			"Int": 15,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"APOTHECARY",
			"BARBER_SURGEON",
			"STUDENT",
			"TRADESMAN"
		],
		"advanceTo": [
			"APPRENTICE_WIZARD",
			"BURGHER",
			"GRAVE_ROBBER",
			"PHYSICIAN",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "SCIENCE"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "APOTHECARY"
			}
		],
		"talents": [
			"Dealmaker or Streetwise",
			"Resistance to Disease",
			"Surgery"
		],
		"trappings": [
			"Abacus",
			"Ether-Soaked Apron",
			"Spare Hand",
			"Trade Tools (Barber-Surgeon)",
			"Writing Kit"
		],
		"notes": "",
		"source": "NDM",
		"numberOfSkills": 9,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"ENFORCER": {
		"id": "ENFORCER",
		"label": "Enforcer",
		"description": "Enforcers wander the Border Princes, providing justice or, failing that, vengeance. Or sometimes they just provide random violence, because anyone can make a mistake. On the whole, however, Enforcers have a code of right and wrong that they uphold. They pay no attention to the legal authority of princes or, indeed, to law, relying entirely on their own sense of ethics and ability to uncover true villains. Most Enforcers regard rogue Enforcers as the blackest of villains because their actions mean that any Enforcer is at risk of being run out of an area.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 10,
			"Ag": 10,
			"Int": 20,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOUNTY_HUNTER",
			"HUNTER",
			"WATCHMAN"
		],
		"advanceTo": [
			"SPY",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BORDER_PRINCES"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Menacing",
			"Quick Draw",
			"Schemer",
			"Specialist Weapon Group (Entangling)",
			"Street Fighting"
		],
		"trappings": [
			"Medium Armour (Chain Shirt and Leather Jack)",
			"Net"
		],
		"notes": "",
		"source": "RC",
		"numberOfSkills": 12,
		"numberOfTalents": 5,
		"numberOfAdvances": 26
	},
	"ENGINEER": {
		"id": "ENGINEER",
		"label": "Engineer",
		"description": "It was the Dwarfs who first introduced the science of engineering to the Old World. Among them, the Engineers’ Guild is deeply respected and its works are held in high esteem, so long as it upholds traditional methods and values. Humanity took what the Dwarfs had to offer and ran with it, especially in regards to gunpowder and other devices suitable for use as weapons. The Imperial School of Engineers in Altdorf is famed for its bizarre inventions, which can be most useful if they manage to function correctly. Outside the Empire, Tileans are particularly famed for their bold engineering ideas.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 15,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 20,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ARTISAN",
			"MINER",
			"STUDENT",
			"TRADESMAN"
		],
		"advanceTo": [
			"ARTISAN",
			"EXPLORER",
			"GUILD_MASTER",
			"PISTOLIER",
			"SMUGGLER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ENGINEERING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "SCIENCE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "DWARFS"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KHAZALID"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "GUNSMITH"
			}
		],
		"talents": [
			"Master Gunner",
			"Specialist Weapon Group (Engineer or Gunpowder)"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Engineer’s Kit",
			"6 Spikes"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 19
	},
	"ENTERTAINER": {
		"id": "ENTERTAINER",
		"label": "Entertainer",
		"description": "From acrobats to strongmen, from knife throwers to hypnotists, from dancers to ventriloquists, the Empire is full of Entertainers. Some do it for the roar of the crowd and others for the money. Many become Entertainers just to escape the hard life of the Imperial villager. Entertainers travel frequently, sometimes alone but more often in troupes that perform in villages, towns, and cities. Lucky troupes get continuous bookings, sometimes spending months in the same city. The less fortunate scrape by as they can, always looking for a more appreciative crowd (or a less suspicious watch) over the next hill. The very best Entertainers gain Noble sponsorship and earn undreamed of sums of money performing for the upper crust.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HERALD",
			"ROGUE",
			"THIEF",
			"VAGABOND"
		],
		"advanceTo": [
			"CHARLATAN",
			"MINSTREL",
			"ROGUE",
			"THIEF",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_TRAINING"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "BLATHER"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HYPNOTISM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SCALE_SHEER_SURFACE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SLEIGHT_OF_HAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "VENTRILOQUISM"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Any two of: Lightning Reflexes,  Mimic,  Public Speaking,  Quick Draw,  Sharpshooter,  Specialist Weapon Group (Throwing),  Trick Riding,  Very Strong,  Wrestling"
		],
		"trappings": [
			"Light Armour (Leather Jerkin)",
			"Any one of: Instrument (any onee),  Trade Tools (Performer),  3 Throwing Knives,  2 Throwing Axes",
			"Any one of: Costume",
			"One Set of Good Craftmanship Clothes"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 1,
		"numberOfAdvances": 10
	},
	"ENVOY": {
		"id": "ENVOY",
		"label": "Envoy",
		"description": "The elder members of the great Elven mercantile families are far removed from the everyday life of the Empire. To them, Humans live and die so quickly that it’s hard to keep up with current trends and politics in the Old World. When they need such knowledge, they turn to their Envoys. These young Elves are the public face of the Merchant Houses. They negotiate the contracts, make the deals, and keep the peace with the Humans of trading hubs such as Altdorf, Nuln, and Marienburg. Even Elves have a limit to their patience, so it is unsurprising that many Envoys take leave of their families for the adventurer’s life.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"STUDENT",
			"TRADESMAN"
		],
		"advanceTo": [
			"CHARLATAN",
			"MERCHANT",
			"ROGUE",
			"SEAMAN",
			"STUDENT",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "THE_WASTELAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "MERCHANT"
			}
		],
		"talents": [
			"Dealmaker or Seasoned Traveller"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"2 sets of Good Workmanship Clothes",
			"Writing Kit"
		],
		"notes": "Only Elves can enter this career.",
		"source": "WHFR",
		"numberOfSkills": 10,
		"numberOfTalents": 1,
		"numberOfAdvances": 10
	},
	"ESTALIAN_DIESTRO": {
		"id": "ESTALIAN_DIESTRO",
		"label": "Estalian Diestro",
		"description": "The Estalian Kingdoms are southwest of the Empire. There the threat of Chaos seems remote. The Chaos Wastes are quite distant from this sunny land, which has never witnessed the wrath of bloodthirsty hordes the way the Empire and Kislev have. Its people engage in other pursuits, from science and scholarship to crime and vendetta. One thing Estalians dearly love is swordplay. Its cities sport many fencing schools, each with its own style. Many of these styles are descended from the teachings of Master Figueroa, a legendary swordsman who applied the latest scientific theories to his swordplay with spectacular results. Followers of the Figueroa style, known as Diestro, fight and duel across Estalia. Some, bored with their homeland, seek excitement elsewhere, favouring Tilea and Bretonnia. The bravest travel northeast to the Empire to test their rapiers against worthy opponents, and to see a land in the front line of the struggle against Chaos.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 15,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"BODYGUARD",
			"DUELLIST",
			"HIGHWAYMAN",
			"PROTAGONIST",
			"ROGUE"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "SCIENCE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ESTALIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ESTALIAN"
			}
		],
		"talents": [
			"Lightning Reflexes or Swashbuckler",
			"Quick Draw or Strike to Injure",
			"Specialist Weapon Group (Fencing)",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Foil or Rapier",
			"One set of Best Craftmanship Clothes",
			"Perfume or Cologne",
			"Healing Draught"
		],
		"notes": "If this is your Starting Career, you are from Estalia, but have come to the Empire to seek adventure.",
		"source": "WHFR",
		"numberOfSkills": 5,
		"numberOfTalents": 4,
		"numberOfAdvances": 11
	},
	"EXCISEMAN": {
		"id": "EXCISEMAN",
		"label": "Exciseman",
		"description": "All cities require taxes and tariffs to function. The constant flow of money ensures public works and servants receive the funding they need, whilst also lining the pockets of the politicians. But no matter how good the cause or how noble the deed, no one likes to pay taxes. Since this is unpopular reality, most lawmakers distance themselves from the collection of monies, relying on specially hired Excisemen to do their work instead. Of all the people in the city, the Exciseman is likely the most unpopular, right alongside the dyers, beggars, and the rest of the rabble. Though they face hostility at every turn, most Excisemen know their duty is a necessary one. Still, these individuals are rarely well paid for their thankless job. As a result, few of them enjoy what they do and look for the fastest route to improve their lot, either through skimming the coffers and double-dealing or working extra hard in the faint hope of securing a better position in the government.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"MESSENGER",
			"SCRIBE"
		],
		"advanceTo": [
			"AGITATOR",
			"LITIGANT",
			"MERCHANT",
			"MILITIAMAN",
			"OUTLAW",
			"ROADWARDEN",
			"THIEF"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			}
		],
		"talents": [
			"Dealmaker",
			"Savvy or Suave",
			"Schemer",
			"Super Numerate"
		],
		"trappings": [
			"Abacus",
			"Hand Weapon",
			"Light Armour",
			"Writing Kit",
			"1d10/2 gc"
		],
		"notes": "",
		"source": "TiT",
		"numberOfSkills": 7,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"EX_CONVICT": {
		"id": "EX_CONVICT",
		"label": "Ex-Convict",
		"description": "The prisons of the Old World are brutal sub-realms unto themselves where only the strong and ruthless survive. Of the few convicts who do live through their sentences, most return to society as harder criminals than before they entered prison. The Shallyan might preach about forgiveness and secondchances, but the truth is that the rare ex-convict who does manage to reform is met with the same suspicion and resentment as those who do not. In the end, most ex-convicts are released into an unreceptive world with few opportunities other than to commit new crimes, return to prison and begin the cycle anew.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 5,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"GRAVE_ROBBER",
			"OUTLAW",
			"PROTAGONIST",
			"ROGUE",
			"SMUGGLER",
			"THIEF",
			"THUG",
			"TOMB_ROBBER"
		],
		"advanceTo": [
			"CAT_BURGLAR",
			"CHARLATAN",
			"FENCE",
			"GRAVE_ROBBER",
			"HIGHWAYMAN",
			"OUTLAW",
			"PROTAGONIST",
			"RACKETEER",
			"THUG",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "PRISON_CANT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			}
		],
		"talents": [
			"Flee!",
			"Resistance to Disease or Contortionist",
			"Street Fighter or Wrestling"
		],
		"trappings": [
			"Good Craftsmanship Improvised Weapon",
			"Bone Dice",
			"Lice",
			"Poor Clothes"
		],
		"notes": "",
		"source": "CC",
		"numberOfSkills": 4,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"EXORCIST": {
		"id": "EXORCIST",
		"label": "Exorcist",
		"description": "Among the many dangers (natural and unnatural) facing the people of the Old World is possession by malefic spirits. Seeking to do harm in the land of the living, these spirits take over the bodies of their victims with the goal of wreaking as much havoc as possible. Some are nearly mindless, sending their hosts on violent rampages ending most often in the death of all concerned. Others are subtler in their activities, using the victim’s unwitting friends, family, and associates to help it carry out horrifying deeds. Among the Undead, possession commonly reflects a desire to resume the life the spirit once led, to be close again to a loved one, or to have revenge.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 10,
			"T": 15,
			"Ag": 15,
			"Int": 20,
			"WP": 35,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"PRIEST"
		],
		"advanceTo": [
			"ANOINTED_PRIEST",
			"LAY_PRIEST",
			"SCHOLAR",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "DAEMONOLOGY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HYPNOTISM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "DAEMONIC"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Coolheaded or Savvy",
			"Divine Lore (any one)",
			"Lesser Magic (Exorcism)",
			"Lesser Magic (any one)",
			"Menacing or Sixth Sense",
			"Strong-minded or Stout-hearted"
		],
		"trappings": [
			"Cult Robes",
			"License",
			"Prayer Book",
			"Religious Symbol"
		],
		"notes": "",
		"source": "SH",
		"numberOfSkills": 11,
		"numberOfTalents": 6,
		"numberOfAdvances": 32
	},
	"EXPLORER": {
		"id": "EXPLORER",
		"label": "Explorer",
		"description": "Explorers are afflicted by wanderlust and travel extensively across the Old World and beyond. They channel their great need to know what lies beyond the next horizon into finding new lands and new opportunities for trade. Explorers regularly delve into the unknown, which either turns them into canny fighters and diplomats or makes them very short-lived. They are skilled in travelling by both land and sea. Explorers tend to be highly capable individuals. The variety of roles they are called upon to assume forces them to become very flexible, able to command troops or negotiate in tongues they barely understand.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 15,
			"Ag": 15,
			"Int": 25,
			"WP": 20,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAPTAIN",
			"ENGINEER",
			"HERALD",
			"MASTER_THIEF",
			"MASTER_WIZARD",
			"MATE",
			"NAVIGATOR",
			"SCHOLAR",
			"SCOUT",
			"SEA_CAPTAIN",
			"SPY",
			"WIZARD_LORD"
		],
		"advanceTo": [
			"CAPTAIN",
			"MERCHANT",
			"SEA_CAPTAIN",
			"SPY"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "LAW"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "RANGER_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "SCOUT"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "CARTOGRAPHER"
			}
		],
		"talents": [
			"Orientation or Linguistics",
			"Seasoned Traveller"
		],
		"trappings": [
			"Bow or Crossbow with 10 arrows or bolts",
			"Hand Weapon",
			"Medium Armour (Mail Shirt and Leather Jack)",
			"Shield",
			"6 Maps",
			"1",
			"000 gc in coin and trade goods",
			"Riding Horse with saddle and harness"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 17,
		"numberOfTalents": 2,
		"numberOfAdvances": 35
	},
	"FACELESS": {
		"id": "FACELESS",
		"label": "Faceless",
		"description": "All bands of Herrimaults have a leader; if a group gathers by chance, either a leader arises or the group fragments once more. Successful bands of Herrimaults are almost always led by a Faceless, an individual highly experienced in the pursuit of right and justice by unconventional means. Faceless, unlike conventional Outlaw Chiefs, rarely have to worry about being stabbed in the back by their own followers. Similarly, most encourage potential Faceless in their band to develop and then establish their own group. Ethics have their advantages. On the other hand, they have to keep their band fed, find shelter, and right wrongs, all without stepping over the ethical lines that they set for themselves. Eventually, some find the pressure too great.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 30,
			"S": 10,
			"T": 20,
			"Ag": 10,
			"Int": 10,
			"WP": 10,
			"Fel": 35
		},
		"secondaryProfile": {
			"A": 2,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BATTLE_PILGRIM",
			"CRIME_LORD",
			"DEMAGOGUE",
			"KNIGHT_OF_THE_REALM",
			"NOBLE_LORD",
			"OUTLAW_CHIEF",
			"POLITICIAN",
			"QUESTING_KNIGHT",
			"STEWARD",
			"VETERAN"
		],
		"advanceTo": [
			"CRIME_LORD",
			"DEMAGOGUE",
			"EXPLORER",
			"HIGHWAYMAN",
			"OUTLAW_CHIEF"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BRETONNIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "RANGER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "SCOUT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Mighty Shot",
			"Public Speaking",
			"Rapid Reload",
			"Sure Shot",
			"Unsettling"
		],
		"trappings": [
			"Bow with 10 Arrows",
			"Medium Armour (Sleeved Mail Shirt and Leather Jack)",
			"Band of Herrimaults",
			"Deep Hood or Mask"
		],
		"notes": "Women can only become Faceless if disguised as men",
		"source": "KotG",
		"numberOfSkills": 13,
		"numberOfTalents": 5,
		"numberOfAdvances": 35
	},
	"FARMER": {
		"id": "FARMER",
		"label": "Farmer",
		"description": "The old feudal order of the Empire is no longer what it once was, and a new enterprising class is bridging the gap between peasant and noble. In cities, burghers have begun to appear. Their equivalent in the countryside is an emerging class of landed gentry. Land is often parcelled out to commoners as a reward for military service, or merchants invest their wealth by purchasing the estates of impoverished nobles. Rarely, tenant peasants save enough to buy the fields they till from their lord. Land is inherited, but no farmer’s claim yet spans more than a couple of generations. A farmer employs many hands to work the land, but he toils as hard as any peasant, for the wealth that hard work brings provides a significant social standing in the rural community.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 10,
			"T": 10,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"INNKEEPER",
			"MERCHANT",
			"PEASANT",
			"TRADESMAN",
			"VETERAN"
		],
		"advanceTo": [
			"INNKEEPER",
			"MERCHANT",
			"MILITIAMAN",
			"POLITICIAN",
			"STEWARD"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM_ANIMAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SET_TRAP"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "FARMER"
			}
		],
		"talents": [
			"Dealmaker",
			"Hardy",
			"Specialist Weapon (Scythe or Flail)"
		],
		"trappings": [
			"Cart pulled by a horse or ox",
			"scythe (two-handed weapon) or threshing flail (flail)",
			"sheep dog."
		],
		"notes": "",
		"source": "CC",
		"numberOfSkills": 9,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"FENCE": {
		"id": "FENCE",
		"label": "Fence",
		"description": "The majority of Burghers and Tradesmen are willing to deal in goods of questionable legality. Such merchandise is the stock and trade of the Fence. They are experts at liquidating stolen goods. For a percentage of the profit, they take a thief’s bounty and move it to another town, city, or even country where it can be more safely disposed of. Fences are experts at evaluating the worth of any given item and therefore exactly how hot it is likely to be. The greater the risk, the greater the cut they demand.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 10,
			"S": 10,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BURGHER",
			"CAT_BURGLAR",
			"EX_CONVICT",
			"GRAVE_ROBBER",
			"INNKEEPER",
			"RACKETEER",
			"RAPSCALLION",
			"SMUGGLER",
			"STEWARD",
			"THIEF",
			"TOMB_ROBBER"
		],
		"advanceTo": [
			"CHARLATAN",
			"CRIME_LORD",
			"MASTER_THIEF",
			"RACKETEER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			}
		],
		"talents": [
			"Dealmaker or Streetwise",
			"Strike to Stun",
			"Super Numerate"
		],
		"trappings": [
			"Trade Tools (Engraver’s Kit)",
			"Writing Kit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 20
	},
	"FERRYMAN": {
		"id": "FERRYMAN",
		"label": "Ferryman",
		"description": "Rivers both large and small cut through the Empire. While a few are shallow enough to ford easily, most require transport to cross safely. Ferrymen make their living moving people and goods across the Empire’s rivers, for a fee of course. They favour flat-bottomed barges because they have a shallow draft and plenty of deckspace. Ferrymen in more remote areas also favour the blunderbuss. Bandits are a constant danger and the blunderbuss provides not-so-subtle encouragement to move along. Many Ferrymen are also extortionists of the highest order, arbitrarily changing their prices based on the apparent wealth and desperateness of their passengers.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 10,
			"T": 5,
			"Ag": 5,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"COACHMAN",
			"SMUGGLER",
			"TOLL_KEEPER"
		],
		"advanceTo": [
			"BOATMAN",
			"HIGHWAYMAN",
			"ROADWARDEN",
			"SEAMAN",
			"SMUGGLER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "RANGER_TONGUE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Marksman or Suave",
			"Specialist Weapon Group (Gunpowder) or Street Fighting"
		],
		"trappings": [
			"Crossbow with 10 bolts or Blunderbuss with powder/ammunition enough for 10 shots,  Light Armour (Leather Jack)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"FIELDWARDEN": {
		"id": "FIELDWARDEN",
		"label": "Fieldwarden",
		"description": "To outsiders the Moot looks like a safe and happy land. The extent to which that’s true is due to the Fieldwardens. These Halflings patrol the borders of the Moot, keeping away threats and unwanted outsiders. They are skilled skirmishers who use their intimate knowledge of the Moot to maximum advantage. They prefer to attack from ambush, using their superior skill with missile weapons to neutralize the size advantage of their foes. Since the Moot shares a border with Sylvania, the Fieldwardens have particular expertise in dealing with the living dead. More than one band of zombies has been brought down by a fusillade of slingstones from determined Fieldwardens.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HUNTER",
			"MILITIAMAN",
			"TOLL_KEEPER"
		],
		"advanceTo": [
			"BOUNTY_HUNTER",
			"MERCENARY",
			"SCOUT",
			"VAGABOND",
			"VAMPIRE_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Fleet Footed or Savvy",
			"Mighty Shot or Rapid Reload",
			"Rover or Quick Draw"
		],
		"trappings": [
			"Sling with Ammunition",
			"Lantern",
			"Lamp Oil",
			"Spade",
			"Pony with Saddle and Harness"
		],
		"notes": "Only Halflings can enter this career.",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"FISHERMAN": {
		"id": "FISHERMAN",
		"label": "Fisherman",
		"description": "Fishermen seek the bounty of the sea. The many villages on Nordland’s coastline are home to countless Fishermen. These hearty souls brave the Sea of Claws in small craft, despite the constant threat of pirates and raiders from Norsca. There are also some fishing communities inland, by lakes and rivers, though these villages also pursue agriculture. Fishermen are an independent lot as a matter of course. They work in small crews, and when on the water every decision is their own. This spirited nature is one reason why dockside taverns are always unruly.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 5,
			"S": 10,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOATMAN",
			"PEASANT"
		],
		"advanceTo": [
			"MARINE",
			"MERCHANT",
			"MILITIAMAN",
			"NAVIGATOR",
			"SEAMAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "THE_WASTELAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "MERCHANT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SAIL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "REIKSPIEL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "NORSE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Hardy or Savvy",
			"Orientation or Street Fighting"
		],
		"trappings": [
			"Fish Hook and Line",
			"Spear"
		],
		"notes": "During character creation, if you take Common Knowledge (the Wasteland), your character can be from the great port of Marienburg at your option.",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"FLAGELLANT": {
		"id": "FLAGELLANT",
		"label": "Flagellant",
		"description": "Flagellants are crazed religious fanatics who barely care if they live or die, so long as they can strike a blow against Chaos and all that they perceive as vile before they go. They are often remarkablly charismatic individuals who lead other broken souls, as the force of their personality and their strong religious convictions draw others to them. Flagellants always wield massive weapons, the better to smite their enemies, and eschew the use of armour, feeling that their Gods will protect them until the proper time to die has come. Saner folk tend to actively avoid their company.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 0,
			"S": 10,
			"T": 15,
			"Ag": 5,
			"Int": 0,
			"WP": 20,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"FRIAR",
			"PRIEST",
			"ZEALOT"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"INTERROGATOR",
			"PRIEST",
			"SOLDIER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			}
		],
		"talents": [
			"Fearless",
			"Specialist Weapon Group (Flail or Twohanded Weapon)",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Flail or Great Weapon",
			"Bottle of Good Craftsmenship Spirits",
			"Religious Symbol",
			"Religious Relic"
		],
		"notes": "You must have at least one insanity to enter this career.",
		"source": "WHFR",
		"numberOfSkills": 5,
		"numberOfTalents": 3,
		"numberOfAdvances": 22
	},
	"FOREMAN": {
		"id": "FOREMAN",
		"label": "Foreman",
		"description": "Deep-throated voices echo through the crowded cities of the Old World as Foremen lead their sweating gangs with harsh words and bawdy song. In the bustling docks, the screech of a Foreman’s whistle sends the unemployed running from their smoky taverns, all desperate to shift backbreaking, heavy cargo from quay to warehouse in exchange for some coin. As Foremen are often paid according to the speed of their men’s work, they can be pitiless taskmasters, “motivating” their temporary workers by any means possible. In contrast, Stevedore Foremen lead their long-term gangs with tangible pride, confidently negotiating with dock owners and traders for extra work and wages as well as actively taking part in guild matters and turf disputes. Because of this, they typically look down upon their labourer-leading contemporaries with undisguised scorn.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 10,
			"T": 10,
			"Ag": 5,
			"Int": 5,
			"WP": 15,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"PEASANT",
			"SCRIBE",
			"STEVEDORE",
			"TRADESMAN"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"FENCE",
			"GUILD_MASTER",
			"POLITICIAN",
			"RACKETEER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "THE_WASTELAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "SINGER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			}
		],
		"talents": [
			"Public Speaking",
			"Streetwise"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Whistle"
		],
		"notes": "",
		"source": "WC",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 19
	},
	"FORGER": {
		"id": "FORGER",
		"label": "Forger",
		"description": "Forgers are the artists of the criminal world, but theirs is a calling of imitation, not original creation. Forgers make their living by copying a work by another and passing it off as an original, whether it is a painting of an emperor, the seal on an “official” document, or a signature on an incriminating letter. Forgers prefer to work in relative anonymity; not only is their work a crime often punished by mutilation, but revealing one of their creations as a fake spoils some of the triumph felt in a successful job.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 10,
			"T": 10,
			"Ag": 20,
			"Int": 20,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ARTISAN",
			"CARTOGRAPHER",
			"MESSENGER",
			"SMUGGLER",
			"STUDENT",
			"TRADESMAN"
		],
		"advanceTo": [
			"ARTISAN",
			"CHARLATAN",
			"FENCE",
			"SCRIBE",
			"TRADESMAN",
			"STUDENT",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THE_ARTS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "THIEF"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ARTIST"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "CALLIGRAPHER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "SMITH"
			}
		],
		"talents": [
			"Artistic",
			"Coolheaded or Dealmaker",
			"Flee! or Suave"
		],
		"trappings": [
			"Trade Tools (Forger)",
			"Writing Kit"
		],
		"notes": "The Old World Armoury includes rules for coin forgery",
		"source": "SH",
		"numberOfSkills": 12,
		"numberOfTalents": 3,
		"numberOfAdvances": 21
	},
	"FREEHOLDER": {
		"id": "FREEHOLDER",
		"label": "Freeholder",
		"description": "One of the greatest rewards a Jarl may grant to his Bondsmen and loyal Peasants is land. Upon gaining property, these men and women are accorded a special status. For those who were not warriors, they have the same status as Bondsmen. For those who were once warriors, land is usually a gift given in exchange for lengthy and valued service. Many Freeholders eventually become Jarls if selected by their King. Otherwise, they gain a piece of land and a number of Thralls to work it.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BONDSMAN",
			"BURGHER",
			"FISHERMAN",
			"SKALD",
			"WHALER",
			"TRADESMAN"
		],
		"advanceTo": [
			"ARTISAN",
			"INNKEEPER",
			"MARAUDER",
			"MERCHANT",
			"SLAVER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "NORSCA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Dealmaker",
			"Public Speaking",
			"Savvy",
			"Schemer",
			"Suave"
		],
		"trappings": [
			"Longhouse and at least 1 Acre of Land",
			"1d10 Thralls",
			"Livestock"
		],
		"notes": "",
		"source": "ToC",
		"numberOfSkills": 9,
		"numberOfTalents": 5,
		"numberOfAdvances": 13
	},
	"FRIAR": {
		"id": "FRIAR",
		"label": "Friar",
		"description": "Friars are mendicants who wander the Empire teaching religious virtue by example. Their orders date back to the time of Magnus the Pious. A Witch Hunter, Berndt of Wurtbad, was a particular foe of the cults of Slaanesh, the Chaos God of Sensuality and Pleasure. Berndt saw how decadence and lust lead inexorably to the embrace of Slaanesh. After years of blood and fire, Berndt laid aside his sword and torch, gave away his possessions, and began to walk the roads of the Empire preaching a message of poverty, chastity, and obedience. He wore nothing but a hair shirt and lived off the charity of the common folk. His fervent belief was that a humble life of poverty was the surest way to fight the insidious seduction of Chaos. The Order of St. Berndt was the first mendicant order of the Empire, though several others have sprung up since.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 0,
			"Int": 15,
			"WP": 15,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"DEMAGOGUE",
			"INITIATE",
			"LAY_PRIEST",
			"PHYSICIAN",
			"PRELATE",
			"SCHOLAR",
			"VAGABOND",
			"ZEALOT"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"FLAGELLANT",
			"LAY_PRIEST",
			"PRELATE",
			"PRIEST",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Seasoned Traveller"
		],
		"trappings": [
			"Healing Draught",
			"Religious Symbol",
			"Religious Relic",
			"Robes"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 1,
		"numberOfAdvances": 18
	},
	"FROGWIFE": {
		"id": "FROGWIFE",
		"label": "Frogwife",
		"description": "Frogwives are a common sight in Mousillon’s villages. They take the buckets of snails and frogs caught by the village Swampaires (often their husbands, sons, or fathers) and gut them  long into the evening. A Frogwife is not only an expert at the gutting and cleaning of frogs and snails, but also forms a crucial part of a village’s social structure. Frogwives tend to be relatively knowledgeable about the surrounding world, sometimes being permitted to leave the village for short periods of time to find useful herbs or other essentials from neighbouring villages. Some Frogwives are experts in the use of herbs, folk medicine, or some other esoteric but useful pursuit. It is a rare Frogwife who does not know the majority of what is going on in her village, and Frogwives have a deserved reputation as gossips, storytellers, and the originators of many strange superstitions. A Frogwife is almost always a woman, and it is a great shame for a man to labour at the swamp bucket.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAMP_FOLLOWER",
			"PEASANT"
		],
		"advanceTo": [
			"BOATMAN",
			"CAMP_FOLLOWER",
			"SWAMPAIRE",
			"GRAIL_PILGRIM",
			"HERRIMAULT",
			"SERVANT",
			"TRADESMAN",
			"VAGABOND",
			"VILLAGE_ELDER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "COOK"
			}
		],
		"talents": [
			"Dealmaker",
			"Hardy or Rover",
			"Stout-hearted",
			"Streetwise"
		],
		"trappings": [
			"Entrails bucket",
			"frog guts",
			"snail shells",
			"sharp knife"
		],
		"notes": "",
		"source": "BotD",
		"numberOfSkills": 7,
		"numberOfTalents": 4,
		"numberOfAdvances": 9
	},
	"GAMBLER": {
		"id": "GAMBLER",
		"label": "Gambler",
		"description": "Gamblers eschew the hard work of the lower and middle classes. After all, why toil for such small rewards when a month’s income can be made with one well-played hand? Gamblers use their skill at games of chance to make money from the wealthy and the slow-witted. They haunt coaching inns and game houses, ready to part the gullible from their coins. Sometimes things go wrong and gamblers lose large sums of money. In these cases, a swift escape is in order, before the creditors discover that the debts can’t be paid. Gamblers tend to be drifters by nature, always moving on to avoid old debts and sore losers.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 0,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ENTERTAINER",
			"NOBLE",
			"ROGUE",
			"MERCENARY",
			"STUDENT",
			"THIEF",
			"VAGABOND"
		],
		"advanceTo": [
			"CHARLATAN",
			"DEMAGOGUE",
			"ENTERTAINER",
			"HIGHWAYMAN",
			"RAPSCALLION",
			"ROGUE"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "COMPOSITE",
				"operator": "OR",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "THIEVES_TONGUE"
					}
				]
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "THIEF"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Etiquette or Streetwise",
			"Flee! or Luck"
		],
		"trappings": [
			"Dice",
			"Deck of Cards",
			"Leather Jerkin"
		],
		"notes": "",
		"source": "SH",
		"numberOfSkills": 7,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"GHOST_STRIDER": {
		"id": "GHOST_STRIDER",
		"label": "Ghost Strider",
		"description": "Nearly supernaturally silent and fleet of foot, Ghost Striders roam over the Old World seeking out the forces of Chaos and various other threats to the natural world. They are most at home in the forest, though they can readily pass unseen over mountains and other terrain if need be. Ghost Striders are deadly archers, famed for never missing their targets. They are usually either softspoken or taciturn and considered to be both odd and intimidating, even by their own people. They are often more comfortable with the natural world than they are around other sentient beings.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 30,
			"S": 15,
			"T": 15,
			"Ag": 25,
			"Int": 20,
			"WP": 20,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 2,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"SCOUT"
		],
		"advanceTo": [
			"CAPTAIN",
			"OUTLAW_CHIEF",
			"TARGETEER",
			"VAMPIRE_HUNTER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "LIP_READING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "RANGER_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "RANGER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SET_TRAP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Hardy or Fleet Footed",
			"Lightning Parry",
			"Mighty Shot",
			"Quick Draw",
			"Rapid Reload",
			"Sure Shot"
		],
		"trappings": [
			"Elfbow with 10 Arrows",
			"Light Armour (Best Craftsmenship Full Leather Armour)"
		],
		"notes": "Only Elves can enter this career",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 6,
		"numberOfAdvances": 37
	},
	"GIANT_SLAYER": {
		"id": "GIANT_SLAYER",
		"label": "Giant Slayer",
		"description": "There are many Troll Slayers who wish to find death, but secretly fear it. There are others, however, who are just too ferocious to readily die. These rare few become Giant Slayers: obsessed Dwarfs who have found that not even Trolls could offer a sufficient enough challenge to give them the glorious ending they crave. They continue to seek out combat and a proper death wherever they go, many of them becoming morose drinkers when they aren’t in the midst of battle. Giant Slayers continue to sport the spiky orange Slayer crest, but they tend to be covered with far more tattoos.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 0,
			"S": 15,
			"T": 15,
			"Ag": 10,
			"Int": 0,
			"WP": 20,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"TROLL_SLAYER"
		],
		"advanceTo": [
			"DAEMON_SLAYER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Fearless",
			"Resistance to Poison",
			"Specialist Weapon Group (Flail)",
			"Strike to Injure"
		],
		"trappings": [
			"Great Weapon"
		],
		"notes": "Only Dwarfs can enter this career. You must have slain a Giant to enter this career.",
		"source": "WHFR",
		"numberOfSkills": 5,
		"numberOfTalents": 4,
		"numberOfAdvances": 24
	},
	"GRAIL_KNIGHT": {
		"id": "GRAIL_KNIGHT",
		"label": "Grail Knight",
		"description": "Grail Knights are the flower of Bretonnian chivalry, the ideal to which all other knights aspire, at least in theory. The King of Bretonnia is always a Grail Knight, as are a number of the Dukes. There are also, however, many Grail Knights of lesser rank, including the hermit knights who spend their lives tending Grail Chapels. Those who have drunk from the Grail are transformed. Their dedication to the ideals of chivalry becomes absolute, and most shine with a Fay light. This light fades over a few days after the knight drinks from the grail, but it may brighten once more when he is fighting particularly bravely for the Lady of the Lake.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 40,
			"BS": 0,
			"S": 30,
			"T": 30,
			"Ag": 25,
			"Int": 10,
			"WP": 25,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 2,
			"W": 8,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"QUESTING_KNIGHT"
		],
		"advanceTo": [
			"CAPTAIN",
			"COURTIER",
			"EXPLORER",
			"FACELESS",
			"NOBLE_LORD",
			"POLITICIAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "GENEALOGY_HERALDRY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "RELIGION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BRETONNIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			}
		],
		"talents": [
			"Grail Virtue (the one that matches the character’s Virtue of Knighthood)",
			"Luck",
			"Public Speaking",
			"Resistance to Chaos",
			"Sixth Sense",
			"Specialist Weapon Group (Two-handed)",
			"Stout-hearted",
			"Strike Mighty Blow",
			"Strike to Injure",
			"Sturdy",
			"Very Resilient",
			"Very Strong",
			"Warrior Born"
		],
		"trappings": [
			"Heavy Armour (Full Plate Armour)",
			"Shield",
			"Icon of the Lady of the Lake",
			"Destrier with Saddle and Harness",
			"Sip from the Grail"
		],
		"notes": "Only male Bretonnian nobles can become Grail Knights. The Lady of the Lake is not fooled by disguises.",
		"source": "KotG",
		"numberOfSkills": 10,
		"numberOfTalents": 13,
		"numberOfAdvances": 47
	},
	"GRAIL_PILGRIM": {
		"id": "GRAIL_PILGRIM",
		"label": "Grail Pilgrim",
		"description": "Grail Pilgrims are peasants devoted to the Lady of the Lake, as represented by her Grail Knights. They believe that Grail Knights are paragons of courage, justice, and courtesy, and that the best way they, as lowly peasants, can serve the Lady is to serve a Grail Knight. To this end, they choose a Grail Knight and follow him around. If the knight drops anything (broken spoons, old buttons, and so on), they seize them and treasure them as relics, a means of contact with the holy. If the Grail Knight needs anything, they get it for him. And if the Grail Knight is in danger, they try to fight for him. Most Grail Pilgrims do not have long lives.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 0,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CARCASSONNE_SHEPHERD",
			"HUNTER",
			"HERRIMAULT",
			"OUTLAW",
			"PEASANT",
			"TRADESMAN",
			"VAGABOND"
		],
		"advanceTo": [
			"BATTLE_PILGRIM",
			"CARCASSONNE_SHEPHERD",
			"MERCENARY",
			"HERRIMAULT",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BRETONNIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Etiquette",
			"Hardy or Very Resilient",
			"Specialist Weapon Group (Two-handed)",
			"Stout-hearted or Strong-minded"
		],
		"trappings": [
			"Halberd",
			"Light Armour (Leather Jack)",
			"Bits That Fell Off the Back of A Grail Knight"
		],
		"notes": "Women may only become Grail Pilgrims if they are pretending to be men, nobles may only do so if they are pretending to be peasants.",
		"source": "KotG",
		"numberOfSkills": 6,
		"numberOfTalents": 4,
		"numberOfAdvances": 9
	},
	"GRANDMASTER": {
		"id": "GRANDMASTER",
		"label": "Grandmaster",
		"description": "A grandmaster is a paragon of knightly virtues and the leader of one of the knightly orders. A grandmaster is not only one of the most fearsome warriors in the Old World, but also a legendary commander and leader of men. There are very few grandmasters in the Old World, for even amongst those dedicated individuals who have the skill and strength of mind to become a Knight of the Inner Circle, few have what it takes to reach the pinnacle of knighthood. A grandmaster is always at the forefront of an army when it marches to war, leading his fellow knights, and often the entire army, into battle. He is usually amongst the most trusted of military advisors and generals, and when not engaged in warfare is often charged with planning for it. A grandmaster of a templar order is often a leading personality within a religious cult as well, commanding total loyalty from its warriors.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 40,
			"BS": 15,
			"S": 25,
			"T": 25,
			"Ag": 25,
			"Int": 15,
			"WP": 30,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 2,
			"W": 8,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KNIGHT_OF_THE_INNER_CIRCLE"
		],
		"advanceTo": [
			"CAPTAIN",
			"CHAMPION",
			"NOBLE_LORD",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "GENEALOGY_HERALDRY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "RELIGION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "TEMPLAR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Fearless",
			"Fleet Footed",
			"Menacing",
			"Seasoned Traveller",
			"Specialist Weapon Group (any two)",
			"Strong Minded"
		],
		"trappings": [
			"Magic Weapon",
			"Heavy Armour (Magical Full Plate Armour)",
			"Religious Relic or Blessing of the Emperor"
		],
		"notes": "",
		"source": "ToS",
		"numberOfSkills": 14,
		"numberOfTalents": 6,
		"numberOfAdvances": 49
	},
	"GRAVE_ROBBER": {
		"id": "GRAVE_ROBBER",
		"label": "Grave Robber",
		"description": "Grave Robbers make their living among the dead. Both medical and magical professions create a constant demand for fresh corpses, some for study, others for more sinister purposes. Obtaining such corpses legally is quite difficult, so Physicians and Wizards both have come to rely on Grave Robbers. It is a loathsome profession, but a profitable one. The freshest corpses can command exorbitant prices. The risks of this line of work are substantial. Watchmen, Priests of Morr (the God of Death), and Witch Hunters all keep careful watch of graveyards and punish interlopers harshly.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BARBER_SURGEON",
			"EX_CONVICT",
			"RAT_CATCHER"
		],
		"advanceTo": [
			"CAT_BURGLAR",
			"EX_CONVICT",
			"FENCE",
			"RAT_CATCHER",
			"STUDENT",
			"THIEF"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "THIEF"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Flee!",
			"Resistance to Disease",
			"Streetwise or Strongminded"
		],
		"trappings": [
			"Lantern",
			"Lamp Oil",
			"Pick",
			"Sack",
			"Spade"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"GRAVE_WARDEN": {
		"id": "GRAVE_WARDEN",
		"label": "Grave Warden",
		"description": "In the Old World, the grave warden’s responsibilities are heavy. He not only has to bury the dead six feet deep in the cold, hard ground but also guard against those who would disturb their rest, be they rats, bone pickers, grave robbers, or worse. In small towns and rural areas, a grave warden cannot rely on the town militia or Morr’s Black Guard to keep away the restless dead and hungry Ghouls. Meanwhile, few value his company, for he carries the stench of death and sodden mud wherever he goes. It is a lonely life, but many grave wardens come to prefer the company of the dead to that of the living.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 10,
			"T": 10,
			"Ag": 0,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"RAT_CATCHER",
			"PEASANT"
		],
		"advanceTo": [
			"GRAVE_ROBBER",
			"INITIATE",
			"MILITIAMAN",
			"TEMPLE_GUARDIAN",
			"VAMPIRE_HUNTER",
			"WATCHMAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Resistance to Disease",
			"Stout-Hearted or Very Strong"
		],
		"trappings": [
			"Shovel",
			"Stench",
			"Wheelbarrow"
		],
		"notes": "",
		"source": "NDM",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"GUILD_MASTER": {
		"id": "GUILD_MASTER",
		"label": "Guild Master",
		"description": "Guild Masters are some of the most influential people in the Old World, quietly dictating how commerce is to work in various areas and facilitating the flow of trade. Among their ranks are master Merchants and calculating thieves, all of whom play a subtle game with the Nobles for power and control. Guild Masters are seldom great warriors, as they have many others at their beck and call to handle such things for them. Rather they are quasi-statesmen who deal with the Politicians of the Empire on their own terms. Depending on what guild they control, Guild Masters may be treated with the utmost respect or grudging civility.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 0,
			"T": 10,
			"Ag": 15,
			"Int": 30,
			"WP": 20,
			"Fel": 35
		},
		"secondaryProfile": {
			"A": 1,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ARTISAN",
			"ENGINEER",
			"MERCHANT",
			"PHYSICIAN",
			"WIZARD_LORD"
		],
		"advanceTo": [
			"CRIME_LORD",
			"POLITICIAN",
			"RACKETEER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "HISTORY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "NORSE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Dealmaker",
			"Etiquette",
			"Linguistics"
		],
		"trappings": [
			"Writing Kit",
			"100 gc",
			"Guild"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 3,
		"numberOfAdvances": 32
	},
	"HAG_MOTHER": {
		"id": "HAG_MOTHER",
		"label": "Hag Mother",
		"description": "The legendary hag mothers are very powerful hag witches, known for their powers of divination, healing, and their influence over the Ancient Widow’s spirits. Most eke out simple lives in rustic huts far from the communities they watch over. These hag mothers rarely leave their haunted homes, forcing those seeking their aid to undertake arduous journeys to reach them. However, a few hag mothers do wander Kislev, following wherever the spirits lead them and sharing their knowledge. Although most appear impossibly old and bent – their twisted spines creaking alarmingly at the smallest movement – many retain their youthful vigour and can be unexpectedly spry.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 5,
			"T": 20,
			"Ag": 10,
			"Int": 40,
			"WP": 30,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 3,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HAG_WITCH"
		],
		"advanceTo": [],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "DAEMONOLOGY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "SPIRITS"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM_ANIMAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TROLL_COUNTRY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PREPARE_POISON"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "MAGICK"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "ANY_ONE"
					}
				],
				"operator": "AND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "UNGOL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Aethyric Attunement",
			"Excellent Vision or Luck",
			"Lesser Magic (any three)",
			"Rover or Sixth Sense",
			"Witch Lore (Hag)"
		],
		"trappings": [
			"antitoxin kit",
			"apothecary kit",
			"at least three healing draughts and healing poultices",
			"three or more potions (RoS, page 192)",
			"skin of koumiss",
			"distinctive shawl",
			"walking stick"
		],
		"notes": "You must be an Ungol female to enter this career",
		"source": "RotIQ",
		"numberOfSkills": 12,
		"numberOfTalents": 5,
		"numberOfAdvances": 33
	},
	"HAG_WITCH": {
		"id": "HAG_WITCH",
		"label": "Hag Witch",
		"description": "Few Ungol women develop magical powers without first demonstrating “the sight.” Thus, most hag witches – women who can invoke the spirits of Kislev – were wise women first. Their powers are said to be a blessing and a curse, for although the hags can undoubtedly aid their local communities, the spirits demand a high price for their compliance: premature aging. Because of this consequence, most wise women dread the possibility of the spirits answering their call. As well as the wise women, those who suffer a great loss – such as the death of a husband or child – may also be chosen by the Ancient Widow and gain an intimate understanding of Kislev’s tormented spirits. Hag witches who come to power in this way often live alone, grieving for their lost loved ones and fading youth.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 5,
			"Int": 25,
			"WP": 20,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 1,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"WISE_WOMAN"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"HAG_MOTHER",
			"POLITICIAN",
			"WITCH"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "SPIRITS"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TROLL_COUNTRY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PREPARE_POISON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "UNGOL"
			}
		],
		"talents": [
			"Fast Hands",
			"Hardy or Strong-minded",
			"Lesser Magic (any three)",
			"Meditation",
			"Petty Magic (Hag)"
		],
		"trappings": [
			"antitoxin kit",
			"healing draught",
			"healing poultice",
			"skin of koumiss",
			"a number of small charms that include bits of bone,  locks of hair,  unusual stones,  and so on",
			"shawl"
		],
		"notes": "You must be an Ungol female to enter this career",
		"source": "RotIQ",
		"numberOfSkills": 10,
		"numberOfTalents": 5,
		"numberOfAdvances": 20
	},
	"HEDGE_WIZARD": {
		"id": "HEDGE_WIZARD",
		"label": "Hedge Wizard",
		"description": "Hedge Wizards are magically talented people with no formal magical training. Using instinct, luck, and superstitious trappings, they can perform minor, specialized spells. Though they may not always be aware of it, Hedge Wizards dally with danger every time they use their charms and cantrips. For this reason the Witch Hunters eagerly track and execute these unfortunate folk who all too often unconsciously invite daemons and disaster into the world. Some Hedge Wizards take the sensible route and join the Orders of Magic, whilst others hide their shameful secret.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 5,
			"Ag": 5,
			"Int": 5,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"APPRENTICE_WIZARD",
			"CHARLATAN",
			"INITIATE",
			"OUTLAW",
			"SEER",
			"VAGABOND",
			"WITCH"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HYPNOTISM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Hedge Magic",
			"Petty Magic (Hedge)"
		],
		"trappings": [
			"Healing Draught",
			"Hood"
		],
		"notes": "If you want to be able to cast spells right away you should increase your Magic Characteristic with your free advance during character creation.  Halflings and Dwarfs may not enter this career. Hedge Wizardry is dangerous and highly illegal in the Empire. If caught, you could well be executed.  Think carefully before entering this career.",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"HEDGECRAFT_APPRENTICE": {
		"id": "HEDGECRAFT_APPRENTICE",
		"label": "Hedgecraft Apprentice",
		"description": "A hedgecraft apprentice endures a harsh existence from dawn to dusk. They perform gruelling tasks for the hedge masters who train them. Although much of what they learn is invaluable to their journeys in becoming a hedge master, the hedge apprentices are often treated little better than servants, and perform many arduous, mundane tasks for their teachers.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 5,
			"T": 0,
			"Ag": 0,
			"Int": 10,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 1,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"APOTHECARY",
			"PEASANT"
		],
		"advanceTo": [
			"APOTHECARY",
			"APPRENTICE_WIZARD",
			"BARBER_SURGEON",
			"CHARLATAN",
			"HEDGE_WIZARD",
			"INITIATE",
			"OUTLAW",
			"SCRIBE",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHANNELLING"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONCEALMENT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "MAGICAL_SENSE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PREPARE_POISONS"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "MAGICK"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SET_TRAP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SILENT_MOVE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Coolheaded or Fast Hands",
			" Petty Magic (Hedge) or Rover"
		],
		"trappings": [
			"Antitoxin Kit",
			"Healing Draught",
			"Healing Poultice",
			"Lucky Charm"
		],
		"notes": "If you want to be able to cast spells right away you should increase your Magic Characteristic with your free advance during character creation. Halflings and Dwarfs may not enter this career. Hedge Wizardry is dangerous and highly illegal in the Empire. If caught, you could well be executed. Think carefully before entering this career.",
		"source": "SoE",
		"numberOfSkills": 10,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"HEDGEMASTER": {
		"id": "HEDGEMASTER",
		"label": "Hedgemaster",
		"description": "Those fully initiated into the ancient mysteries of Hedgecraft are called Hedge Masters, although outsiders often know them as Wise Ones or Cunning Folk. Most live on the periphery of the communities they serve, and are known for their healing skills and the potions, tonics, and charms they sell. They lead private lives, keen to avoid those who may take offense at their trade and beliefs, and are generally welcomed by locals for the services they provide. A select few Hedge Masters work directly for their Hedgewise, seeking out and neutralising threats to the Hedgefolk. This is dangerous work, for it often involves direct contact with Witch Hunters and Imperial Magisters to better learn their movements and understand their motivations.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 20,
			"WP": 20,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HEDGECRAFT_APPRENTICE"
		],
		"advanceTo": [
			"ARTISAN",
			"HEDGEWISE",
			"SCHOLAR",
			"SPY",
			"WITCH"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHANNELLING"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONCEALMENT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "FOLLOW_TRAIL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "MAGICAL_SENSE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PREPARE_POISON"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "MAGICK"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SET_TRAP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SILENT_MOVE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Dealmaker or Fast Hands",
			"Lesser Magic (any one) or Orientation",
			"Lesser Magic (any one) or Fleet Footed",
			"Luck or Witch Lore (Hedge)",
			"Meditation or Strong-minded"
		],
		"trappings": [
			"Antitoxin Kit",
			"Healing Poultice",
			"Staff",
			"Trade Tools (Apothecary or Herbalist)",
			"1d5 Amulets and Charms",
			"1d5 Healing Draughts",
			"1d5 Potions"
		],
		"notes": "",
		"source": "SoE",
		"numberOfSkills": 13,
		"numberOfTalents": 5,
		"numberOfAdvances": 20
	},
	"HEDGEWISE": {
		"id": "HEDGEWISE",
		"label": "Hedgewise",
		"description": "The Hedgewise are the oldest, most experienced Hedgefolk. They lead their brethren and are responsible for protecting them from all ills. A Hedgewise may need to tackle a multitude of different threats, ranging from itinerant Warrior-Priests keen to spread Sigmar’s Word at the end of a hammer, to secretive Cults who could bring the wrath of the Witch Hunters down upon the local community. Indeed, many Hedgewise soon learn a deep hatred of the servants of the Ruinous Powers, for they bring unwanted attention to the Hedgefolk, and are anathema to their way of life. Because of this, it is not uncommon to find some Hedgewise crossing the Hedge to hunt real Witches with as much fervour, if not more, as the Magisters and the Cult of Sigmar.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 15,
			"Int": 35,
			"WP": 35,
			"Fel": 35
		},
		"secondaryProfile": {
			"A": 0,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 3,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"PHYSICIAN",
			"SCOUT",
			"WARLOCK"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHANNELLING"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONCEALMENT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "FOLLOW_TRAIL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "MAGICAL_SENSE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PREPARE_POISON"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "MAGICK"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SET_TRAP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SILENT_MOVE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Aethyric Attunement or Savvy",
			"Excellent Vision or Hardy",
			"Lesser Magic (any one) or Night Vision",
			"Lesser Magic (any one) or Sixth Sense",
			"Lesser Magic (any one) or Stout-hearted"
		],
		"trappings": [
			"Antitoxin Kit",
			"Staff",
			"Trade Tools (Apothecary or Herbalist)",
			"1d10 Amulets and Charms",
			"1d5 Healing Draughts",
			"1d5 Healing Poultices",
			"1d10 Potions"
		],
		"notes": "If you want to be able to cast spells right away you should increase your Magic Characteristic with your free advance during character creation. Halflings and Dwarfs may not enter this career. Hedge Wizardry is dangerous and highly illegal in the Empire. If caught, you could well be executed. Think carefully before entering this career.",
		"source": "SoE",
		"numberOfSkills": 17,
		"numberOfTalents": 5,
		"numberOfAdvances": 35
	},
	"HERALD": {
		"id": "HERALD",
		"label": "Herald",
		"description": "Heralds are the voices of the nobility, dutybound to announce the arrival of their lords and patrons, or who occasionally carry news of important events from afar. They are inevitably skilled speakers, swift wits, and greatly educated for the times. Heralds are expected to recognize the heraldry of hundreds of Nobles on sight, hence their namesake. They are seldom Nobles themselves, but their position is regarded as one of the few that acts as a stepping-stone into the ranks of the lesser nobility. Heralds pride themselves on their personal appearance, as it is a reflection upon whichever lord they serve.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 5,
			"Ag": 15,
			"Int": 15,
			"WP": 10,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"AGITATOR",
			"COURTIER",
			"ENTERTAINER",
			"EXPLORER",
			"POLITICIAN",
			"SQUIRE"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "GENEALOGY_HERALDRY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "HISTORY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONIA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Etiquette",
			"Master Orator",
			"Public Speaking"
		],
		"trappings": [
			"Cologne",
			"Purse",
			"Two sets of Best Craftsmenship Clothing",
			"Uniform"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 14,
		"numberOfTalents": 3,
		"numberOfAdvances": 22
	},
	"HERRIMAULT": {
		"id": "HERRIMAULT",
		"label": "Herrimault",
		"description": "The harsh laws of Bretonnia turn many Peasants into Outlaws. The acts that many nobles commit with impunity turn many Outlaws into avengers. The Herrimaults hold themselves above both groups by keeping to a strict code of morality. Whilst they operate outside the laws of Bretonnia, they do so because the laws are unjust. A Herrimault always acts rightly.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 0,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"CARCASSONNE_SHEPHERD",
			"CHARLATAN",
			"COACHMAN",
			"GRAIL_PILGRIM",
			"HUNTER",
			"INNKEEPER",
			"KNIGHT_ERRANT",
			"MAN_AT_ARMS",
			"NOBLE",
			"PEASANT",
			"ROGUE",
			"WOODSMAN"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"GRAIL_PILGRIM",
			"SCOUT",
			"THIEF",
			"VAGABOND",
			"VETERAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "RANGER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Marksman or Specialist Weapon Group (Longbow)",
			"Rover",
			"Seasoned Traveller"
		],
		"trappings": [
			"Bow with 10 Arrows (Longbow if you have Specialist Weapon Group (Longbow), otherwise a Bow)",
			"Light Armour (Leather Jerkin)",
			"Shield"
		],
		"notes": "Women can only become Herrimaults if disguised as men.",
		"source": "KotG",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"HIGH_PRIEST": {
		"id": "HIGH_PRIEST",
		"label": "High Priest",
		"description": "A High Priest is the living embodiment of his God’s will in the Old World. They are fairly rare, as few individuals have both the strength of character and the boundless faith it takes to reach such a lofty post. High Priests, with very few exceptions, will operate out of one of the primary centres of their faith. Pilgrims will travel the breadth of the Empire just to speak for a few moments with such a being. High Priests tend to either reject the physical world, retiring to a monastery or embrace the temporal, becoming powerful secular leaders.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 15,
			"T": 15,
			"Ag": 15,
			"Int": 20,
			"WP": 30,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 3,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST"
		],
		"advanceTo": [
			"POLITICIAN",
			"SCHOLAR",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			}
		],
		"talents": [
			"Aethyric Attunement or Meditation",
			"Armoured Casting or Mighty Missile",
			"Etiquette",
			"Fast Hands or Strong-minded",
			"Lesser Magic (any two)"
		],
		"trappings": [
			"Religious Relic"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 5,
		"numberOfAdvances": 42
	},
	"HIGHWAYMAN": {
		"id": "HIGHWAYMAN",
		"label": "Highwayman",
		"description": "Highwaymen prey on the coaches that roam over the roads of the Old World, relieving lockboxes of their goods and passengers of their valuables. They affect the styles of the upper nobility, wearing elaborate masks and showing every point of etiquette to their victims, as they prefer to regard themselves as daring rogues rather than high-class Thieves. Highwaymen, by necessity, are skilled horsemen, adept at convincing their horses to race over uneven and treacherous ground at high speeds. They are also excellent shots, as they have to contend not only with swiftly moving targets, but a large number of dangerous forest denizens as well.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 10,
			"Ag": 30,
			"Int": 20,
			"WP": 15,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"COACHMAN",
			"DUELLIST",
			"EX_CONVICT",
			"ESTALIAN_DIESTRO",
			"FERRYMAN",
			"MINSTREL",
			"OUTLAW",
			"OUTRIDER",
			"RAPSCALLION",
			"ROADWARDEN",
			"TOLL_KEEPER"
		],
		"advanceTo": [
			"AGITATOR",
			"DUELLIST",
			"MASTER_THIEF",
			"OUTLAW_CHIEF",
			"SERGEANT"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Ambidextrous",
			"Etiquette",
			"Master Gunner",
			"Mighty Shot",
			"Sharpshooter",
			"Specialist Weapon Group (Fencing)",
			"Specialist Weapon Group (Gunpowder)",
			"Swashbuckler",
			"Trick Riding"
		],
		"trappings": [
			"Pair of Pistols with Powder and Ammunition for 20 Shots",
			"Noble’s Garb",
			"Hood or Mask",
			"Riding Horse with Saddle and Harness"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 9,
		"numberOfAdvances": 35
	},
	"HORNED_HUNTER": {
		"id": "HORNED_HUNTER",
		"label": "Horned Hunter",
		"description": "The rites of Taal demand great physical, emotional, and mental fortitude for its practitioners. Some see the trappings of civilization – cities, courts, and the like – as a failing in the interpretation of Taal’s will. The Horned Hunters are deeply zealous and shun the city. Unlike Taal’s Chosen, the Horned Hunters give up much in the way of a material life. They shun normal clothing and armour and wear animal skins, loincloths, or less. Part of their initiation into this group is to undergo extensive tattooing, covering their chest and face. Horned Hunters prowl the woods both within the Taalbaston and throughout Talabecland and claim allegiance only to Taal. While they lack the fiery rhetoric of most zealots, they are still fervent in their beliefs and believe that conversion comes from actions, rather than words.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 10,
			"T": 0,
			"Ag": 5,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"INITIATE",
			"SCRIBE"
		],
		"advanceTo": [
			"HUNTER",
			"MILITIAMAN",
			"OUTLAW",
			"SCOUT",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "FOLLOW_TRAIL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SET_TRAP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "RANGER_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "RANGER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Frenzy",
			"Hardy",
			"Fleet Footed or Very Resilient"
		],
		"trappings": [
			"Anti-toxin kit",
			"Great weapon (two-handed axe)",
			"Light Armour (leather jack)"
		],
		"notes": "",
		"source": "TiT",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"HORSE_ARCHER": {
		"id": "HORSE_ARCHER",
		"label": "Horse Archer",
		"description": "Ungol horse archers are expert marksmen and are celebrated as some of the finest light cavalry in the Old World. Their skills with scimitar, spear, and horse bow are expertly honed hunting kyazak on the Endless Steppe, a land they constantly patrol at the order of the Tzarina. Their most common tactic is to circle their enemy and pour arrow after arrow into them. Amongst the embattled Ungols of the Troll Country, all able-bodied individuals are required to fight, especially when Chaos marauders attack. Thus, it is common to find women amongst rotas of northern horse archers, a tradition southern Kislevites sometimes find difficult to accept.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 25,
			"S": 15,
			"T": 15,
			"Ag": 15,
			"Int": 0,
			"WP": 15,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HORSE_MASTER",
			"NOBLE",
			"PEASANT",
			"STEPPES_NOMAD"
		],
		"advanceTo": [
			"CAPTAIN",
			"HORSE_MASTER",
			"MERCENARY",
			"SCOUT",
			"STEPPES_NOMAD",
			"TARGETEER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "COMMAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TROLL_COUNTRY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "UNGOL"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Coolheaded or Hardy",
			"Mighty Shot or Sure Shot",
			"Rapid Reload or Quick Draw",
			"Specialist Weapon Group (Cavalry)"
		],
		"trappings": [
			"leather jacks and leggings",
			"good luck charm",
			"cavalry spears (as demilance)",
			"Kislevite horse bow with quivers containing 20 arrows,  20 armour-piercing arrows,  and at least 5 screamer and 5 incendiary arrows",
			"Kislevite warhorse",
			"saddle and harnesse",
			"saddle bags",
			"rations",
			"water skins",
			"a yurta"
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 9,
		"numberOfTalents": 4,
		"numberOfAdvances": 26
	},
	"HORSE_COPER": {
		"id": "HORSE_COPER",
		"label": "Horse Coper",
		"description": "Horse copers (horse salesman) are notorious for being smarmy and dishonest. It seems every stable has a  grinning coper offering “the very best horse flesh on the market, sire,” descended from “the strongest bloodlines  of the Ostermarker Veldt, sire.” As horses are central to Kislevite life, the market is incredibly competitive,  and buyers have a hard time finding a reliable dealer, especially as most will try any underhanded trick to  ensure a sale. Some disreputable copers happily paint rotten teeth white, pass off diseased nags as “shy,” and  proudly boast infertile stallions will “sire a line o’ beauties, sire.” Indeed, the only place horse copers never  sell to is the knacker’s yards, though it is a good source for stock.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 5,
			"S": 5,
			"T": 0,
			"Ag": 5,
			"Int": 5,
			"WP": 5,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BURGHER",
			"DROVER",
			"HORSE_MASTER",
			"MESSENGER",
			"STEPPES_NOMAD"
		],
		"advanceTo": [
			"BURGHER",
			"CHARLATAN",
			"HORSE_MASTER",
			"MERCHANT",
			"ROGUE"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM_ANIMAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "KISLEVITE"
			}
		],
		"talents": [
			"Dealmaker or Flee!",
			"Specialist Weapon Group (Entangling)",
			"Suave"
		],
		"trappings": [
			"set of superior clothing",
			"lasso or whip",
			"1d5 horses of varying quality",
			"1d10 gc"
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 9,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"HORSE_MASTER": {
		"id": "HORSE_MASTER",
		"label": "Horse Master",
		"description": "Horse masters are responsible for the well-being, training, and breeding of horses, and they hold positions of importance in all levels of Kislevite society. Amongst the steppes nomads, the horsemaster is often second only to the ataman, as his skills guarantee the continued survival of his community. No horse master holds more power in Kislev than the koniushy, the Ice Queen’s own Master of the Horse. This influential boyar maintains not only the Tzarina’s stables but her kennels as well. Thus, his office has access to a sizeable portion of the Ice Queen’s treasury, all to train and equip her animals to the best possible standard.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 15,
			"S": 15,
			"T": 10,
			"Ag": 15,
			"Int": 20,
			"WP": 15,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 0,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"DROVER",
			"HORSE_ARCHER",
			"HORSE_COPER",
			"MERCENARY",
			"NOBLE",
			"OUTLAW",
			"OUTRIDER",
			"PISTOLIER",
			"ROADWARDEN",
			"SCOUT",
			"SOLDIER",
			"SQUIRE",
			"STEPPES_NOMAD",
			"WINGED_LANCER"
		],
		"advanceTo": [
			"ATAMAN",
			"DROVER",
			"HORSE_ARCHER",
			"HORSE_COPER",
			"MERCHANT",
			"SERGEANT",
			"WINGED_LANCER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM_ANIMAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DODGE_BLOW"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			}
		],
		"talents": [
			"Coolheaded or Hardy",
			"Specialist Weapon Group (Entangling)",
			"Very Strong"
		],
		"trappings": [
			"Kislevite horse or warhorse",
			"saddle",
			"harness",
			"saddlebag",
			"grooming kit",
			"feed",
			"lasso or whip",
			"leather jacks and leggings"
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 29
	},
	"HUNTER": {
		"id": "HUNTER",
		"label": "Hunter",
		"description": "While the Empire has come far from the tribes that founded it 2500 years ago, some things haven’t changed at all. Although Peasants till parts of the land, huge expanses of the Empire are still covered with forest or are hostile to agriculture. These are the lands where Hunters and trappers thrive. They use the same techniques as their ancestors to take down game, be it a trap or a well-placed shot. It takes skill to stalk wild animals while avoiding the dark creatures of the woods. Hunters in their animal skin clothes and fur hats may appear uncouth to city folks, but they don’t much care what others think of them.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 15,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANIMAL_TRAINER",
			"CHARCOAL_BURNER",
			"KITHBAND_WARRIOR",
			"WOODSMAN"
		],
		"advanceTo": [
			"ANIMAL_TRAINER",
			"BOUNTY_HUNTER",
			"CHARCOAL_BURNER",
			"FIELDWARDEN",
			"KITHBAND_WARRIOR",
			"MINER",
			"SCOUT",
			"SOLDIER",
			"TARGETEER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "RANGER"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SILENT_MOVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SET_TRAP"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Hardy or Specialist Weapon Group (Longbow)",
			"Lightning Reflexes or Very Resilient",
			"Marksman or Rover",
			"Rapid Reload"
		],
		"trappings": [
			"Longbow with 10 Arrows",
			"2 Animal Traps",
			"Antitoxin Kit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"ICE_MAIDEN": {
		"id": "ICE_MAIDEN",
		"label": "Ice Maiden",
		"description": "When apprentice witches finish their training, they are released from their mistresses to seek a deeper understanding of Ice Magic. To do this, they must mirror the Ancient Widow as closely as possible, so they swear vows of chastity (to represent being widowed) before forging forth with cold determination in their hearts. Maidens of the ice can be found in the most unlikely places as they quest for understanding, but most commonly, they wander the frozen oblast, facing kyazak, the land’s spirits, and ferocious Greenskins with equal resolve. An ice maiden’s vow of chastity ends when she gains insight into her wintry magic and becomes a full ice witch; however, for some, this understanding never comes, and they remain forever alone.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 0,
			"T": 10,
			"Ag": 5,
			"Int": 20,
			"WP": 25,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"APPRENTICE_WITCH"
		],
		"advanceTo": [
			"COURTIER",
			"ICE_WITCH",
			"SCOUT",
			"SERGEANT",
			"VETERAN",
			"WITCH"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "MAGIC"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "COMMAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "KISLEV"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "KISLEVITE"
			}
		],
		"talents": [
			"Coolheaded",
			"Lesser Magic (any three)",
			"Meditation or Mighty Missile",
			"Stout-hearted or Strong-minded",
			"Witch Lore (Ice)"
		],
		"trappings": [
			"sturdy winter clothing",
			"flask of kvas"
		],
		"notes": "You must be female to enter this career",
		"source": "RotIQ",
		"numberOfSkills": 10,
		"numberOfTalents": 5,
		"numberOfAdvances": 21
	},
	"ICE_WITCH": {
		"id": "ICE_WITCH",
		"label": "Ice Witch",
		"description": "The ice witches of Kislev are feared and respected throughout the Old World. They are the darkest winter, the coldest ice, and the cruellest blizzard, and few can bear their presence for long. But being an ice witch is more than simply practicing Ice Magic and defending Kislev from its foes. Ice witches are part of an ancient sisterhood that has long influenced and often ruled the Gospodar tribe – and still does to this day. They are in touch with the wintry spirits of the land and the frozen flows of magic surging through it; thus, they work hard to preserve the old ways and ancient places, keen to ensure their pristine magic remains unsullied and pure.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 0,
			"S": 5,
			"T": 20,
			"Ag": 15,
			"Int": 30,
			"WP": 40,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 4,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ICE_MAIDEN"
		],
		"advanceTo": [
			"AMBASSADOR",
			"CAPTAIN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "MAGIC"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "ANY_ONE"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "COMMAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "ANY_ONE"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ANY_TWO"
					}
				],
				"operator": "AND"
			}
		],
		"talents": [
			"Fast Hands",
			"Lesser Magic (any three)",
			"Menacing or Unsettling"
		],
		"trappings": [
			"superior winter clothing",
			"a few bits of jewellery studded with diamonds or sapphires",
			"at least one magic item found during their wanderings as ice maidens"
		],
		"notes": "You must be female to enter this career",
		"source": "RotIQ",
		"numberOfSkills": 10,
		"numberOfTalents": 3,
		"numberOfAdvances": 38
	},
	"INITIATE": {
		"id": "INITIATE",
		"label": "Initiate",
		"description": "Religion has taken second place to money in the affections of many Old Worlders, but there are still many young men and women willing to devote their lives to the Gods. It takes great dedication and training to become a Priest. Initiates are Priests-in-training. They undergo harsh instruction under strict teachers, and until they are finished they are not allowed to preach or conduct services. Their training includes literacy and calligraphy, the study of scriptures, and the art of the sermon. They also learn the basics of weapon use so the temple can be defended in times of need.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 5,
			"Ag": 0,
			"Int": 10,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"DILETTANTE",
			"HEDGE_WIZARD",
			"KNIGHT",
			"SCRIBE",
			"STUDENT",
			"VAMPIRE_HUNTER",
			"WITCH_HUNTER",
			"ZEALOT"
		],
		"advanceTo": [
			"BARBER_SURGEON",
			"DEMAGOGUE",
			"FRIAR",
			"LAY_PRIEST",
			"PRIEST",
			"SCRIBE",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ASTRONOMY_OR_HISTORY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Lightning Reflexes or Very Strong",
			"Public Speaking",
			"Suave or Warrior Born"
		],
		"trappings": [
			"Religious Symbol",
			"Robes"
		],
		"notes": "As an Initiate you must decide who your patron God is and what church you serve. You can learn more about the faiths of the Old World in Chapter 8: Religion and Belief of the Core Rulebook. Your choice gives you another skill or talent, as detailed in Church Skills and Talents entry of your God’s description.",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 11
	},
	"INNKEEPER": {
		"id": "INNKEEPER",
		"label": "Innkeeper",
		"description": "Innkeepers own and run the establishments that allow the economy of the Old World to flourish. Many innkeeping families have owned their establishment for generations. They cater to all customers, regardless of social class, so long as they can pay. In a time when the majority of folk are insular, Innkeepers have learned information is valuable and they’re usually good for news from afar. A number of Innkeepers supplement their incomes by making introductions between customers. This varies from finding agreeable companionship for their guests to putting interested parties in contact with those who can permanently remove troublemakers with no questions asked.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 10,
			"Ag": 20,
			"Int": 10,
			"WP": 10,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BURGHER",
			"FARMER",
			"SERVANT"
		],
		"advanceTo": [
			"BURGHER",
			"FENCE",
			"MERCHANT",
			"OUTLAW",
			"SMUGGLER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "BLATHER"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "LIP_READING"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SLEIGHT_OF_HAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "REIKSPIEL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "COOK"
			}
		],
		"talents": [
			"Etiquette or Streetwise",
			"Dealmaker or Street Fighting",
			"Strike to Stun"
		],
		"trappings": [
			"Inn",
			"one or more Servants"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 11,
		"numberOfTalents": 3,
		"numberOfAdvances": 22
	},
	"INTERROGATOR": {
		"id": "INTERROGATOR",
		"label": "Interrogator",
		"description": "Interrogators know how to make people talk. They use both psychological and physical methods to extract information from their charges and neither is very pleasant. Interrogators work for Witch Hunters and Nobles and sometimes for the more zealous churches. They pride themselves on their efficiency, though many achieve it with excessive brutality. The best Interrogators know that discovering the truth is an art form. People lie and obfuscate and will say nearly anything to make the pain stop. Getting a confession is easy; getting to the truth is altogether more difficult.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 0,
			"S": 20,
			"T": 10,
			"Ag": 10,
			"Int": 10,
			"WP": 20,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BARBER_SURGEON",
			"BODYGUARD",
			"FLAGELLANT",
			"JAILER",
			"THUG"
		],
		"advanceTo": [
			"PHYSICIAN",
			"RACKETEER",
			"THIEF"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Menacing",
			"Specialist Weapon Group (Flail)",
			"Wrestling"
		],
		"trappings": [
			"5 knives",
			"Flail",
			"3 sets of manacles"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 5,
		"numberOfTalents": 3,
		"numberOfAdvances": 24
	},
	"JAILER": {
		"id": "JAILER",
		"label": "Jailer",
		"description": "The Empire is a nation of laws, which means it’s also a nation of jails. Despite the best efforts of the clergy of Verena, the Goddess of Justice, the innocent are just as likely as the guilty to end up in jail. Better too harsh than too lax is the opinion of the law. Imperial jails are foul dungeons that smell equally of fear and excrement. Jailers preside over these institutions, using a combination of brutality and humiliation to keep order. Jailers generally have no sense of justice or pity, and are seldom swayed by pleas or speeches (though bribes are gladly accepted). The worst are outright sadists, delighting in the power they hold over their charges.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 10,
			"T": 10,
			"Ag": 0,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BODYGUARD",
			"RAT_CATCHER"
		],
		"advanceTo": [
			"BAILIFF",
			"BODYGUARD",
			"INTERROGATOR",
			"RAT_CATCHER",
			"WATCHMAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SLEIGHT_OF_HAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Resistance to Disease",
			"Resistance to Poison",
			"Specialist Weapon Group (Entangling)",
			"Wrestling"
		],
		"trappings": [
			"Bottle of Common Wine",
			"Tankard",
			"Any one of Bola or Lasso or Net"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"JOURNEYMAN_RUNESMITH": {
		"id": "JOURNEYMAN_RUNESMITH",
		"label": "Journeyman Runesmith",
		"description": "Journeyman Runesmiths complete the fundamentals of their training and are elevated by their master to learn the deeper secrets of their craft. Instead of instruction, though, these Runesmiths are expected to venture out into the world in search of ancient magical treasures to bring back for study. Furthermore, these Dwarfs must take their accumulated knowledge and learn additional Runes from their independent study and experimentation. At the end of the Journeyman period, the Runesmith may return to his master to demonstrate his skill. If found worthy, the master might elevate the student to the full status of Master Runesmith and teach him the secrets of the Master Runes.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 10,
			"T": 5,
			"Ag": 5,
			"Int": 20,
			"WP": 25,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"APPRENTICE_RUNESMITH"
		],
		"advanceTo": [
			"MASTER_RUNESMITH",
			"SCHOLAR",
			"SHIELDBREAKER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "RUNES"
					}
				],
				"operator": "AND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RUNECRAFT"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "ARCANE_DWARF"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Artistic or Hardy",
			"Rune (any six)"
		],
		"trappings": [
			"One runic item"
		],
		"notes": "Only Dwarfs can enter this career.",
		"source": "WoS",
		"numberOfSkills": 13,
		"numberOfTalents": 2,
		"numberOfAdvances": 22
	},
	"JOURNEYMAN_WIZARD": {
		"id": "JOURNEYMAN_WIZARD",
		"label": "Journeyman Wizard",
		"description": "Human Journeymen Wizards have completed their apprenticeship and joined an Order of Wizardry. They now have access to all the spells of their chosen lore, but they must balance their newfound powers with their faltering ability to control them. The majority of Journeymen owe considerable teaching fees to their College, and must adventure to repay their debt. Journeymen Wizards hire out their services, often at their Orders’ request, for gold, knowledge and political betterment of their College. Elves, of course, are exempt from the College system, and owe nothing.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 20,
			"WP": 25,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"APPRENTICE_WIZARD"
		],
		"advanceTo": [
			"CHARLATAN",
			"MASTER_WIZARD",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "MAGIC"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Arcane Lore (any one) or Dark Lore (any one)",
			"Aethyric Attunement or Dark Magic",
			"Fast Hands or Very Resilient",
			"Lesser Magic (any two)",
			"Meditation or Mighty Missile"
		],
		"trappings": [
			"Grimoire",
			"Writing Kit"
		],
		"notes": "If you are human you must pay a 40 gc fee upon entry to this career to obtain your Licence. Unless you come from a moneyed background, you must also pay one crown in every ten you earn back to your College for the duration of this career. You may attempt to avoid this, but few succeed in defrauding the Orders for long.",
		"source": "WHFR",
		"numberOfSkills": 11,
		"numberOfTalents": 5,
		"numberOfAdvances": 21
	},
	"JUDICIAL_CHAMPION": {
		"id": "JUDICIAL_CHAMPION",
		"label": "Judicial Champion",
		"description": "A number of Old World countries legally allow a defendant to proof his innocence via trial by combat. The accused are usually pitted against the local Judicial Champion, a professional fighter who specializes in defeating a single opponent swiftly and efficiently. Many of the laws that allow such combats state that specific weapons must be used; meaning Judicial Champions are well versed with a wide variety of arms. Correspondingly, Judicial Champions are both respected and feared warriors, whose prowess often precedes them. Noble defendants and the wealthy may sometimes be capable of hiring a Judicial Champion to fight in their place.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 35,
			"BS": 0,
			"S": 15,
			"T": 15,
			"Ag": 20,
			"Int": 10,
			"WP": 15,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 2,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"SERGEANT",
			"VETERAN"
		],
		"advanceTo": [
			"ASSASSIN",
			"CHAMPION",
			"SERGEANT",
			"WITCH_HUNTER",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Lightning Parry",
			"Specialist Weapon Group (Fencing)",
			"Specialist Weapon Group (Flail)",
			"Specialist Weapon Group (Parrying)",
			"Specialist Weapon Group (Two-handed)"
		],
		"trappings": [
			"Great Weapon",
			"Flail or Morning Star",
			"Rapier or Foil",
			"Buckler or Main Gauche",
			"10 Yards of Rope"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 2,
		"numberOfTalents": 5,
		"numberOfAdvances": 30
	},
	"KILLER_OF_THE_DEAD": {
		"id": "KILLER_OF_THE_DEAD",
		"label": "Killer of the Dead",
		"description": "Few survive the life of a Vampire hunter. Of those who do, many quickly turn to other careers, such as the legitimacy of Witch Hunter or the better provisions of knighthood. Those who do not become Killers of the Dead. Having seen the true horror of the Vampires and the infinite legions of the restless dead, they can never look away, and they devote their every waking moment to destroying this unrelenting enemy. Even more shunned and mistrusted than Vampire hunters, these fanatics typically become hermits or outlaws, stealing what they need to survive, so they have no distractions from their cause. Their devotion to their mission means these killers often get good enough to earn notoriety amongst the Vampires – and knowing this, every killer sleeps restlessly, stake in hand, waiting to feel fangs upon his neck and hear the sound of vengeful laughter in his ear.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 35,
			"BS": 35,
			"S": 15,
			"T": 20,
			"Ag": 20,
			"Int": 15,
			"WP": 30,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 2,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGENT_OF_THE_SHROUD",
			"BLACK_GUARD",
			"FLAGELLANT",
			"KNIGHT_OF_THE_RAVEN",
			"VAMPIRE_HUNTER",
			"WITCH_HUNTER"
		],
		"advanceTo": [],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "NECROMANCY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Alley Cat or Rover",
			"Fearless",
			"Focussed Strike",
			"Frenzy",
			"Lightning Reflexes",
			"Menacing",
			"Mighty Shot or Rapid Reload",
			"Sixth Sense",
			"Specialist Weapon Group (Throwing or Crossbow)",
			"Specialist Weapon Group (Two-handed)",
			"Stout-hearted",
			"Strike Mighty Blow",
			"Strike to Injure",
			"Unsettling",
			"Very Resilient or Very Strong"
		],
		"trappings": [
			"Blessed Water",
			"6 Stakes",
			"Silvered Weapon"
		],
		"notes": "You must have at least 5 Insanity Points to enter this career.",
		"source": "NDM",
		"numberOfSkills": 8,
		"numberOfTalents": 15,
		"numberOfAdvances": 43
	},
	"KISLEVITE_KOSSAR": {
		"id": "KISLEVITE_KOSSAR",
		"label": "Kislevite Kossar",
		"description": "Originally, the Kossars were an Ungol tribe that lived northeast of the Empire. An eastern people known as the Gospodars invaded this region, subjugated the Ungols, and founded the nation of Kislev. During this conflict, the Kossars sold their skills to the Gospodars as Mercenaries, fighting against other Ungol tribes. Their unique style of fighting impressed the Gospodar nobility, and since that time Kossar regiments have served the Tzars of Kislev. These days the Kossars are no longer a tribe, but a tough military unit drawn from all over Kislev. They are armed with bows and great axes, making them quite flexible on the battlefield. Many Kossars, tired of the ceaseless warfare of their native land, travel to the Empire to become Mercenaries or adventurers.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 0,
			"T": 10,
			"Ag": 0,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"BOUNTY_HUNTER",
			"MERCENARY",
			"SERGEANT",
			"SHIELDBREAKER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "KISLEV"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "KISLEVITE"
			}
		],
		"talents": [
			"Specialist Weapon Group (Two-handed)",
			"Strike to Injure"
		],
		"trappings": [
			"Bow with 10 arrows",
			"Great Weapon (Two-handed Axe)",
			"Medium Armour (Mail Coat,  Leather Jack,  and Leather Leggings)"
		],
		"notes": "If this is your Starting Career, you are from Kislev",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"KITHBAND_WARRIOR": {
		"id": "KITHBAND_WARRIOR",
		"label": "Kithband Warrior",
		"description": "Some Elves live in secluded glades deep inside the great forests. As the taint of Chaos has become worse, these Elven lands have declined. Within the Empire few Elven communities are left, the largest being in Laurelorn. Beneath the boughs of the forest the Elves fight a hidden battle with Beastmen and other foul creatures. Small units of warriors, known as Kithbands, take the fight to the enemy. As their name indicates, Kithbands are made up of Elves from related family groups and they fight under their clan emblems. These skilled bowmen protect the Elf settlements from the dark things of the wood. Every bow is needed to stave off the destruction of the remaining Elf lands of the Empire.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HUNTER",
			"MESSENGER"
		],
		"advanceTo": [
			"HUNTER",
			"OUTRIDER",
			"SCOUT",
			"VAGABOND",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Marksman or Rover",
			"Rapid Reload or Warrior Born"
		],
		"trappings": [
			"Elfbow with 10 arrows",
			"Light Armour (Leather Jack)"
		],
		"notes": "Only Elves of woodland origin can enter this career.",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"KNIGHT_ERRANT": {
		"id": "KNIGHT_ERRANT",
		"label": "Knight Errant",
		"description": "Knights of the Empire start their careers following after some other knight, acting as nothing more than a servant. What else would you expect from a nation who has forgotten the true meaning of chivalry, the true meaning of honour, and the true meaning of courage? In Bretonnia, knights start off riding their own trail, as they set off on their errantry tour. Bretonnian knights learn from the best school there is: genuine experience. At the start of their tour, they don’t have any genuine experience, but most make up the deficit with their enthusiasm. Knights Errant are expected to travel widely, often alone, seeking out perilous situations in which to prove their worth. As a result, they can be found anywhere in the Old World, sometimes to the regret of the natives.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 15,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KNIGHT",
			"NOBLE",
			"SQUIRE"
		],
		"advanceTo": [
			"KNIGHT_OF_THE_REALM"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "GENEALOGY_HERALDRY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Etiquette",
			"Seasoned Traveller",
			"Specialist Weapon Group (Cavalry)",
			"Strike Mighty Blow",
			"Virtue of Chivalry"
		],
		"trappings": [
			"Medium Armour (Mail Shirt,  Mail Coif,  Leather Jack,  Helmet)",
			"Lance",
			"Shield",
			"Light Warhorse with saddle and harness"
		],
		"notes": "Characters who are not male Bretonnian nobles must pretend to be so in order to become Knights Errant.",
		"source": "KotG",
		"numberOfSkills": 8,
		"numberOfTalents": 5,
		"numberOfAdvances": 11
	},
	"KNIGHT_OF_THE_BLAZING_SUN": {
		"id": "KNIGHT_OF_THE_BLAZING_SUN",
		"label": "Knight of the Blazing Sun",
		"description": "The Knights of the Blazing Sun are an order of templars dedicated to Myrmidia, Goddess of Soldiers and Strategy. Their order has spread from Tilea and Estalia in recent centuries, championing their cult’s values in battles across the Old World. Gathering as a large force only rarely, they instead travel in small groups or individually, acting as advisors to nobles and their generals on the art of war. Sometimes they command units or whole armies in the field, using their skills and reputation to keep militia troops from breaking and mercenaries loyal. More and more in the south of the Empire, the Knights of the Blazing Sun and the Cult of Myrmidia are seen as a challenge to the martial primacy of the Cult of Ulric and the Knights of the White Wolf. At some point in his career, a Knight of the Blazing Sun will be sent out on his own for one to two years, to test what he has learned and forge his skills in the crucible of combat. Many an isolated village, farmstead, or coaching inn has been saved by a young Knight taking charge of the defence.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 0,
			"S": 10,
			"T": 20,
			"Ag": 20,
			"Int": 10,
			"WP": 15,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"SERGEANT",
			"SQUIRE"
		],
		"advanceTo": [
			"CAPTAIN",
			"CHAMPION",
			"EXPLORER",
			"INITIATE",
			"KNIGHT_OF_THE_INNER_CIRCLE"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "HISTORY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "ESTALIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "TEMPLAR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Disarm",
			"Etiquette",
			"Seasoned Traveller",
			"Specialist Weapon Group (Cavalry)",
			"Specialist Weapon Group (Fencing)",
			"Specialist Weapon Group (Parrying)",
			"Stout-hearted",
			"Strike to Injure"
		],
		"trappings": [
			"Buckler or Shield",
			"Destrier with Saddle and Harness",
			"Hand Weapon (Sword) or Rapier",
			"Heavy Armour (Full Plate Armour)",
			"Lance or Spear",
			"Religious Symbol (Myrmidia)"
		],
		"notes": "",
		"source": "SH",
		"numberOfSkills": 12,
		"numberOfTalents": 8,
		"numberOfAdvances": 28
	},
	"KNIGHT_OF_THE_INNER_CIRCLE": {
		"id": "KNIGHT_OF_THE_INNER_CIRCLE",
		"label": "Knight of the Inner Circle",
		"description": "Within each knightly order there are those who rise to the top, the best of the best. They have proven themselves valiant and loyal time and time again and for that they are brought into the inner circle of the order. They command Knights in the field, represent the order at court, and make the important decisions. They are some of the greatest warriors the Old World has to offer and many of them have been entrusted with dangerous secrets about the foundations of their group. Each one of them aspires to become the Grand Master of his order. That is the pinnacle of knighthood.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 35,
			"BS": 10,
			"S": 20,
			"T": 20,
			"Ag": 20,
			"Int": 15,
			"WP": 25,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 2,
			"W": 8,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KNIGHT",
			"WITCH_HUNTER"
		],
		"advanceTo": [
			"CAPTAIN",
			"CHAMPION",
			"NOBLE_LORD",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "GENEALOGY_HERALDRY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "RELIGION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "SCOUT"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "TEMPLAR"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Etiquette",
			"Lightning Parry",
			"Seasoned Traveller",
			"Specialist Weapon Group (Fencing)",
			"Specialist Weapon Group (Parrying)",
			"Stout-hearted",
			"Strike to Injure",
			"Strike to Stun"
		],
		"trappings": [
			"Buckler or Main Gauche",
			"Rapier or Foil",
			"Heavy Armour (Best Craftsmenship Full Plate Armour)",
			"Religious Symbol",
			"50 gc"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 8,
		"numberOfAdvances": 42
	},
	"KNIGHT_OF_THE_RAVEN": {
		"id": "KNIGHT_OF_THE_RAVEN",
		"label": "Knight of the Raven",
		"description": "The Fellowship of the Shroud believes in taking the battle to the enemy. Their very best warriors form an order known as the Knights of the Raven, and their mandate is very clear: destroy every Skeleton, Zombie, and Shade upon the earth and exterminate the necromancers and Vampires who summon them. Unlike their sister order the Black Guard, the Knights of the Raven are ruthless and aggressive, seeking out their enemy rather than waiting for Undead to come to them. At the moment, a great many of the knights are stationed in the town of Siegfriedhof of Stirland on the border of Sylvania. So far, they have only conducted raids, but as their numbers and intelligence grows, and the truth about Mannfred’s return becomes undeniable, they will begin a crusade to take that bleak land away from its dark lords once again.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 35,
			"BS": 15,
			"S": 20,
			"T": 20,
			"Ag": 20,
			"Int": 15,
			"WP": 30,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 2,
			"W": 8,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BLACK_GUARD",
			"KNIGHT",
			"KNIGHT_OF_THE_INNER_CIRCLE"
		],
		"advanceTo": [
			"CAPTAIN",
			"CHAMPION",
			"KILLER_OF_THE_DEAD",
			"KNIGHT_OF_THE_INNER_CIRCLE",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "STRATEGY_TACTICS"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "THEOLOGY"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Cool-headed or Sixth Sense",
			"Focussed Strike or Sharpshooter",
			"Lightning Parry",
			"Marksman",
			"Master Gunner or Quick Draw",
			"Rapid Reload",
			"Seasoned Traveller",
			"Specialist Weapon Group (Crossbow or Longbow,  Parrying or Two-handed)",
			"Stout-hearted",
			"Strike to Injure",
			"Strong-minded"
		],
		"trappings": [
			"Full Plate Armour (Heavy)",
			"Lance",
			"Longbow or Crossbow or Two Pistols",
			"Shield or Sword-Breaker or Greatweapon",
			"1 Silvered or Blessed Weapon",
			"4 Hawthorn Stakes",
			"Blessed Water",
			"Symbol of the Raven"
		],
		"notes": "",
		"source": "NDM",
		"numberOfSkills": 10,
		"numberOfTalents": 11,
		"numberOfAdvances": 43
	},
	"KNIGHT_OF_THE_REALM": {
		"id": "KNIGHT_OF_THE_REALM",
		"label": "Knight of the Realm",
		"description": "Knights of the Realm are the backbone of the Bretonnian army and the most common members of its ruling elite. They have distinguished themselves in errantry and received a fief or a position in some other noble’s household. They are expected to honor and defend their lord, as well as the Realm. The knights described in Chapter Eight of Knights of the Grail are primarily Knights of the Realm.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 0,
			"S": 15,
			"T": 15,
			"Ag": 15,
			"Int": 0,
			"WP": 10,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KNIGHT_ERRANT"
		],
		"advanceTo": [
			"CAPTAIN",
			"COURTIER",
			"EXPLORER",
			"FACELESS",
			"NOBLE_LORD",
			"POLITICIAN",
			"QUESTING_KNIGHT"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "GENEALOGY_HERALDRY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "RELIGION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Specialist Weapon Group (Cavalry)",
			"Specialist Weapon Group (Two-handed)",
			"Strike Mighty Blow",
			"Virtue of Knighthood (any one)"
		],
		"trappings": [
			"Lance",
			"Heavy Armour (Full Plate Armour)",
			"Shield",
			"icon of the Lady of the Lake",
			"Destrier with Saddle and Harness",
			"Household Position with a Bretonnian Noble or Bretonnian Fief"
		],
		"notes": "Characters who are not male Bretonnian nobles must pretend to be so in order to become Knights of the Realm.",
		"source": "KotG",
		"numberOfSkills": 8,
		"numberOfTalents": 4,
		"numberOfAdvances": 24
	},
	"KNIGHT_OF_THE_VERDANT_FIELD": {
		"id": "KNIGHT_OF_THE_VERDANT_FIELD",
		"label": "Knight of the Verdant Field",
		"description": "The Knights of the Verdant Field are an order of Templars dedicated to the protection of Talabheim in the name of their militaristic Goddess, Myrmidia. They are warriors in the true sense of the word, trained to wage war in the forests and wild areas of their homeland. Though they rarely leave the confines of Talabheim, their skills serve them equally well from the Great Forest to the Drakwald. Although the Knights of the Verdant Field come from all walks of life, they share a single motivation: to serve their Goddess and protect their people.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 15,
			"T": 15,
			"Ag": 10,
			"Int": 5,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HUNTER",
			"INITIATE",
			"MERCENARY",
			"MILITIAMAN",
			"OUTRIDER",
			"SOLDIER",
			"WOODSMAN"
		],
		"advanceTo": [
			"PRIEST",
			"SCOUT",
			"VETERAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM_ANIMAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "COMMAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SCALE_SHEER_SURFACE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "RANGER_TONGUE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "RANGER"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Fleet Footed or Keen Senses",
			"Orientation",
			"Rover",
			"Specialist Weapon Group (Longbow)",
			"Strike Mighty Blow or Sure Shot"
		],
		"trappings": [
			"Hand Weapon (sword)",
			"Light Armour (Leather Jack,  Leather Leggings)",
			"Longbow with 10 arrows."
		],
		"notes": "",
		"source": "TiT",
		"numberOfSkills": 10,
		"numberOfTalents": 5,
		"numberOfAdvances": 25
	},
	"KNIGHT_PANTHER": {
		"id": "KNIGHT_PANTHER",
		"label": "Knight Panther",
		"description": "Knights Panther are distinguished from other knights by their tall helmet crests topped by the image of a Beastman head. This is a change from the spotted great cat of their past, though they retain the distinctive pattern in their saddlecloths. To be accepted into this order, a squire must hunt down and kill a great forest cat single-handedly, placing its skin beneath his saddle when knighted. Thereafter, the Knight Panther divides his time between serving the Graf and going on private quests to destroy the minions of Chaos wherever they are found.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 30,
			"BS": 0,
			"S": 15,
			"T": 15,
			"Ag": 15,
			"Int": 10,
			"WP": 10,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KNIGHT",
			"NOBLE_LORD",
			"SERGEANT",
			"SQUIRE",
			"WITCH_HUNTER"
		],
		"advanceTo": [
			"CAPTAIN",
			"CHAMPION",
			"KNIGHT_OF_THE_INNER_CIRCLE",
			"VETERAN",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "GENEALOGY_HERALDRY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Coolheaded",
			"Dealmaker",
			"Etiquette",
			"Specialist Weapon Group (Cavalry)",
			"Specialist Weapon Group (any one)",
			"Strike to Injure",
			"Sturdy",
			"Warrior Born"
		],
		"trappings": [
			"Hand Weapon (Sword)",
			"Lance",
			"Heavy Armour (Full Plate Armour)",
			"Shield",
			"Destrier with Full Plate Barding",
			"Saddle",
			"and Harness",
			"50 gc"
		],
		"notes": "",
		"source": "ToC",
		"numberOfSkills": 10,
		"numberOfTalents": 8,
		"numberOfAdvances": 29
	},
	"KNIGHT": {
		"id": "KNIGHT",
		"label": "Knight",
		"description": "Knights are professional Soldiers, generally, but not always of Noble blood. They specialize in fighting in heavy armour while using large weapons, often from horseback, and comprise a general’s most elite shock troops. Many Knights have a duty to protect the lower classes, though not all of them acknowledge it. There are a large number of knightly orders hailing from both the Empire and Bretonnia, such as the Knights of the White Wolf, the Knights Panther, the Reiksgard Knights, and the Grail Knights. Religious orders of Knights are known as templars.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 0,
			"S": 15,
			"T": 15,
			"Ag": 15,
			"Int": 5,
			"WP": 15,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"NOBLE_LORD",
			"PISTOLIER",
			"SERGEANT",
			"SQUIRE",
			"VAMPIRE_HUNTER"
		],
		"advanceTo": [
			"CAPTAIN",
			"INITIATE",
			"KNIGHT_OF_THE_INNER_CIRCLE",
			"NOBLE_LORD",
			"VAMPIRE_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "GENEALOGY_HERALDRY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "RELIGION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Specialist Weapon Group (Cavalry)",
			"Specialist Weapon Group (Flail)",
			"Specialist Weapon Group (Two-handed)",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Flail or Morning Star",
			"Lance",
			"Heavy Armour (Full Plate Armour)",
			"Shield",
			"Religious Symbol",
			"25 gc",
			"Destrier with Saddle and Harness"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 4,
		"numberOfAdvances": 24
	},
	"LAMPLIGHTER": {
		"id": "LAMPLIGHTER",
		"label": "Lamplighter",
		"description": "The Empire’s largest cities have a wonder seen nowhere else in the Old World: the streetlamp. They are used to illuminate the major streets and thoroughfares, particularly in wealthy neighbourhoods. Altdorf was the first city to install streetlamps and those surrounding the Emperor’s Palace are particularly ornate. Lamplighters are responsible for maintaining the streetlamps and lighting them each night as dusk falls. They carry a variety of candles and matches and some even use the slow burning matches common to firearms. City dwellers are proud of their streetlamps, seeing them as symbols of sophistication and civilisation. Such is the threat of fire in the closely packed buildings that interfering with the lamplighters is punishable by death.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CHARCOAL_BURNER",
			"PEASANT",
			"RAT_CATCHER",
			"SERVANT"
		],
		"advanceTo": [
			"AGITATOR",
			"BURGHER",
			"ENTERTAINER",
			"INITIATE",
			"SERVANT",
			"SMUGGLER",
			"TOLL_KEEPER",
			"WATCHMAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			}
		],
		"talents": [
			"Excellent Vision or Savvy",
			"Flee!",
			"Street Fighting"
		],
		"trappings": [
			"Lamp Oil",
			"20 Matches",
			"Storm Lantern",
			"Tinderbox",
			"8 Wax Candles",
			"10’ Lamplighter’s Pole"
		],
		"notes": "If you are rolling randomly for your Starting Career, you can substitute Lamplighter for Burgher with your GM’s permission.",
		"source": "SoA",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"LAY_PRIEST": {
		"id": "LAY_PRIEST",
		"label": "Lay Priest",
		"description": "Priests who serve their god’s will through worldly deeds are known as lay priests. Unlike their magical counterparts, lay priests do not labour day and night studying esoteric scriptures to achieve communion with the divine. Instead, lay priests deliver sermons to common folk, for ultimately the faith of the masses is what elevates gods above daemons and spirits. Lay priests are not just preachers, however; they are also tradesmen, scholars and administrators. A god’s sphere of influence is manifested by the lay priest’s expertise in his field, and the divine ideal is exemplified by his public conduct.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 10,
			"S": 5,
			"T": 10,
			"Ag": 10,
			"Int": 15,
			"WP": 20,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FRIAR",
			"INITIATE",
			"PRIEST"
		],
		"advanceTo": [
			"FRIAR",
			"PRELATE",
			"PRIEST"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Etiquette",
			"Public Speaking",
			"Resistance to Magic"
		],
		"trappings": [
			"Prayer Book",
			"Good Quality Vestments",
			"Writing Kit"
		],
		"notes": "Lay Priests have access to the Skills and Talents of their cult (See Appendix V page 244)",
		"source": "CC",
		"numberOfSkills": 13,
		"numberOfTalents": 3,
		"numberOfAdvances": 27
	},
	"LITIGANT": {
		"id": "LITIGANT",
		"label": "Litigant",
		"description": "Litigants are common sights both in Talabheim and all the major cities of the Old World. They write up legal documents, interpret the law, and represent individuals in court who are able to afford their fees. Litigants are almost universally reviled, except when someone is in legal trouble and needs assistance. Litigants need to be well versed in both the laws of the Empire and the region they plan to practice law, plus have a great deal of knowledge about day-to-day affairs. Even the lowest-born litigant is considered a “person of letters” to the general populace and may be asked to do things far beyond their training.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BURGHER",
			"ENVOY",
			"EXCISEMAN",
			"SCRIBE",
			"STUDENT",
			"WATCHMAN"
		],
		"advanceTo": [
			"AGITATOR",
			"DEMAGOGUE",
			"GUILD_MASTER",
			"MERCHANT",
			"POLITICIAN",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "GENEALOGY_HERALDRY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "BLATHER"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Dealmaker or Etiquette",
			"Public Speaking",
			"Savvy or Suave"
		],
		"trappings": [
			"Book of Empire Laws",
			"Writing Kit",
			"Hand weapon"
		],
		"notes": "If you are rolling randomly for your Starting Career, you can substitute Litigant for Scribe with your GM’s permission.",
		"source": "TiT",
		"numberOfSkills": 9,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"MAN_AT_ARMS": {
		"id": "MAN_AT_ARMS",
		"label": "Man-at-Arms",
		"description": "Whilst knights are the backbone of Bretonnian armies, peasants form the bulk. Some receive no training at all and are simply rounded up and pointed at the enemy. Men-at-Arms are the lucky ones. When they were paraded before their lord, he decided they had the potential to fight back and ordered that they be trained. Still, the training and equipment that Men-at-Arms receive are not very good, and whilst they do receive some pay, it is far less than you might expect for risking your life. Most important, they are given no choice in the matter. As a result, it is not uncommon for Men-at-Arms to seize any chance to desert, and many deserters take up a life of adventure.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 10,
			"Int": 0,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CARCASSONNE_SHEPHERD",
			"HUNTER",
			"PEASANT",
			"VAGABOND",
			"WOODSMAN"
		],
		"advanceTo": [
			"CARCASSONNE_SHEPHERD",
			"HERRIMAULT",
			"OUTLAW",
			"OUTRIDER",
			"VETERAN",
			"YEOMAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Specialist Weapon Group (Two-handed)",
			"Street Fighting",
			"Strike Mighty Blow",
			"Strike to Injure"
		],
		"trappings": [
			"Halberd",
			"Light Armour (Leather Jack and Leather Skullcap)",
			"Uniform bearing Lord’s Heraldry"
		],
		"notes": "Women can only enter this career if they are pretending to be men.",
		"source": "KotG",
		"numberOfSkills": 6,
		"numberOfTalents": 4,
		"numberOfAdvances": 9
	},
	"MARAUDER": {
		"id": "MARAUDER",
		"label": "Marauder",
		"description": "Most Norsemen are great warriors, blessed with strength at arms and fierce demeanours, but it is the dream of nearly every Norsemen to join the ranks of the greatest warriors, to become Champions of Chaos and bear the marks of their Gods’ favour. Until they can prove their value to the Dark Gods, they are simply Marauders. Most Marauders are the core of the Chaos Hordes. They flock to the banners of their Champions, throwing their weight behind any cause, whether it’s the bidding of their Gods or the call to battle. When not part of a great army, they spend their time raiding villages of the Empire (Cathay, for Hung Marauders). Natural fighters, they are hardened by the bleak land and bred for battle. They hold all others in contempt.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BONDSMAN",
			"FREEHOLDER",
			"REAVER",
			"SKALD"
		],
		"advanceTo": [
			"MERCENARY",
			"REAVER",
			"SLAVER",
			"WARLEADER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SAIL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Orientation",
			"Specialist Weapon Group (Cavalry,  Flail or Two-handed)",
			"Strike to Injure"
		],
		"trappings": [
			"Dagger or two Javelins",
			"Flail",
			"Great Weapon or Demilance",
			"Hand Weapon",
			"Light Armour (Helmet and Leather Leggings)",
			"Shield",
			"Tattoos"
		],
		"notes": "The Marauder career is open to Norsemen, Kurgan, and Hung. The latter two are generally horsemen, hence this career allows for Marauders that serve as horsemen. For details on these peoples, see Chapter XII: Hordes of Chaos in Tome of Corruption. (Special: Any character with at least one mutation and the GM’s permission may become a Marauder).",
		"source": "ToC",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 11
	},
	"MARINE": {
		"id": "MARINE",
		"label": "Marine",
		"description": "Marines are ship-borne soldiers who can be found in the Imperial fleet and onboard the larger private vessels. They protect their ships from pirates, Norse marauders, and other raiders. Unlike seamen, whose primary duty is sailing the ship, Marines are onboard only to fight. When in port, Marines frequently form press gangs to fill out the ship’s crew. More than one unsuspecting citizen has awoken at sea after taking a belaying pin to the head from an overzealous press ganger. Due to these activities, and their own drunken brawling, Marines are resented in many seaside communities. When raiders attack, however, these same citizens are quick to accept the aid of battle-hardened Marines.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 10,
			"T": 0,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOATMAN",
			"FISHERMAN",
			"SEAMAN"
		],
		"advanceTo": [
			"MATE",
			"OUTLAW",
			"SERGEANT",
			"SMUGGLER",
			"THIEF"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_WASTELAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "BATTLE_TONGUE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Disarm or Quick Draw",
			"Strike Mighty Blow",
			"Strike to Stun"
		],
		"trappings": [
			"Bow or Crossbow with 10 Arrows or Bolts",
			"Light Armour (Leather Jack)",
			"Shield",
			"Grappling Hook",
			"10 Yards of Rope"
		],
		"notes": "During character creation, if you take Common Knowledge (the Wasteland), your character can be from the great port of Marienburg at your option.",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 12
	},
	"MASTER_RUNESMITH": {
		"id": "MASTER_RUNESMITH",
		"label": "Master Runesmith",
		"description": "Master Runesmiths are the teachers and keepers Rune knowledge. Very few Runesmiths ever rise to this status and of those who do, many stay within their holds, passing on what they have learned to the young and talented Dwarfs in their families. Other Master Runesmiths devote years of their lives to the search for ancient secrets, exploring the world to uncover ancient weapons and artefacts of great age, hoping to recover lost Runes of ancient and fabled Runesmiths. Such quests take Master Runesmiths into dangerous places, such as ruined holds, dragon lairs, the depths of Elven forests, and worse, for much of the Dwarfs territory has, over the centuries, fallen into the hands of their enemies.  ",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 10,
			"S": 15,
			"T": 10,
			"Ag": 10,
			"Int": 25,
			"WP": 35,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 3,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"JOURNEYMAN_RUNESMITH"
		],
		"advanceTo": [
			"RUNELORD",
			"SCHOLAR",
			"VETERAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RUNECRAFT"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "ARCANE_DWARF"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Disarm or Strike Mighty Blow",
			"Master Rune (any two)",
			"Rune (any ten)",
			"Specialist Weapon Group (Flail or Two-handed)"
		],
		"trappings": [
			"Two runic items"
		],
		"notes": "Only Dwarfs can enter this career.",
		"source": "WoS",
		"numberOfSkills": 13,
		"numberOfTalents": 4,
		"numberOfAdvances": 35
	},
	"MASTER_THIEF": {
		"id": "MASTER_THIEF",
		"label": "Master Thief",
		"description": "In every profession there are those who rise to the top. Master Thieves are the grand artistes of the criminal world. They are the best Thieves there are, proficient in all the skills that it takes to illegally acquire the goods of others. Master Thieves are usually a part of the local Thieves’ Guild structure, but as bravos who regularly flout the law, many of them are content to operate, ironically enough, “illegally”, e.g. without the approval of the local Crime Lord. The Empire has a long tradition of secretly admiring bold Thieves, though they will still be punished if caught.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 10,
			"Ag": 40,
			"Int": 25,
			"WP": 20,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAT_BURGLAR",
			"CRIME_LORD",
			"FENCE",
			"HIGHWAYMAN",
			"RACKETEER",
			"SPY"
		],
		"advanceTo": [
			"CRIME_LORD",
			"EXPLORER",
			"OUTLAW_CHIEF",
			"TARGETEER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "LIP_READING"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PICK_LOCK"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "THIEVES_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "THIEF"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Specialist Weapon Group (Crossbow)",
			"Specialist Weapon Group (Throwing)",
			"Street Fighting or Swashbuckler",
			"Streetwise",
			"Trapfinder"
		],
		"trappings": [
			"Crossbow Pistol with 10 Bolts",
			"2 Throwing Axes/Hammer or 3 Throwing Daggers/Stars",
			"Best Craftsmenship Lock Picks",
			"Cloak",
			"Sack",
			"Best Craftsmenship Rope (10 yards)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 17,
		"numberOfTalents": 5,
		"numberOfAdvances": 41
	},
	"MASTER_VIGILANT": {
		"id": "MASTER_VIGILANT",
		"label": "Master Vigilant",
		"description": "The Colleges of Magic are loath to leave their dirty laundry to be washed in public by the Witch Hunters or other authorities. Consequently, each Order employs its own watchdogs and investigators, devoted to discretely exposing those who break their oaths and practice dark magic, necromancy, or diabolism. Since Vampires are so often students of these black arts, these observers also take pride in hunting and destroying the princes of darkness. Magisters vigilant still pay their dues to their College, as per a magister lord, but they are not expected to take apprentices. Their duties across the Empire prevent them from attaining the control of magic that many of their colleagues possess, but they have many other skills and talents useful in other sorts of situations, and they command great respect and fear amongst their own kind.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 10,
			"S": 5,
			"T": 10,
			"Ag": 20,
			"Int": 25,
			"WP": 30,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 3,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"JOURNEYMAN_WIZARD",
			"MASTER_WIZARD"
		],
		"advanceTo": [
			"MASTER_WIZARD",
			"SPY",
			"VAMPIRE_HUNTER",
			"WITCH_HUNTER",
			"WIZARD_LORD"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "DAEMONOLOGY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "MAGIC"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "ANY_ONE"
					}
				],
				"operator": "AND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "DAEMONIC"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "MAGICK"
					}
				],
				"operator": "AND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Fast Hands",
			"Lesser Magic (any four)",
			"Menacing",
			"Mighty Missile",
			"Schemer",
			"Stout-Hearted",
			"Strong-minded"
		],
		"trappings": [
			"Trade Tools (Apothecary)",
			"two Magic Items",
			"Silvered or Magical Blade"
		],
		"notes": "Characters with the Dark Magic Talent or any Dark Lore cannot enter this career; the magisters will not allow it and can usually tell. Usually.",
		"source": "NDM",
		"numberOfSkills": 14,
		"numberOfTalents": 7,
		"numberOfAdvances": 34
	},
	"MASTER_WIZARD": {
		"id": "MASTER_WIZARD",
		"label": "Master Wizard",
		"description": "A Master Wizard is one who wields magic with surety and finesse. Elf Wizards find this level of spell casting easy to attain, but for a Human, it is a life’s work. By the time they reach this level of mastery, most Wizards begin to exhibit eccentricities and physical changes wrought by close association with magic. Master Wizards usually prefer to spend their time researching or politicking with fellow magisters. However, their Order usually requires them to adventure in the world at large, furthering the cause of their art, and seeking out young folk to apprentice.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 0,
			"T": 10,
			"Ag": 15,
			"Int": 30,
			"WP": 35,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 3,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"JOURNEYMAN_WIZARD"
		],
		"advanceTo": [
			"ASTROLOGER",
			"EXPLORER",
			"SCHOLAR",
			"WIZARD_LORD"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "MAGIC"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "DAEMONIC"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "ARCANE_ELF"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			}
		],
		"talents": [
			"Aethyric Attunement or Meditation",
			"Dark Magic or Strong-minded",
			"Fast Hands or Mighty Missile",
			"Lesser Magic (any two)"
		],
		"trappings": [
			"Trade Tools (Apothecary)",
			"Two magic items"
		],
		"notes": "If you are Human you must continue to pay dues to your Order for the duration of this career. Most colleges charge Master Wizards a reduced rate of one crown in every twenty. Elves do not belong to the Orders of Magic, and thus owe nothing.",
		"source": "WHFR",
		"numberOfSkills": 11,
		"numberOfTalents": 4,
		"numberOfAdvances": 32
	},
	"MATE": {
		"id": "MATE",
		"label": "Mate",
		"description": "Mates serve on ships as the second in command, answering directly to the Captain of the vessel. They are responsible for ensuring that the Captain’s orders are carried out, which can be a trying task with even the most professional of crews. Mates have to be stern but fair, earning the respect of their crew or they will swiftly find themselves the butt of many practical jokes and far worse if a mutiny should occur. Mates are always experienced sailors, often with several voyages under their belt and there are few ports they haven’t drank, fought, or caroused in.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 15,
			"S": 10,
			"T": 15,
			"Ag": 10,
			"Int": 10,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"MARINE",
			"SEAMAN"
		],
		"advanceTo": [
			"EXPLORER",
			"MERCHANT",
			"NAVIGATOR",
			"SEA_CAPTAIN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SAIL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "NORSE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "SHIPWRIGHT"
			}
		],
		"talents": [
			"Resistance to Disease",
			"Seasoned Traveller",
			"Street Fighting"
		],
		"trappings": [
			"Light Armour (Leather Jack)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 3,
		"numberOfAdvances": 24
	},
	"MEDIATOR": {
		"id": "MEDIATOR",
		"label": "Mediator",
		"description": "The peasants of Bretonnia try to live their lives without noble interference. When the nobility get involved, people are beaten or hanged and food is taken, only making matters worse. However, the peasantry are far from living in a cooperative idyll, and disputes do arise between villages. Mediators are the peasants chosen to resolve those disputes. They live in one village and deal with the representatives, normally other Mediators, of villages with which they have a dispute. Mediators do not normally have the authority to make decisions, so they must try for a solution they can sell to their neighbours. Most Mediators are officially herders, as this gives them an excuse to be in odd places if the nobility find them. Whilst the overwhelming majority are men, a few female Mediators do exist.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 0,
			"Int": 10,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HUNTER",
			"MAN_AT_ARMS",
			"HERRIMAULT",
			"PEASANT",
			"ROGUE"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"HERRIMAULT",
			"ROGUE",
			"VILLAGE_ELDER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BRETONNIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Dealmaker",
			"Public Speaking",
			"Seasoned Traveller",
			"Suave"
		],
		"trappings": [
			"A Wandering Lamb or a Wilful Pig"
		],
		"notes": "Only peasants may enter this career.",
		"source": "KotG",
		"numberOfSkills": 8,
		"numberOfTalents": 4,
		"numberOfAdvances": 8
	},
	"MERCENARY": {
		"id": "MERCENARY",
		"label": "Mercenary",
		"description": "War never ends in the Old World and that means there is always need for fighting men. While the Empire does maintain a standing army, its strength is bolstered with Mercenaries. Nobles and rich Merchants also hire such fighters to protect their interests, many having what amounts to private armies. Mercenaries range from wild youths with a taste for adventure to grizzled professional soldiers who’ve seen a dozen battles or more. These sell-swords come from all over, though Tilea is particular famed for its regiments. All Mercenaries dream of untold riches; for most of them, the reality is an early death and an unmarked grave.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BODYGUARD",
			"BOUNTY_HUNTER",
			"DEMAGOGUE",
			"FIELDWARDEN",
			"KISLEVITE_KOSSAR",
			"MILITIAMAN",
			"MINER",
			"NORSE_BERSERKER",
			"OUTRIDER",
			"PIT_FIGHTER",
			"SOLDIER",
			"THUG",
			"WATCHMAN"
		],
		"advanceTo": [
			"BODYGUARD",
			"BOUNTY_HUNTER",
			"OUTLAW",
			"SERGEANT",
			"SEWER_JACK",
			"SHIELDBREAKER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONNIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Disarm or Quick Draw",
			"Rapid Reload or Strike Mighty Blow",
			"Sharpshooter or Strike to Stun"
		],
		"trappings": [
			"Crossbow with 10 Bolts",
			"Shield",
			"Medium Armour (Mail Shirt and Leather Jack)",
			"Healing Draught"
		],
		"notes": "During character creation, if you take Common Knowledge (Tilea) and Speak Language (Tilean), your character can be from Tilea at your option.",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 11
	},
	"MERCHANT": {
		"id": "MERCHANT",
		"label": "Merchant",
		"description": "Merchants are speculators who arrange to move large amounts of goods from city to city, seeking the market that they will make the most handsome profit in. They seldom interact with the populace as they deal in bulk, generally selling their goods to Burghers and Tradesmen. Merchant Guilds are extremely influential in the Empire and they are slowly usurping the position once held by Nobles in the Old World. Even the poorest Merchant tends to be very wealthy, indeed, many use their wealth to buy legitimacy, purchasing titles or marrying their children into Noble families.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 25,
			"WP": 20,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ARTISAN",
			"BURGHER",
			"CAPTAIN",
			"ENVOY",
			"EXPLORER",
			"FARMER",
			"FISHERMAN",
			"INNKEEPER",
			"MATE",
			"SCHOLAR",
			"STEWARD",
			"TRADESMAN"
		],
		"advanceTo": [
			"FARMER",
			"GUILD_MASTER",
			"MILITIAMAN",
			"POLITICIAN",
			"RACKETEER",
			"SPY"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "NORSE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "MERCHANT"
			}
		],
		"talents": [
			"Dealmaker or Streetwise",
			"Super Numerate"
		],
		"trappings": [
			"Town House",
			"Warehouse",
			"1, 000 gc in coin or trade goods"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 2,
		"numberOfAdvances": 25
	},
	"MESSENGER": {
		"id": "MESSENGER",
		"label": "Messenger",
		"description": "With great distances separating the important cities and castles of the Empire, Messengers are an indispensable means of communication. Nobles, Merchants, and military commanders all make extensive use of Messengers, mounted if possible. These brave riders dare to ride the roads of the Empire alone, trusting in their speed to avoid danger. Roadwardens assist official Messengers as much as possible, but there are long, lonely stretches where no help is available. While they are supposed to be immune from harassment, many a Messenger has met a bloody end after delivering a particularly unpleasant missive.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"MILITIAMAN",
			"ROADWARDEN",
			"SERVANT"
		],
		"advanceTo": [
			"CARTOGRAPHER",
			"COACHMAN",
			"HERALD",
			"KITHBAND_WARRIOR",
			"OUTRIDER",
			"ROADWARDEN",
			"SCOUT",
			"SOLDIER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "THE_WASTELAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "SCOUT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Orientation",
			"Seasoned Traveller"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Map Case",
			"Riding Horse with Saddle and Harness or Pony (for Halflings)",
			"Shield"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"MILITIAMAN": {
		"id": "MILITIAMAN",
		"label": "Militiaman",
		"description": "Militias are part-time local defence forces, formed largely from the rural peasantry. Members agree to spend a certain amount of time each year – usually seven days – practicing together on common land. Even this small amount of training can be the difference between life and death on the blood-soaked battlefields of the Old World. Militia Captains are either civil leaders or retired military types. Some militias must provide their own equipment, while the local nobility equips others. This means that while some militia units appear for duty in smart uniforms with well-maintained equipment, others have little more than their patchwork clothes and hunting bows.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 0,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ARTISAN",
			"BAILIFF",
			"BURGHER",
			"FARMER",
			"FISHERMAN",
			"MERCHANT",
			"PEASANT",
			"TRADESMAN",
			"WOODSMAN"
		],
		"advanceTo": [
			"ARTISAN",
			"FIELDWARDEN",
			"MERCENARY",
			"MESSENGER",
			"OUTLAW",
			"SERGEANT",
			"THIEF"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Specialist Weapon Group (Two-handed) or Rapid Reload",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Halberd or Bow with 10 Arrows",
			"Light Armour (Leather Jack and Leather Skullcap)",
			"Uniform"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"MINER": {
		"id": "MINER",
		"label": "Miner",
		"description": "Mountains surround the Empire. To the east are the World’s Edge Mountains, to the south the Black Mountains, and to the west the Grey Mountains. Dwarfs and Humans have mined these mountains from time immemorial, despite constant attacks from Goblins and other subterranean horrors. Miners brave these conditions in search of iron, silver, gold, gems, and other valuables. Others prefer to prospect on the surface, particularly in the Middle Mountains, which straddle the provinces of Ostland and Hochland. Although these forest-shrouded mountains are fully within the Empire’s borders, they are a haven for Trolls, Beastmen, and other foul creatures. Surviving in such an environment takes skill and toughness.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 10,
			"T": 5,
			"Ag": 0,
			"Int": 5,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CHARCOAL_BURNER",
			"HUNTER"
		],
		"advanceTo": [
			"CHARCOAL_BURNER",
			"ENGINEER",
			"MERCENARY",
			"SCOUT",
			"SHIELDBREAKER",
			"SMUGGLER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONCEALMENT"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "MINER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "PROSPECTOR"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Orientation",
			"Specialist Weapon Group (Two-handed)",
			"Very Resilient or Warrior Born"
		],
		"trappings": [
			"Great Weapon (Two-handed Pick)",
			"Light Armour (Leather Jack)",
			"Pick",
			"Spade",
			"Storm Lantern",
			"Lamp Oil"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"MINSTREL": {
		"id": "MINSTREL",
		"label": "Minstrel",
		"description": "Minstrels are wandering musicians who travel the roads of the Old World bringing their songs and entertainment to those who desperately need it. The original and most renowned Minstrels were Elves but now many Humans follow in their footsteps. Minstrels are close to sacred in the Old World. They can walk into some of the most dangerous dens of cutthroats and come out unscathed (as long as they’re willing to provide free entertainment, of course). Occasionally, a Minstrel will accept patronage from a Noble or Merchant and settle down for a time, composing songs at his patron’s request. Eventually, though, the open road calls and the Minstrel moves on again. ",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 15,
			"Int": 10,
			"WP": 5,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ENTERTAINER"
		],
		"advanceTo": [
			"CHARLATAN",
			"DEMAGOGUE",
			"HIGHWAYMAN",
			"SPY",
			"STUDENT"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "MUSICIAN"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "SINGER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ELTHARIN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Etiquette",
			"Pubic Speaking"
		],
		"trappings": [
			"Entertainer’s Garb",
			"Musical Instrument (Lute or Mandolin)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 19
	},
	"MONK": {
		"id": "MONK",
		"label": "Monk",
		"description": "Monks are members of the mendicant orders who seek seclusion to better devote themselves to their faith. Some monks live completely alone as hermits, whereas others congregate with other monks and live in monasteries, which are usually located in remote areas of the Old World. Most religions have their own mendicant orders, although the strictures of Verena and Shallya tend to lend themselves more towards monasticism more than most. Monks spend their lives in study and prayer, debating the finer points of theology and illuminating religious scriptures.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 25,
			"WP": 15,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FRIAR",
			"INITIATE",
			"PHYSICIAN",
			"SCHOLAR",
			"SCRIBE",
			"STUDENT"
		],
		"advanceTo": [
			"ABBOT",
			"DEMAGOGUE",
			"FRIAR",
			"PHYSICIAN",
			"PRIEST",
			"SCHOLAR",
			"STEWARD",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			}
		],
		"talents": [
			"Linguistics"
		],
		"trappings": [
			"Prayer Book",
			"Religious Symbol",
			"Robes",
			"Writing Kit"
		],
		"notes": "",
		"source": "ToS",
		"numberOfSkills": 10,
		"numberOfTalents": 1,
		"numberOfAdvances": 20
	},
	"MULESKINNER": {
		"id": "MULESKINNER",
		"label": "Muleskinner",
		"description": "Muleskinners guide trains of pack animals, normally mules, across the Border Princes, carrying vital supplies from one settlement to another. Vital but cheap supplies might be transported by a single Muleskinner, while more valuable goods merit at least a few men, and possibly mercenary guards as well. Sometimes, the Muleskinners just don’t let on that they are carrying anything valuable and just hope the bandits ignore them. With all their travel, Muleskinners often know the Borderlands better than just about anyone else, and some choose to put that knowledge to use earning a living in other ways. Muleskinners also hold mule skinning contests. The dead mule record is under a minute; the live mule record, held unchallenged by Alberic “Flat Face” Schilp, is five and a half minutes.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 10,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BURGHER",
			"HUNTER",
			"MESSENGER",
			"PEASANT"
		],
		"advanceTo": [
			"ANIMAL_TRAINER",
			"BURGHER",
			"HIGHWAYMAN",
			"MERCHANT",
			"MESSENGER",
			"OUTLAW",
			"SCOUT"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BORDER_PRINCES"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Orientation",
			"Seasoned Traveller"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"three Mules",
			"Bow"
		],
		"notes": "",
		"source": "RC",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 11
	},
	"MYSTIC": {
		"id": "MYSTIC",
		"label": "Mystic",
		"description": "Some Anchorites and Cenobites become so full of wisdom (or full of something, anyway) that they progress to being Mystics. No longer content to seek wisdom by themselves, they insist on telling others of their discoveries, seeking to lead them to enlightenment also. Many leaders of monasteries are Mystics, as most sensible communities drive them out as soon as they realise what they are like. A few Mystics actually discover the secrets of supernatural power. They tout this as proof of the value of their “insights.” ",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 10,
			"Ag": 10,
			"Int": 10,
			"WP": 15,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANCHORITE",
			"CENOBITE"
		],
		"advanceTo": [
			"CHARLATAN",
			"DEMAGOGUE",
			"HEDGE_WIZARD",
			"ROGUE"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Menacing",
			"Public Speaking"
		],
		"trappings": [
			"Filthy Loincloth and Tunic"
		],
		"notes": "",
		"source": "RC",
		"numberOfSkills": 7,
		"numberOfTalents": 2,
		"numberOfAdvances": 16
	},
	"NAVIGATOR": {
		"id": "NAVIGATOR",
		"label": "Navigator",
		"description": "Navigators have the critically important task of getting a ship where it is supposed to go. Old World Navigators typically use charts to set their course, though they are often also capable of navigating by sun and stars. Navigators know the secrets of wind and tide, which makes them seem somewhat mystical to their sailor brethren and they are often regarded as a breed apart. Navigators are, by necessity, cartographers, charting the course of their voyages so that they may retrace them or that others may follow their route. As there are no compasses in the world, all ships employ a skilled Navigator, as do some overland expeditions.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 25,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOATMAN",
			"CARTOGRAPHER",
			"DILETTANTE",
			"FISHERMAN",
			"MATE",
			"SCRIBE",
			"SEAMAN"
		],
		"advanceTo": [
			"ARTISAN",
			"CARTOGRAPHER",
			"EXPLORER",
			"SCHOLAR",
			"SEA_CAPTAIN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ASTRONOMY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "CARTOGRAPHER"
			}
		],
		"talents": [
			"Orientation"
		],
		"trappings": [
			"6 Maps and Charts",
			"Trade Tools (Navigator’s Instruments)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 1,
		"numberOfAdvances": 20
	},
	"NEWSSHEET_VENDOR": {
		"id": "NEWSSHEET_VENDOR",
		"label": "Newssheet Vendor",
		"description": "It used to be that scribes had a monopoly on the written word but that changed with the invention of the printing press. Now newssheets have become common in the towns and cities of the Empire. They are usually published once a day and are filled with local news and sensational tales. A big story may merit a special edition. Newssheet vendors walk the streets, calling out the top headlines and trying to outdo each other with their theatrics. There are many newssheet publishers in each city and the competition amongst them is savage. It is not unknown for rival vendors to fight each other in the streets. Ironically, big brawls of this type often become tomorrow’s top news item.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BURGHER",
			"MESSENGER",
			"PEASANT",
			"SERVANT",
			"STUDENT"
		],
		"advanceTo": [
			"AGITATOR",
			"DEMAGOGUE",
			"ENTERTAINER",
			"MESSENGER",
			"PAMPHLETEER",
			"ROGUE",
			"SCRIBE",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "BLATHER"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SLEIGHT_OF_HAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "STORYTELLER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			}
		],
		"talents": [
			"Public Speaking",
			"Street Fighting or Streetwise"
		],
		"trappings": [
			"Backpack",
			"1d10 Newssheets",
			"Scroll Case"
		],
		"notes": "If you are rolling randomly for your Starting Career, you can substitute Newssheet Vendor for Agitator with your GM’s permission.",
		"source": "SoA",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"NOBLE_LORD": {
		"id": "NOBLE_LORD",
		"label": "Noble Lord",
		"description": "Noble Lords are members of the nobility with actual power and responsibility, unlike the many dilettantes who fill the courts of the Old World. Some inherit their positions, whereas others forcefully claw their way to them. All of them tend to be strong-willed, adroit public speakers, and skilled fighters. They must be adept at resolving local disputes, negotiating court politics, and leading troops in the field. Some of the most powerful Noble Lords in the Empire are the Elector Counts who choose from among their number who will be the next Emperor.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 15,
			"S": 10,
			"T": 10,
			"Ag": 10,
			"Int": 20,
			"WP": 20,
			"Fel": 30
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"COURTIER",
			"KNIGHT",
			"KNIGHT_OF_THE_INNER_CIRCLE",
			"POLITICIAN",
			"SEA_CAPTAIN"
		],
		"advanceTo": [
			"CAPTAIN",
			"KNIGHT",
			"SCHOLAR",
			"SEA_CAPTAIN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "STRATEGY_TACTICS"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "GENEALOGY_HERALDRY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Master Orator",
			"Public Speaking",
			"Specialist Weapon Group (Fencing)"
		],
		"trappings": [
			"Best Craftsmenship Rapier or Foil",
			"Best Craftsmenship Noble’s Garb",
			"500 gc",
			"Jewellery worth 500 gc",
			"Destrier with Saddle and Harness"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 3,
		"numberOfAdvances": 35
	},
	"NOBLE": {
		"id": "NOBLE",
		"label": "Noble",
		"description": "The Nobles are the ruling class of the Empire. They wield the power, they control the land, and they make the laws. The most important Noble families are those of Imperial Electors and of course the Emperor himself. There are hundreds of others though, and they all vie for more money and more power. Some seek their fortunes in war, others in business or politics. None would sully themselves by practicing a common trade. The most contemptible Nobles do nothing at all, merely live off their family wealth and attend an endless array of parties, dances, and gala events. The younger children of Noble houses, however, do not have it so easy. Since inheritance goes to the eldest, they must often make their own way in the world, even if it means slumming amongst the lower classes and falling in with adventurers and ne’er-do-wells.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 5,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"STEWARD"
		],
		"advanceTo": [
			"COURTIER",
			"DILETTANTE",
			"PISTOLIER",
			"POLITICIAN",
			"ROGUE",
			"SQUIRE",
			"STUDENT"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "BLATHER"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "COMMAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "MUSICIAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Etiquette",
			"Luck or Public Speaking",
			"Savvy or Specialist Weapon (Fencing)",
			"Schemer or Specialist Weapon (Parrying)"
		],
		"trappings": [
			"Foil",
			"Main Gauche",
			"Noble's Garb",
			"Riding Horse with Saddle and Harness",
			"1d10 gc",
			"Jewellery worth 6d10 gc"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"NORSE_BERSERKER": {
		"id": "NORSE_BERSERKER",
		"label": "Norse Berserker",
		"description": "Norsca is a grim northern land, full of fell beasts such as Ice Trolls and Chaos Spawn, and it breeds tough fighters. The berserkers are a rightly feared warrior cult. Its members go into battle without armour to prove they have no fear. They work themselves into an incredible rage, often biting on their own shields. Their feats fill the sagas and loom large in the stories of those Imperial soldiers that have faced them. Some few berserkers make their way to the Empire because they’ve been exiled or simply have a desire to see more of the world. They rarely stay in one place for long, since no Watchman wants a frothing lunatic disturbing the peace. Berserkers are highly prized Mercenaries, however, due to their rarity and effectiveness. ",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 15,
			"BS": 0,
			"S": 10,
			"T": 10,
			"Ag": 0,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"MERCENARY",
			"PIT_FIGHTER",
			"SEAMAN",
			"SERGEANT",
			"VETERAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "NORSCA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "STORYTELLER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "NORSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Frenzy",
			"Menacing",
			"Quick Draw",
			"Specialist Weapon Group (Two-handed)"
		],
		"trappings": [
			"Light Armour (Leather Jerkin)",
			"Bottle og Spirits",
			"Great Weapon or Shield"
		],
		"notes": "If this is your Starting Career, you are from Norsca.",
		"source": "WHFR",
		"numberOfSkills": 6,
		"numberOfTalents": 4,
		"numberOfAdvances": 11
	},
	"OUTLAW_CHIEF": {
		"id": "OUTLAW_CHIEF",
		"label": "Outlaw Chief",
		"description": "Every band of brigands needs a leader. An Outlaw who shows he is both cunning and bold can rise to the level of Outlaw Chief. Commanding a lawless group of dangerous men is no easy task and the perilous forests of the Old World don’t make the job any easier. Outlaw Chiefs get their pick of the loot their band acquires, but they are also held responsible for every failure and their grasp on leadership is tenuous. Outlaw bands are notorious for not allowing any of their members to simply retire, which may make leaving the Chief’s post a difficult task.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 30,
			"S": 10,
			"T": 20,
			"Ag": 10,
			"Int": 10,
			"WP": 10,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 2,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CRIME_LORD",
			"DEMAGOGUE",
			"GHOST_STRIDER",
			"HIGHWAYMAN",
			"MASTER_THIEF",
			"RACKETEER",
			"SCOUT",
			"VETERAN"
		],
		"advanceTo": [
			"ASSASSIN",
			"CAPTAIN",
			"CRIME_LORD",
			"DEMAGOGUE"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "THIEVES_TONGUE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "SCOUT"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "THIEF"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Lightning Parry",
			"Mighty Shot",
			"Quick Draw",
			"Rapid Reload",
			"Sure Shot"
		],
		"trappings": [
			"Bow or Crossbow with 10 Arrows or Bolts",
			"Medium Armour (Sleeved Mail Shirt and Leather Jack)",
			"Horse with Saddle and Harness",
			"Band of Outlaws"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 5,
		"numberOfAdvances": 34
	},
	"OUTLAW": {
		"id": "OUTLAW",
		"label": "Outlaw",
		"description": "Imperial justice is swift and merciless. It is no wonder then that so many flee the watch and take on the life of the Outlaw. The hills and forests are full of Outlaw bands. It is a precarious existence, as they must deal not only with Roadwardens, Soldiers, and other agents of law, but also the dark denizens of the wilds. While many Outlaws are nothing more than common thieves, robbing coaches and caravans, others claim to champion the peasantry and fight for “justice not law.” As long as the Outlaws confine their attacks to the rich, the Peasants aid them with food, information, and places to hide. This support, and the rough terrain Outlaws use for their bases, makes them difficult for the state to deal with. Local Nobles often resort to the use of Bounty Hunters to end their bandit troubles.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"CHARLATAN",
			"COACHMAN",
			"EX_CONVICT",
			"HEDGE_WIZARD",
			"INNKEEPER",
			"MARINE",
			"MERCENARY",
			"MILITIAMAN",
			"PEASANT",
			"ROADWARDEN",
			"ROGUE",
			"SQUIRE",
			"TOLL_KEEPER",
			"WOODSMAN",
			"ZEALOT"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"EX_CONVICT",
			"HIGHWAYMAN",
			"THIEF",
			"VAGABOND",
			"VETERAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOWS"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "THIEF"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SET_TRAP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Rover or Streetwise",
			"Sharpshooter or Strike to Stun"
		],
		"trappings": [
			"Bow with 10 Arrows",
			"Light Armour (Leather Jerkin)",
			"Shield"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"OUTRIDER": {
		"id": "OUTRIDER",
		"label": "Outrider",
		"description": "Outriders are experienced outdoorsmen who reconnoitre for armies, caravans, and other travelling parties. They are the eyes and ears, constantly on the lookout for ambushes and other hazards. Because they operate in advance of the main party, they must be self-sufficient and level-headed. Outriders must trust their instincts and make their own decisions, because they have no one else to turn to when they are alone in the wild. Most Outriders operate in home area and use their intimate knowledge of the locale to their advantage. A few specialize in trailblazing, riding ahead into unknown and hostile territory. These Outriders earn more money for their services, but their life expectancy is short. ",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KITHBAND_WARRIOR",
			"MESSENGER",
			"ROADWARDEN",
			"SOLDIER"
		],
		"advanceTo": [
			"COACHMAN",
			"HIGHWAYMAN",
			"MERCENARY"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Coolheaded or Very Strong",
			"Orientation",
			"Specialist Weapon Group (Entangling)"
		],
		"trappings": [
			"Bow or Crossbow with 10 Arrows or BOlts",
			"Net",
			"Whip",
			"Lasso",
			"Light Armour (Leather Jack)",
			"Shield",
			"10 Yards or Rope",
			"Riding Horse with Saddle and Harness"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"PAMPHLETEER": {
		"id": "PAMPHLETEER",
		"label": "Pamphleteer",
		"description": "The printing press is a new invention in the Empire, and as yet its presence has not changed much of society. Its presence is however keenly felt among agitators, demagogues, and street politicians who now have a whole new way to reach their public. Pamphleteers are more than just tradesmen with a paper-press: They are passionate individuals who research, write, sketch and print political or religious works in order to spread their message, then disseminate their materials across whole cities and provinces. Although printing itself is perfectly legal and increasingly respectable, many pamphleteers print material that is neither, and those who wish to stay in business have to be skillful at escaping the attention of the Watch or more powerful enemies.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 10,
			"Ag": 15,
			"Int": 25,
			"WP": 20,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"ARTISAN",
			"BURGHER",
			"DEMAGOGUE",
			"ENTERTAINER",
			"ENGINEER",
			"MESSENGER",
			"NEWSSHEET_VENDOR",
			"SCHOLAR",
			"SCRIBE",
			"STUDENT"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"MERCHANT",
			"POLITICIAN",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONIA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "STORYTELLER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "ARTIST"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "CALLIGRAPHER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "MERCHANT"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Artistic or Public Speaking",
			" Streetwise"
		],
		"trappings": [
			"Writing Kit",
			"Printing Press"
		],
		"notes": "",
		"source": "SoE",
		"numberOfSkills": 11,
		"numberOfTalents": 2,
		"numberOfAdvances": 25
	},
	"PEASANT": {
		"id": "PEASANT",
		"label": "Peasant",
		"description": "The peasantry makes up the preponderance of the Empire’s population. While the Nobles rule and the Burghers trade, the Peasants toil. They are farmers, labourers, and herdsman. In times of war, they fight and die for the Empire. Many Peasants seek a better life in the city, only to join the legion of beggars on the verge of starvation. The majority spends their whole lives in the village they were born in, surrounded by hostile country and only occasionally getting news of the outside world. While they are provincial and superstitious, the Peasants are the heart of the Empire.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 10,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"CHARCOAL_BURNER",
			"FARMER",
			"FISHERMAN",
			"MILITIAMAN",
			"OUTLAW",
			"POLITICIAN",
			"SERVANT",
			"TRADESMAN",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_TRAINING"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "COOK"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "BOWYER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "DANCER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "SINGER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "FARMER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ROW"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SET_TRAP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SCALE_SHEER_SURFACE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SILENT_MOVE"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Hardy or Rover",
			"Flee! or Specialist Weapon Group (Sling)"
		],
		"trappings": [
			"Sling or Quarterstaff",
			"Leather Flask"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"PENITENT": {
		"id": "PENITENT",
		"label": "Penitent",
		"description": "Penitents wander the streets of the Old World, crying out that they are heretics and unworthy while beating themselves, or each other, to purge their wickedness. Groups of penitents practise the Torture Skill on each other, which gives members of this career a particularly good understanding of how it works. As noted above, penitents are particularly common among followers of Sigmar, but they are found among the more committed of the followers of all Gods.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 10,
			"T": 10,
			"Ag": 0,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FLAGELLANT",
			"INITIATE",
			"OUTLAW",
			"STUDENT",
			"ZEALOT"
		],
		"advanceTo": [
			"CENOBITE",
			"CHARLATAN",
			"FLAGELLANT",
			"INITIATE",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Hardy",
			"Strike to Stun",
			"Very Resilient"
		],
		"trappings": [
			"Religious Symbol",
			"Scourge"
		],
		"notes": "",
		"source": "ToS",
		"numberOfSkills": 6,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"PHYSICIAN": {
		"id": "PHYSICIAN",
		"label": "Physician",
		"description": "Physicians are practitioners of the healing arts who study the mysteries of illness and anatomy. The science of medicine is relatively new and still distrusted by the majority of Old World citizens. Many regard unknown Physicians as either trumped up apothecaries or dangerous quacks until they’ve proven themselves. Skilled Physicians, however, are often well-respected members of their communities. They are capable of dealing with most minor ailments and a number of more straightforward injuries, such as major cuts or crushing wounds. Physicians are often eager to seek out new medicines and learn about more effective treatments.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 30,
			"WP": 20,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BARBER_SURGEON",
			"INTERROGATOR",
			"SCHOLAR",
			"STUDENT"
		],
		"advanceTo": [
			"ASTROLOGER",
			"FRIAR",
			"GUILD_MASTER",
			"SCHOLAR",
			"SPY"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "SCIENCE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PREPARE_POISON"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "APOTHECARY"
			}
		],
		"talents": [
			"Resistance to Disease",
			"Strike to Stun",
			"Surgery"
		],
		"trappings": [
			"4 Healing Draughts",
			"Trade Tools (Medical Instruments)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 24
	},
	"PILGRIM": {
		"id": "PILGRIM",
		"label": "Pilgrim",
		"description": "The Shrine of Sire Severich of Verena. The Sigmarite Temple of the Holy Three. The Rise of Taal’s Deep. Distant Heiligerburg, the Holy Mount of Shallya. Paths to all these places, and many more, are clogged with the trudging feet of the faithful. No matter how expensive, laborious, or incredibly dangerous the journeys may be, folk from all walks of life can be found forging forward to these holy sites, each with his own reasons for facing the horror of Old World travel. The most popular pilgrimages attract many thousands of penitents every year, and the routes are lined with souvenir sellers, way shrines, elaborate temples, heavy tolls, and desperate bandits keen to make an easy profit from the poorly defended. The few pilgrims who survive the ordeals can forever after wear the unique symbol of their particular pilgrimage, typically a brooch or necklace with a specific design alluding to the patron God of the worship and the journey’s destination.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 10,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"DEMAGOGUE",
			"FRIAR",
			"INITIATE",
			"OUTLAW",
			"VAGABOND",
			"ZEALOT"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "THEOLOGY"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "STORYTELLER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Seasoned Traveller",
			"Very Resilient"
		],
		"trappings": [
			"Religious Symbol"
		],
		"notes": "The character must be on a pilgrimage to enter this career.",
		"source": "Tos",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 15
	},
	"PISTOLIER": {
		"id": "PISTOLIER",
		"label": "Pistolier",
		"description": "Pistoliers are the elite light cavalry of the Imperial Army. They specialize in wielding firearms, specifically pistols. Pistoliers have only come into their own recently, as gunpowder weapons have been relatively unstable until now in the Old World. Because of the expense of their weapons and the constant upkeep that pistols and warhorses require, Noblemen dominate the ranks of the Pistoliers. Many young Nobles volunteer for the Pistoliers in search of glory or in the hopes of making a name.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 0,
			"WP": 15,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ENGINEER",
			"NOBLE"
		],
		"advanceTo": [
			"COURTIER",
			"DUELLIST",
			"KNIGHT",
			"SERGEANT",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "SCOUT"
			}
		],
		"talents": [
			"Master Gunner",
			"Quick Draw",
			"Rapid Reload",
			"Sharpshooter",
			"Specialist Weapon Group (Gunpowder)",
			"Mighty Shot",
			"Sure Shot"
		],
		"trappings": [
			"Pair of Pistols with Ammunition and Gunpowder for 20 Shots",
			"Best Craftsmenship Clothing",
			"Light Warhorse"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 6,
		"numberOfTalents": 7,
		"numberOfAdvances": 26
	},
	"PIT_FIGHTER": {
		"id": "PIT_FIGHTER",
		"label": "Pit Fighter",
		"description": "It is said that the sport of pit fighting has its origins amongst the Ogres. It is easy enough to believe that a race as dim-witted as the Ogres would contribute fights to the death to the culture of the Old World. In years past most Pit Fighters were criminals or prisoners of war. They’d be thrown in a ring or a pit with a few weapons and only the winner would leave alive. These days there is a class of professional Pit Fighters in addition to the condemned. They seek excitement and glory in the pit, though most fight naught but a brutal death as the crowd howls for their blood. Successful Pit Fighters can become wealthy (from prize money and the rampant gambling that surrounds the sport), allowing slave fighters to buy their freedom.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 15,
			"BS": 0,
			"S": 0,
			"T": 10,
			"Ag": 10,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"NORSE_BERSERKER",
			"PROTAGONIST",
			"SHIELDBREAKER",
			"THUG"
		],
		"advanceTo": [
			"BOUNTY_HUNTER",
			"MERCENARY",
			"PROTAGONIST",
			"TROLL_SLAYER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			}
		],
		"talents": [
			"Disarm or Wrestling",
			"Quick Draw or Strike to Injure",
			"Specialist Weapon Group (Flail)",
			"Specialist Weapon Group (Parrying)",
			"Specialist Weapon Group (Two-handed)",
			"Strike Mighty Blow",
			"Very Strong or Strong-minded"
		],
		"trappings": [
			"Flail or Great Weapon",
			"Knuckle-duster",
			"Shield or Buckler",
			"Medium Armour (Mail Shirt and Leather Jack)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 2,
		"numberOfTalents": 7,
		"numberOfAdvances": 11
	},
	"POLITICIAN": {
		"id": "POLITICIAN",
		"label": "Politician",
		"description": "While the Nobles are nominally “in charge” of most of the Old World’s countries, it is the Politicians who actually run the villages, towns, and cities of the Empire. They are an often reviled and frequently corruptible lot whose ranks include burgomeisters, mayors, and other civil servants. Some are elected to their positions, while others are appointed. Politicians frequently find themselves between various dangerous factions and have to swiftly become skilled at the fine art of compromise. They are experts at saying exactly what people want to hear, though if they actually follow through on their promises, it’s a minor miracle.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 10,
			"Ag": 0,
			"Int": 20,
			"WP": 10,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"BAILIFF",
			"CAPTAIN",
			"CHARLATAN",
			"COURTIER",
			"CRIME_LORD",
			"DEMAGOGUE",
			"FARMER",
			"GUILD_MASTER",
			"HERALD",
			"HIGH_PRIEST",
			"MERCHANT",
			"NOBLE",
			"PEASANT",
			"PRELATE",
			"RACKETEER",
			"TOLL_KEEPER"
		],
		"advanceTo": [
			"COURTIER",
			"CRIME_LORD",
			"DEMAGOGUE",
			"NOBLE_LORD",
			"RACKETEER",
			"STEWARD"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "GENEALOGY_HERALDRY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "ACTOR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Dealmaker or Schemer",
			"Etiquette or Streetwise",
			"Master Orator",
			"Public Speaking"
		],
		"trappings": [
			"Best Craftsmenship Hand Weapon",
			"Best Craftsmenship Leather Jack",
			"Pamphlets "
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 4,
		"numberOfAdvances": 19
	},
	"PRELATE": {
		"id": "PRELATE",
		"label": "Prelate",
		"description": "Every popular religious cult wields at least some degree of political influence. Priests who represent their temples on town councils can – given enough ambition – attain special titles in the court of the ruling noble, or become administrators of temple-owned lands. A prelate’s skill at delivering sermons and debating legal statutes with equal proficiency makes him highly respected in both civic and religious circles. However, the lure of temporal wealth and power has led many prelates down the path of corruption. Prelates may also be known as vicars, curates or arch lectors, depending upon the cult.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 10,
			"T": 15,
			"Ag": 15,
			"Int": 20,
			"WP": 30,
			"Fel": 30
		},
		"secondaryProfile": {
			"A": 0,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FRIAR",
			"LAY_PRIEST",
			"PRIEST"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"FRIAR",
			"POLITICIAN",
			"PRIEST"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "STORYTELLER"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Master Orator",
			"Etiquette",
			"Linguistics",
			"Seasoned Traveller",
			"Schemer",
			"Stout Hearted",
			"Strong Minded"
		],
		"trappings": [
			"Prayer Book",
			"Best Quality Vestments",
			"Relic of Faith"
		],
		"notes": "Prelates have access to the Skills and Talents of their cult (See Appendix V page 244)",
		"source": "CC",
		"numberOfSkills": 14,
		"numberOfTalents": 7,
		"numberOfAdvances": 34
	},
	"PRIEST": {
		"id": "PRIEST",
		"label": "Priest",
		"description": "Priests are ordained men and women who administer to the needs of the faithful throughout the Old World. Their Gods gift them with the ability to channel small amounts of divine energy, to aid in their works. Many Priests will be assigned to a specific region or church, others are wanderers who go where they feel they can do the most good. The receptions they get are directly linked to their deity. A Priestess of Shallya is likely to be received warmly no matter where she goes, whereas a Priest of Ulric is likely to only be heartily welcomed when a great battle is in the offing.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 10,
			"Ag": 5,
			"Int": 10,
			"WP": 20,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 1,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FLAGELLANT",
			"FRIAR",
			"INITIATE",
			"LAY_PRIEST",
			"PRELATE"
		],
		"advanceTo": [
			"ANOINTED_PRIEST",
			"FLAGELLANT",
			"LAY_PRIEST",
			"PRELATE",
			"SCHOLAR",
			"STEWARD"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Armoured Caster or Master Orator",
			"Petty Magic (Divine)",
			"Strike to Injure or Strike to Stun"
		],
		"trappings": [
			"Prayer Book",
			"Writing Kit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 3,
		"numberOfAdvances": 22
	},
	"PROTAGONIST": {
		"id": "PROTAGONIST",
		"label": "Protagonist",
		"description": "Protagonists are professional bullies. Their fighting skills are for hire and they will beat up just about anyone for the right price. In many cases, Protagonists hide the fact that they are hired help, making up ridiculous excuses to start a brawl with the chosen target. The moneyman watches the humiliation of his foe, for enjoyment or profit of both. Roughing up a few locals is comparatively cheap, while more formidable opponents and more grievous injuries are proportionally more expensive. Most leave outright murder to the Assassins, but exceptions to this rule can be purchased. Jobless Protagonists simply pick their own fights and rob their victims. Needless to say, Watchmen keep a close eye on known Protagonists, so they tend to move quickly from place to place.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 10,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BAILIFF",
			"BODYGUARD",
			"BOUNTY_HUNTER",
			"ESTALIAN_DIESTRO",
			"EX_CONVICT",
			"PIT_FIGHTER"
		],
		"advanceTo": [
			"DUELLIST",
			"EX_CONVICT",
			"PIT_FIGHTER",
			"RACKETEER",
			"THIEF",
			"THUG"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			}
		],
		"talents": [
			"Disarm or Quick Draw",
			"Menacing or Suave",
			"Street Fighting",
			"Strike Mighty Blow",
			"Strike to Injure",
			"Strike to Stun"
		],
		"trappings": [
			"Medium Armour (Mail Shirt and Leather Jack)",
			"Shield",
			"Riding Horse with Saddle and Harness"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 4,
		"numberOfTalents": 6,
		"numberOfAdvances": 11
	},
	"QUESTING_KNIGHT": {
		"id": "QUESTING_KNIGHT",
		"label": "Questing Knight",
		"description": "Questing Knights seek the Grail. Following in the footsteps of Louis the Rash, they cross Bretonnia and the rest of the world, seeking the blessing of the Lady of the Lake. Those knights who have succeeded in their quest have met the Lady in a variety of places, so the quest is not a search for a place. Rather, it is an effort to prove oneself worthy of the Grail. Thus, Questing Knights strive to show themselves to be paragons of knighthood, seeking out dangerous situations in which to uphold the honour of Bretonnia and the Lady of the Lake. Questing Knights renounce the use of the lance because it is the weapon of loyal service, and a Questing Knight stands apart from the feudal hierarchy until his quest is complete.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 35,
			"BS": 0,
			"S": 20,
			"T": 20,
			"Ag": 25,
			"Int": 10,
			"WP": 25,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 2,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KNIGHT_OF_THE_REALM"
		],
		"advanceTo": [
			"CAPTAIN",
			"COURTIER",
			"EXPLORER",
			"GRAIL_KNIGHT",
			"FACELESS",
			"NOBLE_LORD",
			"POLITICIAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "GENEALOGY_HERALDRY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "RELIGION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Luck,  Seasoned Traveller,  Specialist Weapon Group (Two-handed),  Strike Mighty Blow,  Strike to Injure,  Sturdy,  Very Resilient,  Very Strong,  Virtue of the Quest,  Warrior Born"
		],
		"trappings": [
			"Heavy Armour (Full Plate Armour)",
			"Shield",
			"Icon of the Lady of the Lake",
			"Destrier with Saddle and Harness"
		],
		"notes": "Characters who are not male Bretonnian nobles must pretend to be so in order to become Questing Knights.",
		"source": "KotG",
		"numberOfSkills": 12,
		"numberOfTalents": 1,
		"numberOfAdvances": 40
	},
	"RACKETEER": {
		"id": "RACKETEER",
		"label": "Racketeer",
		"description": "Racketeers make up the general ranks of most criminal organisations. They are experts at extorting protection money from small businesses, which tends to be their most lucrative operation. Successful Racketeers move into such activities as loan sharking, drug pedalling, prostitution and illegal gambling dens. They are seldom very imaginative, insofar as criminals go, but they are generally ruthless and used to having their own way. Racketeers are sometimes even a part of the local government, which makes rooting them out a very tricky business for law enforcement. In some areas, they are the local law enforcement.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 15,
			"S": 15,
			"T": 10,
			"Ag": 10,
			"Int": 0,
			"WP": 15,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 1,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BAILIFF",
			"BODYGUARD",
			"CAT_BURGLAR",
			"EX_CONVICT",
			"FENCE",
			"GUILD_MASTER",
			"INTERROGATOR",
			"MERCHANT",
			"POLITICIAN",
			"PROTAGONIST",
			"SPY",
			"THUG"
		],
		"advanceTo": [
			"FENCE",
			"MASTER_THIEF",
			"POLITICIAN",
			"OUTLAW_CHIEF"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			}
		],
		"talents": [
			"Menacing",
			"Street Fighting",
			"Streetwise",
			"Strike Mighty Blow",
			"Strike to Stun"
		],
		"trappings": [
			"Knuckle-dusters",
			"Good Quality Clothing",
			"Hat"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 5,
		"numberOfAdvances": 25
	},
	"RACONTEUR": {
		"id": "RACONTEUR",
		"label": "Raconteur",
		"description": "Born with a gift of gab and a desire to use it, Raconteurs are natural storytellers who can be found in taverns, inns, and salons anywhere in the Empire. No matter what the occasion – or even if it’s no occasion at all – the Raconteur has a ready story. He travels from place to place, witnessing marvellous things and weaving a thrilling tale about it all. In a society in which most people cannot read, the Raconteur is both a source of news and entertainment, mixing witty repartee and cutting wit into his stories. To gain his news, a Raconteur might find himself travelling with armies and adventuring bands in the hope of seeing (and surviving) something new and exciting, something that will earn him a few rounds of drinks and a healthy audience at the local inn. Not all Raconteurs enjoy the adventurous life, however. Some stay comfortably where they are and make it all up.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"CAMP_FOLLOWER",
			"ENTERTAINER",
			"ROGUE",
			"SEAMAN",
			"SOLDIER",
			"STUDENT",
			"VAGABOND"
		],
		"advanceTo": [
			"CHARLATAN",
			"COURTIER",
			"DEMAGOGUE",
			"ENTERTAINER",
			"HERALD",
			"INITIATE",
			"RAPSCALLION",
			"ROGUE"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "COMEDIAN"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "STORYTELLER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Etiquette or Hardy",
			"Public Speaking",
			"Seasoned Traveller"
		],
		"trappings": [
			"Best Clothing",
			"Outrageous Hat"
		],
		"notes": "",
		"source": "SH",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"RAPSCALLION": {
		"id": "RAPSCALLION",
		"label": "Rapscallion",
		"description": "Some young men have a certain charm to them. They aren’t necessarily wealthy but they know how to wear clothes well, to make themselves look good in a dashing and slightly unconventional way. They’re clever, quick, and a little dangerous, like a young cat just come into its full growth and proud of its own speed and claws. Rapscallions are not thieves, though they may steal. They are not duellists, though they may fight duels. They are not scholars, though they may be well-read. What they are is young men with style and grace and flair who like to be in the thick of things. A Rapscallion lives for action, for excitement, and his presence tends to energize others. He can be an excellent ally, a dangerous enemy, or merely a short distraction, but one thing is certain—a Rapscallion is always memorable.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 15,
			"Ag": 25,
			"Int": 10,
			"WP": 10,
			"Fel": 30
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"DILETTANTE",
			"GAMBLER",
			"RACONTEUR",
			"VAGABOND"
		],
		"advanceTo": [
			"CHARLATAN",
			"DUELLIST",
			"FENCE",
			"HIGHWAYMAN",
			"SPY"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "LIP_READING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Ambidextrous or Fleet Footed",
			"Dealmaker or Streetwise",
			"Public Speaking or Sixth Sense",
			"Swashbuckler or Quick Draw"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Dashing clothes",
			"Cloak",
			"Sword or Pistol with Powder and Ammunition for 10 Shots",
			"Dagger"
		],
		"notes": "",
		"source": "CC",
		"numberOfSkills": 12,
		"numberOfTalents": 4,
		"numberOfAdvances": 27
	},
	"RAT_CATCHER": {
		"id": "RAT_CATCHER",
		"label": "Rat Catcher",
		"description": " The Rat Catcher is a common sight throughout the Empire. They can be found in villages, towns, and cities, making a living by disposing of the vermin that infest all dwellings in this unsanitary age. Rat Catchers are often travelling folk, although larger towns and cities have permanent contingents of “vermin soldiers.” Rats are their chief enemy, but they can also dispose of moles, mice, and even fouler pests. City-dwelling Rat Catchers spend a great deal of time in the sewers, wading through rivers of filth in search of their prey. It’s a dirty job but it helps keep the plague away.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"GRAVE_ROBBER",
			"JAILER",
			"RUNEBEARER",
			"TOMB_ROBBER"
		],
		"advanceTo": [
			"ANIMAL_TRAINER",
			"CAT_BURGLAR",
			"GRAVE_ROBBER",
			"JAILER",
			"SHIELDBREAKER",
			"THIEF"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SET_TRAP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Resistance to Disease",
			"Resistance to Poison",
			"Specialist Weapon Group (Sling)",
			"Tunnel Rat"
		],
		"trappings": [
			"Sling with Ammunition",
			"4 Animal Traps",
			"Pole with 1d10 dead rats",
			"Small but Vicious Dog"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"REAVER": {
		"id": "REAVER",
		"label": "Reaver",
		"description": "The seas of the Old World are full of terrors, some Human, others subhuman. Among the most feared mariners are the Norse Reavers, brutal warriors who plunder the coastlines in search of foodstuffs, gold, and slaves. They are a merciless lot, hardened from their frequent battles with Imperial sailors and the feeble militias that stand against them. Reavers sail the seas to bring booty back to their settlements in their frozen lands. Others sell their souls to the Ruinous Powers, hoping to attract the attention of their uncaring Gods, and gain the power they so crave.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 10,
			"T": 5,
			"Ag": 10,
			"Int": 0,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BONDSMAN",
			"MARAUDER",
			"SEAMAN",
			"SKALD",
			"WARLEADER",
			"WHALER"
		],
		"advanceTo": [
			"MARINE",
			"MATE",
			"MERCENARY",
			"NAVIGATOR",
			"SLAVER",
			"VETERAN",
			"WARLEADER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "LUSTRIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "NORSCA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "SOUTHLANDS"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_WASTELAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ESTALIAN"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "REIKSPIEL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Hardy or Street Fighting",
			"Menacing or Strike Mighty Blow",
			"Seasoned Traveller"
		],
		"trappings": [
			"Hand Weapon",
			"Medium Armour (Mail Shirt,  Leather Jack,  Leather Leggings,  Leather Skullcap,  and Helmet)",
			"Shield",
			"Tattoos"
		],
		"notes": "",
		"source": "ToC",
		"numberOfSkills": 9,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"RIVERWARDEN": {
		"id": "RIVERWARDEN",
		"label": "Riverwarden",
		"description": "A clarion call across the murky waters of the Reik can only mean one thing: Riverwardens. These strong-backed lawmen are commonly perceived by river goers as little better than thugs, as they must harass even innocent vessels when checking for smuggled goods and have learned that politeness and trust do not pay off. The over-worked patrols, which toil through month-long shifts at a time, are responsible for waters too large to be effectively controlled. They spend most of their time concentrating on the worst law-breakers, including pirates, murderers, and barge thieves, and allow most petty misdemeanours to slip by with spot-fines. They are a common sight on the rivers, and their patrols extend as far as Kislev.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 10,
			"S": 10,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOATMAN",
			"FERRYMAN",
			"MARINE",
			"ROADWARDEN"
		],
		"advanceTo": [
			"BOATMAN",
			"MARINE",
			"ROADWARDEN",
			"SEAMAN",
			"SERGEANT",
			"SMUGGLER",
			"TOLL_KEEPER",
			"VERENEAN_INVESTIGATOR",
			"WRECKER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SAIL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "SCOUT"
			}
		],
		"talents": [
			"Orientation or Very Strong",
			"Specialist Weapon (Gunpowder)"
		],
		"trappings": [
			"Pistol with Powder and Ammunition for 10 Shots",
			"Light Armour (Leather Jack)",
			"Row Boat",
			"Shield",
			"Uniform",
			"10 Yards of Rope"
		],
		"notes": "If you are rolling randomly for your Starting Career, you can substitute Riverwarden for Roadwarden with your GM’s approval.",
		"source": "WC",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 11
	},
	"ROADWARDEN": {
		"id": "ROADWARDEN",
		"label": "Roadwarden",
		"description": "The Empire consists of pockets of civilisation tenuously connected to each other by roads and rivers. Much of the land is heavily forested, and such terrain is home to bandits, Mutants, Beastmen, and Goblins. Merely travelling from one city to another is an adventure, despite the constant vigilance of the Roadwardens. These lawmen patrol the roads and tracks of the Empire, protecting travellers and their goods. Since their numbers are small, they work with local militia and Soldiers to deal with larger threats. Most of the time though, it is up to small groups of Roadwardens to deal with all but the worst hazards. ",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"COACHMAN",
			"FERRYMAN",
			"MESSENGER",
			"OUTRIDER",
			"WATCHMAN"
		],
		"advanceTo": [
			"HIGHWAYMAN",
			"MESSENGER",
			"OUTLAW",
			"OUTRIDER",
			"SCOUT",
			"SERGEANT",
			"TOLL_KEEPER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "FOLLOW_TRAIL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "SCOUT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Quick Draw or Rapid Reload",
			"Specialist Weapon Group (Gunpowdwer)"
		],
		"trappings": [
			"Pistol with 10 Firearm Balls and Gunpowder",
			"Medium Armour (Mail Shirt and Leather Jack)",
			"Shield",
			"10 Yards of Rope",
			"Light Warhorse with Saddle and Harness (or Pony for Halfling)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 11
	},
	"ROGUE": {
		"id": "ROGUE",
		"label": "Rogue",
		"description": "If Rogues have a creed, it is this: never do an honest day’s work if you can avoid it. These fast-talking con men use their charm and luck to make their way in the world. Some work as bawds, professional guides to the dens of vice and inequity to be found in any city. Others are professional gamblers or raconteurs. All Rogues favour their wits over their swords, and they always have a ready story on their lips. While Rogues often have one city as home turf, some travel from place to place, profiting from elaborate schemes and then moving on. The most skilled Rogues go undetected. Their lies are so convincing that even those they have swindled never realize it was a con.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"ASSASSIN",
			"ENTERTAINER",
			"ENVOY",
			"ESTALIAN_DIESTRO",
			"NOBLE",
			"SEAMAN",
			"THIEF",
			"VALET"
		],
		"advanceTo": [
			"CHARLATAN",
			"DEMAGOGUE",
			"ENTERTAINER",
			"EX_CONVICT",
			"OUTLAW",
			"SERVANT",
			"THIEF"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "THIEF"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "ACTOR"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "STORYTELLER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"operator": "OR",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "THIEVES_TONGUE"
					}
				]
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Flee! or Streetwise",
			"Luck or Sixth Sense",
			"Public Speaking"
		],
		"trappings": [
			"One set of Best Craftsmenship Clothing or Dice or Deck of Cards",
			"1d10 gc"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"RUNEBEARER": {
		"id": "RUNEBEARER",
		"label": "Runebearer",
		"description": "The Undgrin Ankor, a network of elaborate tunnels that once ran the length of the World’s Edge Mountains, connects the Dwarfholds east of the Empire. Communication between holds is carried out by means of Runebearers – specially trained young Dwarfs who risk life and limb to carry messages (written in the runic script of the Dwarfs) from one hold to another. Over recent centuries, as more Dwarfholds have fallen to the Goblinoids and more tunnels have become ruined, the Runebearers’ lot has become increasingly difcult. Tey are forced to take more circuitous routes, and even these are fraught with danger as the enemies discover the routes. Often, Runebearers must leave the tunnels altogether and cross mountains and valleys on the surface. Runebearers who specialize in long distances are sometimes used to carry messages between the Dwarf communities of the Empire and those of mountains.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 1,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"SHIELDBREAKER"
		],
		"advanceTo": [
			"APPRENTICE_RUNESMITH",
			"RAT_CATCHER",
			"SCOUT",
			"SEWER_JACK",
			"SHIELDBREAKER",
			"TOMB_ROBBER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATOR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "SCOUT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Flee!",
			"Fleet Footed or Sixth Sense",
			"Orientation",
			"Rapid Reload",
			"Very Resilient or Very Strong"
		],
		"trappings": [
			"Crossbow and 10 Bolts",
			"Light Armour (Leather Jerkin)",
			"Healing Draught",
			"Lucky Charm"
		],
		"notes": "Only Dwarfs can enter this career.",
		"source": "WHFR",
		"numberOfSkills": 6,
		"numberOfTalents": 5,
		"numberOfAdvances": 11
	},
	"RUNELORD": {
		"id": "RUNELORD",
		"label": "Runelord",
		"description": "The Runelords are the greatest of the Runesmiths. A Runelord candidate may only be promoted with the death of an existing Runelord, so this position is highly coveted and contested. Among the Dwarfs, Runelords are equal to kings, and so they move through Dwarf society as some of its most esteemed members. A few Runelords withdraw from the world, sequestering themselves away to learn the deeper secrets of the Master Runes and perhaps create a few of their own, further diminishing their numbers as their names become legend.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 15,
			"S": 20,
			"T": 15,
			"Ag": 15,
			"Int": 30,
			"WP": 40,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 4,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"JOURNEYMAN_RUNESMITH"
		],
		"advanceTo": [
			"CAPTAIN",
			"GUILD_MASTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_FOUR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RUNECRAFT"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "ARCANE_DWARF"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Master Rune (any two)",
			"Rune (any ten)",
			"Specialist Weapon Group (any one)",
			"Strike to Injure or Strike to Stun"
		],
		"trappings": [
			"Three runic items"
		],
		"notes": "Only Dwarfs can enter this career.",
		"source": "WoS",
		"numberOfSkills": 14,
		"numberOfTalents": 4,
		"numberOfAdvances": 45
	},
	"SCHOLAR": {
		"id": "SCHOLAR",
		"label": "Scholar",
		"description": " Scholars are academicians who have dedicated their lives to the pursuit of knowledge. Scholars include sages who delve into philosophy and scientific theory, monks who specialize in religious lore, and tutors who strive to educate the children of wealthy Merchants and Nobles. Some Scholars are driven to pursue esoteric or forbidden knowledge. Such a path requires great mental fortitude and a willingness to risk discovery by Witch Hunters and other Zealots. Those that actively study and pursue the law, such as clerks and lawyers, are considered to be a specialized form of Scholar in the Old World.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 30,
			"WP": 15,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"APPRENTICE_WIZARD",
			"CARTOGRAPHER",
			"FRIAR",
			"HIGH_PRIEST",
			"JOURNEYMAN_WIZARD",
			"MASTER_WIZARD",
			"NAVIGATOR",
			"NOBLE_LORD",
			"PHYSICIAN",
			"PRIEST",
			"SCRIBE",
			"SEA_CAPTAIN",
			"STUDENT"
		],
		"advanceTo": [
			"APPRENTICE_WIZARD",
			"EXPLORER",
			"FRIAR",
			"LITIGANT",
			"MERCHANT",
			"PHYSICIAN",
			"STEWARD"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "CARTOGRAPHER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			}
		],
		"talents": [
			"Linguistics "
		],
		"trappings": [
			"Writing Kit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 1,
		"numberOfAdvances": 22
	},
	"SCOURGE_OF_GOD": {
		"id": "SCOURGE_OF_GOD",
		"label": "Scourge of God",
		"description": "Those who serve their Gods as flagellants sometimes survive throwing themselves into danger to smite the forces of Chaos and darkness. Those who survive long enough become scourges of God, mighty warriors for their deity, blessed with a degree of divine protection. Scourges of God are often highly charismatic, and gather other fanatics around them. In times of war, they are highly praised by the cult hierarchy, but when peace comes the priests prefer to move them along as quickly as possible, lest they find too many “enemies of God” within the towns of cities. Most scourges of God die bravely in battle, but some do move on, often to other ways of discovering and punishing the corrupt. Scourges of God almost always substitute the name of their God when describing themselves: scourge of Sigmar, scourge of Ulric, and so on.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 0,
			"S": 25,
			"T": 25,
			"Ag": 10,
			"Int": 0,
			"WP": 30,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 2,
			"W": 8,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FLAGELLANT"
		],
		"advanceTo": [
			"CHAMPION",
			"INITIATE",
			"INTERROGATOR",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			}
		],
		"talents": [
			"Luck",
			"Menacing",
			"Public Speaking",
			"Resistance to Chaos",
			"Sixth Sense",
			"Very Resilient",
			"Very Strong"
		],
		"trappings": [
			"Flail or Great Weapon",
			"Religious Symbol",
			"Religious Relic",
			"Remains of a Heretic"
		],
		"notes": "You may enter this career even if the insanity you had as a Flagellant has been cured.",
		"source": "ToS",
		"numberOfSkills": 4,
		"numberOfTalents": 7,
		"numberOfAdvances": 37
	},
	"SCOUT": {
		"id": "SCOUT",
		"label": "Scout",
		"description": "Scouts are rare individuals who are more at home in the wild than in the teeming cities of the Old World. They roam through the wilderness, following trails that few other eyes can discern, while keeping an eye out for dangerous beasts and unnatural occurrences. Scouts are often more comfortable with animals than other people. They frequently hire their expertise out to armies, Merchants, and travellers who need to go far off the known roads. They usually roam ahead of their clients, seeking out ambushes and other troubles that may beset a large group on the move.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 20,
			"WP": 15,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOUNTY_HUNTER",
			"CHAMPION",
			"CHARCOAL_BURNER",
			"COACHMAN",
			"FIELDWARDEN",
			"HUNTER",
			"KITHBAND_WARRIOR",
			"MESSENGER",
			"MINER",
			"OUTRIDER",
			"ROADWARDEN",
			"RUNEBEARER",
			"VAGABOND",
			"WOODSMAN"
		],
		"advanceTo": [
			"EXPLORER",
			"OUTLAW_CHIEF",
			"SERGEANT",
			"VAMPIRE_HUNTER",
			"GHOST_STRIDER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "RANGER_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "SCOUT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_TWO"
			}
		],
		"talents": [
			"Charm Animal",
			"Mighty Shot or Sure Shot",
			"Orientation",
			"Rapid Reload",
			"Specialist Weapon (Crossbow or Longbow)"
		],
		"trappings": [
			"Medium Armour (Mail Shirt and Leather Jack)",
			"Shield",
			" 10 Yards of Rope",
			"Horse with Saddle and Harness"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 12,
		"numberOfTalents": 5,
		"numberOfAdvances": 29
	},
	"SCRIBE": {
		"id": "SCRIBE",
		"label": "Scribe",
		"description": "Since most citizens of the Empire are illiterate, Scribes are very much in demand. Virtually every government, civil, military, or religious institution requires a large number of Scribes for record keeping. There are also public Scribes, who make a living writing and reading letters for the common folk. Scribes are well educated and many go on to become Scholars or lawyers. A few tire of reading about the adventures of others and resolve to have some of their own. With their extensive knowledge of other languages, they make excellent translators for foreign expeditions.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"APPRENTICE_WIZARD",
			"CARTOGRAPHER",
			"INITIATE"
		],
		"advanceTo": [
			"APPRENTICE_RUNESMITH",
			"AGITATOR",
			"APPRENTICE_WIZARD",
			"INITIATE",
			"NAVIGATOR",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "BRETON"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "REIKSPIEL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "CALLIGRAPHER"
			}
		],
		"talents": [
			"Linguistics"
		],
		"trappings": [
			"Knife",
			"A Pair of Candles",
			"Wax",
			"5 matches",
			"Illuminated Book",
			"Writing Kit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 1,
		"numberOfAdvances": 9
	},
	"SEA_CAPTAIN": {
		"id": "SEA_CAPTAIN",
		"label": "Sea Captain",
		"description": "Sea Captains roam the oceans of the Old World seeking profit and adventure over the next horizon. Strictly honourable Sea Captains are far-travelling traders who only sail in search of the most profitable markets for their goods. The most dangerous are bloodthirsty pirates, attacking other ships for plunder and leaving no survivors. Most Sea Captains fall somewhere in between. On a sea-going vessel a Captain’s word is law. Sailors, however, are a fractious lot; a Sea Captain must be clever, strong-willed and a bit ruthless to stay in command. The most famous Sea Captains come from Marienburg, Tilea, and the Elven island of Ulthuan.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 20,
			"S": 15,
			"T": 20,
			"Ag": 20,
			"Int": 20,
			"WP": 25,
			"Fel": 30
		},
		"secondaryProfile": {
			"A": 2,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"EXPLORER",
			"MATE",
			"NAVIGATOR",
			"NOBLE_LORD"
		],
		"advanceTo": [
			"EXPLORER",
			"NOBLE_LORD",
			"SCHOLAR",
			"SPY"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SAIL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "CARTOGRAPHER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "SHIPWRIGHT"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Disarm",
			"Lightning Parry or Swashbuckler",
			"Seasoned Traveller",
			"Specialist Weapon Group (Fencing)",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Rapier",
			"Light Armour (Leather Jack)",
			"Telescope",
			"Ship"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 10,
		"numberOfTalents": 5,
		"numberOfAdvances": 43
	},
	"SEAMAN": {
		"id": "SEAMAN",
		"label": "Seaman",
		"description": "Most Imperial seamen come from the province of Nordland, which has a long stretch of coast on the Sea of Claws. The Greatships, Wolfships, and Wargalleys of the Imperial Fleet patrol these waters, protecting the Empire from Norse longships, Bretonnian buccaneers, and the dreaded fleets of Chaos. Hardened Seaman crew these ships, while their compatriots sail merchantmen, pirate vessels, and other privately owned craft. Elven sailors can be found on the Sea of Claws as well, particularly those engaged by their great Merchant Houses. The activity of the region revolves around Marienburg, the greatest port in the Old World. This city and its surrounding area (known as the Wasteland) used to be the Imperial province of Westerland but it bought its independence years ago. While Marienburg itself is neutral territory, the Sea of Claws is the site of daily clashes. On blood-soaked decks, Seamen earn their rum ration and their booty.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 10,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOATMAN",
			"ENVOY",
			"FERRYMAN",
			"FISHERMAN",
			"NORSE_BERSERKER",
			"SMUGGLER"
		],
		"advanceTo": [
			"MARINE",
			"MATE",
			"NAVIGATOR",
			"ROGUE",
			"SMUGGLER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_WASTELAND"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "NORSCA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "NORSE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Hardy or Street Fighting",
			"Seasoned Traveller",
			"Strike Mighty Blow or Swashbuckler"
		],
		"trappings": [
			"Leather Jerkin",
			"Bottle of Poor Craftsmenship Spirits"
		],
		"notes": "During character creation, if you take Common Knowledge (the Wasteland), your character can be from the great port of Marienburg at your option.",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"SEER": {
		"id": "SEER",
		"label": "Seer",
		"description": "Seers are self-appointed authorities on all matters involving the spiritual world. They can be found in marketplaces of any town, proclaiming their latest revelation to anyone who will listen. Since Seers operate outside the bounds of sanctioned religious laws, and purport to understand the will of the Gods, they are easy targets for persecutions by Witch Hunters, who don’t draw a line of distinction between the authentic seers and the charlatans. In Norsca, however, Seers are valued members of a Jarl’s entourage, reading the signs and portents in the entrails of their sacrifice or translating the flickers of fire to divine some glimpse of future events.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HEDGE_WIZARD",
			"SKALD"
		],
		"advanceTo": [
			"AGITATOR",
			"CHARLATAN",
			"WITCH"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "BLATHER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "DAEMONIC"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "MAGICK"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHANNELLING"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "PALM_READER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PUBLIC_SPEAKING"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "MAGICAL_SENSE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Hedge Magic or Keen Senses",
			"Luck or Petty Magic (Hedge)",
			"Public Speaking"
		],
		"trappings": [
			"Instruments of Divination (dice,  cards,  a chicken,  etc.)"
		],
		"notes": "",
		"source": "ToC",
		"numberOfSkills": 4,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"SERGEANT": {
		"id": "SERGEANT",
		"label": "Sergeant",
		"description": "Sergeants are professional warriors who’ve managed to impress either a Captain or a Noble with their ability to command men in battle. They lead small units of Soldiers, Militiamen, Mercenaries and Roadwardens, ensuring that orders are carried out to the letter. Some lead by setting a sterling example, others by terrifying their troops into quick obedience. Those who make their troopers lives a priority tend to be the most popular. The best Sergeants earn the respect of their Soldiers with their own blood and courage. They are often called upon to lead their men into danger and they swiftly become experts at assessing the capabilities of others.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 15,
			"S": 10,
			"T": 10,
			"Ag": 10,
			"Int": 10,
			"WP": 10,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ASSASSIN",
			"CHAMPION",
			"DUELLIST",
			"HIGHWAYMAN",
			"JUDICIAL_CHAMPION",
			"KISLEVITE_KOSSAR",
			"MARINE",
			"MERCENARY",
			"MILITIAMAN",
			"NORSE_BERSERKER",
			"PISTOLIER",
			"ROADWARDEN",
			"SCOUT",
			"SHIELDBREAKER",
			"SOLDIER",
			"SQUIRE",
			"TARGETEER",
			"VETERAN",
			"WATCHMAN"
		],
		"advanceTo": [
			"CAPTAIN",
			"DUELLIST",
			"JUDICIAL_CHAMPION",
			"KNIGHT"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "TILEAN"
			}
		],
		"talents": [
			"Menacing or Seasoned Traveller",
			"Street Fighting or Wrestling",
			"Strike Mighty Blow",
			"Strike to Stun"
		],
		"trappings": [
			"Medium Armour (Full Mail Armour)",
			"Shield"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 10,
		"numberOfTalents": 4,
		"numberOfAdvances": 26
	},
	"SERVANT": {
		"id": "SERVANT",
		"label": "Servant",
		"description": "There are few lower on the social ladder than Servants. While their work is necessary, they are usually despised by their social superiors. For the scullion, the stable boy, and the serving wench, escape from their hard lives often seems impossible. These unfortunates must perform an unending number of menial tasks for their employers, be they Nobles, Guild Masters, or Innkeepers. It is possible for a Servant to work up to a better position, but the path is difficult. No one wants to listen to the lad that was cleaning the privy last week. Thus many Servants leave their masters behind and become adventurers instead.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAMP_FOLLOWER",
			"PEASANT",
			"ROGUE"
		],
		"advanceTo": [
			"AGITATOR",
			"BURGHER",
			"CAMP_FOLLOWER",
			"INNKEEPER",
			"MESSENGER",
			"SPY",
			"THIEF",
			"VALET"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "COOK"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SLEIGHT_OF_HAND"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Acute Hearing or Flee!",
			"Etiquette or Hardy",
			"Lightning Reflexes or Very Resilient"
		],
		"trappings": [
			"One Set of Good Craftsmenship Clothing",
			"Pewter Tankard",
			"Tinderbox",
			"Storm Lantern",
			"Lamp Oil"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"SEWER_JACK": {
		"id": "SEWER_JACK",
		"label": "Sewer Jack",
		"description": "The Sewer Jacks are a specialised force, under the command of the City Watch, whose purpose is to keep the sewer system and the Undercity (see AoM p. 28) secure. A certain amount of courage is required to police the fetid tunnels beneath Middenheim, but the Sewer Jacks are less choosy in their recruiting policy than the other armed forces – partly because there is nearly always a shortage of volunteers for this dangerous and unpleasant duty. A typical patrol of Sewer Jacks is 6-8 strong.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 0,
			"T": 10,
			"Ag": 5,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"JAILER",
			"MILITIAMAN",
			"PEASANT",
			"RAT_CATCHER",
			"SHIELDBREAKER",
			"WATCHMAN"
		],
		"advanceTo": [
			"MERCENARY",
			"RAT_CATCHER",
			"SERGEANT",
			"SHIELDBREAKER",
			"SMUGGLER",
			"VETERAN",
			"WATCHMAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "FOLLOW_TRAIL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "SCOUT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Quick Draw or Resistance to Disease",
			"Tunnel Rat"
		],
		"trappings": [
			"Crossbow with 10 bolts",
			"Lantern",
			"Light Armour (Leather Jack)"
		],
		"notes": "If you are rolling randomly for your Starting Career, you can substitute Sewer Jack for Watchman with your GM’s permission.",
		"source": "AoM",
		"numberOfSkills": 7,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"SHIELDBREAKER": {
		"id": "SHIELDBREAKER",
		"label": "Shieldbreaker",
		"description": "Chaos and greenskin incursions have overrun many Dwarfholds in the World’s Edge Mountains over the centuries. To protect their remaining fortress cities, the Dwarfs have trained elite Soldiers who specialize in fighting deep underground. They are the Shieldbreakers, doughty warriors that seek to stem the tide of evil and safeguard their people. While most Shieldbreakers are Dwarfs, members of other races join their ranks from time to time in exchange for Dwarfen gold. Young Dwarfs from the Empire often become Shieldbreakers to prove their mettle and show solidarity with their mountain kin.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"KISLEVITE_KOSSAR",
			"MERCENARY",
			"MINER",
			"RAT_CATCHER",
			"RUNEBEARER",
			"SMUGGLER",
			"TOMB_ROBBER"
		],
		"advanceTo": [
			"PIT_FIGHTER",
			"RUNEBEARER",
			"SERGEANT",
			"SEWER_JACK",
			"SMUGGLER",
			"TOMB_ROBBER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			}
		],
		"talents": [
			"Acute Hearing or Coolheaded",
			"Orientation",
			"Strike Mighty Blow",
			"Strike to Injure",
			"Strike to Stun"
		],
		"trappings": [
			"Crossbow with 10 bolts",
			"Medium Armour (Mail Coat,  Leather Jack and Leather Leggings)",
			"Shield",
			"Grappling Hook",
			"10 Yards of Rope",
			"Water Skin"
		],
		"notes": "Only Dwarfs can have Shieldbreaker as a Starting Career.",
		"source": "WHFR",
		"numberOfSkills": 5,
		"numberOfTalents": 5,
		"numberOfAdvances": 10
	},
	"SKALD": {
		"id": "SKALD",
		"label": "Skald",
		"description": "Skalds are the keepers of lore, the chroniclers of the histories of the Norse. Part entertainer, part warrior, these individuals are held in high esteem for their wisdom and knowledge. All Kings keep Skalds in their retinues, as do most Jarls. When the call for war is sounded, the Skald bears the banner and marches to battle with his comrades.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BONDSMAN",
			"ENTERTAINER"
		],
		"advanceTo": [
			"AGITATOR",
			"BURGHER",
			"FREEHOLDER",
			"MARAUDER",
			"MERCENARY",
			"REAVER",
			"ROGUE",
			"SEER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "HISTORY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "NORSCA"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "CHAOS_WASTES"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "ANY_TWO"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "NORSE"
			},
			{
				"type": "COMPOSITE",
				"operator": "OR",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "VENTRILOQUISM"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ANY_TWO"
					}
				]
			}
		],
		"talents": [
			"Mimic",
			"Public Speaking",
			"Savvy",
			"Suave"
		],
		"trappings": [
			"Hand Weapon",
			"Shield",
			"Light Armour (Leather Jack and Leather Skullcap)",
			"Banner",
			"Several Scrolls Recounting the Histories of the Character’s Tribe"
		],
		"notes": "",
		"source": "ToC",
		"numberOfSkills": 10,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"SLAVE": {
		"id": "SLAVE",
		"label": "Slave",
		"description": "Without Slaves, Skaven society would collapse. These miserable wretches are bought and sold for Warpstone Tokens on the slave blocks in the major communities of the Under-Empire. When they arrive at their new homes they find endless toil and pain: clearing new tunnels, feeding the Rat Ogres, becoming food for their masters, and serving as test subjects for some new Clan Skryre or Clan Moulder enterprise are only a few of the many possible fates that await Skaven Slaves.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "SKAVEN"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "QUEEKISH"
			}
		],
		"talents": [
			"Acute Hearing or Excellent Vision",
			"Flee! or Hardy",
			"Natural Weapons"
		],
		"trappings": [
			"None"
		],
		"notes": "",
		"source": "CotHR",
		"numberOfSkills": 6,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"SLAVER": {
		"id": "SLAVER",
		"label": "Slaver",
		"description": "In the past, slavery was quite common in the Old World. The practice is as old as Humanity, originating in the ancient empire of Khemri, and continued through the various civilisations that rose and fell in the intervening years, leading to the present day. In an evolving economy, slavery is simply impractical. In places like Bretonnia, serfs perform all the work and live lives little better than slaves, but in the Empire, men and women, whilst Peasants, are in charge of their own destinies. Of course, in some remote corners of the Old World, the practice flourishes. Araby is famed for its flesh markets as is Sartosa and even some dark corners in Marienburg. The Norsemen take slaves as well, either from surrendered adversaries or as plunder from one of their raids. Occasionally, they have reason to traffic with unsavoury flesh dealers, and some enterprising Norsemen take up the profession.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 20,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"MARAUDER",
			"MERCHANT",
			"REAVER"
		],
		"advanceTo": [
			"CAPTAIN",
			"OUTLAW_CHIEF",
			"SEAMAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Dealmaker",
			"Menacing",
			"Public Speaking",
			"Seasoned Traveller or Streetwise",
			"Specialist Weapon Group (Entangling) or Strike to Stun"
		],
		"trappings": [
			"Hand Weapon",
			"Horse and Cart",
			"Horse with Saddle and Harness",
			"three Pairs of Manacles",
			"10 Yards of Rope",
			"1d10 Thralls"
		],
		"notes": "",
		"source": "ToC",
		"numberOfSkills": 9,
		"numberOfTalents": 5,
		"numberOfAdvances": 20
	},
	"SMUGGLER": {
		"id": "SMUGGLER",
		"label": "Smuggler",
		"description": "Most of the sea and road trade of the Old World is subject to duties and taxes. Imperial tax collectors, local excisemen, petty lords, and anyone with enough muscle can place a duty on the movement of goods. Legal taxes are bad enough, but many pirates and Outlaw Chiefs also demand a cut to allow safe passage. In large ports like Marienburg, nearly everything moving in or out is taxed in some way. Given this state of affairs, the Smugglers’ trade continues to thrive. While smuggling is, of course, illegal, most folks in the Empire don’t think much of cutting a few corners. In their minds, the taxmen and bureaucrats are the real thieves.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 0,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BAILIFF",
			"BOATMAN",
			"CAMP_FOLLOWER",
			"COACHMAN",
			"ENGINEER",
			"FERRYMAN",
			"INNKEEPER",
			"MARINE",
			"MINER",
			"SEAMAN",
			"SHIELDBREAKER"
		],
		"advanceTo": [
			"BOATMAN",
			"CHARLATAN",
			"EX_CONVICT",
			"FENCE",
			"FERRYMAN",
			"SEAMAN",
			"SHIELDBREAKER",
			"THIEF"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "COMPOSITE",
				"operator": "OR",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "THIEVES_TONGUE"
					}
				]
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "THIEF"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Dealmaker or Streetwise"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"2 Torches",
			"Draft Horse and Cart or Rowing Boat"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 10,
		"numberOfTalents": 1,
		"numberOfAdvances": 10
	},
	"SOLDIER": {
		"id": "SOLDIER",
		"label": "Soldier",
		"description": "Every province and city-state in the Empire maintains its own army, trained and equipped at its own expense. Together these regional forces make up the Imperial Army, though they are often supplemented with militia troops and Mercenaries. These Soldiers are full-time, paid professionals, usually drawn from the Peasant or Burgher classes. They man the Empire’s fortresses, patrol the borders, and repel invaders. Most Soldiers of the infantry train with either the halberd or the firearm. Although dominated by the nobility, the Imperial Army also promotes based on ability and it is possible to rise through the ranks to a command position (though the bigotry of the ruling class makes this difficult). Imperial Dwarfs and Halflings are usually formed into their own units. ",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FLAGELLANT",
			"HUNTER",
			"MESSENGER",
			"TOLL_KEEPER",
			"WATCHMAN"
		],
		"advanceTo": [
			"MERCENARY",
			"OUTRIDER",
			"SERGEANT",
			"VAGABOND",
			"VETERAN",
			"WATCHMAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			}
		],
		"talents": [
			"Disarm or Quick Draw",
			"Sharpshooter or Strike Might Blow",
			"Specialist Weapon Group (Gunpowder or Two-handed)",
			"Strike to Injure or Rapid Reload",
			"Strike to Stun or Mighty Shot"
		],
		"trappings": [
			"Great Weapon (halberd) or Firearm with Ammunition for 10 shots",
			"Shield",
			"Light Armour (Full Leather Armour)",
			"Uniform"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 6,
		"numberOfTalents": 5,
		"numberOfAdvances": 10
	},
	"SPY": {
		"id": "SPY",
		"label": "Spy",
		"description": "Spies are secret agents who gather information for their patrons or the highest bidder. Spies are masters of disguise who often risk their lives to work undercover in enemy territory. Some will even join subversive groups and study them for months from the inside. A Spy who dares to infiltrate a Chaos coven risks far worse than death, but there are many groups in the Old World who desperately need the information such a stout soul can provide. All the nations of the Old World employ Spies, usually to monitor the military and political moves of their rivals.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 15,
			"S": 5,
			"T": 10,
			"Ag": 20,
			"Int": 20,
			"WP": 35,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CAMP_FOLLOWER",
			"CHARLATAN",
			"COURTIER",
			"EXPLORER",
			"MERCHANT",
			"MINSTREL",
			"PHYSICIAN",
			"RAPSCALLION",
			"SEA_CAPTAIN",
			"SERVANT"
		],
		"advanceTo": [
			"ASSASSIN",
			"EXPLORER",
			"MASTER_THIEF",
			"RACKETEER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "LIP_READING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "ACTOR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PICK_LOCK"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_THREE"
			}
		],
		"talents": [
			"Flee!",
			"Linguistics",
			"Schemer",
			"Suave or Sixth Sense"
		],
		"trappings": [
			"Disguise Kit",
			"4 Homing Pigeons"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 4,
		"numberOfAdvances": 33
	},
	"SQUIRE": {
		"id": "SQUIRE",
		"label": "Squire",
		"description": "Squires are Knights in training. Often of Noble blood, they assist Knights on and off the field of battle. Though they can appear to be nothing more than glorified Servants, fetching food and wine for their lord or tending to his horses and panoply, the gruelling work is meant to toughen up the Squires and ready them for knighthood. Their lords are also supposed to provide them with martial training, though some are lax in this duty. Favoured Noble sons serve as Squires for a few months at best, while those less fortunate spend years trying to earn their spurs.  ",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 0,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HERALD",
			"NOBLE",
			"VALET"
		],
		"advanceTo": [
			"KNIGHT",
			"NOBLE",
			"OUTLAW",
			"SERGEANT",
			"VETERAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "GENEALOGY_HERALDRY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONNIA"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_TRAINING"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "REIKSPIEL"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Etiquette",
			"Specialist Weapon Group (Cavalry)",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Demilance",
			"Medium Armour (Mail Shirt,  Mail Coif,  Leather Jack)",
			"Shield",
			"Horse with Saddle and Harness"
		],
		"notes": "If, during character creation, you take Common Knowledge (Bretonnia) and Speak Language (Breton), your character can be from Bretonnia at your option.",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"STEPPES_NOMAD": {
		"id": "STEPPES_NOMAD",
		"label": "Steppes Nomad",
		"description": "Uncounted krugs of Ungol nomads wander the frozen steppes of the Troll Country. These tribesmen were pushed north when the Gospodars invaded and have roamed the dangerous province ever since. There, they follow their domesticated herds from pasture to pasture, chasing the warmth of Dazh, their patron, and settling briefly in portable huts called kibitkas. They are a passionate and fierce folk, tempered by harsh surroundings and endless conflicts with marauding kyazaks. By Kislevite law, every nomadic krug is expected to annually form a rota of Kislev’s famed horse archers, which then patrols the northern oblast every Spring Driving, ruthlessly slaughtering any invaders they encounter.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 0,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"ATAMAN",
			"HORSE_ARCHER",
			"HORSE_MASTER",
			"OUTLAW",
			"SCOUT",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_TRAINING"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "COOK"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM_ANIMAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "TROLL_COUNTRY"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONCEALMENT"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "FOLLOW_TRAIL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "BOWYER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "SCOUT"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Performer",
						"key": "DANCER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			}
		],
		"talents": [
			"Hardy or Rover"
		],
		"trappings": [
			"Kislevite horse with saddle and harness",
			"week of rations",
			"skins of water and koumiss",
			"a yurta",
			"leather jacks and leggings",
			"Kislevite horse bow with a quiver of 10 arrows."
		],
		"notes": "You must be Ungol and you must be a member of a nomadic krug",
		"source": "RotIQ",
		"numberOfSkills": 10,
		"numberOfTalents": 1,
		"numberOfAdvances": 10
	},
	"STEVEDORE": {
		"id": "STEVEDORE",
		"label": "Stevedore",
		"description": "Stevedores are specialist dockers, trained to properly pack and unpack cargo holds. Loading a ship is skillintensive and dangerous work, for vessels can overbalance and capsize if packed incorrectly, and unsecured cargoes can crush the unwary. Within the claustrophobic ship interiors, Stevedores wind “stevedore lashings” (special knots) with wedges of wood to secure and protect the heavy freight. Many Stevedors specialise in “porting” one type of cargo, as each good requires different skills to manipulate, stack and pack correctly. Thus, most larger wharfs have gangs of “porters” that identify themselves according to the goods they import or export, including fish porters, meat porters and deal porters (for timber). None are more famous than the black-liveried coal porters of Nuln, known for their anything-goes attitude and love of bawdy docker songs. Stevedores wear distinctive cloth watch caps dyed with their gang colours, both to identify their allegiances and to protect themselves from the elements. Stevedore gangs jealously guard their wharfs from rivals, and it takes little provocation for them to dish out “lashings” of a different kind.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 5,
			"S": 10,
			"T": 10,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOATMAN",
			"PEASANT"
		],
		"advanceTo": [
			"BOATMAN",
			"FOREMAN",
			"MARINE",
			"MERCHANT",
			"SMUGGLER",
			"THIEF",
			"THUG",
			"TRADESMAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DODGE_BLOW"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SCALE_SHEER_SURFACE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "SINGER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Lightning Reflexes or Sturdy",
			"Very Strong"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Watch Cap in Gang Colours",
			"10 Yards of Rope",
			"1d10 Wooden Spikes"
		],
		"notes": "If you are rolling randomly for your Starting Career, you can substitute Stevedore for Boatman with your GM’s approval.",
		"source": "WC",
		"numberOfSkills": 7,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"STEWARD": {
		"id": "STEWARD",
		"label": "Steward",
		"description": "A Steward is a household manager, entrusted with arranging all the bothersome everyday details that Nobles and the very rich, such as successful Merchants or powerful clergy, cannot be bothered to deal with. While a Noble Lord will often have no idea what he is worth or how much it takes to upkeep his affairs and various holdings, his Steward will know down to the last shilling. As wealthy Nobles tend to have far flung estates, some Stewards may be put in charge of a property and left to their own devices for years at a time.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 0,
			"Int": 30,
			"WP": 20,
			"Fel": 25
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"COURTIER",
			"FARMER",
			"POLITICIAN",
			"PRIEST",
			"SCHOLAR",
			"VALET"
		],
		"advanceTo": [
			"CRIME_LORD",
			"FENCE",
			"MERCHANT",
			"NOBLE"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "MERCHANT"
			}
		],
		"talents": [
			"Public Speaking",
			"Super Numerate"
		],
		"trappings": [
			"2 Sets of Best Craftsmenship Noble’s Garb",
			"Writing Kit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 14,
		"numberOfTalents": 2,
		"numberOfAdvances": 27
	},
	"STRELTSI": {
		"id": "STRELTSI",
		"label": "Streltsi",
		"description": "The streltsi were originally a rota of kossars from Erengrad. Led by Boyar Boydinov – an eccentric noble obsessed with the Empire – they wielded pole-axes rather than axes, mirroring the halberds favoured by the State Regiments of Ostland. In 2345 IC, whilst driving back a Chaos horde alongside Empire allies, the wide-eyed boyar witnessed Imperial black powder for the first time. His kossars were changed forever. Now, many years after the death of Boydinov, the streltsi are the foremost masters of firearms in Kislev, weapons once viewed with fear and superstition. Soldiers from across Kislev travel to Erengrad to earn the crossed “berdysh and handgun” badge, which is awarded to any who train with the streltsi for more than two seasons.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"WATCHMAN"
		],
		"advanceTo": [
			"BOUNTY_HUNTER",
			"CHEKIST",
			"MERCENARY",
			"SERGEANT",
			"VETERAN",
			"WATCHMAN",
			"WINGED_LANCER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "KISLEVITE"
			}
		],
		"talents": [
			"Marksman or Sharpshooter",
			"Master Gunner or Quick Draw",
			"Mighty Shot or Rapid Reload",
			"Specialist Weapon Group (Gunpowder,  Two-handed)"
		],
		"trappings": [
			"uniform",
			"leather jerkin",
			"leggings and helmet",
			"berdysh pole-arm",
			"firearm",
			"powder and 10 shots"
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 5,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"STRIGANY_MYSTIC": {
		"id": "STRIGANY_MYSTIC",
		"label": "Strigany Mystic",
		"description": "The people of Strigos were scattered to the winds when their lands were destroyed and have since taken up a nomadic life. They roam the Empire in caravan trains or river barges, making money where they can and stealing when they can’t. Their history under the Vampires ensures they maintain their travelling lifestyle, marking them not just as thieves and cutthroats but also necromancers and servants of darkness. In truth, most of them are simple woodsmen, entertainers, or vagabonds, but a few do know something of witchcraft, a little of fortune telling, and a large amount of Vampire lore. These mystics were taught the true and complete history of their people, and they carry the secret knowledge from those ancient days, as well as the promise of their Strigos lords to one day return and lead them back to glory.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 5,
			"Int": 5,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"ASTROLOGER",
			"CHARLATAN",
			"ENTERTAINER",
			"HEDGE_WIZARD",
			"ROGUE",
			"SEER",
			"THIEF"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "NECROMANCY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DRIVE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HYPNOTISM"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "ANY"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "ASTROLOGER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "RANGER"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "STRIGANY"
			}
		],
		"talents": [
			"Sixth Sense",
			"Rover or Seasoned Traveller"
		],
		"trappings": [
			"Deck of Cards",
			"Eldritch Jewellery"
		],
		"notes": "Strigany mystic is only available to those of Strigany blood. Being of that blood imposes a –10% penalty to all Fellowship Tests when dealing with a person of the Empire. With your GM’s permission, you may substitute Strigany mystic for vagabond when rolling for your Starting Career. If you have the WFRP Companion, you may apply the River Strigany Traits to your Strigany mystic.",
		"source": "NDM",
		"numberOfSkills": 11,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"STUDENT": {
		"id": "STUDENT",
		"label": "Student",
		"description": "The great cities of the Empire have many universities. Most, like the Imperial School of Engineers in Altdorf, are funded by the state. The first college in the Empire was established in Nuln and that city is still famous for its learning institutions (and, ironically, its Imperial Gunnery School). Students across the Empire can choose from a wide variety of courses, from history to anatomy to science. Of course, many study nothing more than the bottom of a bottle and wash out of school in less than a year. Elven Students don’t go to Imperial universities, but learn from their own loremasters instead. Halfling students are admitted to Universities on sufferance, due to an obscure piece of Imperial Ordinance demanded by the Elder of the Moot.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"DILETTANTE",
			"ENVOY",
			"GRAVE_ROBBER",
			"MINSTREL",
			"NOBLE",
			"VALET"
		],
		"advanceTo": [
			"AGITATOR",
			"APPRENTICE_WIZARD",
			"BARBER_SURGEON",
			"CARTOGRAPHER",
			"ENGINEER",
			"ENVOY",
			"INITIATE",
			"PHYSICIAN",
			"SCHOLAR"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "ANY_ONE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			}
		],
		"talents": [
			"Etiquette or Linguistic",
			"Savvy or Suave",
			"Seasoned Traveller or Super Numerate"
		],
		"trappings": [
			"Two Textbooks corresponding to Knowledge Skills",
			"Writing Kit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"SWAMP_SKIMMER": {
		"id": "SWAMP_SKIMMER",
		"label": "Swamp Skimmer",
		"description": "Of all the terrain found in the Borderlands, few are as nasty and inhospitable as its swamps and fens. Polluted stretches of land, filled with bloodsucking mosquitoes and ravenous leeches, they are breeding grounds for disease. Since these places are generally left alone, there are all sorts of treasures and oddities lurking beneath the vines and brackish water, and those with the mettle and constitution to resist the disease and vermin that infest these places find they can make a good living. Collectively known as Swamp Skimmers, these men and women brave the hostile environment in the hopes of bettering themselves and perhaps buying passage out of this dangerous land.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 10,
			"Ag": 10,
			"Int": 10,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANCHORITE",
			"PEASANT",
			"VAGABOND"
		],
		"advanceTo": [
			"MERCENARY",
			"PEASANT",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Resistance to Disease",
			"Sixth Sense"
		],
		"trappings": [
			"Large Sack",
			"Thigh-high Waterproof Boots"
		],
		"notes": "",
		"source": "RC",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"SWAMPAIRE": {
		"id": "SWAMPAIRE",
		"label": "Swampaire",
		"description": "Swampaires are hunters and gatherers of snails and frogs. They take their name from an obscure dialect that essentially means man of the swamps or, more commonly, chaser of frogs. Snails and frogs are the only resource in which Mousillon is rich, and swamping is a prestigious occupation among its peasants. Since all creatures in a swamp are technically owned by the local lord, a Swampaire needs at least the implicit approval of the local noble. Some nobles require lengthy apprenticeships and the swearing of oaths before a man can call himself a Swampaire and be permitted to hunt his lord’s swamps. Swampaires tend to be hardy folk adept at tracking snails and frogs, which is a tricky and time-consuming business at the best of times. Swampaires are normally men, but some nobles have been known to permit a particularly sharpeyed and quick-fingered lass to hunt in the absence of suitably skilled menfolk.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOATMAN",
			"FERRYMAN",
			"FROGWIFE",
			"HUNTER",
			"MILITIAMAN",
			"PEASANT"
		],
		"advanceTo": [
			"GRAIL_PILGRIM",
			"HERRIMAULT",
			"MAN_AT_ARMS",
			"OUTLAW",
			"THUG",
			"VAGABOND",
			"VILLAGE_ELDER",
			"YEOMAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SET_TRAP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Hardy",
			"Lightning Reflexes or Very Resilient",
			"Marksman",
			"Rover",
			"Specialist Weapon Group (entangling)"
		],
		"trappings": [
			"Net",
			"spear",
			"sack",
			"1d10 warts",
			"swamping rights granted by local lord"
		],
		"notes": "With your GM’s permission, when rolling your starting career you can substitute Swampaire for Hunter",
		"source": "BotD",
		"numberOfSkills": 6,
		"numberOfTalents": 5,
		"numberOfAdvances": 10
	},
	"TARGETEER": {
		"id": "TARGETEER",
		"label": "Targeteer",
		"description": "Targeteers dedicate themselves to perfecting their skill with missile weapons, most often the mighty longbow, though a rare few prefer the crossbow. They regularly travel to different fairs, delighting crowds with their trick shooting and pitting their skills against all-comers in impromptu contests. Many Nobles regularly hold archery tourneys with a fair purse to the winner and a professional Targeteer can make a decent living if he is skilled enough to regularly claim a prize or two. In these grim times, a Targeteer’s uncanny skill with a bow is in high demand among armies and Mercenary companies.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 40,
			"S": 10,
			"T": 10,
			"Ag": 25,
			"Int": 10,
			"WP": 20,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOUNTY_HUNTER",
			"HUNTER",
			"GHOST_STRIDER",
			"MASTER_THIEF",
			"VAMPIRE_HUNTER",
			"VETERAN"
		],
		"advanceTo": [
			"ASSASSIN",
			"CHAMPION",
			"DUELLIST",
			"SERGEANT"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			}
		],
		"talents": [
			"Mighty Shot",
			"Rapid Reload",
			"Sharpshooter",
			"Specialist Weapon Group (Longbow)",
			"Specialist Weapon Group (Crossbow or Throwing)",
			"Sure Shot"
		],
		"trappings": [
			"Longbow or Crossbow with 10 Arrows or Bolts",
			"Light Armour (Leather Jack)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 6,
		"numberOfTalents": 6,
		"numberOfAdvances": 31
	},
	"TEMPLE_GUARDIAN": {
		"id": "TEMPLE_GUARDIAN",
		"label": "Temple Guardian",
		"description": "Temple Guardians are chosen, not from amongst the brightest members of a congregation, who would be far better put to use elsewhere, but rather from among those whose skills lie in a more physical area. They are expected to be above reproach, and to resist the temptation to steal from their own temples. Some cults ensure this behaviour by telling particularly horrid tales of the fate that awaits such traitors in the afterlife, while others simply encourage temple guardians to keep a close eye on one another, rewarding with great wealth any accusation of theft or disloyalty that proves to be true..",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"GRAVE_WARDEN",
			"INITIATE",
			"MILITIAMAN",
			"WATCHMAN",
			"ZEALOT"
		],
		"advanceTo": [
			"INITIATE",
			"MERCENARY",
			"SOLDIER",
			"SQUIRE",
			"WATCHMAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Cool Headed or Stout Hearted",
			"Strike Mighty Blow",
			"Strike to Stun"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Robes or Uniform"
		],
		"notes": "",
		"source": "ToS",
		"numberOfSkills": 6,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"THIEF": {
		"id": "THIEF",
		"label": "Thief",
		"description": "The Empire is home to many honest, hard working citizens and Thieves are dedicated to taking as much of their money as possible. They tend to be jacks-of-all-trades, willing and able to take advantage of any moneymaking opportunity that comes along. Specialist Thieves include blackmailers, embezzlers, kidnappers, pickpockets, and cattle thieves. Towns and cities of any size have Thieves’ Guilds, which control and organize criminal activity. A few towns have more than one guild, which leads to vicious fighting until one guild eliminates its rival. The most successful Thieves’ Guilds own so many legitimate businesses that over time they turn into Merchant Guilds. It is a rare guild that leaves its larcenous ways behind, however. ",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 0,
			"T": 0,
			"Ag": 15,
			"Int": 5,
			"WP": 0,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ENTERTAINER",
			"GRAVE_ROBBER",
			"INTERROGATOR",
			"MILITIAMAN",
			"OUTLAW",
			"PROTAGONIST",
			"RAT_CATCHER",
			"ROGUE",
			"SERVANT",
			"SMUGGLER",
			"TOLL_KEEPER",
			"TOMB_ROBBER",
			"VAGABOND"
		],
		"advanceTo": [
			"ENTERTAINER",
			"EX_CONVICT",
			"GRAVE_ROBBER",
			"INTERROGATOR",
			"MILITIAMAN",
			"OUTLAW",
			"PROTAGONIST",
			"RAT_CATCHER",
			"ROGUE",
			"SERVANT",
			"SMUGGLER",
			"TOLL_KEEPER",
			"TOMB_ROBBER",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SCALE_SHEER_SURFACE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "EVALUATE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DISGUISE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PICK_LOCK"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SLEIGHT_OF_HAND"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"operator": "OR",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "THIEF"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretLanguage",
						"key": "THIEVES_TONGUE"
					}
				]
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Alley Cat or Streetwise",
			"Super Numerate or Trapfinder"
		],
		"trappings": [
			"Light Armour (Leather Jerkin)",
			"Sack",
			"Lockpicks",
			"10 Yards of Rope"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 10
	},
	"THUG": {
		"id": "THUG",
		"label": "Thug",
		"description": " In the criminal underworld, strength and viciousness are highly prized virtues and no profession illustrates this more clearly than the Thug. When protection money is owed, when Agitators threaten to expose corruption, or when rivals overstep themselves, the Thug is there. A few thwacks with a club is usually enough to send the right message, but harder cases get the full treatment. It’s wisest to flee in such circumstances, but the graveyards are full of those that thought quick wits would be enough to save them. Every Thieves’ Guild and criminal organisation has Thugs in its ranks.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 0,
			"Int": 0,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 1,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"EX_CONVICT",
			"MARINE",
			"PROTAGONIST"
		],
		"advanceTo": [
			"BODYGUARD",
			"EX_CONVICT",
			"INTERROGATOR",
			"MERCENARY",
			"PIT_FIGHTER",
			"RACKETEER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "THIEVES_TONGUE"
			}
		],
		"talents": [
			"Coolheaded or Lightning Reflexes",
			"Disarm",
			"Resistance to Posion or Quick Draw",
			"Strike to Injure or Wrestling",
			"Strike to Stun"
		],
		"trappings": [
			"Knuckle-dusters",
			"Medium Armour (Mail Shirt and Leather Jack)"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 5,
		"numberOfTalents": 5,
		"numberOfAdvances": 9
	},
	"TOLL_KEEPER": {
		"id": "TOLL_KEEPER",
		"label": "Toll Keeper",
		"description": "Collecting money for the government is a thankless job. Doing so in the midst of the wilderness is practically a death sentence. Toll Keepers live in isolated roadside houses, collecting money from passing travellers. The monies collected go towards the upkeep of the roads, but that doesn’t stop travellers from berating, beating, and even killing Toll Keepers trying to do their jobs. If that weren’t bad enough, tollhouses are prime targets for bandits. A Toll Keeper’s life is so fraught with peril and few do it for very long, despite the high wages the position pays. ",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 10,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BAILIFF",
			"COACHMAN",
			"ROADWARDEN"
		],
		"advanceTo": [
			"FERRYMAN",
			"FIELDWARDEN",
			"HIGHWAYMAN",
			"OUTLAW",
			"SOLDIER",
			"POLITICIAN",
			"THIEF"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TILEAN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Lightning Reflexes or Marksman"
		],
		"trappings": [
			"Cheat",
			"Crossbow with 10 Bolts",
			"Medium Armour (Mail Shirt and Leather Jerkin)",
			"Shield",
			"1d10 gc"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 1,
		"numberOfAdvances": 10
	},
	"TOMB_ROBBER": {
		"id": "TOMB_ROBBER",
		"label": "Tomb Robber",
		"description": "Tomb Robbers differ from Grave Robbers in that they are interested in the valuables to be found in burial sites rather than the bodies themselves. Although very few graves in the Old World include valuable goods these days, there are many ancient burial sites that contain priceless treasures. Tomb Robbers are experts in locating such sites and plundering their riches. Secret tombs are usually in dangerous and inaccessible areas. Those within the Empire’s borders are revered and protected by local inhabitants, so accessing these sites can be just as dangerous. Clever traps and deceptions protect the richest tombs and skilled Tomb Robbers must learn to disarm or bypass them. Few survive long enough to raid more than one tomb. ",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"RUNEBEARER",
			"SHIELDBREAKER",
			"THIEF"
		],
		"advanceTo": [
			"FENCE",
			"RAT_CATCHER",
			"SHIELDBREAKER",
			"THIEF",
			"VAMPIRE_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "THIEF"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONCEALMENT"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PICK_LOCK"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SILENT_MOVE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "CLASSICAL"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KHAZALID"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "ELTHARIN"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Luck or Sixth Sense",
			"Trapfinder or Tunnel Rat"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Crowbar",
			"Lantern",
			"Lamp Oil",
			"10 Yards of Rope",
			"2 Sacks"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 11
	},
	"TRADESMAN": {
		"id": "TRADESMAN",
		"label": "Tradesman",
		"description": "Tradesmen are skilled labourers and craftsmen. Although they tend to cluster together in cities, they can also be found in villages across the Empire. They provide many of the goods used by Merchants when trading abroad, and are valued as an important part of the Empire’s economy. Tradesmen include apothecaries, armourers, bowyers, brewers, calligraphers, carpenters, cartographers, gem cutters, gunsmiths, herbalists, peddlers, shipwrights, smiths, stoneworkers, tailors, and weaponsmiths. Each trade has its own guild, though not all guilds have local chapters.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 10,
			"Int": 5,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DRIVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "GUILD_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "ANY"
			}
		],
		"talents": [
			"Dealmaker or Savvy"
		],
		"trappings": [
			"Light Armour (Leather Jerkin),  1d10 gc"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 1,
		"numberOfAdvances": 9
	},
	"TROLL_SLAYER": {
		"id": "TROLL_SLAYER",
		"label": "Troll Slayer",
		"description": "Dwarfs who have been disgraced, crossed in love, or otherwise humiliated abandon traditional society and seek the sweet release of death. They hunt the most dangerous of monsters in the hopes of finding a glorious end. Most of them die fairly quickly, but those few who survive become members of the strange cult of Troll Slayers. They exist only to die, and by doing so redeem whatever disgrace they suffered in the past. They seek the fiercest foes, and Trolls are considered ideal because the Dwarfs’ deaths are almost a certainty. Troll Slayers are instantly recognizable, with their spiky orange hair, outlandish tattoos, and gaudy jewellery. They spend a great deal of time boasting of their exploits and show off their many scars, and often indulge in bouts of overeating, drunkenness, and sleep deprivation.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"PIT_FIGHTER"
		],
		"advanceTo": [
			"GIANT_SLAYER"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			}
		],
		"talents": [
			"Disarm or Quick Draw",
			"Hardy",
			"Lightning Reflexes or Very Resilient",
			"Specialist Weapon Group (Two-handed)",
			"Street Fighter",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Great Weapon",
			"Light Armour (Leather Jerkin)",
			"One Bottle of Poor Craftsmenship Spirits"
		],
		"notes": "Only Dwarfs can join this career. Taking the Slayer’s path is a sure route to death. Think carefully before entering this career.",
		"source": "WHFR",
		"numberOfSkills": 3,
		"numberOfTalents": 6,
		"numberOfAdvances": 11
	},
	"VAGABOND": {
		"id": "VAGABOND",
		"label": "Vagabond",
		"description": "Vagabonds love life on the road. The traditional Peasant or Burgher existence seems like prison to them. Who wants to wake up in the same village or city every day, doing the same thing as yesterday? Vagabonds are footloose wanderers who look on each day as a new adventure. They may take on odd jobs here and there to earn some brass, but they never stay in one place for long. The road beckons, with the promise of something better always over the next hill. While they do love to travel, they are not ignorant of the dangers of the road. Vagabonds can thus often be found in travelling companies, formed for mutual protection. The law has little love for these groups and in many places Vagabonds are viewed as common criminals.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 5,
			"WP": 0,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BARBER_SURGEON",
			"CAMP_FOLLOWER",
			"CARTOGRAPHER",
			"CAT_BURGLAR",
			"CHARCOAL_BURNER",
			"ENTERTAINER",
			"ENVOY",
			"EX_CONVICT",
			"FIELDWARDEN",
			"HEDGE_WIZARD",
			"KITHBAND_WARRIOR",
			"OUTLAW",
			"SOLDIER",
			"WOODSMAN"
		],
		"advanceTo": [
			"ENTERTAINER",
			"FRIAR",
			"RAPSCALLION",
			"SCOUT",
			"THIEF",
			"WOODSMAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "BRETONIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "ESTALIA"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "TILEA"
					}
				],
				"operator": "AND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "COMPOSITE",
						"list": [
							{
								"type": "VARIABLE",
								"targetEnum": "SecretLanguage",
								"key": "RANGER_TONGUE"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "SecretLanguage",
								"key": "THIEVES_TONGUE"
							}
						],
						"operator": "OR"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HAGGLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HEAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "COMPOSITE",
				"operator": "OR",
				"list": [
					{
						"type": "COMPOSITE",
						"operator": "OR",
						"list": [
							{
								"type": "VARIABLE",
								"targetEnum": "Performer",
								"key": "DANCER"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "Performer",
								"key": "SINGER"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "Performer",
								"key": "STORYTELLER"
							}
						]
					},
					{
						"type": "COMPOSITE",
						"operator": "OR",
						"list": [
							{
								"type": "VARIABLE",
								"targetEnum": "SecretSigns",
								"key": "RANGER"
							},
							{
								"type": "VARIABLE",
								"targetEnum": "SecretSigns",
								"key": "THIEF"
							}
						]
					}
				]
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Fleet Footed or Rover",
			"Marksman or Orientation",
			"Seasoned Traveller"
		],
		"trappings": [
			"Trappings: Back Pack",
			"Rations (1 week)",
			"Tent",
			"Water Skin"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"VALET": {
		"id": "VALET",
		"label": "Valet",
		"description": "A Valet is a personal manservant for a Nobleman, high-ranking military commander, or wealthy Burgher. He is responsible for the comfort and appearance of his charge, including grooming, wardrobe, and presentation. A Valet is ready with a hat and cloak when it’s raining, a walking stick for outdoor jaunts, and a dress coat for formal occasions. A well-trained Valet is indispensable for the style-conscious Noble. Though they enjoy a lifestyle most Servants would kill for, Valets often resent the vacuous Nobles they are forced to attend. Women who perform these services for Noblewomen are known as handmaidens.",
		"role": "Commoner",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 10,
			"Int": 10,
			"WP": 5,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BURGHER",
			"SERVANT"
		],
		"advanceTo": [
			"HERALD",
			"ROGUE",
			"SQUIRE",
			"STEWARD",
			"STUDENT"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "GENEALOGY_HERALDRY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "BLATHER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "BRETON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "REIKSPIEL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Coolheaded or Suave",
			"Dealmaker or Seasoned Traveller",
			"Etiquette"
		],
		"trappings": [
			"Cologne",
			"Purse",
			"Two sets of Best Craftsmenship Clothing",
			"Uniform"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 3,
		"numberOfAdvances": 9
	},
	"VAMPIRE_HUNTER": {
		"id": "VAMPIRE_HUNTER",
		"label": "Vampire Hunter",
		"description": "Vampire Hunters are driven souls who seek to destroy the Undead by any means necessary. Many of them have lost friends and family members to the Restless Dead, most often to their namesake. Since any but the most cursory knowledge of the Undead is a forbidden subject in the Empire, Vampire Hunters are a self-made lot. They congregate quietly with others of their ilk; sharing what little knowledge they’ve gleaned from their more successful encounters with the forces of the Restless Dead in hopes of one day finding a sure method of killing vampires.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 20,
			"Ag": 15,
			"Int": 15,
			"WP": 20,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOUNTY_HUNTER",
			"GHOST_STRIDER",
			"KNIGHT",
			"SCOUT",
			"TOMB_ROBBER"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"INITIATE",
			"KNIGHT",
			"TARGETEER",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			}
		],
		"talents": [
			"Mighty Shot or Rapid Reload",
			"Specialist Weapon Group (Crossbow)",
			"Stout-hearted",
			"Strike Mighty Blow",
			"Strike to Injure",
			"Tunnel Rat"
		],
		"trappings": [
			"Repeater Crossbow with 10 Bolts",
			"Medium Armour (Full Mail Armour)",
			"Blessed Water",
			"4 Stakes"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 11,
		"numberOfTalents": 6,
		"numberOfAdvances": 29
	},
	"VERENEAN_INVESTIGATOR": {
		"id": "VERENEAN_INVESTIGATOR",
		"label": "Verenean Investigator",
		"description": "Verenan Investigators are agents who look into matters the cult would rather not come to the regular authorities, such as the roadwardens or the witch hunters. They are adept at quiet investigation, looking for clues and observing the scene, rather than extracting possibly unreliable information through torture. Though they usually turn their results over to the cult for further action, they are also ready to take matters into their own hands, if need be. Investigators often come from within the cult itself, although the Verenan hierarchy does not scruple at hiring talented people with questionable pasts, so long as they repent their ways and swear loyalty to the goddess. Verenan Investigators have a wide range of knowledge, and often astound others with their ability to bring obscure information together to throw light on a case.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 20,
			"Int": 30,
			"WP": 20,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 1,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOUNTY_HUNTER",
			"CAT_BURGLAR",
			"DILETTANTE",
			"INITIATE",
			"ROADWARDEN",
			"THIEF",
			"WATCHMAN",
			"SCHOLAR",
			"SPY",
			"WITCH_HUNTER"
		],
		"advanceTo": [
			"INITIATE",
			"SCHOLAR",
			"SPY",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "EMPIRE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_ONE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PICK_LOCK"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SHADOWING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SLEIGHT_OF_HAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "ANY_ONE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "CLASSICAL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "REIKSPIEL"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Alley Cat or Coolheaded",
			"Keen Senses or Savvy",
			"Street Fighting or Strong-minded",
			"Streetwise"
		],
		"trappings": [
			"Lock Picks",
			"Magnifying Glass",
			"Manacles",
			"2 Homing Pigeons and Cages"
		],
		"notes": "",
		"source": "SH",
		"numberOfSkills": 20,
		"numberOfTalents": 4,
		"numberOfAdvances": 32
	},
	"VETERAN": {
		"id": "VETERAN",
		"label": "Veteran",
		"description": "A professional Soldier or Mercenary who survives a great many battles, but cares not in the slightest for rising up the ranks, eventually finds himself a Veteran. Veterans are, first and foremost, survivors. They don’t volunteer for suicide missions and they don’t take unnecessary risks, but when the time comes to get stuck in, they’re some of the toughest troops on the field. Off-duty Veterans are always good for old war tales. They carouse with a will, knowing that their time may be short and there’s no sense in dying with gold still in your pockets.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 20,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 0,
			"WP": 15,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FLAGELLANT",
			"KISLEVITE_KOSSAR",
			"KITHBAND_WARRIOR",
			"MERCENARY",
			"NORSE_BERSERKER",
			"OUTLAW",
			"PISTOLIER",
			"PIT_FIGHTER",
			"RUNEBEARER",
			"SHIELDBREAKER",
			"SOLDIER",
			"SQUIRE"
		],
		"advanceTo": [
			"CHAMPION",
			"FARMER",
			"JUDICIAL_CHAMPION",
			"OUTLAW_CHIEF",
			"SERGEANT",
			"TARGETEER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			}
		],
		"talents": [
			"Mighty Shot or Strike Mighty Blow",
			"Rapid Reload or Strike to Injure",
			"Specialist Weapon Group (any two)",
			"Very Resilient or Very Strong"
		],
		"trappings": [
			"Any two weapons",
			"Medium Armour (Full Mail Armour)",
			"Bottle of Good Craftsmenship Spirits"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 8,
		"numberOfTalents": 4,
		"numberOfAdvances": 25
	},
	"VILLAGE_ELDER": {
		"id": "VILLAGE_ELDER",
		"label": "Village Elder",
		"description": "Bretonnian nobles are responsible for bringing justice to the peasants. If they hear of a crime, they make sure that someone is punished. As long as it’s a peasant, they do not worry about which peasant. In some cases, the lord has hanged the victim. Most peasants would prefer to avoid such “justice.” Instead, they turn to their Village Elders, respected residents of the village. These old men listen to the details of the case and then hand out punishments. Often these involve paying reparations to the victim, normally in labour, but sometimes the Village Elders arrange “accidents” for the criminal. The quality of this justice depends entirely on the quality of the Village Elder, as there are no checks on his decisions. A senile elder is still capable of handing down something less than justice. However, it is still almost invariably better than appealing to the local lord.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 0,
			"Ag": 0,
			"Int": 20,
			"WP": 20,
			"Fel": 30
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FACELESS",
			"MEDIATOR",
			"YEOMAN"
		],
		"advanceTo": [
			"DEMAGOGUE",
			"FACELESS",
			"OUTLAW_CHIEF",
			"POLITICIAN",
			"STEWARD"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BRETONNIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "TORTURE"
			}
		],
		"talents": [
			"Master Orator",
			"Menacing",
			"Public Speaking",
			"Suave"
		],
		"trappings": [
			"Peasant Village"
		],
		"notes": "Only peasants may become Village Elders. Women may only become Village Elders if disguised as men.",
		"source": "KotG",
		"numberOfSkills": 8,
		"numberOfTalents": 4,
		"numberOfAdvances": 18
	},
	"WALL_WARDEN": {
		"id": "WALL_WARDEN",
		"label": "Wall Warden",
		"description": "Wall Wardens are the peasant craftsmen who care for and design the fortifications of Bretonnian nobles, the massive castles that protect their power. They are also responsible for the construction and care of siege engines. Most nobles know nothing about building or engineering and thus need to place a great deal of trust in their Wall Wardens. As a result, a peasant is only given such a post after proving himself. As Wall Wardens often have both the ear and the trust of their lords, such a post is often a stepping stone to a more important position in the lord’s administration. On the other hand, Wall Wardens are sometimes approached by outside forces to report on the state of the lord’s defences. The loyal ones naturally refuse.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 0,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 25,
			"Int": 20,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"MAN_AT_ARMS",
			"PEASANT",
			"TRADESMAN"
		],
		"advanceTo": [
			"SPY",
			"STEWARD",
			"YEOMAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ENGINEERING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BRETONNIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "EVALUATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "CARPENTER"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Trade",
				"key": "STONEWORKER"
			}
		],
		"talents": [
			"Lightning Reflexes",
			"Specialist Weapon Group (Engineer)"
		],
		"trappings": [
			"Fortifications to look after",
			"trade tools"
		],
		"notes": "Only peasants may become Wall Wardens. Women may only become Wall Wardens if disguised as men.",
		"source": "WHFR",
		"numberOfSkills": 9,
		"numberOfTalents": 2,
		"numberOfAdvances": 23
	},
	"WARLEADER": {
		"id": "WARLEADER",
		"label": "Warleader",
		"description": "Warleaders are proven Norsemen warriors who’ve seen countless battles and are entrusted by their Jarls and Kings to lead detachments of other warriors and Marauders against their enemies. Typically, Warleaders bear many strange tattoos, ritual scars, and most, if not all, have one or more mutations, showing they have the favour of the Gods.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 0,
			"S": 20,
			"T": 20,
			"Ag": 10,
			"Int": 5,
			"WP": 10,
			"Fel": 10
		},
		"secondaryProfile": {
			"A": 2,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BONDSMAN",
			"MARAUDER",
			"REAVER"
		],
		"advanceTo": [
			"CAPTAIN",
			"CHAMPION",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			}
		],
		"talents": [
			"Fearless",
			"Strike Mighty Blow",
			"Strike to Injure",
			"Specialist Weapon Group (Twohanded)",
			"Unsettling",
			"Very Resilient or Very Strong"
		],
		"trappings": [
			"Hand Weapon and Shield or Great Weapon",
			"Medium Armour (Sleeved Mail Shirt, Mail Coif and Full Leather Armour)",
			"Warband of 2d10 Marauders"
		],
		"notes": "Chaos Warrior is described in Chapter XIII: Slaves to Darkness of Tome of Corruption. ",
		"source": "ToC",
		"numberOfSkills": 5,
		"numberOfTalents": 6,
		"numberOfAdvances": 26
	},
	"WARLOCK": {
		"id": "WARLOCK",
		"label": "Warlock",
		"description": "Witches that use Dark Magic and embrace its power can become Warlocks if they survive its perils long enough to gain the required knowledge. They may not realize it at first, but this is a dangerous path that leads almost inevitably to corruption. They are the bogeymen of the witch hunters, the spellcasters that are a danger to themselves and to others. Warlocks tend to be either Daemonologists or Necromancers. Since they are selftaught and so much of their magic is based on experimentation, however, most Warlocks have unique views of magic and the world. It is this individuality that makes it so hard for the witch hunters to root them out.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 10,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 15,
			"WP": 20,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"WITCH"
		],
		"advanceTo": [
			"APPRENTICE_WIZARD",
			"CHARLATAN",
			"OUTLAW",
			"SCRIBE",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "DAEMONOLOGY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "NECROMANCY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DISGUISE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "HYPNOTISM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "READ_WRITE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Dark Lore (any one)",
			"Dark Magic",
			"Hardy or Very Resilient"
		],
		"trappings": [
			"Lucky Charm"
		],
		"notes": "You must have at least one insanity point and learned at least two spells through your Witchcraft talent before you can enter this career.",
		"source": "WoS",
		"numberOfSkills": 15,
		"numberOfTalents": 3,
		"numberOfAdvances": 28
	},
	"WARRIOR_PRIEST": {
		"id": "WARRIOR_PRIEST",
		"label": "Warrior Priest",
		"description": "Whilst all priests are expected to bear arms in the defence of their temple and faith, and most are at least profcient in combat, only a few march to battle alongside their templars and the Imperial army. These warrior priests have a threefold responsibility: ministering to the faithful amongst the army, offering spiritual and tactical advice to the army’s leadership, and smiting the unfaithful in battle. When war comes to the temple, a cult’s warrior priests take charge of its defence, marshalling the rest of the cult to repel attackers. Warrior priests are usually members of holy orders, such as the Sigmarites of the Order of the Silver Hammer. Most warrior priests come from the cults of Sigmar, Ulric, and Myrmidia, although other cults are not without a few token militant brethren.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 20,
			"BS": 15,
			"S": 10,
			"T": 10,
			"Ag": 15,
			"Int": 15,
			"WP": 25,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 1,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"PRELATE",
			"PRIEST"
		],
		"advanceTo": [
			"HIGH_PRIEST",
			"KNIGHT",
			"PRELATE",
			"WITCH_HUNTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Armoured Casting",
			"Divine Lore (any one)",
			"Lesser Magic (any two)",
			"Meditation or Fast",
			"Hands Specialist Weapon Group (Two-handed*) or Strike Mighty Blow"
		],
		"trappings": [
			"Great Weapon*",
			"Medium Armour (Full Mail Armour)",
			"Religious Symbol"
		],
		"notes": "Followers of Shallya may not become Warrior Priests.  *Warrior Priests tend to wield weapons sacred to their faith;typically a greathammer;greatsword or polearm. Warrior Priests of Taal and Rhya may substitute a longbow.",
		"source": "ToS",
		"numberOfSkills": 11,
		"numberOfTalents": 5,
		"numberOfAdvances": 33
	},
	"WATCHMAN": {
		"id": "WATCHMAN",
		"label": "Watchman",
		"description": "Originally, cities and towns were responsible for recruiting and maintaining their own watch organisations. Corruption was so widespread that the Emperor gave the job to the army instead. Now, certain regiments on garrison duty must serve as the town watch. This has cut down dramatically on corruption, though the army itself is not immune. Watchmen are responsible for maintaining law and order and are empowered to make arrests. They also double as fire fghters in smaller towns. For some Soldiers, watch duty is a temporary assignment. For others, it becomes a lifelong career.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 5,
			"S": 5,
			"T": 0,
			"Ag": 5,
			"Int": 10,
			"WP": 0,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"JAILER",
			"SOLDIER"
		],
		"advanceTo": [
			"MERCENARY",
			"RACKETEER",
			"ROADWARDEN",
			"SERGEANT",
			"SEWER_JACK",
			"SOLDIER",
			"TRADESMAN"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "LAW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "FOLLOW_TRAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			}
		],
		"talents": [
			"Coolheaded or Savvy",
			"Disarm or Street Fighting",
			"Strike Mightly Blow",
			"Strike to Stun"
		],
		"trappings": [
			"Light Armour (Leather Jack)",
			"Lantern and Pole",
			"Lamp Oil",
			"Uniform"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	},
	"WHALER": {
		"id": "WHALER",
		"label": "Whaler",
		"description": "Whaling is an important trade for Norsca, and Whalers are respected even among the warriors. Swimming through the dark currents of the Sea of Chaos are massive whales, many of which bear strange markings, and odd colouration, twisted and warped as they are by the power of Chaos. These monsters can capsize ships and swallow hundreds of men in a single gulp. Thus, Whalers must be made of sterner stuff than ordinary fshermen.",
		"role": "Warrior",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 10,
			"Int": 0,
			"WP": 0,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"FISHERMAN",
			"REAVER",
			"SEAMAN"
		],
		"advanceTo": [
			"FREEHOLDER",
			"MARAUDER",
			"NAVIGATOR",
			"REAVER",
			"VETERAN"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "NAVIGATION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SAIL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Coolheaded",
			"Excellent Vision",
			"Hardy",
			"Seasoned Traveller",
			"Very Strong"
		],
		"trappings": [
			"Dagger",
			"Lantern with four pints of Whale Oil",
			"Light Armour (Leather Jack)",
			"Pipe",
			"Spear",
			"Bottle of Good Spirits",
			"Lucky Charm (Scrimshaw Talisman or Tattoos, see WFRP page 123)"
		],
		"notes": "",
		"source": "ToC",
		"numberOfSkills": 6,
		"numberOfTalents": 5,
		"numberOfAdvances": 11
	},
	"WINGED_LANCER": {
		"id": "WINGED_LANCER",
		"label": "Winged Lancer",
		"description": "Every Gospodar settlement annually raises a rota of winged lancers. Each spring, eager young men muster alongside veterans and don armour at their rotamaster's command. To the sound of weeping womenfolk, they ride, their winged banners ﬂuttering behind them. Until their return, they are known as the \"Riders of the Dead,\" for they are mourned as if already deceased. Every rota of lancers has a diﬀerent character. Where some southern examples are like Imperial knights, sporting colourful pennants, intricately decorated armour, and great animal pelts, lancers from beyond the Lynsk are more akin to Ungol nomads, having heavy moustaches, top-knots, and fur-lined charms to ward against evil.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 15,
			"S": 15,
			"T": 15,
			"Ag": 15,
			"Int": 0,
			"WP": 15,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 1,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "STRATEGY_TACTICS"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DODGE_BLOW"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "COMMAND"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TROLL_COUNTRY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "KISLEVITE"
			}
		],
		"talents": [
			"Hardy or Very Resilient",
			"Specialist Weapon Group (Cavalry)",
			"Strike Mighty Blow or Strike to Injure"
		],
		"trappings": [
			"At least full suits of mail,  though some accent their armour with bits of plate",
			"From their backs ﬂy winged banners",
			"Kislevite warhorse equipped with saddles and harnesses",
			"lances",
			"scimitars (Hand Weapons)",
			"shields",
			"at least two javelins",
			"a bottle of kvas"
		],
		"notes": "",
		"source": "RotIQ",
		"numberOfSkills": 10,
		"numberOfTalents": 3,
		"numberOfAdvances": 28
	},
	"WISE_WOMAN": {
		"id": "WISE_WOMAN",
		"label": "Wise Woman",
		"description": "Most Ungol communities are tended by a krug of dark-shawled wise women. These no-nonsense matriarchs guard uncounted generations of oral traditions and tribal secrets. This knowledge is put to good use tending the sick, aiding childbirth, advising local leaders, placating the spirits of the land, and warding their folk against the taint of Chaos. Wise women krugs gather in specially decorated kibitkas that men are forbidden to enter; there, they share lore and discuss matters of importance. Girls who demonstrate \"the sight\" are interviewed in these tents to determine their suitability to join the wise women, an experience that can terrify even the strong of mind.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 0,
			"BS": 0,
			"S": 0,
			"T": 5,
			"Ag": 0,
			"Int": 15,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [],
		"advanceTo": [
			"DEMAGOGUE",
			"HAG_WITCH",
			"POLITICIAN",
			"STEPPES_NOMAD"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "HISTORY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "AcademicKnowledge",
						"key": "SPIRITS"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "TROLL_COUNTRY"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GOSSIP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Performer",
				"key": "STORYTELLER"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PREPARE_POISON"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "UNGOL"
			}
		],
		"talents": [
			"Coolheaded or Savvy"
		],
		"trappings": [
			"Antitoxin kit",
			"healing draught",
			"healing poultice",
			"a skin of koumiss to ease other sorts of hurts,  a number of small charms that include bits of bone,  locks of hair,  unusual stones,  and so on",
			"They mark their station with the tell-tale shawl,  a beautifully woven length of cloth they wear draped from their heads or around their necks.  "
		],
		"notes": "You must be an Ungol female to enter this career.",
		"source": "RotIQ",
		"numberOfSkills": 11,
		"numberOfTalents": 1,
		"numberOfAdvances": 9
	},
	"WITCH_HUNTER": {
		"id": "WITCH_HUNTER",
		"label": "Witch Hunter",
		"description": "Witch Hunters are grim individuals who have dedicated their lives to eradicating the forces of Chaos, either in the service of the state or the Church of Sigmar. They prefer to seek out Chaos cultists, Mutants, and heretics that have insidiously hidden amidst the cities of the Empire. However, they will travel far indeed if they think they can strike a meaningful blow against the forces of evil. Witch Hunters tend to be a surly and suspicious lot with no qualms about killing innocents, so long as they also manage to slay the guilty, which means their appearance is often regarded with dread by other folk.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 30,
			"BS": 30,
			"S": 15,
			"T": 15,
			"Ag": 15,
			"Int": 15,
			"WP": 35,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 2,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"ANOINTED_PRIEST",
			"ASSASSIN",
			"CHAMPION",
			"HIGH_PRIEST",
			"JUDICIAL_CHAMPION",
			"KNIGHT_OF_THE_INNER_CIRCLE",
			"VAMPIRE_HUNTER"
		],
		"advanceTo": [
			"CAPTAIN",
			"CHAMPION",
			"DEMAGOGUE",
			"INITIATE",
			"KNIGHT_OF_THE_INNER_CIRCLE"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "MAGIC"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "NECROMANCY"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "COMMAND"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_ONE"
			}
		],
		"talents": [
			"Lightning Parry",
			"Lightning Reﬂexes or Marksman",
			"Menacing",
			"Public Speaking",
			"Sixth Sense",
			"Specialist Weapon Group (Crossbow)",
			"Specialist Weapon Group (Entangling)",
			"Specialist Weapon Group (Trowing)",
			"Stout-hearted",
			"Strike Mighty Blow"
		],
		"trappings": [
			"Crossbow Pistol with 10 bolts",
			"Best Craftsmenship Hand Weapon",
			"4 Trowing Knives/Stars",
			"Heavy Armour (Full Plate Armour)",
			"10 Yards of Rope"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 10,
		"numberOfAdvances": 43
	},
	"WITCH": {
		"id": "WITCH",
		"label": "Witch",
		"description": "Witches are Hedge Wizards who survived practicing their fumbling arts without going completely insane or dying. They have a broader repertoire of homegrown spells to work with and many dabble in areas best left alone. In other words, by merit of their ignorance as to the occult workings of the Winds of Magic, many Witches begin to use Dark Magic without even realising it. As a result of trial and error, Witches spells are more diverse and more powerful than the petty spells of other Hedge Wizards, possessing elements of many of the Winds of Magic. However, Witches that use the power of Dark Magic inevitably take a terrible toll upon their minds and souls.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 5,
			"BS": 5,
			"S": 5,
			"T": 10,
			"Ag": 10,
			"Int": 10,
			"WP": 15,
			"Fel": 15
		},
		"secondaryProfile": {
			"A": 0,
			"W": 4,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 2,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"HEDGE_WIZARD"
		],
		"advanceTo": [
			"APPRENTICE_WIZARD",
			"CHARLATAN",
			"OUTLAW",
			"VAGABOND",
			"WARLOCK"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "ANIMAL_CARE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_TWO"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HAGGLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "HEAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "RIDE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SWIM"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SEARCH"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "APOTHECARY"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Trade",
						"key": "HERBALIST"
					}
				],
				"operator": "OR"
			}
		],
		"talents": [
			"Dark Magic or Mighty Missile",
			"Witchcraft"
		],
		"trappings": [
			"Healing Draught",
			"Healing Poultice",
			"Trade Tools (Apothecary or Herbalist)"
		],
		"notes": "If you have been trained in the Colleges of Magic (i.e. you have ever been in the Apprentice Wizard career), you cannot enter this career.",
		"source": "WoS",
		"numberOfSkills": 12,
		"numberOfTalents": 2,
		"numberOfAdvances": 21
	},
	"WIZARD_LORD": {
		"id": "WIZARD_LORD",
		"label": "Wizard Lord",
		"description": "Within the Empire, the Lords of the Magical Orders are powerful individuals indeed. They no longer see the world as others do, however, having dedicated their very souls to magic. They now embody their chosen Lore in word, deed and physical form. Should an Elf attain this level of magical skill, he is considered to have completed his minor magic apprenticeship, and is ready to travel to the towers of Hoeth to become a High Mage.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 15,
			"BS": 15,
			"S": 5,
			"T": 15,
			"Ag": 20,
			"Int": 35,
			"WP": 40,
			"Fel": 20
		},
		"secondaryProfile": {
			"A": 0,
			"W": 5,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 4,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"MASTER_WIZARD"
		],
		"advanceTo": [
			"EXPLORER",
			"GUILD_MASTER"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "MAGIC"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHANNELLING"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CHARM"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "INTIMIDATE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "ANY_THREE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "MAGICAL_SENSE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "ArcaneLanguage",
				"key": "MAGICK"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "DAEMONIC"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "ArcaneLanguage",
						"key": "ARCANE_ELF"
					}
				],
				"operator": "OR"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "Language",
				"key": "ANY_FOUR"
			}
		],
		"talents": [
			"Aethyric Attunement or Mighty Missile",
			"Dark Magic or Meditation",
			"Fast Hands or Hardy",
			"Lesser Magic (any two)"
		],
		"trappings": [
			"Three magic items",
			"12 Grimoires"
		],
		"notes": "Wizard Lords no longer pay dues to their Order. They are, however, charged with preserving the purity of their order, rooting out Chaos worshippers, and ensuring the Orders receive the respect (and monies) due to them.",
		"source": "WHFR",
		"numberOfSkills": 10,
		"numberOfTalents": 4,
		"numberOfAdvances": 42
	},
	"WOODSMAN": {
		"id": "WOODSMAN",
		"label": "Woodsman",
		"description": "Woodsmen live among the mighty forests of the Empire, looking after trees they will fell for timber. The more fortunate Woodsmen work for Noble families on large estates. The braver souls work on the edges of civilisation, helping to expand the settled lands. These Woodsmen must deal with all the dangers of the forest, from pitfalls and bandits to wild animals and Beastmen. They always keep their axes handy and not just for chopping wood. Woodsmen have been known to clash with Elves, since the Elves do not take kindly to the clearing of their precious forests.",
		"role": "Ranger",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 10,
			"T": 0,
			"Ag": 5,
			"Int": 0,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 0,
			"W": 3,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CHARCOAL_BURNER",
			"VAGABOND"
		],
		"advanceTo": [
			"HUNTER",
			"MILITIAMAN",
			"OUTLAW",
			"SCOUT",
			"VAGABOND"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "FOLLOW_TRAIL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SET_TRAP"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SCALE_SHEER_SURFACE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "RANGER_TONGUE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretSigns",
				"key": "RANGER"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Fleet Footed or Very Resilient",
			"Rover",
			"Specialist Weapon Gorup (Two-handed)"
		],
		"trappings": [
			"Great Weapon (Two-handed)",
			"Light Armour (Leather Jack)",
			"Antitoxin Kit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 7,
		"numberOfTalents": 3,
		"numberOfAdvances": 10
	},
	"WRECKER": {
		"id": "WRECKER",
		"label": "Wrecker",
		"description": "The long rivers of the Old World are dangerous places, made all the more so by Wreckers. These river pirates seek to sink vessels and then raid the wrecks. Their techniques for doing this vary, although most lure the unwary into rocky shallows to hole their hulls. Although only interested in cargo, some Wreckers make a habit of killing, wary of escapees that may inform Riverwardens of their identities or locations. In lean times, it is not unknown for entire communities to turn to wrecking to feed their starving families. Whilst most are of these are desperate and only \"short-term\" sorts, some Wrecker crews are very experienced, targeting even well guarded traders. Such crews rarely stay in one place for any length of time, for their activities soon draw attention from Riverwardens, Bounty Hunters and local Militiamen.",
		"role": "Criminal",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 5,
			"BS": 10,
			"S": 0,
			"T": 5,
			"Ag": 5,
			"Int": 0,
			"WP": 5,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"BOATMAN",
			"FERRYMAN",
			"MARINE",
			"OUTLAW",
			"PEASANT",
			"RIVERWARDEN",
			"SEAMAN",
			"SMUGGLER"
		],
		"advanceTo": [
			"BOATMAN",
			"MARINE",
			"OUTLAW",
			"VETERAN"
		],
		"skills": [
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "THE_EMPIRE"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "CommonKnowledge",
						"key": "KISLEV"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "CONSUME_ALCOHOL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "DODGE_BLOW"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "GAMBLE"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "NAVIGATION"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "OUTDOOR_SURVIVAL"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SAIL"
					}
				],
				"operator": "OR"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "PERCEPTION"
					},
					{
						"type": "BASIC",
						"targetEnum": "Basic",
						"key": "SEARCH"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ROW"
			},
			{
				"type": "COMPOSITE",
				"list": [
					{
						"type": "VARIABLE",
						"targetEnum": "SecretSigns",
						"key": "RANGER"
					},
					{
						"type": "VARIABLE",
						"targetEnum": "Language",
						"key": "KISLEVITE"
					}
				],
				"operator": "OR"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SWIM"
			}
		],
		"talents": [
			"Orientation or Rover",
			"Sharpshooter or Strike to Stun"
		],
		"trappings": [
			"Bow with 10 Arrows",
			"Light Armour (Leather Jack)",
			"Row Boat"
		],
		"notes": "",
		"source": "WC",
		"numberOfSkills": 8,
		"numberOfTalents": 2,
		"numberOfAdvances": 9
	},
	"YEOMAN": {
		"id": "YEOMAN",
		"label": "Yeoman",
		"description": "Yeomen are the elite peasant warriors of Bretonnia. Many knights are dismissive of their achievements, arguing that “elite peasant warrior” has a similar meaning to \"large mouse.\" However, whilst it is true that the nobility are far better equipped, the Yeomen are as skilled as most Knights of the Realm, and they take justifed pride in their martial abilities.  Indeed, the overwhelming majority of Yeomen are dedicated professionals because it is their dedication that has distinguished them from the mass of Men-at-Arms around them. Yeomen, in return, receive mounts and are used for scouting missions that are unsuited to knights (too little glory, too much risk). Eventually, some Yeomen grow tired of making things easy for \"social superiors\" and strike out on their own.  Most lords allow their Yeomen to retire honourably after a few years of service or after a spectacular act on the battlefeld. Others, however, simply desert, usually whilst on a scouting mission so that their lord assumes they were killed and doesn’t go after them.",
		"role": "",
		"isAdvanced": true,
		"mainProfile": {
			"WS": 25,
			"BS": 10,
			"S": 10,
			"T": 10,
			"Ag": 10,
			"Int": 10,
			"WP": 10,
			"Fel": 0
		},
		"secondaryProfile": {
			"A": 1,
			"W": 6,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"CARCASSONNE_SHEPHERD",
			"MAN_AT_ARMS",
			"MERCENARY"
		],
		"advanceTo": [
			"FACELESS",
			"MERCENARY",
			"OUTLAW_CHIEF",
			"SCOUT",
			"SERGEANT"
		],
		"skills": [
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "ANIMAL_CARE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "BRETONNIA"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONCEALMENT"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CONSUME_ALCOHOL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "DODGE_BLOW"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GAMBLE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "GOSSIP"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "OUTDOOR_SURVIVAL"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "PERCEPTION"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "RIDE"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "SecretLanguage",
				"key": "BATTLE_TONGUE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "SILENT_MOVE"
			}
		],
		"talents": [
			"Rover",
			"Specialist Weapon Group (any one)",
			"Specialist Weapon Group (Two-handed)",
			"Strike to Stun",
			"Very Resilient or Very Strong"
		],
		"trappings": [
			"Halberd",
			"any one weapon",
			"Medium Armour (Full Mail Armour)",
			"Riding Horse with Tack and Harness."
		],
		"notes": "Women can only become Yeomen if disguised as men.",
		"source": "WHFR",
		"numberOfSkills": 13,
		"numberOfTalents": 5,
		"numberOfAdvances": 24
	},
	"ZEALOT": {
		"id": "ZEALOT",
		"label": "Zealot",
		"description": "Zealots have lost it all. Maybe their families were murdered by Beastmen or their villages sacked by Orcs. Or conniving Merchants destroyed their businesses or powerful Nobles carried of their daughters. Whatever the case, nothing was left for these men and women but religion. They found solace in the angry sermons of the warrior Priests of Sigmar or Ulric. Now they wander the Empire in tattered clothes, looking to smite the minions of evil and Chaos. They want redemption through blood – be it their own or that of their enemies. They may not have the training of Soldiers but they do have the fire of faith and that is a strong weapon indeed.",
		"role": "Academic",
		"isAdvanced": false,
		"mainProfile": {
			"WS": 10,
			"BS": 0,
			"S": 5,
			"T": 10,
			"Ag": 0,
			"Int": 0,
			"WP": 10,
			"Fel": 5
		},
		"secondaryProfile": {
			"A": 0,
			"W": 2,
			"SB": 0,
			"TB": 0,
			"M": 0,
			"Mag": 0,
			"IP": 0,
			"FP": 0
		},
		"advanceFrom": [
			"AGITATOR",
			"INITIATE",
			"JUDICIAL_CHAMPION",
			"PEASANT"
		],
		"advanceTo": [
			"AGITATOR",
			"INITIATE",
			"FLAGELLANT",
			"FRIAR",
			"OUTLAW"
		],
		"skills": [
			{
				"type": "VARIABLE",
				"targetEnum": "AcademicKnowledge",
				"key": "THEOLOGY"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "CHARM"
			},
			{
				"type": "VARIABLE",
				"targetEnum": "CommonKnowledge",
				"key": "THE_EMPIRE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "INTIMIDATE"
			},
			{
				"type": "BASIC",
				"targetEnum": "Basic",
				"key": "READ_WRITE"
			}
		],
		"talents": [
			"Coolheaded or Very Strong",
			"Hardy or Suave",
			"Public Speaking",
			"Specialist Weapon Group (Flail)"
		],
		"trappings": [
			"Flail or Morning Star",
			"Light Armour (Leather Jack)",
			"Bottle of Good Craftsmenship Spirit"
		],
		"notes": "",
		"source": "WHFR",
		"numberOfSkills": 5,
		"numberOfTalents": 4,
		"numberOfAdvances": 10
	}
}