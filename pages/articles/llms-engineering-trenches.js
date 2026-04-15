import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Article.module.css";

export default function LLMsEngineeringTrenches() {
  return (
    <div>
      <Head>
        <title>LLMs in the Engineering Trenches: Coaching Developers to Code with AI - Edwin de Jong</title>
        <meta
          name="description"
          content="At Kongsberg Discovery, we got the green light for Copilot — and I made it my mission to show engineers what's actually possible with LLMs in daily software engineering."
        />
      </Head>

      <main>
        <section className={styles.article}>
          <Link href="/" className={styles.backLink}>
            ← Back to homepage
          </Link>

          <div className={styles.articleHeader}>
            <h1>LLMs in the Engineering Trenches: Coaching Developers to Code with AI</h1>
            <div className={styles.meta}>
              <span>April 2026</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>
              Kongsberg Discovery builds defense and maritime systems. The
              software we work with is sensitive, complex, and subject to
              regulations. This is not the kind of environment that chases
              bleeding-edge AI trends. So when the organization gave us the
              green light for GitHub Copilot, I knew that just having the
              license wasn't going to be enough. People needed to see what was
              actually possible.
            </p>

            <h2>The Green Light</h2>
            <p>
              Getting Copilot approved was a win, but it was also just the
              starting line. I'd been using LLMs extensively in my own
              workflow — at home, in my homelab, with Ugaris — and I knew the
              gap between &quot;installed a VS Code extension&quot; and
              &quot;actually changing how you work&quot; was enormous. Most
              engineers tried Copilot for autocomplete, thought it was neat,
              and went back to their usual workflow. The real power was
              completely untapped.
            </p>

            <h2>Coaching Approach: Show, Don't Tell</h2>
            <p>
              I didn't start with slides or theory. I started with demos. Live
              sessions where I'd take a real task from our codebase and solve
              it with an LLM at my side. Not cherry-picked examples — real
              work. Refactoring a module, writing tests for a legacy function,
              generating documentation for undocumented code. The kind of
              tasks engineers do every day and don't particularly enjoy.
            </p>
            <p>
              The key was making it tangible. Not &quot;here's what AI could
              theoretically do,&quot; but &quot;here's what I just did, in
              five minutes, on our actual code, and here's the PR to prove
              it.&quot;
            </p>

            <h2>The &quot;Aha&quot; Moment</h2>
            <p>
              The reaction was always the same when engineers saw the
              full-loop workflow for the first time. &quot;Wait — you can tell
              it to change something, and it searched through my codebase,
              found it, modified it, fixed it, and even committed it to git?&quot;
            </p>
            <p>
              Yes. That's the point. Autocomplete is the tip of the iceberg.
              The real shift is when you stop thinking of the LLM as a fancy
              search engine and start treating it as an agent — something that
              can reason about your code, navigate your project, and execute
              multi-step tasks with minimal supervision.
            </p>

            <h2>OpenCode: The Game Changer</h2>
            <p>
              OpenCode was the turning point for adoption. It provides a Claude
              Code-like experience using Copilot models — the only approved
              models in our environment. You get the agentic workflow —
              searching, reading, modifying, committing — without leaving the
              regulatory sandbox.
            </p>
            <p>
              I started running OpenCode sessions during pair programming,
              letting engineers see how I'd describe a task, review the
              changes, and iterate. It's not about letting the AI do
              everything blindly. It's about a tight loop: describe what you
              want, review what it does, adjust, repeat. The AI does the
              mechanical work; the engineer provides the judgment and context.
              That's the workflow that actually works at scale.
            </p>

            <h2>Agents.md: Giving AI Context</h2>
            <p>
              One of the most impactful things I introduced was the Agents.md
              pattern. It's simple: you write a markdown file at the root of
              your project that describes the architecture, the conventions,
              the gotchas, and the things a new team member would need to
              know. Then you point the LLM at it.
            </p>
            <p>
              The difference is night and day. Without context, an LLM will
              generate code that looks right but violates your project's
              patterns, ignores your naming conventions, and misses
              domain-specific constraints. With Agents.md, it works within
              your system. It's the difference between hiring a contractor
              who's never seen your codebase and hiring one who read the
              onboarding docs first.
            </p>
            <p>
              I made it a standard practice in our team. Every project gets an
              Agents.md. Every significant architectural decision gets
              documented there. It's useful for humans too — but for LLMs,
              it's transformative.
            </p>

            <h2>Practical Patterns That Work</h2>
            <p>
              After months of coaching, a few patterns emerged as consistently
              valuable:
            </p>
            <p>
              <strong>Code review assistance:</strong> Feed a diff to the LLM
              and ask it to spot issues. It won't replace a human reviewer,
              but it catches the obvious stuff — missing error handling,
              inconsistent naming, potential null references — before a human
              wastes time on it.
            </p>
            <p>
              <strong>Test generation:</strong> Writing tests is the task
              everyone agrees is important and nobody wants to do. LLMs are
              great at generating test scaffolding, edge cases, and the kind
              of tedious parameterized tests that make coverage reports happy.
              You still need to verify the tests actually test the right
              things, but the time savings are real.
            </p>
            <p>
              <strong>Refactoring:</strong> The agentic workflow shines here.
              &quot;Extract this method,&quot; &quot;rename this across the
              project,&quot; &quot;replace this pattern with that pattern&quot;
              — these are tasks the LLM can execute across multiple files
              while you review the result.
            </p>
            <p>
              <strong>Documentation:</strong> If your codebase has functions
              without docstrings, modules without READMEs, or APIs without
              examples, an LLM can generate a solid first draft in minutes.
              It's not going to capture domain knowledge you haven't written
              down, but it'll cover the mechanics and give you something to
              edit.
            </p>

            <h2>The Reality</h2>
            <p>
              LLMs don't replace engineers. They amplify them. The engineers
              who learn to use them effectively pull ahead fast — not because
              they type faster, but because they can iterate faster, explore
              more options, and offload the mechanical work to focus on the
              parts that actually require human judgment.
            </p>
            <p>
              The engineers who dismiss LLMs as toys, or who only use them for
              autocomplete, are leaving capability on the table. Not
              immediately, not catastrophically, but gradually. The gap
              between someone using an agentic workflow and someone writing
              everything by hand compounds over time.
            </p>
            <p>
              My advice: start small. Pick a tedious task you do regularly.
              Try doing it with an LLM next time. Review the output carefully.
              Adjust your approach based on what works and what doesn't. Build
              up from there. The goal isn't to hand your job to an AI — it's
              to build a workflow where you and the AI together are more
              effective than either of you alone.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}