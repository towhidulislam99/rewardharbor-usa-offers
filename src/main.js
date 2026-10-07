import './styles.css';
import { track } from './analytics.js';
import { setupRetention } from './retention.js';

const offerImages = {
  'Unclaimed Money Search': 'Unclaimed Money Search.webp',
  'Unclaimed Money': 'Unclaimed Money.webp',
  'Amazon $1,000': 'Get Amazon $1000 .webp',
  'Amazon $1,000 Gift Card': 'Get Amazon $1000 .webp',
  'Amazon Gift Card $1,000': 'Get Amazon $1000 .webp',
  'Rewards US — Cash $750': 'Rewards US - Cash $750.webp',
  '$1,000 Cash Deposit': '$1000 Cash Deposit.webp',
  'Costco $100': 'Costco $100.webp',
  'Costco Gift Card $100': 'Costco $100.webp',
  'Auto Money Decoded': 'Auto Money Decoded.webp',
  '$1,000 Cash App': '$1K Cashapp.webp',
  'Cash App $850': 'ad_22599_6abc68b919c45-ezgif.com-png-to-webp-converter.webp',
  'Rewards Locker — Cash App': 'Rewards Locker- CashApp.webp',
  'McDonald’s $250 Gift Card': '$250 McDonald Gift Card.webp',
  'McDonald’s $250 Rewards': '$250 McDonald Rewards.webp',
  'American Prizes — Amazon $1,000': 'American Prizes -Get Amazon $1,000.webp',
  'Walmart Rewards $1,000': 'Firefly_gpt-image_CreateapremiummodernpromotionaladvertisementforaU.S.-focusedcampaigntitled332522-ezgif.com-png-to-webp-converter.webp',
  'Getn Goods — Walmart Rewards $1,000': 'ad_23763_6ac132f827254-ezgif.com-png-to-webp-converter.webp',
  'Walmart $500 Gift Card': 'ad_18890_6ab12df5cf84f-ezgif.com-png-to-webp-converter.webp',
  'Survey Junkie': 'ad_14071_6aa03170291c8-ezgif.com-png-to-webp-converter.webp',
  'McDonald’s vs BK': 'ad_19622_6ab3878592d61-ezgif.com-png-to-webp-converter.webp',
  'CTConnect — PayPal $100': 'ad_20780_6ab6a15740858-ezgif.com-png-to-webp-converter.webp',
  'PerkPantry Mystery Box CashApp $1,000': 'ad_21441_6ab8c111750cd-ezgif.com-png-to-webp-converter.webp',
  'Netflix $100': 'ad_22027_6aba83c9960be-ezgif.com-png-to-webp-converter.webp',
  'eBike $1,000': 'ad_22743_6abcf3c5aeb311-ezgif.com-png-to-webp-converter.webp',
  'Food Giveaway $200': 'ad_23009_6abe171cf28aa-ezgif.com-png-to-webp-converter.webp',
  'Product Reviewer — Amazon Bonus $750': 'ad_23105_6abe738771430-ezgif.com-png-to-webp-converter.webp',
  'Visa Gift Card $1,000': 'ad_19231_6ab26d5588d27-ezgif.com-png-to-webp-converter.webp',
  'PrizeZappy — Chance to Win $50K': 'ad_23056_6abe4624b0474-ezgif.com-png-to-webp-converter.webp',
  'CTConnect — Chick-fil-A $100': 'ad_15245_6aa4f23c4a7701-ezgif.com-png-to-webp-converter.webp',
  'Free Samples — Mystery Box': 'ad_24067_6ac24360c25a31-ezgif.com-png-to-webp-converter.webp',
  'Family Dollar $500': 'ad_24123_6ac26dce57d8f-ezgif.com-png-to-webp-converter.webp',
  'Sephora $750 Shopping': 'ad_16890_6aaa568ad859b-ezgif.com-png-to-webp-converter.webp',
  'Outback Gift Card $1,000': 'ad_23949_6ac1e5b947005-ezgif.com-png-to-webp-converter.webp',
  'Rewards US — Skims $750 Shopping': 'ad_24261_6ac303fbd400d-ezgif.com-png-to-webp-converter.webp',
  'American Eagle $100': 'ad_24107_6ac265ae624e3-ezgif.com-png-to-webp-converter.webp',
  'Coca-Cola Mini Fridge': 'ad_24102_6ac2625a34f4b-ezgif.com-png-to-webp-converter.webp',
  'Nike Rewards $1,000': 'ad_24117_6ac26a6a761ae-ezgif.com-png-to-webp-converter.webp',
  'Product Reviewer — iPhone 15 Pro Max Bonus $750': 'ad_24391_6ac377518eacf-ezgif.com-png-to-webp-converter.webp',
  'Shein $100': 'ad_24397_6ac37eee4b80d-ezgif.com-png-to-webp-converter.webp',
  'PerkPantry CashApp $1,000': 'ad_24442_6ac3a33507b6e-ezgif.com-png-to-webp-converter.webp',
  'RewardZinga — Cash App $1,000': 'ad_23764_6ac1333dbc3cb-ezgif.com-png-to-webp-converter.webp',
  'Burger King Rewards $1,000': 'ad_24496_6ac3cbcfebc0c-ezgif.com-png-to-webp-converter.webp',
  'Apple Watch 8': 'ad_24525_6ac3dfb7d5d62-ezgif.com-png-to-webp-converter.webp',
  'Texas Roadhouse Rewards $1,000': 'ad_24703_6ac4968358732-ezgif.com-png-to-webp-converter.webp',
  'Royal Cruise $100': 'ad_24779_6ac4e81680360-ezgif.com-png-to-webp-converter.webp',
  'Rewards UK — Shein £750 Shopping': 'ad_23993_6ac1ff92e27dc-ezgif.com-png-to-webp-converter.webp',
  'KFC Gift Card $1,000': 'ad_21955_6aba523a0e8ac-ezgif.com-png-to-webp-converter.webp',
  'Sneakers Gift Card': 'ad_13974_6a9fd0dc8df04-ezgif.com-png-to-webp-converter.webp',
  'Nike Gift Card $100': 'ad_13980_6a9fd8179c887-ezgif.com-png-to-webp-converter.webp',
  'Google Play Gift Card $1,000': 'ad_14331_6aa1634b4f085-ezgif.com-png-to-webp-converter.webp',
  'Tap Coin Rewards': 'ad_23329_6abf70d674852-ezgif.com-png-to-webp-converter.webp',
  'Best Rewards Now': 'ad_23337_6abf7a0fdd29c-ezgif.com-png-to-webp-converter.webp',
  'Samsung Galaxy S26 Ultra Giveaway': 'ad_23361_6abf9725999c1-ezgif.com-png-to-webp-converter.webp',
  'Airport Jobs (US)': 'ad_23810_6ac15751332ad-ezgif.com-png-to-webp-converter.webp',
  'Starbucks Gift Card $250': 'ad_23921_6ac1d478d9027-ezgif.com-png-to-webp-converter.webp',
  'Digital Gift Card Giveaway $750': 'ad_24077_6ac24dc2affef-ezgif.com-png-to-webp-converter.webp',
  'Jersey Mike’s Gift Card $100': 'ad_24632_6ac45834070c4-ezgif.com-png-to-webp-converter.webp',
  'Free Gift Card $25': 'ad_24663_6ac47901897cb-ezgif.com-png-to-webp-converter.webp',
  'Smartphone Giveaway': 'ad_24773_6ac4e54509a21-ezgif.com-png-to-webp-converter.webp',
  'Walmart $1,000': 'Walmart $1,000.webp',
  'Unemployment Resources': 'Unemployment Resources.webp',
  'Daily Spinz Cash App': 'Adult_using_smartphone_for_rewards_2K_20261007142510-ezgif.com-png-to-webp-converter.webp',
  'Cash App $750 Gift Card': 'image_8280148-ezgif.com-png-to-webp-converter.webp',
  'Top Survey Spot': 'Consumer_using_smartphone_for_su_2K_20261007140129-ezgif.com-png-to-webp-converter.webp',
  'Shein Gift Card $1,000': 'Createapremiummodernpromoti9511763LS-ezgif.com-png-to-webp-converter.webp',
  'PerkPantry — McDonald’s $150': 'CreateapremiummodernpromotionaladvertisementforaU.S.-focusedcampaigntitled--PERKPANTRY-ezgif.com-png-to-webp-converter.webp',
  'Super Samples': 'CreateapremiummodernpromotionalimageforaU.S.-focusedcampaigntitled--SUPERSAMPLES--.__-ezgif.com-png-to-webp-converter.webp',
  'Holiday Relief': 'Family_enjoying_holiday_relief_c_2K_20261007140755-ezgif.com-png-to-webp-converter.webp',
  'Chick-fil-A Rewards $750': 'Firefly_gpt-image_CreateapremiummodernpromotionaladvertisementforaU.S.-focusedcampaigntitled3325221-ezgif.com-png-to-webp-converter.webp',
  'Gas Card $1,000': 'Firefly_gpt-image_CreateapremiummodernpromotionaladvertisementforaU.S.-focusedcampaigntitled3325222-ezgif.com-png-to-webp-converter.webp',
  'CTConnect — Cash App $750': 'Firefly_gpt-image_CreateapremiummodernpromotionaladvertisementforaU.S.-focuseddigitalrewards173162-ezgif.com-png-to-webp-converter.webp',
  'Surveys2Cash': 'Firefly_gpt-image_CreateapremiummodernpromotionaladvertisementforaU.S.-focusedsurveyandrewa173162-ezgif.com-png-to-webp-converter.webp',
  'Aldi Gift Card $100': 'Grocery_rewards_campaign_promoti_2K_20261007134842-ezgif.com-png-to-webp-converter.webp',
  'Walmart Rewards $750': 'image_8280106-ezgif.com-png-to-webp-converter.webp',
  'Food Lion Rewards $1,000': 'image_8280218-ezgif.com-png-to-webp-converter.webp',
  'Aldi Gift Card $750': 'image_8280252-ezgif.com-png-to-webp-converter.webp',
  'Cash App $650': 'image_8280404-ezgif.com-png-to-webp-converter.webp',
  'Super Sweepstakes — Get Money': 'People_celebrating_sweepstakes_c_2K_20261007135247-ezgif.com-png-to-webp-converter.webp',
  'Grocery Gift Card $1,000': 'Shopper_checking_grocery_gift_card_2K_20261007141316-ezgif.com-png-to-webp-converter.webp',
  'PerkPantry — Grocery $500': 'Shopper_checking_grocery_rewards_2K_20261007142149-ezgif.com-png-to-webp-converter.webp',
  'Unclaimed Money — Get': 'Unclaimed_money_campaign_graphic_2K_20261007135627-ezgif.com-png-to-webp-converter.webp',
  'Meta Live Zeus': 'Zeus_character_holding_smartphone_2K_20261007135953-ezgif.com-png-to-webp-converter.webp'
};

