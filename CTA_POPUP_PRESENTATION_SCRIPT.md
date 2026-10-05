# RewardHarbor — CTA A/B Testing & Popup Strategy

## Slide 1 — Opening
**Title:** RewardHarbor Conversion Optimization

**Speaker script:**
আজকের আপডেটে RewardHarbor landing page-এর CTA A/B test এবং visitor-friendly popup strategy দেখানো হবে। লক্ষ্য হলো USA audience-এর offer engagement বাড়ানো, কিন্তু misleading বা intrusive experience তৈরি না করা।

---

## Slide 2 — Why test the CTA?

**On-slide points:**
- একই offer, ভিন্ন action language
- Visitor intent বুঝতে experiment
- Click নয়, qualified lead এবং EPC প্রধান লক্ষ্য

**Speaker script:**
বর্তমানে শুধু “Get This Offer” ব্যবহার করলে আমরা জানি না visitor action-oriented wording পছন্দ করছে, নাকি eligibility-first wording। তাই তিনটি CTA variant visitor-level stable assignment দিয়ে test করা হচ্ছে।

---

## Slide 3 — Experiment setup

**On-slide points:**
- 50% — Get This Offer
- 25% — Check Eligibility
- 25% — View Offer Details
- Browser-level stable assignment

**Speaker script:**
একজন visitor browser-এ প্রথমবার আসার সময় একটি variant পাবে। সেটি localStorage-এ সংরক্ষিত থাকবে, তাই পরবর্তী visit-এ একই CTA দেখা যাবে। এতে একই visitor বারবার ভিন্ন experience না পেয়ে experiment data পরিষ্কার থাকে।

---

## Slide 4 — What is tracked?

**On-slide points:**
- `cta_experiment_assignment`
- `offer_click`
- `offer_id`
- `cta_variant`
- `browse_all_offers`

**Speaker script:**
শুধু button click গণনা করলে যথেষ্ট নয়। কোন offer, কোন CTA এবং কোন category থেকে click এসেছে তা track করা হচ্ছে। পরবর্তী ধাপে advertiser-side lead completion এবং EPC-এর সঙ্গে এই data মিলিয়ে winning variant নির্ধারণ করতে হবে।

---

## Slide 5 — Desktop exit-intent

**On-slide points:**
- Desktop only
- Mouse browser-এর top edge-এ গেলে trigger
- প্রতি session-এ সর্বোচ্চ একবার
- Clear close button

**Speaker script:**
Desktop visitor page ছেড়ে যাওয়ার ইঙ্গিত দিলে একটি ছোট modal দেখানো হয়: “Still comparing your options?” এর CTA visitor-কে full offer directory-তে নিয়ে যায়। এটি auto redirect করে না, close button স্পষ্ট, এবং visitor-এর session-এ একবারের বেশি দেখায় না।

---

## Slide 6 — Mobile scroll-depth bottom sheet

**On-slide points:**
- Mouse exit-intent নয়
- 62% page scroll-এর পরে trigger
- Bottom sheet format
- Full directory CTA

**Speaker script:**
Mobile device-এ mouse exit-intent কাজ করে না। তাই visitor যখন page-এর প্রায় ৬২% দেখে, তখন নিচে একটি compact bottom sheet আসে: “Looking for more reward options?” এটি content block করে না এবং close করা যায়।

---

## Slide 7 — Trust and compliance guardrails

**On-slide points:**
- No fake countdowns
- No guaranteed reward claims
- No auto redirect
- Terms and eligibility remain visible

**Speaker script:**
CPA landing page-এ short-term click বাড়ানোর জন্য dark pattern ব্যবহার করা উচিত নয়। RewardHarbor-এর popup এবং CTA-তে “guaranteed”, “you won” বা fake scarcity নেই। Advertiser terms এবং eligibility সবসময় visible রাখা হয়েছে।

---

## Slide 8 — Testing plan

**On-slide points:**
1. IDs configure করুন
2. DebugView এবং Test Events চালু করুন
3. CTA variants আলাদা করুন
4. Lead/EPC দিয়ে সিদ্ধান্ত নিন

**Speaker script:**
প্রথমে GA4 Measurement ID এবং Meta Pixel ID বসাতে হবে। তারপর GA4 DebugView ও Meta Events Manager-এর Test Events ব্যবহার করে page view, CTA assignment, offer click এবং popup actions verify করতে হবে। পর্যাপ্ত sample না পাওয়া পর্যন্ত winning CTA ঘোষণা করা উচিত নয়।

---

## Slide 9 — Success metrics

**On-slide points:**
- CTA click-through rate
- Advertiser redirect rate
- Completed lead rate
- EPC
- Mobile vs desktop
- Popup dismiss vs CTA click

**Speaker script:**
যে CTA সবচেয়ে বেশি click পায় সেটিই সবসময় winner নয়। Qualified lead, completion rate এবং EPC বেশি গুরুত্বপূর্ণ। Popup-এর ক্ষেত্রে view, dismiss, CTA click এবং subsequent offer click আলাদা করে দেখতে হবে।

---

## Slide 10 — Next action

**Speaker script:**
পরবর্তী পদক্ষেপ হলো tracking IDs configure করা, দুই থেকে চার সপ্তাহ data সংগ্রহ করা, mobile এবং desktop segment আলাদা করে দেখা, এবং বাস্তব conversion data অনুযায়ী CTA ও popup timing optimize করা।

**Closing line:**
RewardHarbor-এর লক্ষ্য বেশি click নয়—আরও informed এবং qualified USA visitor তৈরি করা।
