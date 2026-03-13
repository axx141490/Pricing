# Project Update #1

## Overview
This week we began the initial setup of our development workflow and demonstrated how an idea can move from a simple message to a code change in the repository. The goal of this phase was to establish a repeatable process for handling feature requests and updates efficiently.

## Progress Made
We implemented a workflow that converts informal requests into actionable development tasks. A message from the co-founder was converted into a Linear ticket so that the request could be tracked and clarified. The exact wording for the new copy was specified directly in the ticket to remove ambiguity and ensure the change could be implemented accurately.

Next, we used an AI coding assistant to review the ticket and analyze the request in the context of the existing codebase. The assistant identified where the relevant content lived in the project files and generated the necessary changes.

A new Git branch was created to isolate the update. The requested text changes were implemented in the code, and the application was run locally to verify that the update appeared correctly and did not introduce any errors.

## Testing and Verification
After implementing the change, we tested the application locally to ensure the new copy displayed correctly and that no layout or build issues occurred. This step confirmed that the implementation behaved as expected before submitting the change for review.

## Next Steps
The final step in this process was opening a pull request so the changes could be reviewed by another engineer. Once the review is completed and approved, the update will be merged into the main codebase.

Moving forward, we will continue using this workflow to handle additional updates and feature requests while expanding the system’s functionality.


You described a typical AI-assisted development workflow that connects communication → task tracking → coding → review → deployment. Here’s a clear breakdown of the process and what each step means.

---

## 1. Generate a Linear ticket from a Slack message (00:14)

Use the Slack message from your co-founder to create a task in Linear.

Purpose:

- Turn an informal request into a trackable engineering task  
- Give it an owner, priority, and description  

Example:

Title: Update landing page copy for pricing section

Description:
Co-founder requested clearer wording for the pricing explanation.  
Need to replace the existing paragraph on the homepage.

---

## 2. Clarify the desired copy in the ticket (00:25)

Before coding, define exactly what text should change.

Good ticket format:

Current copy:
"Flexible plans for modern teams."

New copy:
"Simple pricing designed for startups and growing teams."

Why this matters:

- Engineers (or AI) know exactly what to implement  
- Reduces ambiguity  

---

## 3. Ask Copilot / Claude to open the ticket (01:18)

Inside your IDE (for example GitHub Copilot or Claude):

Prompt example:

Open Linear ticket LIN-123 and review the requested change.

Goal:

- Let the AI load context from the issue.

---

## 4. Ask Claude to analyze the ticket against the codebase (01:52)

Now the AI finds where the change needs to happen.

Prompt example:

Review this Linear ticket and identify which files in the codebase  
control the pricing copy on the landing page.

Claude might return something like:

Files involved:

- pages/index.tsx  
- components/PricingSection.tsx  

This step saves manual code searching.

---

## 5. Ask Claude to create a branch and implement the change (02:30)

Now AI writes the code.

**Example prompt:**

Create a new git branch called update-pricing-copy  
and update the pricing text according to the ticket.

**Typical actions:**
```bash
git checkout -b update-pricing-copy
```

**Modify code:**

```tsx
<p>
Simple pricing designed for startups and growing teams.
</p>
```

## 6. Test the changes locally (02:52)

Run the project to confirm everything works.

**Example:**

```bash
npm run dev
```

**Verify:**

- Text appears correctly
- No layout issues
- No build errors

Testing ensures the AI change didn’t break anything.

## 7. Open a Pull Request on GitHub (03:55)

Push the branch and create a PR on GitHub.

Example:
```bash
git push origin update-pricing-copy
```

**PR title:**
```bash
Update pricing section copy
```

**PR description:**
```bash
Updates pricing text based on Linear ticket LIN-123.
```

## 8. Wait for engineering review

Another engineer reviews:

- Code quality
- Correct implementation
- Edge cases

After approval → merge into `main`.

---

## The Bigger Picture

This workflow connects several tools:

| Stage | Tool |
|------|------|
| Communication | Slack |
| Task tracking | Linear |
| AI coding | Claude / Copilot |
| Version control | Git |
| Code hosting | GitHub |
| Deployment | CI/CD |

This is often called an **AI-assisted engineering workflow**.

💡 **Key insight:**

A non-engineer (founder, PM) can now go from **Slack request → production code** in minutes using AI.