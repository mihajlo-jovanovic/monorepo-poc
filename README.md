# monorepo-poc

Basic monorepo scaffolding with:

- `ui`: Node.js UI app
- `api`: Python FastAPI app

## UI (Node.js)

```bash
cd ui
npm install
npm start
```

Runs on `http://0.0.0.0:3000` by default.

## API (FastAPI)

```bash
cd api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

Runs on `http://0.0.0.0:8000` by default.


## Build with Bazel

From the repository root, build both UI and API components together:

```bash
bazel build //:build_all
```

You can also build each component separately:

```bash
bazel build //ui:ui_bundle
bazel build //api:api_bundle
```
