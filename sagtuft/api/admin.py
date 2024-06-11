from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name_en',)}


admin.site.register(Category, CategoryAdmin)
