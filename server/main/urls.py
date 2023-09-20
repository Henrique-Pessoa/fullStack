from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from .views import *


urlpatterns = [
    path('register/', CustomUserCreateView.as_view(), name='user-create'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', LoginView.as_view(), name='token_obtain_pair')
]

