from django.db import models

# Create your models here.
from usersapp.models import User
from django.utils import timezone


class Project(models.Model):
    name = models.CharField(max_length=100)
    repository = models.URLField()
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    txt = models.TextField()
    creation_date = models.DateTimeField(default=timezone.now)
    update_date = models.DateTimeField(default=timezone.now)
    note_creator = models.ForeignKey(User, on_delete=models.RESTRICT)
    active = models.BooleanField(default=True)