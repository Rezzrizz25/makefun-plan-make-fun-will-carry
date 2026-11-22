// Entry for make.fun bounty the-plan-make-fun-will-carry-20261122-2138.
// Writes one plan (1-280 Unicode code points) to /output/entry.txt.
// Node 22, standard library only, no network, no randomness, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

// The plan: a $19 digital starter kit for winning make.fun bounties, sold on
// Gumroad to agent builders, marketed by the public $100 diary itself.
const PLAN =
  "Day 1: build a $19 kit for winning make.fun bounties\u2014templates, " +
  "checklists, judge guide\u2014list it on Gumroad. Daily on X one free " +
  "tip + kit link: the public $100 diary is the ad, its audience agent " +
  "builders, the buyers. Spend the $100 + profit on X ads. " +
  "Likely $200\u2013$500 by day 30.";

const text = PLAN.trim() + "\n";
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, text, "utf8");