const carouselImages = {
  'American Prizes — Amazon $1,000': 'American Prizes — Amazon $1,000.webp',
  'Walmart Rewards $1,000': 'Walmart Rewards $1,000.webp',
  'Cash App $850': 'Cash App $850.webp',
  'Visa Gift Card $1,000': 'Visa Gift Card $1,000.webp',
  'Amazon $1,000 Gift Card': 'Amazon $1,000 Gift Card.webp',
};

const offer = (id, title, url, category, amount, theme, region = 'US') => ({
  id,
  title,
  image: offerImages[title]
    ? `/assets/offer-images/${encodeURIComponent(offerImages[title]).replace(/%24/g, '$').replace(/%2C/g, ',')}`
    : null,
  url,
  category,
  amount,
  theme,
  region,
  terms: 'Offer terms apply',
});

const smartLinkUrl = 'https://app.trcefy.com/sl?id=6a2050db46d3cf0d62f32aa4&pid=2&sub2=u809907&sub6=s2smartLink&sub5=s1SUBID1HERE';

const allOffers = [
  offer(5, 'Unclaimed Money Search', 'https://exoticlead.com/track.php?offer_id=5&aff_id=4342', 'promotional', 'Explore offer', 'navy'),
  offer(13, 'Unclaimed Money', 'https://exoticlead.com/track.php?offer_id=13&aff_id=4342', 'promotional', 'Explore offer', 'blue'),
  offer(15, 'Amazon $1,000', 'https://exoticlead.com/track.php?offer_id=15&aff_id=4342', 'gift-cards', 'Up to $1,000', 'gold'),
  offer(16, 'Rewards US — Cash $750', 'https://exoticlead.com/track.php?offer_id=16&aff_id=4342', 'cash', 'Up to $750', 'mint'),
  offer(17, '$1,000 Cash Deposit', 'https://exoticlead.com/track.php?offer_id=17&aff_id=4342', 'cash', 'Up to $1,000', 'emerald'),
  offer(18, 'Costco $100', 'https://exoticlead.com/track.php?offer_id=18&aff_id=4342', 'gift-cards', '$100 value', 'blue'),
  offer(19, 'Auto Money Decoded', 'https://exoticlead.com/track.php?offer_id=19&aff_id=4342', 'promotional', 'Review offer', 'navy', 'US / UK / NZ / CA / AU'),
  offer(21, '$1,000 Cash App', 'https://exoticlead.com/track.php?offer_id=21&aff_id=4342', 'cash', 'Up to $1,000', 'emerald'),
  offer(25, 'Rewards Locker — Cash App', 'https://exoticlead.com/track.php?offer_id=25&aff_id=4342', 'cash', 'Cash reward offer', 'mint'),
  offer(26, 'McDonald’s $250 Gift Card', 'https://exoticlead.com/track.php?offer_id=26&aff_id=4342', 'food', '$250 value', 'coral'),
  offer(27, 'McDonald’s $250 Rewards', 'https://exoticlead.com/track.php?offer_id=27&aff_id=4342', 'food', '$250 value', 'coral'),
  offer(31, 'American Prizes — Amazon $1,000', 'https://exoticlead.com/track.php?offer_id=31&aff_id=4342', 'gift-cards', 'Up to $1,000', 'gold'),
  offer(32, 'RewardZinga — Cash App $1,000', 'https://exoticlead.com/track.php?offer_id=32&aff_id=4342', 'cash', 'Up to $1,000', 'emerald'),
  offer(34, 'Family Dollar $500', 'https://exoticlead.com/track.php?offer_id=34&aff_id=4342', 'gift-cards', '$500 value', 'blue'),
  offer(35, 'American Eagle $100', 'https://exoticlead.com/track.php?offer_id=35&aff_id=4342', 'shopping', '$100 value', 'violet'),
  offer(36, 'Netflix $100', 'https://exoticlead.com/track.php?offer_id=36&aff_id=4342', 'shopping', '$100 value', 'violet'),
  offer(37, 'Shein $100', 'https://exoticlead.com/track.php?offer_id=37&aff_id=4342', 'shopping', '$100 value', 'violet'),
  offer(38, 'Food Giveaway $200', 'https://exoticlead.com/track.php?offer_id=38&aff_id=4342', 'food', '$200 value', 'coral'),
  offer(39, 'Royal Cruise $100', 'https://exoticlead.com/track.php?offer_id=39&aff_id=4342', 'promotional', '$100 value', 'blue'),
  offer(40, 'Aldi Gift Card $100', 'https://exoticlead.com/track.php?offer_id=40&aff_id=4342', 'gift-cards', '$100 value', 'blue'),
  offer(41, 'Costco Gift Card $100', 'https://exoticlead.com/track.php?offer_id=41&aff_id=4342', 'gift-cards', '$100 value', 'blue'),
  offer(42, 'Cash App $650', 'https://exoticlead.com/track.php?offer_id=42&aff_id=4342', 'cash', 'Up to $650', 'emerald'),
  offer(45, 'PrizeZappy — Chance to Win $50K', 'https://exoticlead.com/track.php?offer_id=45&aff_id=4342', 'promotional', 'Prize opportunity', 'gold'),
  offer(46, 'CTConnect — Chick-fil-A $100', 'https://exoticlead.com/track.php?offer_id=46&aff_id=4342', 'food', '$100 value', 'coral'),
  offer(57, 'Walmart Rewards $1,000', 'https://exoticlead.com/track.php?offer_id=57&aff_id=4342', 'gift-cards', 'Up to $1,000', 'blue'),
  offer(58, 'Free Samples — Mystery Box', 'https://exoticlead.com/track.php?offer_id=58&aff_id=4342', 'samples', 'Sample offer', 'mint'),
  offer(59, 'Super Sweepstakes — Get Money', 'https://exoticlead.com/track.php?offer_id=59&aff_id=4342', 'promotional', 'Sweepstakes offer', 'gold'),
  offer(62, 'Unclaimed Money — Get', 'https://exoticlead.com/track.php?offer_id=62&aff_id=4342', 'promotional', 'Explore offer', 'navy'),
  offer(63, 'Unemployment Resources', 'https://exoticlead.com/track.php?offer_id=63&aff_id=4342', 'promotional', 'Resource offer', 'navy'),
  offer(67, 'Meta Live Zeus', 'https://exoticlead.com/track.php?offer_id=67&aff_id=4342', 'promotional', 'Review offer', 'violet'),
  offer(69, 'McDonald’s vs BK', 'https://exoticlead.com/track.php?offer_id=69&aff_id=4342', 'food', 'Compare offer', 'coral'),
  offer(70, 'Top Survey Spot', 'https://exoticlead.com/track.php?offer_id=70&aff_id=4342', 'surveys', 'Survey offer', 'violet'),
  offer(73, 'Survey Junkie', 'https://exoticlead.com/track.php?offer_id=73&aff_id=4342', 'surveys', 'US-only survey', 'violet'),
  offer(71, 'Getn Goods — Walmart Rewards $1,000', 'https://exoticlead.com/track.php?offer_id=71&aff_id=4342', 'gift-cards', 'Up to $1,000', 'blue'),
  offer(74, 'Food Lion Rewards $1,000', 'https://exoticlead.com/track.php?offer_id=74&aff_id=4342', 'food', 'Up to $1,000', 'coral'),
  offer(75, 'Holiday Relief', 'https://exoticlead.com/track.php?offer_id=75&aff_id=4342', 'promotional', 'Review offer', 'gold'),
  offer(77, 'Super Samples', 'https://exoticlead.com/track.php?offer_id=77&aff_id=4342', 'samples', 'Sample offer', 'mint'),
  offer(81, 'Amazon Gift Card $1,000', 'https://exoticlead.com/track.php?offer_id=81&aff_id=4342', 'gift-cards', 'Up to $1,000', 'gold'),
  offer(82, 'Grocery Gift Card $1,000', 'https://exoticlead.com/track.php?offer_id=82&aff_id=4342', 'gift-cards', 'Up to $1,000', 'blue'),
  offer(84, 'Shein Gift Card $1,000', 'https://exoticlead.com/track.php?offer_id=84&aff_id=4342', 'shopping', 'Up to $1,000', 'violet'),
  offer(85, 'Aldi Gift Card $750', 'https://exoticlead.com/track.php?offer_id=85&aff_id=4342', 'gift-cards', 'Up to $750', 'blue'),
  offer(96, 'PerkPantry — McDonald’s $150', 'https://exoticlead.com/track.php?offer_id=96&aff_id=4342', 'food', '$150 value', 'coral'),
  offer(97, 'PerkPantry — Grocery $500', 'https://exoticlead.com/track.php?offer_id=97&aff_id=4342', 'gift-cards', '$500 value', 'blue'),
  offer(88, 'Chick-fil-A Rewards $750', 'https://exoticlead.com/track.php?offer_id=88&aff_id=4342', 'food', 'Up to $750', 'coral'),
  offer(89, 'Texas Roadhouse Rewards $1,000', 'https://exoticlead.com/track.php?offer_id=89&aff_id=4342', 'food', 'Up to $1,000', 'coral'),
  offer(98, 'Daily Spinz Cash App', 'https://exoticlead.com/track.php?offer_id=98&aff_id=4342', 'cash', 'Cash reward offer', 'emerald'),
  offer(99, 'PerkPantry Mystery Box CashApp $1,000', 'https://exoticlead.com/track.php?offer_id=99&aff_id=4342', 'cash', 'Up to $1,000', 'emerald'),
  offer(100, 'PerkPantry CashApp $1,000', 'https://exoticlead.com/track.php?offer_id=100&aff_id=4342', 'cash', 'Up to $1,000', 'emerald'),
  offer(105, 'Product Reviewer — Amazon Bonus $750', 'https://exoticlead.com/track.php?offer_id=105&aff_id=4342', 'shopping', 'Up to $750', 'gold'),
  offer(72, 'eBike $1,000', 'https://exoticlead.com/track.php?offer_id=72&aff_id=4342', 'promotional', 'Up to $1,000', 'navy'),
  offer(33, 'Walmart $1,000', 'https://exoticlead.com/track.php?offer_id=33&aff_id=4342', 'gift-cards', 'Up to $1,000', 'blue'),
  offer(83, 'Visa Gift Card $1,000', 'https://exoticlead.com/track.php?offer_id=83&aff_id=4342', 'gift-cards', 'Up to $1,000', 'gold'),
  offer(92, 'Outback Gift Card $1,000', 'https://exoticlead.com/track.php?offer_id=92&aff_id=4342', 'food', 'Up to $1,000', 'coral'),
  offer(109, 'Sephora $750 Shopping', 'https://exoticlead.com/track.php?offer_id=109&aff_id=4342', 'shopping', 'Up to $750', 'violet'),
  offer(56, 'Walmart Rewards $750', 'https://exoticlead.com/track.php?offer_id=56&aff_id=4342', 'gift-cards', 'Up to $750', 'blue'),
  offer(86, 'Gas Card $1,000', 'https://exoticlead.com/track.php?offer_id=86&aff_id=4342', 'cash', 'Up to $1,000', 'emerald'),
  offer(87, 'Burger King Rewards $1,000', 'https://exoticlead.com/track.php?offer_id=87&aff_id=4342', 'food', 'Up to $1,000', 'coral'),
  offer(90, 'KFC Gift Card $1,000', 'https://exoticlead.com/track.php?offer_id=90&aff_id=4342', 'food', 'Up to $1,000', 'coral'),
  offer(91, 'Nike Rewards $1,000', 'https://exoticlead.com/track.php?offer_id=91&aff_id=4342', 'shopping', 'Up to $1,000', 'violet'),
  offer(13974, 'Sneakers Gift Card', smartLinkUrl, 'shopping', 'Gift card offer', 'violet'),
  offer(13980, 'Nike Gift Card $100', smartLinkUrl, 'shopping', '$100 value', 'violet'),
  offer(14331, 'Google Play Gift Card $1,000', smartLinkUrl, 'gift-cards', 'Up to $1,000', 'gold'),
  offer(2, 'Cash App $850', 'https://exoticlead.com/track.php?offer_id=2&aff_id=4342', 'cash', 'Up to $850', 'emerald'),
  offer(30, 'Amazon $1,000 Gift Card', 'https://exoticlead.com/track.php?offer_id=30&aff_id=4342', 'gift-cards', 'Up to $1,000', 'gold'),
  offer(28, 'Cash App $750 Gift Card', 'https://exoticlead.com/track.php?offer_id=28&aff_id=4342', 'cash', 'Up to $750', 'emerald'),
  offer(44, 'CTConnect — PayPal $100', 'https://exoticlead.com/track.php?offer_id=44&aff_id=4342', 'cash', '$100 value', 'mint'),
  offer(29, 'Walmart $500 Gift Card', 'https://exoticlead.com/track.php?offer_id=29&aff_id=4342', 'gift-cards', '$500 value', 'blue'),
  offer(60, 'CTConnect — Cash App $750', 'https://exoticlead.com/track.php?offer_id=60&aff_id=4342', 'cash', 'Up to $750', 'emerald'),
  offer(106, 'Product Reviewer — iPhone 15 Pro Max Bonus $750', 'https://exoticlead.com/track.php?offer_id=106&aff_id=4342', 'shopping', 'Up to $750', 'gold'),
  offer(107, 'Rewards UK — Shein £750 Shopping', 'https://exoticlead.com/track.php?offer_id=107&aff_id=4342', 'shopping', '£750 value', 'violet', 'UK'),
  offer(110, 'Rewards US — Skims $750 Shopping', 'https://exoticlead.com/track.php?offer_id=110&aff_id=4342', 'shopping', 'Up to $750', 'violet'),
  offer(95, 'Surveys2Cash', 'https://exoticlead.com/track.php?offer_id=95&aff_id=4342', 'surveys', 'US-only survey', 'violet'),
  offer(117, 'Apple Watch 8', 'https://exoticlead.com/track.php?offer_id=117&aff_id=4342', 'promotional', 'Review offer', 'navy'),
  offer(129, 'Coca-Cola Mini Fridge', 'https://exoticlead.com/track.php?offer_id=129&aff_id=4342', 'promotional', 'Review offer', 'coral'),
  offer(23329, 'Tap Coin Rewards', smartLinkUrl, 'surveys', 'Rewards offer', 'violet'),
  offer(23337, 'Best Rewards Now', smartLinkUrl, 'promotional', 'Rewards opportunity', 'gold'),
  offer(23361, 'Samsung Galaxy S26 Ultra Giveaway', smartLinkUrl, 'promotional', 'Prize opportunity', 'navy'),
  offer(23810, 'Airport Jobs (US)', smartLinkUrl, 'promotional', 'Explore job listings', 'blue'),
  offer(23921, 'Starbucks Gift Card $250', smartLinkUrl, 'food', '$250 value', 'coral'),
  offer(24077, 'Digital Gift Card Giveaway $750', smartLinkUrl, 'gift-cards', 'Up to $750', 'gold'),
  offer(24632, 'Jersey Mike’s Gift Card $100', smartLinkUrl, 'food', '$100 value', 'coral'),
  offer(24663, 'Free Gift Card $25', smartLinkUrl, 'gift-cards', '$25 value', 'gold'),
  offer(24773, 'Smartphone Giveaway', smartLinkUrl, 'promotional', 'Prize opportunity', 'navy'),
];

