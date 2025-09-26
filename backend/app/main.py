from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "InsF Backend hll Running 🚀"}
