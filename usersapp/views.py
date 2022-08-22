from django.shortcuts import render

# Create your views here.

# from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UserModelSerializer
from rest_framework import mixins, viewsets


class UserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                       viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer