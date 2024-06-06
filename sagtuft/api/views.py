import json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseForbidden
from .api_methods import *


methods = {
    'CategoryGetList': category_list,
    'CategoryGetDetail': category_detail,
}


@csrf_exempt
def index(request):
    if request.method == 'POST':
        request_data = json.loads(request.body)
        method = request_data['method']
        if method in methods.keys():
            run = methods[request_data['method']]
            return run(request, request_data)
        else:
            return make_error(request_data['id'], 1002)
    else:
        return HttpResponseForbidden()