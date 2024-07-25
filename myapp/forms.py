from django import forms
from .models import FormSubmit

class PostForm(forms.ModelForm):
    class Meta:
        model = FormSubmit
        fields = ['name', 'subject', 'email', 'desc']