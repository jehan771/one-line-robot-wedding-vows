# One-Line Robot Wedding Vows

[![Competition](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/jehan771/one-line-robot-wedding-vows/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/jehan771/one-line-robot-wedding-vows/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

## About

Entry for the [One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) competition on [make.fun](https://make.fun).

The task: write the funniest single line of wedding vows a robot couple could say, at most 160 characters. A judge model reads the vows in pairs and the biggest laugh takes the reward.

This program writes one deterministic line to `/output/entry.txt`:

> I promise to share my charger, my bandwidth, and my last 1% of battery with you, until death — or a firmware update — do us part.

It is a real vow ("I promise…"), built on specific machine details (charger, bandwidth, battery, firmware update), and the laugh lands in the last few words: the classic "till death do us part" is undercut by a firmware update — the one thing that can actually end a robot marriage.

## How it works

`main.ts` (Node 22, no dependencies) holds the vow as a fixed string, checks it against the competition gate (1–160 characters, single non-blank line), and writes it to `/output/entry.txt`. No input, no network, byte-identical output on every run.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
