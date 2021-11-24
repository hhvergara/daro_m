"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# NOTE: importamos Templateview para darle una view a Swagger 
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view

description = '''
</br>
<h2>Documentación general de APIs de la aplicación Daro-M</h2>
<p>Para la autenticación por medio de TOKENS debemos agregar en el header:
</br>
<ul><li>'Authorization': 'Token 92937874f377a1ea17f7637ee07208622e5cb5e6'</li></ul>
</br>
Donde 92937874f377a1ea17f7637ee07208622e5cb5e6 es un ejemplo del Token Key. 
</p>
'''

urlpatterns = [
    # Django default urls:
    path('admin/', admin.site.urls),

    # daro-m app urls:
    path('daro-m/',include('daro_m.api.urls')),
    path('daro-m/',include('daro_m.urls')),
    
    # swagger app urls:
    path('api-docs/', TemplateView.as_view(
        template_name='api-docs/swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
    path('openapi', get_schema_view(
        title="Daro-M",
        description=description,
        version="1.0.0"
    ), name='openapi-schema'),]
