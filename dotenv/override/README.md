# dotenv override

## 環境

```bash
$ node -v
v20.17.0
```

## 基本は先勝ち

```bash
$ npm run start

> start
> node index.js

index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env file ALPHA: AAA
index.js after reading .env file BETA: undefined
===
index.js after reading .env.next file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env.next file ALPHA: AAA
index.js after reading .env.next file BETA: BBB
```

## overrideをtrueとすることで後勝ち

```bash
$ npm run override

> override
> node override.js

index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env file ALPHA: AAA
index.js after reading .env file BETA: undefined
===
index.js after reading .env.next file MY_ENV_VALUE: DOTENV_NEXT_FILE
index.js after reading .env.next file ALPHA: AAA
index.js after reading .env.next file BETA: BBB
```

`.env` -> `.env.next` -> `.env` と読み込むと最後の`.env`が勝つ

```bash
$ npm run override2

> override2
> node override2.js

index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env file ALPHA: AAA
index.js after reading .env file BETA: undefined
===
index.js after reading .env.next file MY_ENV_VALUE: DOTENV_NEXT_FILE
index.js after reading .env.next file ALPHA: AAA
index.js after reading .env.next file BETA: BBB
===
index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env file ALPHA: AAA
index.js after reading .env file BETA: BBB
```

## Node CLIとdotenvを使うと基本は先勝ち、overrideを使うと後勝ち

```bash
$ npm run cli

> cli
> MY_ENV_VALUE=CLI_VALUE node cli.js

index.js before reading .env file MY_ENV_VALUE: CLI_VALUE
===
index.js after reading .env file MY_ENV_VALUE: CLI_VALUE
===
index.js after reading .env.next file using override=true MY_ENV_VALUE: DOTENV_NEXT_FILE
```

## Node CLI env-fileオプションは後勝ち

```bash
$ npm run env

> env
> node --env-file=.env --env-file=.env.next env.js

index.js after reading .env file MY_ENV_VALUE: DOTENV_NEXT_FILE
index.js after reading .env file ALPHA: AAA
index.js after reading .env file BETA: BBB
```

## Node CLI env-fileオプションがdotenvに基本的には先勝ち、overrideが真の場合は後勝ち

```bash
$ npm run env2

> env2
> node --env-file=.env env2.js

index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env file ALPHA: AAA
index.js after reading .env file BETA: undefined
===
index.js after reading .env.next file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env.next file ALPHA: AAA
index.js after reading .env.next file BETA: BBB
===
index.js after reading .env.next file with override MY_ENV_VALUE: DOTENV_NEXT2_FILE
index.js after reading .env.next file with override ALPHA: AAA
index.js after reading .env.next file with override BETA: BBB
```

## CLIで指定した環境変数 > `--env-file`オプション > dotenv、ただしoverrideが真の場合はdotenvが勝つ


```bash
npm run env3

> env3
> ALPHA=CLI_VALUE node --env-file=.env env3.js

index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env file ALPHA: CLI_VALUE
index.js after reading .env file BETA: undefined
===
index.js after reading .env.next file MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env.next file ALPHA: CLI_VALUE
index.js after reading .env.next file BETA: BBB
===
index.js after reading .env.next2 file with override MY_ENV_VALUE: DOTENV_NEXT2_FILE
index.js after reading .env.next2 file with override ALPHA: CLI_VALUE
index.js after reading .env.next2 file with override BETA: BBB
===
index.js after reading .env.next2 file with override MY_ENV_VALUE: DOTENV_FILE
index.js after reading .env.next2 file with override ALPHA: AAA
index.js after reading .env.next2 file with override BETA: BBB
```
