from django.urls import path, url, include
from . import views
urlpatterns = [
    path(r'^$', views.index, name='index'),
]
