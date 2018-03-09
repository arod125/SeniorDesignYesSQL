from django.shortcuts import render

# Create your views here.
def index(request) :
	return render(request,'mainInterface/home.html')

def workspace(request) :
	return render(request,'mainInterface/workspace.html')
	
def about(request) :
	return render(request,'mainInterface/about.html')