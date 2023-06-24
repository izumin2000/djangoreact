from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from random import choice
import json


def getINIAD(n) :
    name = []
    acronym = ""
    for _ in range(n) :
        snippet = choice("Information Networking for Innovation and Design".split(" "))
        name.append(snippet)
        if snippet in "Information Networking Innovation Design".split(" ") :
            acronym += snippet[0]
    histryL.append(acronym)
    dict = {"name" : " ".join(name), "acronym" : acronym, "histryL" : histryL}
    return dict

histryL = []
def index(request):
    return HttpResponse("Hello, world. You're at the react_app index.")

def test1(request) :
    dict = getINIAD(6)
    return JsonResponse(dict)

@csrf_exempt
def test2(request) :
    jsonS = json.loads(request.body)
    print(jsonS)
    dict = getINIAD(int(jsonS["words"]))
    return JsonResponse(dict)