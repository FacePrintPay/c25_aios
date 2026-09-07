from fastapi import FastAPI
import uvicorn

app = FastAPI(title="AiKre8tive Backend", version="1.0.0")

@app.get("/")
async def root():
    return {"message": "🎉 AiKre8tive Backend Online", "status": "operational"}

@app.get("/status")
async def status():
    return {"agents": ["WhisperSync", "EchoAgent"], "frontend": "Companion.js", "timestamp": "$(date)"}

if __name__ == "__main__":
    print("🚀 FastAPI Backend Starting...")
    uvicorn.run(app, host="0.0.0.0", port=8080)
