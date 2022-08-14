from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone


# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True, max_length=100)
    date_creation = models.DateTimeField(default=timezone.now)