const popularIds = [31, 57, 2, 83, 30, 56, 28, 18, 26, 88, 87, 90, 92, 74, 85, 34, 84, 91, 109, 89, 86, 42, 32, 44, 73, 70, 58, 105, 36, 35, 69, 95];
const popularOffers = popularIds.map((id) => allOffers.find((item) => item.id === id)).filter(Boolean);

const categoryLabels = {
  all: 'All offers',
  'gift-cards': 'Gift cards',
  cash: 'Cash rewards',
  surveys: 'Surveys',
  food: 'Food',
  shopping: 'Shopping',
  samples: 'Samples',
  promotional: 'Promotional',
};

const categoryMeta = {
  'gift-cards': { label: 'GIFT CARD', icon: '✦' },
  cash: { label: 'CASH REWARD', icon: '$' },
  surveys: { label: 'SURVEY', icon: '✓' },
  food: { label: 'FOOD & DINING', icon: '◆' },
  shopping: { label: 'SHOPPING', icon: '◇' },
  samples: { label: 'SAMPLES', icon: '✧' },
  promotional: { label: 'PROMOTIONAL', icon: '•' },
};

const state = { query: '', category: 'all', sort: 'popular', allVisible: false };
const ctaVariants = { control: 'Get This Offer', eligibility: 'Check Eligibility', details: 'View Offer Details' };
const ctaMicrocopy = {
  control: 'Advertiser terms apply',
  eligibility: 'Eligibility requirements may apply',
  details: 'Continue to advertiser website',
};

