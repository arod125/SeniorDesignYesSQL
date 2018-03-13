from django.urls import include, path
from . import views
from django.conf.urls import url
urlpatterns = [
    path(r'home.html',views.index, name='index'),
 	path(r'workspace.html',views.workspace, name='workspace'),
 	path(r'about.html', views.about, name='about'),
	url(
        regex=r'^results/$',
        view=views.query,
        name='results'
    ),

]