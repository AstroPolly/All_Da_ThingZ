from pydantic import BaseModel
from wikipedia import *
from fastapi import FastAPI



app = FastAPI()


class SearchBody(BaseModel):
    title: str
    sym_count: int

@app.get("/wiki/search_by_path/{title}")
def getByPath(title: str):
    try:
        return {"result": wikipedia.page(title).content,
                "title": wikipedia.page(title).title}
    except PageError:
        raise HTTPException(status_code=404)
    except DisambiguationError:
        raise {"result": "Пиши нормально"}


@app.get("/wiki/search_by_query")
def getByQuery(title: str):
    try:
        return { "title": wikipedia.page(title).title,
            "result": wikipedia.page(title).content}
    except PageError:
        raise HTTPException(status_code=404)
    except DisambiguationError:
        raise {"result": "Пиши нормально"}

@app.post("/wiki/search_by_body")
def postByBody(body: SearchBody):
    try:
        return {"result": wikipedia.search(body.title).content[body.sym_count],
                "title": wikipedia.page(body.title).title,
                "summary": wikipedia.page(body.title).content[body.sym_count]}
    except PageError:
        raise HTTPException(status_code=404)
    except DisambiguationError:
        raise {"result": "Пиши нормально"}


if __name__ == "__lab2__":
    app()