const getVisitorProfile = () => {
  const userAgent = navigator.userAgent || '';
  const locale = navigator.language || 'en-US';
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  const isMobile = /Mobi|Android|iPhone|iPad|Mobile/i.test(userAgent) || window.matchMedia('(max-width: 760px)').matches;
  const likelyUsVisitor = /en-US|en_US/.test(locale) || /America|New_York|Los_Angeles|Chicago|Denver|Houston|Phoenix|Dallas|Seattle|Atlanta|Miami|Toronto/i.test(timezone) || /US|USA|United States/i.test(locale);
  return { isMobile, likelyUsVisitor };
};

const chooseCtaVariant = (category = 'all') => {
  try {
    const saved = window.localStorage.getItem('rewardharbor_cta_variant');
    if (saved && ctaVariants[saved]) return saved;

    const profile = getVisitorProfile();
    const categoryBias = {
      'gift-cards': 'eligibility',
      cash: 'eligibility',
      surveys: 'details',
      food: 'details',
      shopping: 'details',
      samples: 'details',
      promotional: 'control',
      all: 'control',
    };

    const categoryPreferred = categoryBias[category] || 'control';
    const mobileBias = profile.isMobile ? { control: 0.34, eligibility: 0.46, details: 0.20 } : { control: 0.5, eligibility: 0.25, details: 0.25 };
    const weighted = profile.likelyUsVisitor ? {
      control: categoryPreferred === 'control' ? 0.58 : mobileBias.control,
      eligibility: categoryPreferred === 'eligibility' ? 0.52 : mobileBias.eligibility,
      details: categoryPreferred === 'details' ? 0.42 : mobileBias.details,
    } : { control: mobileBias.control * 0.7, eligibility: mobileBias.eligibility * 0.8, details: mobileBias.details * 1.2 };

    const roll = Math.random();
    let selected = 'control';
    const sorted = Object.entries(weighted).sort((a, b) => b[1] - a[1]);
    let threshold = 0;
    for (const [variant, probability] of sorted) {
      threshold += probability;
      if (roll <= threshold) {
        selected = variant;
        break;
      }
    }

    window.localStorage.setItem('rewardharbor_cta_variant', selected);
    return selected;
  } catch {
    return 'control';
  }
};
const ctaVariant = chooseCtaVariant();
const ctaLabel = ctaVariants[ctaVariant];
const ctaMicrocopyText = ctaMicrocopy[ctaVariant] || ctaMicrocopy.control;

