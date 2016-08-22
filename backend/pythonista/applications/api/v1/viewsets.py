from rest_framework import viewsets
from blog.models import Blog
from applications.api.v1.serializers import BlogSerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
