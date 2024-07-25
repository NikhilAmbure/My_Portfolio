from django.db import models

class FormSubmit(models.Model):
    name = models.CharField(max_length=50)
    subject = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    desc = models.CharField(max_length=200)

    def __str__(self):
        return self.name