from django.contrib import admin
from django.urls import include,path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('react_app/', include('react_app.urls')),
    path('api/', include(views.router.urls)),
]