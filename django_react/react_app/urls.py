from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('test1', views.test1, name='test1'),
    path('test2', views.test2, name='test2'),
]