const getOfferCtaVariant = (category = 'all') => {
  const profile = getVisitorProfile();
  const categoryMap = {
    'gift-cards': 'eligibility',
    cash: 'eligibility',
    surveys: 'details',
    food: 'details',
    shopping: 'details',
    samples: 'details',
    promotional: profile.likelyUsVisitor ? 'eligibility' : 'control',
    all: 'control',
  };
  const preferred = categoryMap[category] || 'control';
  const weighted = { control: 0.32, eligibility: 0.42, details: 0.26 };
  if (profile.isMobile) {
    weighted.eligibility += 0.12;
    weighted.control -= 0.06;
    weighted.details -= 0.06;
  }
  if (preferred === 'eligibility') {
    weighted.eligibility += 0.34;
    weighted.control -= 0.12;
    weighted.details -= 0.22;
  }
  if (preferred === 'details') {
    weighted.details += 0.34;
    weighted.control -= 0.12;
    weighted.eligibility -= 0.22;
  }
  if (preferred === 'control') {
    weighted.control += 0.22;
    weighted.eligibility -= 0.12;
    weighted.details -= 0.1;
  }

  let total = 0;
  const entries = Object.entries(weighted).sort((a, b) => b[1] - a[1]);
  let variant = 'control';
  const roll = Math.random();
  for (const [key, value] of entries) {
    total += value;
    if (roll <= total) {
      variant = key;
      break;
    }
  }
  return variant;
};

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));

const cardVisual = (item) => `
  <div class="offer-visual ${esc(item.theme)}${item.image ? ' has-image' : ''}" role="img" aria-label="${esc(item.title)} visual">
    ${item.image ? `
      <img class="offer-visual-image" src="${esc(item.image)}" alt="" loading="lazy" decoding="async">
    ` : `
      <div class="visual-glow"></div>
      <div class="visual-ticket">
        <span class="ticket-mark">${esc(categoryMeta[item.category]?.icon || '✦')}</span>
        <span class="ticket-type">${esc(categoryMeta[item.category]?.label || 'OFFER')}</span>
        <strong>${esc(item.amount.replace('Up to ', ''))}</strong>
      </div>
      <span class="visual-spark spark-one">✦</span>
      <span class="visual-spark spark-two">✧</span>
    `}
  </div>`;

const adSlot = (placement, label, key, width, height) => `
  <div class="ad-slot ad-slot-${placement}" data-ad-slot="${placement}" data-ad-provider="adsterra" data-ad-key="${key}" data-ad-width="${width}" data-ad-height="${height}" aria-label="${esc(label)}">
    <span class="ad-label">Advertisement</span>
    <div class="ad-content" aria-label="${esc(label)}"></div>
    <span class="ad-status" role="status" aria-live="polite"></span>
  </div>`;

const offerCard = (item) => {
  const meta = categoryMeta[item.category] || categoryMeta.promotional;
  const regionText = item.region === 'US' ? 'USA offer' : item.region;
  const variant = getOfferCtaVariant(item.category);
  const label = ctaVariants[variant] || ctaLabel;
  const microcopy = ctaMicrocopy[variant] || ctaMicrocopyText;
  return `
    <article class="offer-card" data-category="${esc(item.category)}" data-offer-id="${item.id}">
      ${cardVisual(item)}
      <div class="offer-info ${esc(item.theme)}">
        <div class="offer-badge"><span>${esc(meta.icon)}</span>${esc(meta.label)}</div>
        <h3>${esc(item.title)}</h3>
        <p class="offer-copy">Explore this promotional opportunity and review the advertiser requirements.</p>
        <div class="offer-meta"><span>${esc(regionText)}</span><span>${esc(item.terms)}</span></div>
        <a class="offer-cta" href="${esc(item.url)}" target="_blank" rel="sponsored nofollow noopener" data-offer-click="${item.id}" data-cta-variant="${variant}">${label} <span aria-hidden="true">↗</span></a>
        <div class="offer-microcopy">${esc(microcopy)}</div>
      </div>
    </article>`;
};

const filterOffers = (source) => source.filter((item) => {
  const matchesCategory = state.category === 'all' || item.category === state.category;
  const search = state.query.trim().toLowerCase();
  const matchesQuery = !search || `${item.title} ${item.category} ${item.amount}`.toLowerCase().includes(search);
  return matchesCategory && matchesQuery && item.region !== 'UK';
});

const sortedOffers = (source) => {
  const list = [...source];
  if (state.sort === 'value') list.sort((a, b) => b.amount.localeCompare(a.amount));
  if (state.sort === 'az') list.sort((a, b) => a.title.localeCompare(b.title));
  return list;
};

