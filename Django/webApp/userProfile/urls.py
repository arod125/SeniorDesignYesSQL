from django.urls import include, path
from . import views
urlpatterns = [
    path(r'profile.html',views.profile, name='profile'),

]
