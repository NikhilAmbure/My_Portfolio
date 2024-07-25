from django.shortcuts import render, redirect
from .models import FormSubmit
from .forms import PostForm

# Create your views here.

def index(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/')
    else:
        form = PostForm()
    return render(request, 'index.html', {'form': form})

def posts(request):
    return render(request, 'posts.html')

def post(request):
    return render(request, 'post.html')

def profile(request):
    return render(request, 'profile.html')