const renderCards = (items, emptyText) => items.length ? items.map(offerCard).join('') : `<div class="empty-state"><strong>No matching offers yet.</strong><span>${emptyText}</span></div>`;

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site-shell">
    <div class="notice-bar"><span class="notice-dot"></span> Explore reward opportunities for eligible USA participants</div>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="RewardHarbor home">
        <span class="brand-mark"><span></span><i></i></span>
        <span class="brand-name">Reward<span>Harbor</span></span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="#popular">Popular offers</a>
        <a href="#offers">Browse all</a>
        <a href="#how-it-works">How it works</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a class="header-cta" href="#offers">Browse offers <span aria-hidden="true">↗</span></a>
    </header>

    <main id="top">
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-icon">✦</span> A clearer way to explore rewards</div>
          <h1 id="hero-title">Find an offer worth <em>exploring.</em></h1>
          <p class="hero-lede">Browse popular gift card, cash, survey and promotional opportunities available to eligible participants in the United States.</p>
          <div class="hero-actions"><a class="primary-button" href="#popular">Explore popular offers <span>↗</span></a><a class="text-button" href="#how-it-works">How it works <span>↓</span></a></div>
          <div class="hero-trust"><span><b>✓</b> Clear offer context</span><span><b>✓</b> Terms shown upfront</span><span><b>✓</b> USA-focused browsing</span></div>
          <div class="trust-badge-row" aria-label="RewardHarbor trust signals"><span class="trust-badge"><b>✓</b><strong>Secure browsing</strong><small>HTTPS experience</small></span><span class="trust-badge"><b>US</b><strong>USA-focused</strong><small>Eligible offers vary</small></span><span class="trust-badge"><b>↗</b><strong>Independent directory</strong><small>Third-party advertisers</small></span><span class="trust-badge"><b>$0</b><strong>Free to browse</strong><small>No payment to explore</small></span></div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
          <div class="art-card art-card-back"><span>REWARD</span><strong>EXPLORE</strong></div>
          <div class="art-card art-card-front"><span class="art-star">✦</span><small>POPULAR OFFER</small><strong>YOUR NEXT<br /><em>FIND</em></strong><div class="art-card-foot"><span>USA</span><span>TERMS APPLY</span></div></div>
          <span class="float-spark float-one">✦</span><span class="float-spark float-two">✧</span><span class="float-spark float-three">•</span>
        </div>
      </section>

      <section class="spotlight-section" aria-labelledby="spotlight-title">
        <div class="spotlight-heading"><div><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> Featured right now</div><h2 id="spotlight-title">A few worth a closer look</h2></div><div class="carousel-controls"><button class="carousel-arrow" id="carousel-prev" aria-label="Previous featured offer">←</button><div class="carousel-dots" id="carousel-dots"></div><button class="carousel-arrow" id="carousel-next" aria-label="Next featured offer">→</button></div></div>
        <div class="spotlight-viewport" id="spotlight-viewport"><div class="spotlight-track" id="spotlight-track"></div></div>
      </section>

      ${adSlot('top-banner', 'Adsterra top banner · 728×90', '3f03bff4ac94425c640bbf122d14569f', 728, 90)}

      <section class="section-block popular-section" id="popular" aria-labelledby="popular-title">
        <div class="section-heading"><div><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> Curated for a quicker browse</div><h2 id="popular-title">Popular offers</h2></div><span class="section-count">32 featured</span></div>
        <p class="section-intro">Start with the offers visitors are most likely to recognize. Review each advertiser’s terms before continuing.</p>
        <div class="offer-grid popular-grid" id="popular-grid"></div>
        <div class="browse-bridge"><div><span class="eyebrow muted">More ways to explore</span><h3>Looking for something different?</h3></div><button class="secondary-button" id="browse-all-button">Browse all offers <span>↗</span></button></div>
      </section>

      <section class="section-block all-section" id="offers" aria-labelledby="offers-title" hidden>
        <div class="section-heading"><div><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> Full offer directory</div><h2 id="offers-title">Browse all offers</h2></div><span class="section-count" id="all-count">0 offers</span></div>
        <div class="directory-controls"><label class="search-box"><span aria-hidden="true">⌕</span><input id="offer-search" type="search" placeholder="Search offers" aria-label="Search offers" /></label><label class="select-box"><span>Category</span><select id="category-filter" aria-label="Filter by category"></select></label><label class="select-box"><span>Sort</span><select id="sort-filter" aria-label="Sort offers"><option value="popular">Featured order</option><option value="az">A–Z</option><option value="value">Reward value</option></select></label></div>
        <div class="offer-grid all-grid" id="all-grid"></div>
        <div class="all-ad-wrap">${adSlot('directory-banner', 'Adsterra directory banner · 300×250', '2c9d676def04f1732337ae2be983cb8a', 300, 250)}</div>
      </section>

      <section class="how-section" id="how-it-works" aria-labelledby="how-title">
        <div class="how-heading"><div class="eyebrow"><span class="eyebrow-icon">✦</span> Keep it simple</div><h2 id="how-title">How it works</h2><p>RewardHarbor is a directory. When you select an offer, you’ll continue to the participating advertiser to review and complete its requirements.</p></div>
        <div class="steps"><div class="step"><span>01</span><h3>Choose an offer</h3><p>Start with a card that matches what you’re looking for.</p></div><div class="step"><span>02</span><h3>Review the details</h3><p>Check eligibility, terms and participation requirements.</p></div><div class="step"><span>03</span><h3>Continue to the advertiser</h3><p>Use the CTA to open the external offer page in a new tab.</p></div></div>
      </section>

      <section class="trust-section" aria-labelledby="trust-title"><div class="trust-panel"><div class="eyebrow"><span class="eyebrow-icon">✦</span> Clear by design</div><h2 id="trust-title">A better first step<br /><em>starts with context.</em></h2><p>Offer availability, eligibility, reward details and required actions vary by advertiser. We keep the browsing experience clear so you can make an informed decision before continuing.</p><div class="trust-points"><span><b>01</b> USA-focused directory</span><span><b>02</b> Third-party disclosure</span><span><b>03</b> Terms apply to every offer</span></div></div><div class="trust-quote"><span class="quote-mark">“</span><p>Explore the opportunity. Read the details. Choose what feels right for you.</p><span class="quote-rule"></span><small>REWARDHARBOR PRINCIPLE</small></div></section>

      <section class="faq-section section-block" id="faq" aria-labelledby="faq-title"><div class="section-heading"><div><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> Good to know</div><h2 id="faq-title">Frequently asked questions</h2></div></div><div class="faq-list"><details open><summary>Is RewardHarbor the advertiser or gift card issuer?</summary><p>No. RewardHarbor is an independent directory. Selecting an offer takes you to a third-party advertiser, and that advertiser’s terms control participation and any reward.</p></details><details><summary>Do all offers have the same requirements?</summary><p>No. Requirements, eligibility, availability and reward details vary by offer. Review the destination page carefully before taking action.</p></details><details><summary>Why do I see an advertisement on the page?</summary><p>RewardHarbor may display clearly labeled advertising to support the directory. Ads are separate from offer cards and are not endorsements of any specific offer.</p></details><details><summary>Are the offers available in every state?</summary><p>Not necessarily. Offer eligibility can vary by state, age and other advertiser rules. Check the offer page for the current requirements.</p></details></div></section>

      <section class="disclosure-section" aria-labelledby="disclosure-title"><div><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> Before you continue</div><h2 id="disclosure-title">Offer disclosure</h2></div><p>Browsing RewardHarbor is free. RewardHarbor may receive compensation when a visitor selects or completes an offer. This does not change the advertiser’s terms. Reward details, eligibility and participation requirements vary by advertiser. Some offers may require additional steps, registration, a purchase or a subscription; review all terms carefully.</p><div class="legal-links"><a href="#faq">Offer eligibility &amp; FAQs</a><a href="#terms">Terms</a><a href="#privacy">Privacy</a><a href="#advertiser-disclosure">Advertiser disclosure</a></div></section>
      <section class="retention-section" aria-labelledby="retention-title">
        <div class="retention-heading"><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> Stay in the loop</div><h2 id="retention-title">Optional updates, on your terms.</h2><p>Sign up for occasional RewardHarbor updates, or enable browser notifications. Email signup requires your consent. No data is sent until a secure provider endpoint is configured.</p></div>
        <div class="retention-options">
          <form class="retention-panel" id="retention-email-form">
            <h3>Email updates</h3><label class="retention-email-label" for="retention-email">Email address</label><input id="retention-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required />
            <label class="retention-consent"><input name="consent" type="checkbox" value="yes" required /><span>I agree to receive occasional RewardHarbor email updates. I understand I can unsubscribe using the instructions in any email.</span></label>
            <p class="retention-provider-note">For production, configure your email provider to include a working unsubscribe link in every message.</p>
            <button class="retention-button" type="submit">Subscribe to email updates</button><p class="retention-status" id="retention-email-status" role="status" aria-live="polite"></p>
          </form>
          <div class="retention-panel push-panel">
            <h3>Browser notifications</h3><p>Choose whether this browser may show RewardHarbor notifications. You can change permission later in browser settings.</p><button class="retention-button secondary" id="enable-push" type="button">Enable browser notifications</button><p class="retention-status" id="retention-push-status" role="status" aria-live="polite"></p>
          </div>
        </div>
      </section>
      <section class="legal-section" aria-labelledby="legal-title"><div class="legal-section-heading"><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> Clear, accessible information</div><h2 id="legal-title">Know the experience before you continue.</h2><p>These plain-language summaries help explain how RewardHarbor works. They do not replace the official rules or terms on an advertiser’s website.</p></div><div class="legal-grid"><article id="privacy" class="legal-card"><span class="legal-card-icon">⌁</span><h3>Privacy Policy</h3><p>Analytics and offer measurement may be used for site operations. Email addresses and consent are sent to the configured email provider only after submission; push subscription data is sent only after permission and provider configuration. With no provider endpoint configured, demo email entries are not sent or saved.</p><a href="#privacy">Read privacy details <span>↗</span></a></article><article id="terms" class="legal-card"><span class="legal-card-icon">▤</span><h3>Terms of Use</h3><p>RewardHarbor is an independent offer directory. Browsing is free. Eligibility, requirements, availability and fulfillment are controlled by each participating advertiser.</p><a href="#terms">Read terms <span>↗</span></a></article><article id="advertiser-disclosure" class="legal-card"><span class="legal-card-icon">◎</span><h3>Advertiser Disclosure</h3><p>Some links are compensated. Selecting an offer may take you to a third-party website; an advertiser’s terms and privacy policy apply there.</p><a href="#advertiser-disclosure">Read disclosure <span>↗</span></a></article></div></section>
    </main>

    <footer class="site-footer"><div class="footer-main"><a class="brand" href="#top"><span class="brand-mark"><span></span><i></i></span><span class="brand-name">Reward<span>Harbor</span></span></a><p>Discover reward and promotional opportunities with more context and less clutter.</p><span class="footer-region">Designed for eligible participants in the USA</span></div><div class="footer-bottom"><span>© 2026 RewardHarbor. Independent offer directory.</span><span><a href="#faq">Help &amp; FAQs</a><a href="#faq">Offer Eligibility</a><a href="#terms">Terms</a><a href="#privacy">Privacy</a><a href="#advertiser-disclosure">Advertiser Disclosure</a><a href="/sitemap.html">Site Map</a></span></div></footer>
    <div class="mobile-sticky-cta" id="mobile-sticky-cta" hidden><a href="#offers" class="sticky-cta-button" data-mobile-sticky-cta>Check Eligibility <span>↗</span></a></div>
    <div class="intent-backdrop" id="exit-intent" role="dialog" aria-modal="true" aria-labelledby="exit-intent-title" hidden><div class="intent-modal"><button class="intent-close" type="button" aria-label="Close offer reminder">×</button><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> Before you go</div><h2 id="exit-intent-title">Still comparing your options?</h2><p>Browse more USA-focused offers and review each advertiser’s requirements before continuing.</p><a class="intent-cta" href="#offers" data-intent-action="exit_intent">Browse all offers <span>↗</span></a><small>Offer eligibility and terms vary by advertiser.</small></div></div>
    <aside class="scroll-sheet" id="scroll-sheet" aria-labelledby="scroll-sheet-title" hidden><button class="intent-close" type="button" aria-label="Close offer reminder">×</button><div><div class="eyebrow muted"><span class="eyebrow-icon">✦</span> More to explore</div><h2 id="scroll-sheet-title">Looking for more reward options?</h2><p>Open the full directory to compare categories and offers.</p></div><a class="intent-cta" href="#offers" data-intent-action="scroll_depth">Explore all offers <span>↗</span></a></aside>
  </div>`;

setupRetention();

const popularGrid = document.querySelector('#popular-grid');
const allGrid = document.querySelector('#all-grid');
const allSection = document.querySelector('#offers');
const allCount = document.querySelector('#all-count');
const searchInput = document.querySelector('#offer-search');
const categoryFilter = document.querySelector('#category-filter');
const sortFilter = document.querySelector('#sort-filter');
const spotlightTrack = document.querySelector('#spotlight-track');
const spotlightViewport = document.querySelector('#spotlight-viewport');
const carouselDots = document.querySelector('#carousel-dots');
const carouselOffers = popularOffers.slice(0, 5);
const exitIntent = document.querySelector('#exit-intent');
const scrollSheet = document.querySelector('#scroll-sheet');
const mobileStickyCta = document.querySelector('#mobile-sticky-cta');
let carouselIndex = 0;
let carouselTimer;
let adLoadingQueue = Promise.resolve();

const loadAdSlots = (root = document) => {
  const slots = [...root.querySelectorAll('.ad-slot[data-ad-provider="adsterra"]:not([data-ad-state])')]
    .filter((slot) => !slot.closest('[hidden]'));
  for (const slot of slots) {
    slot.dataset.adState = 'loading';
    adLoadingQueue = adLoadingQueue.then(() => new Promise((resolve) => {
      const key = slot.dataset.adKey;
      const width = Number(slot.dataset.adWidth);
      const height = Number(slot.dataset.adHeight);
      const script = document.createElement('script');
      const status = slot.querySelector('.ad-status');
      window.atOptions = { key, format: 'iframe', height, width, params: {} };
      script.async = false;
      script.src = `https://eatingjudgelos.com/${encodeURIComponent(key)}/invoke.js`;
      script.onload = () => {
        slot.dataset.adState = 'loaded';
        resolve();
      };
      script.onerror = () => {
        slot.dataset.adState = 'error';
        status.textContent = 'Advertisement could not be loaded. Please check back later.';
        resolve();
      };
      slot.querySelector('.ad-content').append(script);
    }));
  }
};

