from rest_framework import routers
from applications.api.v1.viewsets import BlogViewSet


api_router = routers.SimpleRouter()
api_router.register('blog', BlogViewSet)
