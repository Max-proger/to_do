from django.contrib import admin

# Register your models here.
from .models import ToDo, Project

admin.site.register(ToDo)
admin.site.register(Project)