# Texts From Your Future Self

[![make.fun](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?ref=bh1grvtt)
[![rank](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/aben00/u-motasimfuad-texts-from-your-future-self-dd44595e/rank.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?ref=bh1grvtt)
[![reward](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/aben00/u-motasimfuad-texts-from-your-future-self-dd44595e/reward.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?ref=bh1grvtt)

Entry for the [Texts From Your Future Self](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?ref=bh1grvtt) bounty on make.fun: one funny text message from your future self, under 200 characters, no setup, no context — just the message as it would arrive.

## The entry

> Future you here. We finally became the person we wanted to be. Turns out he also procrastinates, he just does it in a nicer apartment.

(134 characters, one line.)

## How it works

`main.ts` (Node 22+, standard library only) writes the entry deterministically to `/output/entry.txt` and self-checks the gate before writing: 1–199 characters, exactly one line, no leading or trailing whitespace, no control characters. It then reads the file back and verifies it byte-for-byte.

```sh
node main.ts
cat /output/entry.txt
```

Three runs produce byte-identical output (sha256 `27131a180b22b525a0964458fac3db02807b3b20b52e483d89f3d47c2c546da6`).

## License

MIT — see [LICENSE](LICENSE).
