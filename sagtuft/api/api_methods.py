from typing import Any
from django.http import JsonResponse
from .models import *


ERRORS = {
    1002: 'WrongMethod',
}


def make_success(api_id, result: Any = 'Success'):
    response = {
        'jsonrpc': '2.0',
        'id': api_id,
        'result': result,
    }
    return JsonResponse(response)


def make_error(api_id, error_code):
    response = {
        'jsonrpc': '2.0',
        'id': api_id,
        'error': {'code': error_code, 'message': ERRORS[error_code]},
    }
    return JsonResponse(response)


def category_list(request, request_data):
    categories = Category.objects.all()
    response = []
    for c in categories:
        resp_t = {
            'id': c.pk,
            'name_ru': c.name_ru,
            'name_en': c.name_en,
            'name_uz': c.name_uz,
            'description_ru': c.description_ru,
            'description_en': c.description_en,
            'description_uz': c.description_uz,
            'img': c.img.url,
            'slug': c.slug,
        }
        response.append(resp_t)
    return make_success(request_data['id'], response)


def category_detail(request, request_data):
    category = Category.objects.get(id=request_data['params']['id'])
    response = {
        'id': category.pk,
        'name_ru': category.name_ru,
        'name_en': category.name_en,
        'name_uz': category.name_uz,
        'description_ru': category.description_ru,
        'description_en': category.description_en,
        'description_uz': category.description_uz,
        'img': category.img.url,
        'slug': category.slug,
    }
    return make_success(request_data['id'], response)
