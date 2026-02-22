from fastapi import FastAPI

app = FastAPI(title="API App")


@app.get("/")
def read_root() -> dict[str, str]:
    return {"message": "Hello from FastAPI API scaffold"}


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "app": "api"}
