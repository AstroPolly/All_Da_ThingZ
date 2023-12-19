from pydantic import BaseModel
from wikipedia import *
from fastapi import FastAPI



app = FastAPI()


class SearchBody(BaseModel):
    title: str
    sym_count: int

"""@app.get("/wiki/search_by_path/{title}")
def getByPath(title):
    try:
        return {"result": wikipedia.search(title).content[120],
                "title": wikipedia.page(title).title,
                "summary":wikipedia.search(title).content[:60] }
    except PageError:
        raise HTTPException(status_code=404)
    except DisambiguationError:
        raise {"result": wikipedia.search(title).content[120],
                "title": wikipedia.page(title).title,
                "summary":wikipedia.search(title).content[:60] }

@app.get("/wiki/search_by_query")
def getByQuery(title: str, sym_count: int):
    try:
        return {"result": wikipedia.page(title).content}
    except PageError:
        raise HTTPException(status_code=404)
    except DisambiguationError:
        raise {"result": wikipedia.search(title).content[120],
                "title": wikipedia.page(title).title,
                "summary":wikipedia.search(title).content[:60] }

@app.post("/wiki/search_by_body")
def postByBody(body: SearchBody):
    try:
        return {"result": wikipedia.search(SearchBody.title).content[SearchBody.sym_count],
                "title": wikipedia.page(SearchBody.title).title,
                "summary": wikipedia.search(SearchBody.title).content[SearchBody.sym_count]}
    except PageError:
        raise HTTPException(status_code=404)
    except DisambiguationError:
        raise {"result": "Пиши нормально"}"""

@app.post("/", response_model=Joke)
def create_joke(joke_input: JokeInput):
    return Joke(friend=joke_input.friend, joke=pyjokes.get_joke())


if __name__ == "__lab2__":
    app()