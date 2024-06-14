from django.contrib import admin
from .models import *


class ModelWithSlug(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name_en',)}


admin.site.register(Category, ModelWithSlug)
admin.site.register(Product, ModelWithSlug)
