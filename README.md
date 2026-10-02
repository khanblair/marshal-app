# Marshal

Run many AI coding agents at once, on a kanban board.

> Marshal is in active development and is not released yet.

## What it is

Marshal is a lightweight desktop app with a background service. Each project (a Git repository) has one board, and each card on the board is one task. Every card gets its own agent session in an isolated Git worktree, so many tasks can run at once without breaking each other.

The background service watches what is really happening (agent activity, pull requests, CI, and reviews) and moves cards for you. You always see what each agent is doing, what needs you, and what is ready to merge.

## Works with

- The coding agents you already use: Claude Code, Codex, Gemini CLI, and others.
- A built-in agent that uses your own API keys (Anthropic, OpenAI, Gemini, DeepSeek, OpenRouter, and local models).
- GitHub, Trello, Google Calendar, Gmail, Telegram, Discord, ntfy, and Obsidian.

## The Marshal GitHub App

The Marshal GitHub App lets Marshal work with your repositories. When you install it, you choose which accounts and organizations it can see, and whether that is all repositories or only some.

| Permission | Access | Why Marshal asks for it |
|---|---|---|
| Contents | Read and write | Read your code, push the branch for each card, and merge when you approve |
| Pull requests | Read and write | Open, update, review, and merge pull requests |
| Issues | Read and write | Turn issues into cards and comment on them |
| Actions | Read and write | Watch CI runs, read failed logs, and re-run a failed job |
| Checks | Read only | See whether a pull request's checks passed |
| Metadata | Read only | Required by GitHub for every app |

The App also has read-only access to code quality, Codespaces, merge queues, Dependabot alerts, and your user issue fields. Marshal cannot change anything with those.

You can review or remove Marshal at any time:

- Authorized apps: <https://github.com/settings/apps/authorizations>
- Installed apps: <https://github.com/settings/installations>

## Privacy

- Marshal runs on your computer. No Marshal cloud server sits between you and GitHub.
- Your tokens are kept in your operating system's keychain.
- Marshal talks to the services you connect, such as GitHub or the model provider you choose.

Full policy: <https://khanblair.github.io/marshal-app/privacy/>. Terms of service: <https://khanblair.github.io/marshal-app/terms/>. Home page: <https://khanblair.github.io/marshal-app/>.

## Support

Questions and bug reports: [open an issue](https://github.com/khanblair/marshal-app/issues).
