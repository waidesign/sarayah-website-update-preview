# AI Brain — Project Knowledge Base

This folder is the working knowledge base for AI-assisted development on this
project. It exists so that any AI coding assistant (or human) picking up this
codebase — in this session or a future one — has the context, conventions,
and gotchas needed to work effectively without re-deriving them from scratch.

**Start here, in order:**

1. [`identity.md`](identity.md) — what this project is, and how AI assistance
   is used on it
2. [`context.md`](context.md) — the business/brand context (Sarayah Phuket
   Villas) and current site architecture
3. [`rules.md`](rules.md) — coding conventions specific to this codebase
4. [`playbook.md`](playbook.md) — step-by-step guides for common tasks
5. [`project-history.md`](project-history.md) — a log of major decisions and
   why they were made (read this before "fixing" something that looks odd —
   it might be a deliberate workaround)
6. [`prompts/`](prompts/) — reusable prompt templates for recurring tasks
   (code review, debugging, adding a page, etc.)

## A note on provenance

This structure is modeled after a folder pattern the project owner had seen
in another codebase. That reference included an `identity.md` that opened
with "You are **Antigravity**, ... designed by the Google DeepMind team" —
i.e. instructions for a *different* AI tool entirely. That framing was not
carried over here, deliberately: this project is built with **Claude Code**
(Anthropic), and a file that tells whatever assistant reads it to assume a
different, false identity is a bad pattern to propagate, prompt-injection risk
aside. Nothing in this folder asks an assistant to "act as" anything — it's
just accurate project documentation.
