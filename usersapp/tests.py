from django.test import TestCase

# Create your tests here.
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import UserModelViewSet
from .models import User


class TestUserModelViewSet(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail(self):
        # user = User.objects.create(username='Bill', email='bill@mail.ru')
        user = mixer.blend(User)
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestUserViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)