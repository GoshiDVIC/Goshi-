from typing import List
import database

from fastapi import Depends, FastAPI, HTTPException
app = FastAPI()


@app.get("/donnees")
async def create_donnees(temperature: float, humidity : float, pressure : float):
    database.add_data(temperature, humidity, pressure)
    return 20


