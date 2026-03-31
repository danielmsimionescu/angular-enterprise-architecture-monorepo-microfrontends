Agent Plan: Initialize an Nx Monorepo
Goal

Create a new Nx monorepo workspace inside the currently opened folder that will later host a photovoltaic e-commerce platform.

The agent should:

Detect if the folder is empty

Initialize Nx

Configure package manager

Install essential Nx plugins

Verify workspace integrity

Step 1 — Inspect the Current Folder

Agent must first check the folder contents.

If the folder contains:

nx.json
workspace.json
project.json

Then:

STOP
Workspace already initialized

Otherwise continue.

Step 2 — Initialize Node Project

If package.json does not exist, create one.

Command:

npm init -y

Result expected:

package.json
Step 3 — Install Nx Locally

Install Nx as a dev dependency.

Command:

npm install --save-dev nx

Verify:

node_modules/nx
Step 4 — Initialize Nx Workspace

Run Nx initialization.

Command:

npx nx init

Expected generated files:

nx.json

Nx will also update:

package.json
Step 5 — Convert Repo Into a Full Workspace

Create Nx workspace structure.

Agent must create directories:

apps/
libs/
tools/

Final structure:

project-root
│
├ apps
├ libs
├ tools
├ nx.json
├ package.json
Step 6 — Install Required Nx Plugins

Install core plugins that will be needed later.

Command:

npm install --save-dev \
@nx/angular \
@nx/webpack \
@nx/workspace \
typescript

Optional future frameworks:

@nx/react
@nx/node
Step 7 — Configure TypeScript Base

Create or update:

tsconfig.base.json

Example minimal configuration:

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {}
  }
}
Step 8 — Verify Nx Installation

Agent should run:

npx nx --version

Expected output:

Nx version X.X.X
Step 9 — Test Workspace Integrity

Run:

npx nx graph

Expected:

browser opens

empty dependency graph

This confirms the workspace is valid.

Step 10 — Git Initialization (Optional)

If .git does not exist:

git init

Create .gitignore.

Recommended contents:

node_modules
dist
tmp
.env
Expected Final Workspace
pv-ecommerce/

apps/
libs/
tools/

node_modules/

nx.json
package.json
tsconfig.base.json
.gitignore