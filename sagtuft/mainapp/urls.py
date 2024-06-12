from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('catalog/', views.index, name='catalog'),
    path('catalog/<slug:category_slug>/', views.index, name='category_detail'),
    path('about/', views.index, name='about'),
    path('vacancies/', views.index, name='vacancies'),
    path('contacts/', views.index, name='contacts'),
]