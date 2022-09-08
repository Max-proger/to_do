from django.shortcuts import render

# Create your views here.

# from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UserModelSerializer, UserModelSerializerStatus
from rest_framework import mixins, viewsets
from rest_framework import generics


class UserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                       viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserModelSerializerStatus
        return UserModelSerializer
