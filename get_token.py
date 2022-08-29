import requests
username = input('Введите имя пользователя: ')
user_pass = input('Введите пароль: ')

response = requests.post('http://127.0.0.1:8000/api-token-auth/', data={'username': username, 'password': user_pass})
token = response.json().get('token')
print(token)
response_users = requests.get('http://127.0.0.1:8000/api/todos/', headers={'Authorization': f'Token{token}'})
print(response_users.json())