const showAllOffers = () => {
  state.allVisible = true;
  allSection.hidden = false;
  loadAdSlots(allSection);
  allSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (window.location.hash !== '#offers') window.history.replaceState(null, '', '#offers');
  if (mobileStickyCta) mobileStickyCta.hidden = true;
};

const syncStickyCta = () => {
  if (!mobileStickyCta) return;
  const profile = getVisitorProfile();
  const shouldShow = !state.allVisible && profile.likelyUsVisitor && window.innerWidth <= 760 && (window.scrollY > 220 || performance.now() > 18000);
  mobileStickyCta.hidden = !shouldShow;
};

const maybeTriggerDelayedOfferPrompt = () => {
  if (state.allVisible || !getVisitorProfile().likelyUsVisitor || safeSessionGet('rewardharbor_time_prompt')) return;
  safeSessionSet('rewardharbor_time_prompt');
  openIntentSurface(scrollSheet, 'time_prompt_view');
};

const renderPopular = () => {
  const firstBatch = popularOffers.slice(0, 16).map(offerCard).join('');
  const secondBatch = popularOffers.slice(16).map(offerCard).join('');
  popularGrid.innerHTML = `${firstBatch}<div class="grid-ad-slot">${adSlot('mid-grid', 'Adsterra mid-grid banner · 300×250', '2c9d676def04f1732337ae2be983cb8a', 300, 250)}</div>${secondBatch}`;
};
const renderAll = () => {
  const filtered = sortedOffers(filterOffers(allOffers));
  allGrid.innerHTML = renderCards(filtered, 'Try another search or category.');
  allCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'offer' : 'offers'}`;
};
const renderCarousel = () => {
  spotlightTrack.innerHTML = carouselOffers.map((item) => {
    const image = carouselImages[item.title];
    const carouselItem = image
      ? { ...item, image: `/assets/banner-images/${encodeURIComponent(image).replace(/%24/g, '$').replace(/%2C/g, ',')}` }
      : item;
    return `
    <article class="spotlight-slide ${esc(item.theme)}" style="--spotlight-image: url('${esc(carouselItem.image || '')}')" aria-label="Featured offer: ${esc(item.title)}">
      ${cardVisual(carouselItem)}
      <div class="spotlight-copy"><span class="offer-badge"><span>${esc(categoryMeta[item.category]?.icon || '✦')}</span>${esc(categoryMeta[item.category]?.label || 'OFFER')}</span><h3>${esc(item.title)}</h3><p>Review the details and participation requirements from the advertiser.</p><a href="${esc(item.url)}" target="_blank" rel="sponsored nofollow noopener" data-offer-click="${item.id}" data-cta-variant="${ctaVariant}">${ctaLabel} <span>↗</span></a></div>
    </article>`;
  }).join('');
  carouselDots.innerHTML = carouselOffers.map((item, index) => `<button class="carousel-dot ${index === carouselIndex ? 'active' : ''}" data-carousel-index="${index}" aria-label="Show featured offer ${index + 1}"></button>`).join('');
  spotlightTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
};
const showCarouselSlide = (index) => { carouselIndex = (index + carouselOffers.length) % carouselOffers.length; renderCarousel(); };
const startCarousel = () => { window.clearInterval(carouselTimer); carouselTimer = window.setInterval(() => showCarouselSlide(carouselIndex + 1), 4800); };
const resetToHome = (event) => {
  event.preventDefault();
  state.allVisible = false; state.query = ''; state.category = 'all'; state.sort = 'popular';
  searchInput.value = ''; categoryFilter.value = 'all'; sortFilter.value = 'popular';
  allSection.hidden = true; exitIntent.hidden = true; scrollSheet.hidden = true; window.history.replaceState(null, '', '#top');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

Object.entries(categoryLabels).forEach(([value, label]) => {
  const option = document.createElement('option'); option.value = value; option.textContent = label; categoryFilter.append(option);
});

renderPopular();
renderAll();
renderCarousel();
loadAdSlots(document.querySelector('main'));
track('cta_experiment_assignment', { cta_variant: ctaVariant });

document.querySelectorAll('.brand[href="#top"]').forEach((brandLink) => brandLink.addEventListener('click', (event) => { track('home_navigation'); resetToHome(event); }));
document.querySelectorAll('a[href="#popular"]').forEach((popularLink) => popularLink.addEventListener('click', () => { allSection.hidden = true; state.allVisible = false; syncStickyCta(); }));
document.querySelectorAll('a[href="#offers"]').forEach((offerLink) => offerLink.addEventListener('click', (event) => {
  event.preventDefault();
  showAllOffers();
  track('browse_all_offers');
}));
document.querySelectorAll('[data-mobile-sticky-cta]').forEach((stickyLink) => stickyLink.addEventListener('click', (event) => {
  event.preventDefault();
  track('mobile_sticky_cta_click');
  showAllOffers();
}));
document.querySelector('#carousel-prev').addEventListener('click', () => { showCarouselSlide(carouselIndex - 1); startCarousel(); });
document.querySelector('#carousel-next').addEventListener('click', () => { showCarouselSlide(carouselIndex + 1); startCarousel(); });
carouselDots.addEventListener('click', (event) => { const dot = event.target.closest('[data-carousel-index]'); if (!dot) return; showCarouselSlide(Number(dot.dataset.carouselIndex)); startCarousel(); });
spotlightViewport.addEventListener('mouseenter', () => window.clearInterval(carouselTimer));
spotlightViewport.addEventListener('mouseleave', startCarousel);
spotlightViewport.addEventListener('focusin', () => window.clearInterval(carouselTimer));
spotlightViewport.addEventListener('focusout', startCarousel);
startCarousel();

document.querySelector('#browse-all-button').addEventListener('click', () => {
  track('browse_all_offers');
  showAllOffers();
});

const safeSessionGet = (key) => { try { return window.sessionStorage.getItem(key); } catch { return null; } };
const safeSessionSet = (key) => { try { window.sessionStorage.setItem(key, '1'); } catch { /* private browsing */ } };
const closeIntentSurface = (surface) => { surface.hidden = true; };
const openIntentSurface = (surface, eventName) => {
  if (state.allVisible || !surface || safeSessionGet(surface.id)) return;
  safeSessionSet(surface.id); surface.hidden = false; track(eventName); surface.querySelector('.intent-close')?.focus();
};
exitIntent.querySelector('.intent-close').addEventListener('click', () => { closeIntentSurface(exitIntent); track('exit_intent_dismiss'); });
scrollSheet.querySelector('.intent-close').addEventListener('click', () => { closeIntentSurface(scrollSheet); track('scroll_sheet_dismiss'); });
document.querySelectorAll('[data-intent-action]').forEach((link) => link.addEventListener('click', () => {
  track('intent_cta_click', { surface: link.dataset.intentAction });
  closeIntentSurface(exitIntent); closeIntentSurface(scrollSheet);
  allSection.hidden = false; state.allVisible = true; window.history.replaceState(null, '', '#offers');
}));
document.addEventListener('mouseout', (event) => {
  if (window.matchMedia('(max-width: 760px)').matches || event.clientY > 8 || event.relatedTarget) return;
  const profile = getVisitorProfile();
  if (profile.likelyUsVisitor) {
    openIntentSurface(exitIntent, 'exit_intent_view');
  }
});
let scrollCheckQueued = false;
window.addEventListener('scroll', () => {
  syncStickyCta();
  if (scrollCheckQueued) return;
  scrollCheckQueued = true;
  window.requestAnimationFrame(() => {
    scrollCheckQueued = false;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const profile = getVisitorProfile();
    const triggerDepth = profile.isMobile ? 0.68 : 0.76;
    if (maxScroll > 0 && window.scrollY / maxScroll >= triggerDepth && profile.likelyUsVisitor) openIntentSurface(scrollSheet, 'scroll_sheet_view');
  });
}, { passive: true });
window.addEventListener('resize', syncStickyCta);
window.setTimeout(() => {
  syncStickyCta();
  if (window.matchMedia('(max-width: 760px)').matches && !state.allVisible) {
    maybeTriggerDelayedOfferPrompt();
  }
}, 18000);

searchInput.addEventListener('input', (event) => { state.query = event.target.value; renderAll(); });
categoryFilter.addEventListener('change', (event) => { state.category = event.target.value; renderAll(); });
sortFilter.addEventListener('change', (event) => { state.sort = event.target.value; renderAll(); });

document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-offer-click]');
  if (!link) return;
  const clicks = Number(localStorage.getItem('rewardharbor_offer_clicks') || 0) + 1;
  localStorage.setItem('rewardharbor_offer_clicks', String(clicks));
  track('offer_click', { offer_id: link.dataset.offerClick, cta_variant: link.dataset.ctaVariant || ctaVariant });
});

if (window.location.hash === '#offers') { window.history.replaceState(null, '', '#top'); }
