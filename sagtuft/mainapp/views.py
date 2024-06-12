from django.shortcuts import render


def index(request, *args, **kwargs):
    template = 'mainapp/index.html'
    return render(request, template)