from rest_framework.serializers import ModelSerializer

from .models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'date_creation')


class UserModelSerializerStatus(ModelSerializer):
    class Meta:
        model = User
        fields = ('is_superuser', 'is_staff')