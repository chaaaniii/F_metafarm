from django.urls import path
from accounts import views
from rest_framework_simplejwt import views as jwt_views

app_name = "accounts"
urlpatterns = [
    
    # path('google/login/', views.google_login, name='google_login'),
    # path('google/callback/', views.google_callback, name='google_callback'),
    # path('google/login/finish/', views.GoogleLogin.as_view(),
    #      name='google_login_todjango'),
    path('dj_rest_auth/google/', views.GoogleLogin.as_view(), name='google_login'),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]