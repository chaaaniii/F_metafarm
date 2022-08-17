from django.shortcuts import render
from .models import ImageFile
from .serializers import ImageFileSerializer
from rest_framework import viewsets
# from rest_framework import permissions

class ImageFile_main(viewsets.ModelViewSet):
    queryset = ImageFile.objects.all()
    serializer_class = ImageFileSerializer